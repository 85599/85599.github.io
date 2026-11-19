# Khushal Jain — personal site

> https://85599.github.io/

My portfolio: what I build, what I ship, and where to try it. It is a static site on
GitHub Pages - no build step, no framework, no dependency install.

[![Website](https://img.shields.io/badge/website-live-000000?style=flat-square)](https://85599.github.io/)
[![GitHub](https://img.shields.io/badge/github-85599-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/85599)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-khushaljain023-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/khushaljain023)
[![TradingView](https://img.shields.io/badge/TradingView-ideas-131722?style=flat-square&logo=tradingview&logoColor=white)](https://in.tradingview.com/u/khushaljain023/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](./LICENSE)

## Sections

Start · About me · Services · Resume · Projects & Posts · Contact

## What the Projects section features

Every thumbnail is a real capture of the tool running - no stock imagery, no mockups.

| Project | Try it | What it does |
| :--- | :--- | :--- |
| [KJStockScreener](https://github.com/85599/KJStockScreener) | [live](https://kjstockscreener.streamlit.app/) | AI-native NSE screener - breakouts, live option chain, gap prediction |
| [PineSprout Studio](https://github.com/85599/pinesprout) | [live](https://pinesprout-khushaljain023.streamlit.app/) | Pine Script v5/v6 toolkit - lint, format, v4→v6 upgrade, docs |
| [BankNIFTY Golden Ratio](https://github.com/85599/BankNIFTY-Golden-Ratio-Strategy) | repo | Intraday BankNIFTY strategy on 61.8% golden ratio levels |
| [Strike & Hedge](https://github.com/85599/Strike-and-Hedge) | repo | AI options desk for NSE/BSE chains with rule-based signals |
| [Research-Copilot Pro](https://github.com/85599/Research-Copilot-Pro) | repo | Market research terminal with scored, source-cited AI runs |
| [Nifty Desk](https://github.com/85599/nifty-desk) | [live](https://85599.github.io/nifty-desk/) | Broker position screenshot → live-priced NIFTY Excel workbook |
| [MarketMitra AI](https://github.com/85599/MarketMitra-AI) | repo | Multi-asset dashboard, FastAPI + React, containerised |
| [MarketMitra Learn](https://github.com/85599/MarketMitra-Learn) | [live](https://85599.github.io/MarketMitra-Learn/) | 2,606 free, legal resources to learn Indian markets - EN + हिंदी |

Full list lives in the [profile README](https://github.com/85599/85599). Writing and build
logs go to [dev.to/khushaljain023](https://dev.to/khushaljain023).

## Stack

* [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/) - grid and components
* [particles.js](https://vincentgarreau.com/particles.js/) - hero background, configured in `settings/particles-config.json`
* AOS - scroll animations via `data-aos` attributes
* Font Awesome 4.7.0 + the theme's `et-line` icon set
* The theme's own `intro-typing` / `skill` / `offer-box` components - the intro text is **not** Typed.js

## Editing this site

| To change | Edit |
| :--- | :--- |
| Any section's copy | `index.html` - one file, sections are marked with banner comments |
| The typed hero text | `settings/config.js` → `introTypingTexts` |
| Project thumbnails | `assets/images/portfolio/*.jpg` (1600×900) |
| The resume PDF behind "Download my resume" | `assets/Khushal_Jain_Resume.pdf` - overwrite in place, the link never changes |
| Particle field effect | `settings/particles-config.json` |

Run it locally with a static server, not by opening the file directly:

```bash
python -m http.server 8123
# http://127.0.0.1:8123/index.html
```

A `file://` origin blocks the XHR that loads `settings/particles-config.json`, so the hero
background silently disappears.

Two gotchas worth knowing:

* The `et-line` set has no glyph for `icon-dashboard`, `icon-signal`, `icon-tasks`,
  `icon-certificate`, `icon-console` or `icon-equalizer` - those render as blank boxes.
  Verified-working alternatives: `icon-browser`, `icon-bargraph`, `icon-linegraph`,
  `icon-strategy`, `icon-genius`, `icon-target`.
* Project cards keep their colour and their caption permanently visible. The upstream theme
  greys every thumbnail out and hides the title until hover, which reads badly for real
  product screenshots and does not work on touch at all.

## Deploy

Push to `master`. GitHub Pages serves this branch directly - there is no build job to wait for.

## License

MIT - see [LICENSE](./LICENSE).
