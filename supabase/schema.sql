-- Thrivar Phase 1 schema
-- Run this in the Supabase project's SQL Editor (Dashboard -> SQL Editor -> New query)

-- Supabase already provides auth.users for accounts/login. This table holds
-- the Thrivar-specific profile data tied to each user, one row per computed
-- assessment result (versioned, so future "then vs. now" comparisons work).
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  season text not null,
  scores jsonb not null,          -- { identity: 72, healing: 48, ... }
  strengths jsonb not null,       -- ["identity", "purpose"]
  growth jsonb not null,          -- ["capacity", "direction"]
  priority text not null,
  completed_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Each user can only ever see or modify their own profile rows.
create policy "Users can view their own profiles"
  on public.profiles for select
  using (auth.uid() = user_id);

create policy "Users can insert their own profiles"
  on public.profiles for insert
  with check (auth.uid() = user_id);

create index if not exists profiles_user_id_idx on public.profiles(user_id);

-- Phase 2 will add: assessments (raw answers), plans, plan_progress.
-- Phase 3 will add: coach_conversations, coach_messages.
-- Phase 4 will add: journal_entries.
-- Each follows the same pattern: user_id foreign key + row level security
-- policies scoping every row to its owner.
