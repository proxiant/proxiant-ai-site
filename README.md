# Proxiant AI

**The professionals behind your AI transition.** [proxiant.ai](https://proxiant.ai)

Marketing site for Proxiant AI. Static HTML, hosted on GitHub Pages, served from
the apex domain `proxiant.ai` registered at Porkbun.

Repo: [github.com/proxiant/proxiant-ai-site](https://github.com/proxiant/proxiant-ai-site)

## Repo layout

```
proxiant-ai-site/
├── index.html                          # Homepage
├── about.html                          # About / team
├── solutions.html                      # Proxiant Solutions (consulting)
├── industries.html                     # Industries overview
├── industry-financial-services.html
├── industry-healthcare.html
├── industry-insurance.html
├── industry-manufacturing.html
├── industry-energy.html
├── industry-retail.html
├── industry-telecom.html
├── industry-transportation.html
├── insights.html                       # Insights index
├── insight-generative-ai-enterprise.html
├── insight-scaling-ai-teams.html
├── insight-trustworthy-ai.html
├── case-study-fortune500-bank.html
├── contact.html
├── labs.html                           # Proxiant Labs (research + products)
├── proxialpha.html                     # ProxiAlpha landing
├── proxitrades.html                    # ProxiTrades landing
├── terminal.html                       # ProxiAlpha live trading dashboard
├── assets/
│   ├── logo.svg                        # Full logo (light bg)
│   ├── logo-dark.svg                   # Full logo (dark bg)
│   ├── logo-icon.svg                   # Icon only
│   └── favicon.png                     # 500x500 favicon
├── ARCHITECTURE_TUNNEL.md              # Cloudflare tunnel + subdomain map
├── CNAME                               # GitHub Pages custom domain (proxiant.ai)
├── .gitignore
└── README.md
```

## Pages

| Section | URL |
|---|---|
| Home | [proxiant.ai](https://proxiant.ai) |
| About | [proxiant.ai/about.html](https://proxiant.ai/about.html) |
| Solutions | [proxiant.ai/solutions.html](https://proxiant.ai/solutions.html) |
| Industries | [proxiant.ai/industries.html](https://proxiant.ai/industries.html) |
| Insights | [proxiant.ai/insights.html](https://proxiant.ai/insights.html) |
| Labs | [proxiant.ai/labs.html](https://proxiant.ai/labs.html) |
| ProxiAlpha | [proxiant.ai/proxialpha.html](https://proxiant.ai/proxialpha.html) |
| ProxiTrades | [proxiant.ai/proxitrades.html](https://proxiant.ai/proxitrades.html) |
| Terminal | [proxiant.ai/terminal.html](https://proxiant.ai/terminal.html) |
| Contact | [proxiant.ai/contact.html](https://proxiant.ai/contact.html) |

The eight `industry-*.html` pages and three `insight-*.html` pages are linked
from `industries.html` and `insights.html`.

## Tech stack

- Pure HTML/CSS/JavaScript, no build step
- Tailwind via CDN
- React 18 + Recharts (CDN-loaded) on the terminal page
- Lightweight Charts for candlesticks
- GitHub Pages for hosting
- Porkbun for domain registration and DNS
- Cloudflare named tunnel for the dynamic subdomains (see [ARCHITECTURE_TUNNEL.md](ARCHITECTURE_TUNNEL.md))

## ProxiAlpha terminal

`terminal.html` is a self-contained React app that runs entirely in the browser
and connects to the ProxiAlpha FastAPI backend for live data.

- Without a backend, it shows sample data (candles, signals, portfolio).
- With a backend, it pulls live signals, paper trading, and AI analysis.

Switch backends by editing `API_BASE` in `terminal.html`:

```js
const API_BASE = window.PROXIALPHA_API || "";              // sample data
const API_BASE = window.PROXIALPHA_API || "https://api.proxiant.ai";  // live
```

## Deploying

The site auto-deploys from `main` to GitHub Pages.

1. Push to `main`:
   ```bash
   git push origin main
   ```
2. GitHub Pages builds and serves the site at `proxiant.ai` (the `CNAME` file
   pins the custom domain).

To enable Pages on a fresh clone of the repo:

1. **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main`,
   folder: `/ (root)` → **Save**.
2. Custom domain: `proxiant.ai`. Check **Enforce HTTPS** once DNS resolves.

## Porkbun DNS configuration

The domain is registered at Porkbun (created 2026-02-08).

> **Current state (verify with `dig +short NS proxiant.ai`):** the domain
> resolves through Wix nameservers (`ns4.wixdns.net`, `ns5.wixdns.net`). The
> live apex points at GitHub Pages and `www` CNAMEs to `pkr465.github.io` (the
> old account). To move DNS to Porkbun without downtime:
>
> 1. Add the records below at Porkbun while NS is still at Wix.
> 2. Confirm Porkbun is serving the right answers:
>    `dig @curitiba.ns.porkbun.com proxiant.ai`.
> 3. In the GitHub repo `proxiant/proxiant-ai-site`, **Settings → Pages** →
>    set Custom domain to `proxiant.ai`. This claims the apex from the old
>    `pkr465/proxiant.ai` repo's Pages site.
> 4. At Porkbun, on the proxiant.ai row, click **Details → Authoritative
>    Nameservers** and switch from the Wix entries back to Porkbun's defaults
>    (`curitiba.ns.porkbun.com`, `fortaleza.ns.porkbun.com`,
>    `maceio.ns.porkbun.com`, `salvador.ns.porkbun.com`).
> 5. Wait for propagation (typically under an hour) and re-run the
>    verification commands at the bottom of this section.

Open the **DNS** panel for `proxiant.ai`
([porkbun.com/account/domainsSpeedy](https://porkbun.com/account/domainsSpeedy) →
**DNS** button on the proxiant.ai row) and add the records below.

### Apex + www (GitHub Pages)

GitHub Pages serves the apex from four anycast IPs. Set TTL to 600 (10 min)
during setup so corrections propagate quickly; raise to 3600 once stable.

| Type | Host | Answer | TTL |
|---|---|---|---|
| A | (blank) | 185.199.108.153 | 600 |
| A | (blank) | 185.199.109.153 | 600 |
| A | (blank) | 185.199.110.153 | 600 |
| A | (blank) | 185.199.111.153 | 600 |
| AAAA | (blank) | 2606:50c0:8000::153 | 600 |
| AAAA | (blank) | 2606:50c0:8001::153 | 600 |
| AAAA | (blank) | 2606:50c0:8002::153 | 600 |
| AAAA | (blank) | 2606:50c0:8003::153 | 600 |
| CNAME | www | proxiant.github.io. | 600 |

Notes:
- Leave **Host** blank for apex records; Porkbun fills it as `proxiant.ai`.
- `proxiant.github.io` is the canonical Pages host for the `proxiant` org.
  Confirm in the repo's **Settings → Pages** before switching nameservers.
- Skip Porkbun's `ALIAS` (CNAME-flattening) row when the four A records are
  present. Use one or the other, not both.

### Cloudflare tunnel subdomains (ProxiTrades cockpit / API / webhook)

The trading host runs `cloudflared` as a named tunnel called `proxitrades`.
Cloudflare assigns a permanent UUID; every subdomain CNAMEs to
`<UUID>.cfargotunnel.com`. Run on the trading host once:

```bash
cloudflared tunnel create proxitrades   # prints the UUID
```

Then add at Porkbun:

| Type | Host | Answer | TTL |
|---|---|---|---|
| CNAME | dashboard | `<UUID>.cfargotunnel.com.` | 600 |
| CNAME | webhook | `<UUID>.cfargotunnel.com.` | 600 |
| CNAME | api | `<UUID>.cfargotunnel.com.` | 600 |

Cloudflare's edge accepts these by hostname (not by DNS provider), so the
tunnel works fine with Porkbun DNS. Skip the `cloudflared tunnel route dns`
commands in [ARCHITECTURE_TUNNEL.md](ARCHITECTURE_TUNNEL.md) (those only work
when DNS is hosted at Cloudflare).

### Email (optional, if you want proxiant.ai email later)

Porkbun offers email hosting and can add the MX/SPF/DKIM/DMARC stack with one
click. If using a third-party (Google Workspace, Fastmail), add their MX
records here and a TXT for SPF.

### Verification

After saving records, wait 10 to 15 minutes, then:

```bash
dig +short proxiant.ai            # should return the four 185.199.x.153 IPs
dig +short www.proxiant.ai        # should CNAME to proxiant.github.io
dig +short dashboard.proxiant.ai  # should CNAME to <UUID>.cfargotunnel.com
curl -I https://proxiant.ai       # HTTP/2 200 from GitHub Pages
```

In the GitHub repo, **Settings → Pages → Custom domain** should show a green
check next to `proxiant.ai`. Then enable **Enforce HTTPS**.

## Local preview

```bash
python3 -m http.server 8000
open http://localhost:8000
```

Or any static server. There's no build step.
