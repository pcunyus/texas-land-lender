# RSS Feed Master List

## Overview

This document tracks all RSS feeds integrated into the Texas Land Lender content pipeline. Feeds are scored on an 8-dimension model and mapped to content pillars.

---

## Feed Sources

### Industry News Pillar

| Source | URL | Category | Status |
|--------|-----|----------|--------|
| Housing Wire | https://www.housingwire.com/feed/ | Mortgage/Real Estate News | Draft |
| National Mortgage News | https://www.nationalmortgagenews.com/rss.xml | Mortgage Industry | Draft |
| Mortgage News Daily | https://www.mortgagenewsdaily.com/rssfeeds/main | Mortgage Rates/News | Draft |
| NAR Research | https://www.nar.realtor/research-and-statistics/rss | Real Estate Data | Draft |
| Fannie Mae | https://www.fanniemae.com/rss | Housing Finance | Draft |

### Rate Watch Pillar

| Source | URL | Category | Status |
|--------|-----|----------|--------|
| Freddie Mac PMMS | https://www.freddie.mac.com/pmss/rss | 30-yr and 15-yr Rates | Draft |
| Bankrate Mortgage Rates | https://www.bankrate.com/mortgages/rss/ | National Averages | Draft |
| Mortgage News Daily Rates | https://www.mortgagenewsdaily.com/rssfeeds/rates | Daily Rate Moves | Draft |

### Land + Farm Finance Pillar

| Source | URL | Category | Status |
|--------|-----|----------|--------|
| Farm Journal | https://www.farmjournal.com/rss/ | Agribusiness | Draft |
| Progressive Farmer | https://www.dtnpf.com/agriculture/rss | Farm Economics | Draft |
| Land Watch | https://www.landwatch.com/blog/feed | Land Market Trends | Draft |
| Texas Farm Bureau | https://www.tfb.org/rss | Texas Agriculture | Draft |

### Mortgage Education Pillar

| Source | URL | Category | Status |
|--------|-----|----------|--------|
| Investopedia | https://www.investopedia.com/rss/investopedia-general.rss | Financial Education | Draft |
| NMLS Consumer Access | https://nationwidelicensingsystem.org/newsfeed | Regulatory Updates | Draft |
| CFPB Blog | https://www.consumerfinance.gov/about-us/blog/rss/ | Consumer Protection | Draft |

### Buyer FAQs Pillar

| Source | URL | Category | Status |
|--------|-----|----------|--------|
| Realtor.com Advice | https://www.realtor.com/advice/feed/ | Buyer Guidance | Draft |
| Rocket Mortgage Learn | https://www.rocketmortgage.com/learn/feed | Home Buying Tips | Draft |

### FSCAP Authority Pillar

| Source | URL | Category | Status |
|--------|-----|----------|--------|
| HUD.gov | https://www.hud.gov/hudclips | Government Housing | Draft |
| USDA Rural Development | https://www.rd.usda.gov/newsroom/news-releases | Rural Housing Programs | Draft |

---

## Scoring Criteria

Each feed is evaluated on the 8-dimension scoring model (see scoring-model.md):

1. **Relevance** - How closely does the feed align with Texas land/rural lending?
2. **Authority** - Is the source a recognized industry authority?
3. **Freshness** - How frequently is new content published?
4. **Uniqueness** - Does the feed offer perspectives not found elsewhere?
5. **Engagement** - Does the content drive reader interaction and shares?
6. **Accuracy** - Is the information reliable and fact-checked?
7. **Local Fit** - Does the source cover Texas or regional markets?
8. **Automation Friendly** - Is the feed structured for automated processing?

---

## Automation Pipeline

- Feeds are polled via N8N workflows (see ichan-workflow.md)
- Filtered content is scored via Viroscope (see viroscope-workflow.md)
- Approved content flows to Snippet Engine (see snippet-engine.md)
- Final distribution via GHL (see ghl-distribution.md)


---

## GHL RSS Activation Status — 2026-06-13

### Confirmed Active (GHL Social Planner)

| Feed | URL | Status | Pillar |
|------|-----|--------|--------|
| HousingWire | https://www.housingwire.com/feed/ | ✅ ACTIVE | Industry News |
| Mortgage News Daily | https://www.mortgagenewsdaily.com/rss/news | ✅ ACTIVE | Industry News / Rate Watch |
| Inman | https://www.inman.com/feed/ | ✅ ACTIVE | Industry News |

### GHL RSS Validator — BLOCKED (404 from GHL server-side fetch)

The following feeds were tested and rejected by GHL's live HTTP validator.
Root cause: GHL's RSS fetch server is blocked by Cloudflare/bot protection on these domains.
Action required: Manual addition via browser session or use a feed proxy service.

| Feed | URL Tested | Notes |
|------|-----------|-------|
| National Mortgage News | https://www.nationalmortgagenews.com/rss.xml | 404 — Cloudflare blocked |
| NAR Research | https://www.nar.realtor/research-and-statistics/rss | 404 — Redirect/bot block |
| Calculated Risk | https://www.calculatedriskblog.com/feeds/posts/default | 404 |
| CFPB Blog | https://www.consumerfinance.gov/about-us/blog/feed/ | 404 |
| Bankrate Mortgages | https://www.bankrate.com/mortgages/rss/ | 404 |
| HUD News Releases | https://www.hud.gov/rss/newsreleases.xml | 404 |
| Freddie Mac PMMS | https://www.freddie.mac.com/pmss/rss | 404 |
| MND Rates Feed | https://www.mortgagenewsdaily.com/rss/rates | 404 |
| AgWeb | https://www.agweb.com/rss/news | 404 |
| DSNews | https://dsnews.com/feed/ | 404 |
| Realtor.com Advice | https://www.realtor.com/advice/feed/ | 404 |
| The Real Deal | https://therealdeal.com/feed/ | 404 |

### Next Action
- Resolve 4th+ feed: Use a feed proxy (e.g., RSS.app or Feedburner relay) or contact GHL support
- Candidate: https://rss.app/ relay for National Mortgage News or CFPB
- Required count: 4+ active feeds; currently at 3
