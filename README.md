# React starter

Minimal React + TypeScript app built with Vite, React Router, and TanStack Query.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Scripts

- `npm run dev` — start the dev server with HMR
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run Oxlint

## Structure

- `src/main.tsx` — app entry, router and query client providers
- `src/App.tsx` — navigation and route definitions
- `src/pages/` — route components
- `src/api/client.ts` — shared `fetch` wrapper
- `src/api/posts.ts` — example API calls
- `src/hooks/usePosts.ts` — example TanStack Query hook

Replace the example posts API and `/posts` page with your own feature code.
