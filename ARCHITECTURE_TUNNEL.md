# Public-Facing Architecture: proxiant.ai as the Entry Point

This document describes how `proxiant.ai` is wired to the production
ProxiTrades trading host so that:

1. **The marketing site** (this repo, GitHub Pages) serves the static
   pages including `proxitrades.html`.
2. **The live cockpit, TradingView webhook receiver, and other ProxiTrades
   services** are exposed as stable subdomains under `proxiant.ai` via a
   Cloudflare named tunnel that proxies to the trading host on a private
   network.

## Why a tunnel and not a public IP

The trading host sits behind NAT on a private network (Tailscale-only IP).
The webhook receiver, the dashboard, and any future services run on
`localhost:8787` inside the host's Docker network and are not directly
reachable from the public internet.

Cloudflare Tunnel solves this without opening any inbound port on the host:
the `cloudflared` daemon dials OUT to Cloudflare's edge over HTTPS+QUIC,
Cloudflare receives requests at the public hostnames listed below, and
forwards them down the tunnel.

## Subdomain map

| Public hostname | Forwards to | Purpose |
|-----------------|-------------|---------|
| `https://proxiant.ai` (apex) | GitHub Pages | Static marketing site (this repo) |
| `https://dashboard.proxiant.ai` | trading-host:8787 | The live ProxiTrades cockpit, read-only |
| `https://webhook.proxiant.ai` | trading-host:8787 | TradingView alert receiver (`/tv/<strategy_id>/<token>`) |
| `https://api.proxiant.ai` | trading-host:8787 | All `/api/*` endpoints (cockpit, reports, debates, etc.) |

All four of these point to the SAME backend (the FastAPI app on the trading
host); they're distinct hostnames so Cloudflare's edge can apply different
rules per service in future (rate-limits, IP allowlists, WAF rules).

## One-time setup (operator action required)

The named tunnel needs a Cloudflare account login. This must be done on
the trading host once; afterward the tunnel runs unattended and survives
reboot.

### 1. Authorize cloudflared against your Cloudflare account

```bash
ssh pavanr@<trading-host>
cloudflared tunnel login
```

This prints a URL. Open it in any browser, sign in to Cloudflare, and
authorize the host. Cloudflare downloads a cert.pem to
`~/.cloudflared/cert.pem` on the host. This is a one-time step.

### 2. Create the named tunnel

```bash
cloudflared tunnel create proxitrades
```

This returns a tunnel UUID and writes the credentials JSON to
`~/.cloudflared/<UUID>.json`. The UUID is permanent; the tunnel can be
restarted, the host can reboot, and the public URLs never change.

### 3. Wire the four subdomains as DNS records

```bash
cloudflared tunnel route dns proxitrades dashboard.proxiant.ai
cloudflared tunnel route dns proxitrades webhook.proxiant.ai
cloudflared tunnel route dns proxitrades api.proxiant.ai
```

Cloudflare creates CNAME records pointing each hostname at the tunnel.

### 4. Write the tunnel config

```yaml
# ~/.cloudflared/config.yml
tunnel: <UUID-from-step-2>
credentials-file: /home/pavanr/.cloudflared/<UUID>.json

ingress:
  - hostname: dashboard.proxiant.ai
    service: http://127.0.0.1:8787
  - hostname: webhook.proxiant.ai
    service: http://127.0.0.1:8787
  - hostname: api.proxiant.ai
    service: http://127.0.0.1:8787
  # Catch-all
  - service: http_status:404
```

### 5. Start the tunnel as a background service

If the operator account does not have sudo, install via a `@reboot` cron
entry:

```bash
crontab -e
# add:
@reboot sleep 30 && /home/pavanr/bin/cloudflared tunnel run proxitrades \
  >> /home/pavanr/proxitrades/results/cloudflared.log 2>&1
```

Or, if sudo is available:

```bash
sudo cloudflared service install
sudo systemctl enable --now cloudflared
```

### 6. Verify

```bash
curl -fsS https://dashboard.proxiant.ai/healthz | jq
curl -fsS https://api.proxiant.ai/api/cockpit | jq '.strategies | length'
```

## Wiring TradingView to the webhook

After step 6, the public URL for ProxiTrades's `strategy_v7` becomes:

```
https://webhook.proxiant.ai/tv/strategy_v7/<HMAC-token>
```

Generate the token by running inside the proxitrades container:

```bash
docker exec -e WEBHOOK_HOST=webhook.proxiant.ai -e WEBHOOK_PORT=443 \
  proxitrades uv run proxi tv-template strategy_v7
```

The output prints both the URL and the JSON body to paste into TradingView's
alert configuration. Repeat for each strategy/symbol pair in the strategy's
universe.

## Until the named tunnel is configured

A free quick tunnel runs on the host as a fallback. Its URL changes on every
restart, so it's only suitable for development:

```
https://<random-words>.trycloudflare.com
```

To get the current quick-tunnel URL:

```bash
ssh pavanr@<trading-host> \
  'grep -oE "https://[a-z0-9-]+\.trycloudflare\.com" \
    ~/proxitrades/results/cloudflared.log | tail -1'
```

The `proxitrades.html` page on this site falls back to the named tunnel URL
by default; operators can override locally for testing with
`?dashboard=https://<quick-tunnel>.trycloudflare.com`.

## Future services using the same tunnel

Adding a new service follows the same pattern: append an ingress rule to
`~/.cloudflared/config.yml`, run `cloudflared tunnel route dns proxitrades
<new-host>.proxiant.ai`, restart the tunnel.

Examples:

```yaml
- hostname: crawler.proxiant.ai
  service: http://127.0.0.1:8001
- hostname: aide.proxiant.ai
  service: http://127.0.0.1:8000
```
