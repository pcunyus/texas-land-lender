# GHL Distribution

## Overview

This document defines the GoHighLevel (GHL) distribution workflow. This is the final layer of the automation pipeline where GHL Social Planner receives generated social posts from the Snippet Engine and distributes them across LinkedIn and Facebook according to the configured weekly cadence.

**Input:** Post drafts from Snippet Engine
**Output:** Published/queued posts on LinkedIn and Facebook
**Location:** GHL Social Planner (app.empowerlo.com)

---

## Pipeline Position

```
[Snippet Engine] --> [GHL Social Planner] --> [DRAFT Queue]
                            |
                            v
                     [Manual Review] --> [PUBLISH]
```

---

## GHL Configuration

### Social Planner Settings

| Setting | Value |
|---------|-------|
| Location | Texas Land Lender (vGObfX3wfqWXjNkXwz9M) |
| Planner Type | Social Planner |
| Post Status | Draft (initial) |
| Connected Platforms | LinkedIn, Facebook |

### Content Categories

The following 6 categories mirror the content pillars:

1. **Mortgage Education**
2. **Land + Farm Finance**
3. **Rate Watch**
4. **FSCAP Authority**
5. **Buyer FAQs**
6. **Industry News**

Each category is mapped to a queue in the Social Planner for organized scheduling.

---

## Weekly Distribution Schedule

| Day | Pillar | Platform(s) | Time |
|-----|--------|-------------|------|
| Monday | Mortgage Education | LinkedIn | 9:00 AM CDT |
| Tuesday | Land + Farm Finance | LinkedIn + Facebook | 9:00 AM CDT |
| Wednesday | Rate Watch | LinkedIn | 9:00 AM CDT |
| Thursday | Buyer FAQs | Facebook | 9:00 AM CDT |
| Friday | FSCAP Authority OR Industry News | LinkedIn + Facebook | 9:00 AM CDT |

**Note:** Friday alternates between FSCAP Authority and Industry News on a weekly basis.

---

## Post Intake Process

### API Reception

The Snippet Engine sends posts to GHL via the Social Planner API:

```json
POST /v2/location/{locationId}/social-planner/posts

{
  "text": "<post_content>",
  "media": ["<image_urls>"],
  "status": "draft",
  "platforms": ["facebook", "linkedin"],
  "scheduled_at": "<ISO8601_timestamp>",
  "categories": ["<pillar_name>"]
}
```

### Manual Creation (Fallback)

If the API intake fails, posts can be manually created in GHL:

1. Navigate to **Marketing > Social Planner**
2. Click **+ Create Post**
3. Select platforms (LinkedIn, Facebook, or both)
4. Paste post text
5. Add source link
6. Assign category
7. Set schedule date/time
8. Save as **Draft**

---

## Category Queue Setup

In the Social Planner Settings (Categories tab):

1. Go to **Marketing > Social Planner > Settings > Categories**
2. Create 6 categories matching the pillars above
3. Assign color codes for visual organization
4. Map each category to the weekly schedule

### Category Mapping

| Category | Pillar | Queue |
|----------|--------|-------|
| Mortgage Education | Mortgage Education | Monday Queue |
| Land + Farm Finance | Land + Farm Finance | Tuesday Queue |
| Rate Watch | Rate Watch | Wednesday Queue |
| FSCAP Authority | FSCAP Authority | Friday Queue |
| Buyer FAQs | Buyer FAQs | Thursday Queue |
| Industry News | Industry News | Friday Queue |

---

## Facebook Reconnection

Facebook must be connected to GHL for cross-platform distribution:

1. Navigate to **Settings > Integrations > Facebook**
2. Click **Connect Facebook Account**
3. Authenticate with Facebook credentials
4. Select the Texas Land Lender Facebook Page
5. Grant posting permissions
6. Verify connection in Social Planner

**Troubleshooting:** If Facebook disconnects (token expiration), re-authenticate via the same path. Facebook tokens expire periodically and require reconnection.

---

## RSS Feed Activation

GHL Social Planner supports RSS feed-based content ingestion:

1. Navigate to **Social Planner > Settings > RSS Feeds**
2. Click **Add RSS Feed**
3. Enter feed URL from `feed-sources.md` Tier 1 sources
4. Set refresh interval (15 min for Tier 1)
5. Map feed to appropriate category
6. Enable auto-import to Draft queue

### Initial RSS Feeds to Configure

| Source | Feed URL | Category |
|--------|----------|--------- |
| USDA Newsroom | https://www.usda.gov/rss.xml | Land + Farm Finance |
| Federal Reserve | https://www.federalreserve.gov/feeds/all.xml | Rate Watch |
| FSA | https://www.fsa.usda.gov/rss.xml | Land + Farm Finance |

---

## Draft Review Workflow

All posts land in DRAFT status for manual review:

### Daily Review Checklist

- [ ] Verify post text is accurate and on-brand
- [ ] Confirm source link is valid
- [ ] Check category assignment matches pillar
- [ ] Verify scheduled time is correct
- [ ] Ensure both platform variants are present (if dual-platform)
- [ ] Check for any automated generation errors

### Publish Actions

After review approval:
1. Click into the draft post
2. Click **Schedule** or **Publish Now**
3. Confirm platform selection
4. Verify scheduled time
5. Confirm publish

---

## Error Handling

| Error | Resolution |
|-------|------------|
| Platform disconnected | Reconnect via Settings > Integrations |
| Post failed to schedule | Retry manually from draft |
| Category not assigned | Edit post and select category |
| Duplicate posts detected | Delete duplicate, flag in monitoring log |
| RSS feed broken | Update feed URL, check source status |

---

## Monitoring

| Metric | Target |
|--------|-------- |
| Posts drafted per week | 5-7 |
| Draft-to-publish conversion | >60% |
| Platform delivery success | >95% |
| FB connection uptime | >99% |

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-13 | pcunyus | Initial GHL distribution definition |
