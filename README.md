# KeenKeeper

KeenKeeper is a friendship tracking dashboard built with Next.js App Router. It helps you keep meaningful relationships active by tracking contact dates, goals, timeline interactions, and analytics.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Recharts

## Key Features

- Figma-inspired responsive dashboard with navbar, hero, summary cards, friends grid, and branded footer.
- Dynamic friend details page with quick check-in actions (Call/Text/Video), toast notifications, and timeline logging.
- Timeline page with interaction filtering, plus analytics page with a pie chart for interaction type counts.

## Routes

- `/` Home dashboard
- `/friends/[id]` Friend details
- `/timeline` Timeline with filters
- `/stats` Friendship analytics
- `*` Custom 404 page

## Data Sources

- `src/data/friends.json` contains 12 realistic friend profiles.
- `src/data/timelineSeed.js` contains initial timeline entries.
- New interactions are saved in browser localStorage.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run lint
npm run build
npm run start
```

## Notes

- All social and interaction icons are loaded from `public/assets/icon`.
- Friend profile photos are loaded from `public/assets/photos`.
