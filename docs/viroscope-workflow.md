# Viroscope Scoring Workflow

## Overview

This document defines the Viroscope scoring engine workflow. Viroscope receives article payloads from the Ichan poller, evaluates each against the 8-dimension scoring model, makes an approve/reject decision, and forwards approved content to the Snippet Engine for social post creation.

**Input:** Article JSON from Ichan Poller
**Output:** Approved article JSON to Snippet Engine
**Threshold:** 65 / 100 (see `scoring-model.md`)

---

## Workflow Pipeline

```
[Ichan Payload] --> [Pre-Filter] --> [Score Dimensions] --> [Decision] --> [Snippet Engine]
     |                                                              |
     +-------------------------> [Reject Log] <---------------------+
```

---

## Step 1: Pre-Filter (Auto-Accept/Reject)

Before running the full scoring model, Viroscope applies fast-path rules:

### Auto-Accept (bypass scoring, score = 100)
- Official FSA/USDA program announcements
- Federal Reserve rate decisions
- Texas-specific agricultural lending legislation
- Tier-1 source + actionability score >= 11

### Auto-Reject (bypass scoring, discard)
- Promotional/spam from unknown domains
- Content older than 180 days
- Non-English content
- Duplicate URLs processed within 30 days

---

## Step 2: Dimension Scoring

For articles that reach this step, Viroscope scores across 8 dimensions using NLP and pattern matching:

| # | Dimension | Weight | Method |
|---|-----------|--------|-------- |
| 1 | Audience Relevance | 15% | Keyword match against land/lending signals |
| 2 | Ichan Feed Authority | 12% | Lookup source tier from `feed-sources.md` |
| 3 | Timeliness | 10% | Compare pub_date to current timestamp |
| 4 | Actionability | 15% | Detect rates, dates, deadlines, criteria |
| 5 | Geographic Fit | 12% | Match against Texas/Panhandle keyword set |
| 6 | Educational Value | 10% | Detect how-to, FAQ, step-by-step patterns |
| 7 | Originality | 13% | Detect press release vs editorial signals |
| 8 | Tone Alignment | 13% | Sentiment analysis for brand voice |

### Scoring Logic Per Dimension

Each dimension uses a combination of:
- **Keyword token counting** - Presence/absence of signal words
- **Pattern matching** - Regex for dates, rates, percentages
- **Sentiment analysis** - NLP model for tone detection
- **Source lookup** - Pre-defined tier from feed-sources.md

Scores are normalized to their max weight (e.g., Audience Relevance scores 0-15, not 0-100).

---

## Step 3: Decision

```
Total Score = DIM1 + DIM2 + DIM3 + DIM4 + DIM5 + DIM6 + DIM7 + DIM8

IF Total Score >= 65:
    STATUS = "APPROVED"
    ENRICH payload with scores for Snippet Engine
    SEND to Snippet Engine webhook
ELSE:
    STATUS = "REJECTED"
    LOG to rejection table with per-dimension scores
    DISCARD payload
```

---

## Approved Payload Enrichment

Before forwarding to Snippet Engine, the payload is enriched:

```json
{
  "id": "uuid-generated",
  "title": "Article Title",
  "description": "Article summary...",
  "link": "https://source.example.com/article",
  "source": "usda-newsroom",
  "source_tier": 1,
  "score": {
    "total": 82,
    "audience_relevance": 14,
    "feed_authority": 11,
    "timeliness": 9,
    "actionability": 13,
    "geographic_fit": 10,
    "educational_value": 8,
    "originality": 7,
    "tone_alignment": 10
  },
  "suggested_pillar": "Land + Farm Finance",
  "suggested_cta": "Learn more about FSA loan options",
  "scored_at": "2026-06-13T17:05:00Z"
}
```

### Pillar Assignment Logic

Based on content analysis, Viroscope assigns a suggested pillar:

- **Mortgage Education** - Keywords: rate, APR, closing, refinance, pre-approval
- **Land + Farm Finance** - Keywords: acreage, FSA, farm loan, rural, agricultural
- **Rate Watch** - Keywords: fed rate, treasury, yield, rate change, Fed decision
- **FSCAP Authority** - Keywords: FSPLC, farm service, conservation, stewardship
- **Buyer FAQs** - Keywords: how to, guide, steps, eligible, qualification
- **Industry News** - General news not matching above patterns

---

## Step 4: Delivery to Snippet Engine

Approved payloads are sent via HTTP POST to the Snippet Engine webhook:

| Header | Value |
|--------|-------|
| Content-Type | application/json |
| X-Source | viroscope-engine |
| X-Action | create-snippet |

**Retry policy:** 3 attempts with 30-second exponential backoff.

---

## Monitoring Metrics

| Metric | Target | Alert Threshold |
|--------|--------|----------------|
| Articles scored per day | 50-150 | <20 or >300 |
| Approval rate | 25-40% | <15% or >50% |
| Avg score (approved) | 75-85 | <68 or >92 |
| Processing latency | <500ms per article | >2000ms |
| Error rate | <2% | >5% |

---

## Error Handling

| Error | Action |
|-------|--------|
| Invalid JSON payload | Log error, discard, alert |
| Scoring engine timeout | Retry 2x, then queue for batch |
| Snippet Engine unreachable | Queue locally, retry every 5 min |
| Dimension scoring failure | Log per-dimension error, apply default score |

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-13 | pcunyus | Initial workflow definition |
