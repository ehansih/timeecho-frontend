<div align="center">

# ⏳ TimeEcho Frontend

Next.js 14 living memory app — AI-powered image-to-video.

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript) ![Vercel](https://img.shields.io/badge/Vercel-deployed-black?logo=vercel) ![Last Commit](https://img.shields.io/github/last-commit/ehansih/timeecho-frontend)

</div>

---

# TimeEcho Frontend

A time-aware memory platform frontend built with Next.js 14 and TypeScript.

## Live Demo
Deployed on Vercel.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: React hooks

## Features
- Time-based memory capture and recall
- AI-powered media processing
- Responsive, modern UI

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Related
- [TimeEcho Backend](https://github.com/ehansih/timeecho-backend) — FastAPI backend

## Author
**Harsh Vardhan Singh Chauhan** — [github.com/ehansih](https://github.com/ehansih)

## Security

This site is hardened with the following HTTP security headers, configured via `next.config.mjs`:

| Header | Value |
|--------|-------|
| `X-Frame-Options` | `SAMEORIGIN` — prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` — prevents MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Camera, mic, geolocation, payment blocked |
| `X-XSS-Protection` | `1; mode=block` |

HTTPS and HSTS are enforced automatically by Vercel.
