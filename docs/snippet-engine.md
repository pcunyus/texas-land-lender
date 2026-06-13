# Snippet Engine

## Overview

This document defines the Snippet Engine, the content creation layer that transforms scored article data from Viroscope into platform-ready social media posts. The Snippet Engine generates LinkedIn and Facebook post variants, formats them for GoHighLevel (GHL), and queues them for scheduled distribution.

**Input:** Scored article JSON from Viroscope
**Output:** Platform-specific post drafts in GHL Social Planner
**Cadence:** 5 posts per week (baseline)

---

## Pipeline Position

```
[Viroscope] --> [Snippet Engine] --> [GHL Social Planner] --> [LinkedIn / Facebook]
                                                                  |
                                                +-----------------+
                                                v
                                           [Draft Queue]
```

---

## Post Generation Process

### Step 1: Content Analysis

The Snippet Engine receives the enriched payload from Viroscope and analyzes:

- Article title, description, and full content
- Suggested pillar assignment
- Suggested CTA
- Per-dimension scores (for post tone calibration)

### Step 2: Hook Generation

For each article, 2-3 hook variants are generated:

| Style | Purpose | Example |
|-------|---------|-------- |
| Question Hook | Engage with curiosity | "Did you know FSA offers..." |
| Stat Hook | Lead with data point | "Texas farm land loans are up 12%..." |
| Problem/Solution | Address pain point | "Struggling to finance rural property?" |

### Step 3: Body Construction

The post body follows a consistent structure:

```
[HOOK]

[BODY - 2-3 sentences summarizing key insight]

[CONTEXT - Why this matters to Texas land buyers]

[CTA - Action step with link]
```

### Step 4: CTA Formatting

CTAs are tailored to the pillar:

| Pillar | CTA Style |
|--------|---------- |
| Mortgage Education | "DM me for pre-approval guidance" |
| Land + Farm Finance | "Let's talk FSA options" |
| Rate Watch | "Comment 'RATES' for current info" |
| FSCAP Authority | "Reach out to discuss your eligibility" |
| Buyer FAQs | "I answer these in every consultation" |
| Industry News | "DM me with your questions on this" |

### Step 5: Platform Formatting

Posts are formatted differently per platform:

| Element | LinkedIn | Facebook |
|---------|----------|--------- |
| Max characters | 3,000 | 63,206 |
| Hashtags | 3-5 professional | 1-3 casual |
| Link placement | In post body | In comments (option A/B test) |
| Emoji usage | Minimal, professional | Moderate, engaging |
| Line spacing | Single paragraph breaks | More spacing for readability |

---

## Post Templates by Pillar

### Mortgage Education
```
{HOOK}

{KEY_INSIGHT from article}

Understanding your mortgage options before you start looking at land saves time, money, and headaches. Pre-approval isn't just a formality - it's your negotiating power.

{CTA}

#MortgageTips #LandBuying #TexasRealEstate
```

### Land + Farm Finance
```
{HOOK}

{KEY_INSIGHT from article}

FSA loans can finance up to 100% of a farm purchase with no down payment. If you're looking at agricultural property in Texas, this program is worth exploring before a conventional loan.

{CTA}

#FarmFinance #FSA #TexasLand
```

### Rate Watch
```
{HOOK}

{KEY_INSIGHT - rate data from article}

These rate movements directly impact your purchasing power. A 0.5% rate change can mean the difference between qualifying for that property or not.

{CTA}

#RateWatch #MortgageRates #TexasLender
```

### FSCAP Authority
```
{HOOK}

{KEY_INSIGHT about FSCAP/FSPLC programs}

Conservation and stewardship programs aren't just about the environment - they're about long-term land value and sustainable operations.

{CTA}

#Conservation #FarmPrograms #LandStewardship
```

### Buyer FAQs
```
{HOOK}

{FAQ_QUESTION and ANSWER from article}

This is one of the most common questions I hear from land buyers. The answer isn't always straightforward, but knowing the factors helps you plan ahead.

{CTA}

#LandBuying #BuyerTips #TexasLand
```

### Industry News
```
{HOOK}

{KEY_NEWS from article}

Staying informed on these developments helps you make better decisions as a land buyer or seller. I track this stuff so you don't have to.

{CTA}

#LandMarket #TexasRealEstate #IndustryNews
```

---

## Distribution Scheduling

Generated posts are queued in GHL Social Planner following the weekly cadence:

| Day | Pillar | Platform(s) |
|-----|--------|------------- |
| Monday | Mortgage Education | LinkedIn |
| Tuesday | Land + Farm Finance | LinkedIn + Facebook |
| Wednesday | Rate Watch | LinkedIn |
| Thursday | Buyer FAQs | Facebook |
| Friday | FSCAP Authority or Industry News | LinkedIn + Facebook |

**Note:** All posts are created in DRAFT status. Manual review required before publishing.

---

## Quality Gates

Before a post is queued, it must pass:

1. **Length check** - Between 150-400 characters (LinkedIn), 100-500 (Facebook)
2. **Link validation** - Source URL must be present and valid
3. **Pillar alignment** - Post tone must match assigned pillar
4. **Duplication check** - No identical posts within 7 days
5. **Human review flag** - All posts require manual approval before publish

---

## Output Format for GHL

Each generated post is sent to GHL Social Planner via API:

```json
{
  "text": "Full post text with hook, body, CTA, hashtags",
  "status": "draft",
  "platforms": ["facebook", "linkedin"],
  "scheduled_at": "2026-06-16T09:00:00Z",
  "metadata": {
    "source_article": "https://source.example.com/article",
    "pillar": "Land + Farm Finance",
    "viroscope_score": 82,
    "generated_at": "2026-06-13T17:10:00Z"
  }
}
```

---

## Monitoring

| Metric | Target |
|--------|-------- |
| Posts generated per week | 5-7 |
| Draft-to-publish rate | 60-80% |
| Avg engagement (likes/comments) | Benchmarked post-launch |
| Failed generation rate | <5% |

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-13 | pcunyus | Initial snippet engine definition |
