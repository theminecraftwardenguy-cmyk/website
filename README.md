# Website Hero

A production-ready Next.js starter with authentication, deployed on Vercel.

## ✨ Features

- **Next.js 14** App Router + TypeScript
- **Auth system** — register, login, profile, delete account (bcrypt-hashed passwords)
- **Dark UI** — custom design system with CSS variables
- **Mobile-first** — responsive sidebar with hamburger menu
- **Vercel-ready** — deploy with one click

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/theminecraftwardenguy-cmyk/website)

Or manually:

```bash
npm install
npm run dev
```

Then visit [localhost:3000](http://localhost:3000).

## 🗃️ Persistent Auth

By default, user accounts are stored in-memory and reset on server restarts. This is intentional for a demo.

For production, swap `lib/users.ts` with a real database:
- **[Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)** — zero-config SQL
- **[Neon](https://neon.tech)** — free serverless PostgreSQL  
- **[PlanetScale](https://planetscale.com)** — free serverless MySQL

## 📁 Project Structure

```
app/
  page.tsx           — Home (hero)
  layout.tsx         — Root layout
  globals.css        — Design tokens + base styles
  login/page.tsx     — Login form
  register/page.tsx  — Registration form
  profile/page.tsx   — User profile
  delete-account/    — Delete account
  get-started/       — Getting started guide
  learn-more/        — Features overview
  api/auth/          — Auth API routes
components/
  Sidebar.tsx        — Navigation sidebar
  PageShell.tsx      — Page layout wrapper
lib/
  users.ts           — User store (swap for DB)
```

## ⚠️ What was removed

The original repo had PHP files (`index.php`, `login.php`, etc.), a SQLite database (`users.db`), and a Python script at the root — none of which work on Vercel. These have been replaced by the Next.js API routes in `app/api/`.
