# Content Scoring Model

## Overview

This document defines the 8-dimension scoring model used by the Viroscope scoring engine to evaluate RSS feed items for Texas Land Lender. Each incoming article is scored across 8 dimensions, with only items exceeding the minimum threshold advancing to the Snippet Engine for post creation.

**Pass Threshold:** 65 / 100

---

## Dimension Details

### 1. Audience Relevance (Weight: 15%)

How directly does the content speak to the Texas Land Lender audience?

- **Score 0-5:** Generic financial news, no land/lending angle
- **Score 6-10:** Mentions real estate or rural topics tangentially
- **Score 11-15:** Directly addresses land buyers, farm finance, or rural property lending in Texas or similar markets

**Key signals:** Land, acreage, farm, rural property, Texas markets, ranch, agricultural loan, land loan

---

### 2. Ichan Feed Authority (Weight: 12%)

How credible is the source domain feeding this article?

- **Score 0-4:** Unknown blogs, low-authority aggregators
- **Score 5-8:** Industry trade publications, regional news sites
- **Score 9-12:** Government sources (USDA, FDIC, Federal Reserve), major national lenders, top-tier financial media

**Source tiers are defined in `feed-sources.md`**

---

### 3. Timeliness (Weight: 10%)

How current and relevant is the information?

- **Score 0-3:** Outdated data, references over 90 days old
- **Score 4-6:** Recent but not breaking (1-30 days)
- **Score 7-10:** Breaking news, rate announcements, policy changes within 72 hours

---

### 4. Actionability (Weight: 15%)

Does the content enable the lender or borrower to take a specific action?

- **Score 0-5:** Purely informational, no clear takeaway
- **Score 6-10:** Suggests trends or general guidance
- **Score 11-15:** Provides specific rates, program details, eligibility criteria, deadlines, or decision frameworks

**Examples of high-actionability content:**
- FSA loan program updates with deadlines
- Interest rate changes with effective dates
- New lending program launches with qualification criteria

---

### 5. Geographic Fit (Weight: 12%)

Does the content pertain to the operational geography?

- **Score 0-4:** International or non-US content
- **Score 5-8:** National US content with general applicability
- **Score 9-12:** Texas-specific or Panhandle/Southwest region focus

**Bonus:** Content referencing counties within the primary service area receives +2

---

### 6. Educational Value (Weight: 10%)

Does the content teach the audience something they need to know?

- **Score 0-3:** Opinion pieces, promotional content
- **Score 4-7:** Explains concepts, provides context
- **Score 8-10:** Step-by-step guidance, FAQ-resolution, myth-busting

---

### 7. Originality (Weight: 13%)

Does the content offer a unique perspective or original data?

- **Score 0-4:** Press release republication, wire service copy
- **Score 5-8:** Synthesized reporting with multiple sources
- **Score 9-13:** Original research, exclusive interviews, proprietary data, expert commentary

---

### 8. Tone Alignment (Weight: 13%)

Does the content match the Texas Land Lender brand voice?

- **Score 0-4:** Sensationalist, fear-mongering, or overly technical
- **Score 5-8:** Professional, neutral financial reporting
- **Score 9-13:** Trustworthy, educational, approachable, empowering tone

---

## Scoring Formula

```
Final Score = Sum of all 8 dimension scores (max 100)

IF Final Score >= 65:
    STATUS = "APPROVED" -> Forward to Snippet Engine
ELSE:
    STATUS = "REJECTED" -> Log for analytics, discard
```

---

## Edge Cases

### Auto-Approve Rules
Content matching ANY of the following is auto-approved (bypass scoring):

1. Official FSA/USDA program announcements
2. Federal Reserve rate decisions
3. Texas-specific agricultural lending legislation
4. Content from pre-approved Tier-1 sources with actionability score >= 11

### Auto-Reject Rules
Content matching ANY of the following is auto-rejected:

1. Promotional/spam content from unknown domains
2. Content older than 180 days
3. Non-English content
4. Duplicate URLs already processed within 30 days

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-06-13 | pcunyus | Initial scoring model definition |
