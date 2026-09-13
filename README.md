# Thrivar — Phase 1

A real Next.js + Supabase web app: public landing page, working sign-up/login,
and a protected dashboard. No AI or assessment yet - that's Phase 2 and 3.

## 1. Create your Supabase project

1. Go to supabase.com, sign up (free tier is fine), and create a new project.
2. Once it's ready, go to **Project Settings -> API Keys**. You'll need two
   values from that page in step 3: the **Project URL** and the
   **Publishable key** (starts with `sb_publishable_...`).
3. Go to **SQL Editor -> New query**, paste in the contents of
   `supabase/schema.sql` from this project, and run it. This creates the
   `profiles` table Phase 2 will use.
4. Go to **Authentication -> Providers** and confirm Email is enabled
   (it is by default). Also check **Authentication -> URL Configuration** and
   set the Site URL - use `http://localhost:3000` for now; you'll update this
   to your real domain once deployed.

## 2. Run it locally

```
npm install
cp .env.local.example .env.local
```

Open `.env.local` and paste in your Project URL and Publishable key from
step 1:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

```
npm run dev
```

Visit `http://localhost:3000`. You should be able to:
- See the landing page
- Sign up with an email + password (Supabase will email a confirmation link)
- Click that link, land on `/dashboard`
- Log out and log back in

## 3. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to vercel.com, sign up, click **Add New -> Project**, and import that
   GitHub repo.
3. Before deploying, add the same two environment variables from your
   `.env.local` (Project Settings -> Environment Variables in Vercel):
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
4. Deploy. Vercel will give you a live URL.
5. Back in Supabase, update **Authentication -> URL Configuration -> Site URL**
   to that real Vercel URL, so confirmation emails link to the live site
   instead of localhost.

## A note on this key

The Publishable key (`sb_publishable_...`) is designed to be safe to put in
public, client-visible code - that's what "publishable" means. It's not a
secret. The one you'd never share or commit is a **secret key**
(`sb_secret_...`), which this project doesn't use yet - that only comes into
play in Phase 3, for the AI coach's server-side calls.

## What's next

- **Phase 2**: assessment, transformation profile, season, plan - all
  database-backed and tied to the logged-in user.
- **Phase 3**: the AI coach, called server-side, with the four voices.

Nothing in this Phase 1 scaffold will need to be thrown away for later
phases - Phase 2 builds directly on top of the auth and database connection
already working here.
