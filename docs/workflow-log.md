# FSCAP Intelligence Hub — Workflow Build Log

**License:** MIT  
**Cadence:** 5 posts/week  
**STOP CONDITIONS:** Draft-only, no auto-publish, no YouTube, versioned docs

---

## Task 1 — Blog Site Creation
- **Status:** ✅ COMPLETE
- **Site:** FSCAP Intelligence (GHL Blog)
- **Notes:** Blog site created and verified in Empower LO

---

## Task 2 — RSS Feed Seeding
- **Status:** ✅ COMPLETE (Partial — 3 active, 12 blocked)
- **Active Feeds:**
  - HousingWire
  - Mortgage News Daily (MND)
  - Inman
- **Blocked:** 12 feeds rejected by GHL RSS validator (Cloudflare/bot protection 404s)
- **Details:** See `feed-sources.md`

---

## Task 3 — Workflow: INTEL - RSS Draft Review Alert
- **Status:** ✅ COMPLETE (DRAFT — NOT PUBLISHED)
- **GHL Workflow ID:** b8336dcd-1ecd-419f-9c8b-d44d0a7f4efb
- **Folder:** Intelligence Hub
- **Trigger:** Contact Tag added — filter: `intel-rss-draft`
  - Trigger Name: RSS Draft Ready for Review
- **Action:** Internal Notification (GHL in-app push)
  - Title: [INTEL HUB] RSS Draft Ready for Review
  - Message: Directs assigned owner to review draft before publishing
  - To: Assigned owners (Contact Owner)
  - Redirect Page: Contact
- **Tag Created:** `intel-rss-draft`
- **Publish Gate:** DRAFT status only — manual review required before any publish

---

## Task 4 — Liveboat Deployment Verification
- **Status:** 🔲 PENDING

## Task 5 — Viroscope Headline Test
- **Status:** 🔲 PENDING

## Task 6 — GHL Account Expiry Notifications
- **Status:** 🔲 PENDING
