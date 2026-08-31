# YouTube Dashboard Replica

A responsive clone of the YouTube dashboard built with **React 19**, **Vite**, and **Tailwind CSS v4**.

## Features

- Fixed top navbar with logo, search bar (collapses to an icon on mobile), and action icons
- Collapsible sidebar: full sidebar with labels on large screens, icon-only mini rail on tablet, slide-out drawer on mobile
- Horizontally scrollable category filter pills (sticky under the navbar)
- Video grid generated from a data array with `.map()`, responsive from 1 column (mobile) up to 5 columns (large desktop)
- Dark mode: toggle button in the navbar (sun/moon icon), remembers your choice in `localStorage`, and falls back to your OS preference on first visit
- Reusable components: `Navbar`, `Sidebar`, `CategoryBar`, `VideoCard`, `VideoGrid`

## Project structure

```
src/
  components/
    Navbar.jsx
    Sidebar.jsx
    CategoryBar.jsx
    VideoCard.jsx
    VideoGrid.jsx
  data/
    videos.js       # sample video + category data
    sidebar.js       # sidebar links + sample subscriptions
  hooks/
    useTheme.js       # dark mode state, persisted to localStorage
  App.jsx
  index.css          # Tailwind entry
  main.jsx
```

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Push to GitHub

```bash
git init
git add .
git commit -m "YouTube dashboard replica"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

## Deploy

**Vercel**
1. Import the GitHub repo at https://vercel.com/new
2. Framework preset: Vite (auto-detected)
3. Build command: `npm run build` — Output directory: `dist`
4. Deploy

**Netlify**
1. Import the GitHub repo at https://app.netlify.com/start
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

After deploying, grab the live URL and submit it alongside your GitHub repo link.

## Notes

- Thumbnails and avatars use placeholder image services (`picsum.photos`, `i.pravatar.cc`) so the grid has real images without any local assets — swap in real data any time by editing `src/data/videos.js`.
- Category buttons filter the sample data by keyword match against title/channel; since this is demo data, categories without a direct match fall back to showing a few videos so the UI never looks broken.
