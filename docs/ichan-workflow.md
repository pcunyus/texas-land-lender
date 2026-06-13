# Ichan Workflow

## Overview

This document defines the Ichan RSS polling and processing workflow. Ichan is the RSS feed ingestion layer that continuously monitors configured feed sources, extracts new content, performs initial deduplication, and passes articles to the Viroscope scoring engine.

---

## Workflow Architecture

```
[RSS Feeds] --> [Ichan Poller] --> [Dedup Store] --> [Viroscope]
```

### Components

| Component | Responsibility | Platform |
|-----------|---------------|---------- |
| Ichan Poller | RSS feed polling, parsing, extraction | N8N |
| Dedup Store | Track processed URLs to prevent duplicates | Supabase / PostgreSQL |
| Payload Builder | Format article metadata for scoring | N8N Function node |
| Queue Manager | Batch and schedule payload delivery | N8N Wait / Cron |

---

## Polling Schedule

| Feed Tier | Poll Interval | Rationale |
|-----------|--------------|------------|
| Tier 1 (USDA, Fed, FSA) | Every 15 min | High-value, time-sensitive |
| Tier 2 (Trade pubs, regional news) | Every 60 min | Moderate priority |
| Tier 3 (Aggregators, general finance) | Every 4 hours | Lower priority, volume control |

**Total estimated polling operations per day:** ~288

---

## Data Extraction Fields

For each RSS item, Ichan extracts:

1. **title** - Article headline
2. **description** - Article summary/body text
3. **link** - Canonical URL (used for dedup)
4. **pubDate** - Publication timestamp
5. **source** - RSS feed name/domain
6. **author** - Article author (if available)
7. **categories** - RSS category tags
8. **content:encoded** - Full HTML content (if available)

---

## Deduplication Logic

Before passing to Viroscope, each article is checked against the Dedup Store:

```
IF URL exists in Dedup Store:
    IF processed_within(30_days):
        DISCARD silently
    ELSE:
        ALLOW (content may have been updated)
ELSE:
    ALLOW -> Proceed to scoring
```

After successful scoring and processing, the URL is logged to the Dedup Store with a timestamp.

---

## Error Handling

| Error Type | Action |
|------------|--------|
| RSS feed returns 404 | Log error, skip feed, alert admin |
| Feed returns 500 | Retry 3x with exponential backoff, then skip |
| Malformed XML | Log error, skip item, continue processing |
| Dedup store unreachable | Queue items locally, retry on next poll |
| Rate limit hit | Back off for 5 minutes, resume |

---

## Output Payload Format

Articles that pass dedup are formatted as JSON for Viroscope:

```json
{
  "id": "uuid-generated",
  "title": "Article Title",
  "description": "Article summary text...",
  "link": "https://source.example.com/article",
  "pub_date": "2026-06-13T14:30:00Z",
  "source": "usda-newsroom",
  "source_tier": 1,
  "author": "USDA Communications",
  "categories": ["announcements", "loans"],
  "content_html": "...",
  "ingested_at": "2026-06-13T17:00:00Z"
}
```

---

## Monitoring

Ichan health is tracked via:

- **Polling success rate** - Target: >95%
- **Items ingested per day** - Baseline: 50-200
- **Dedup rejection rate** - Target: 30-60% (indicates healthy repeat coverage)
- **Error count per hour** - Alert threshold: >10

Alerts are sent to Slack/Discord webhook on threshold breach.

---

## Integration Points

| Downstream | Method | Payload |
|------------|--------|--------- |
| Viroscope Scoring Engine | HTTP POST (webhook) | Full article JSON |
| Dedup Store (Supabase) | PostgreSQL INSERT | URL + timestamp |
| Error Log | File / DB table | Error details + context |

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-13 | pcunyus | Initial workflow definition |
