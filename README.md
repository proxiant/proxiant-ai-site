# Proxiant AI

**The professionals behind your AI transition.** — [proxiant.ai](https://proxiant.ai)

## Site Structure

```
proxiant.ai/
├── index.html          # Main homepage
├── solutions.html      # Proxiant Solutions
├── labs.html           # Proxiant Labs
├── proxialpha.html     # ProxiAlpha landing page
├── terminal.html       # ProxiAlpha trading terminal
├── CNAME               # Custom domain config (proxiant.ai)
├── assets/
│   ├── logo.svg        # Full logo (light background)
│   ├── logo-dark.svg   # Full logo (dark background)
│   ├── logo-icon.svg   # Icon only
│   └── favicon.png     # 500x500 favicon/avatar
└── README.md
```

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | [proxiant.ai](https://proxiant.ai) | Company homepage |
| Solutions | [proxiant.ai/solutions](https://proxiant.ai/solutions.html) | AI consulting services |
| Labs | [proxiant.ai/labs](https://proxiant.ai/labs.html) | Research and products |
| ProxiAlpha | [proxiant.ai/proxialpha](https://proxiant.ai/proxialpha.html) | Trading platform landing page |
| Terminal | [proxiant.ai/terminal](https://proxiant.ai/terminal.html) | Live trading dashboard |

## ProxiAlpha Terminal

The trading terminal (`terminal.html`) is a self-contained React application that runs entirely in the browser. It connects to the ProxiAlpha FastAPI backend for live data.

- **Without a backend** — displays sample data (candlestick charts, signals, portfolio metrics)
- **With a backend** — connects to the FastAPI server for live signals, paper trading, and AI analysis

### Connecting to a Backend

Edit the `API_BASE` variable in `terminal.html`:

```js
// Default: runs with sample data
const API_BASE = window.PROXIALPHA_API || "";

// Point to your server:
const API_BASE = window.PROXIALPHA_API || "https://dgx.proxiant.ai";
```

See the [ProxiAlpha README](../proxialpha/README.md) for full backend setup including DGX Station + Ollama installation.

## Deploy to GitHub Pages

### Step 1: Create Repository

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/pkr465/proxiant.ai.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to repo **Settings** > **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**

### Step 3: Connect Custom Domain

1. Enter `proxiant.ai` under **Custom domain** in Pages settings
2. Add DNS records at your registrar:

**A Records:**

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME Record:**

| Type | Name | Value |
|------|------|-------|
| CNAME | www | pkr465.github.io |

3. Wait for DNS propagation (~15 min)
4. Check **Enforce HTTPS** in Pages settings

## Tech Stack

- Pure HTML/CSS/JavaScript (no build system)
- React 18 + Recharts (CDN-loaded for terminal)
- Lightweight Charts for candlestick rendering
- GitHub Pages for hosting
- Custom domain via CNAME
