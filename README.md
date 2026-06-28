# Website Hero

A production-ready Next.js starter with MongoDB Atlas authentication, deployed on Vercel.

##  Features

- **Next.js 14** App Router + TypeScript
- **MongoDB Atlas** — persistent auth with Mongoose (register, login, delete account)
- **bcrypt** — passwords are hashed server-side, never stored in plain text
- **Dark UI** — custom design system with CSS variables
- **Mobile-first** — responsive sidebar with hamburger menu
- **Vercel-ready** — deploy with one click

##  Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/theminecraftwardenguy-cmyk/website)

##  Local Setup

```bash
npm install
cp ..env.local.example ..env.local
# Fill in MONGODB_URI in ..env.local
npm run dev
```

Then visit [localhost:3000](http://localhost:3000).

##  MongoDB Atlas Setup

1. **Create a free cluster** at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Go to **Database Access** → Add a new database user (username + password)
3. Go to **Network Access** → Add IP `0.0.0.0/0` (allows Vercel's IPs)
4. Click **Connect** → **Drivers** → copy the connection string
5. Replace `<password>` with your DB user's password
6. Add `MONGODB_URI` to your `.env.local` locally and to **Vercel → Settings → Environment Variables** for production

##  Project Structure

```
app/
  page.tsx              — Home (hero)
  layout.tsx            — Root layout
  globals.css           — Design tokens + base styles
  login/page.tsx        — Login form
  register/page.tsx     — Registration form
  profile/page.tsx      — User profile
  delete-account/       — Delete account
  get-started/          — Getting started guide
  learn-more/           — Features overview
  api/auth/             — Auth API routes (register, login, logout, delete)
components/
  Sidebar.tsx           — Navigation sidebar
  PageShell.tsx         — Page layout wrapper
lib/
  mongodb.ts            — Mongoose connection helper (cached for serverless)
  models/User.ts        — Mongoose User model
```

