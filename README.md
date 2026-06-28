# Website Hero

A modern full-stack web app built with **Next.js 14** (App Router) and deployed on **Vercel**.

## Features
- 🏠 Home, Get Started, Learn More pages
- 🔐 Register / Login / Profile / Delete Account
- ⚡ Edge-deployed via Vercel
- 📱 Fully responsive (mobile-first)
- 🎨 Dark mode UI

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/theminecraftwardenguy-cmyk/website)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

The auth system uses an **in-memory store** (no database required). For production with persistent users, connect a database like [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) or [PlanetScale](https://planetscale.com) and update the API routes.
