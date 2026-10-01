-- ============================================================
-- LAWLINK INITIAL DATABASE SCHEMA
-- ============================================================

-- ============================================================
-- ENUMS
-- ============================================================

create type public.difficulty_level as enum (
  'easy',
  'medium',
  'hard'
);

create type public.progress_status as enum (
  'not_started',
  'in_progress',
  'completed'
);

create type public.question_type as enum (
  'multiple_choice'
);

create type public.chat_role as enum (
  'user',
  'assistant',
  'system'
);

-- ============================================================
-- PROFILES
-- ============================================================

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,

  username text unique,
  full_name text,
  avatar_url text,

  xp integer not null default 0,
  level integer not null default 1,

  current_streak integer not null default 0,
  longest_streak integer not null default 0,

  last_active_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============================================================
-- TOPICS
-- ============================================================

create table public.topics (
  id bigint generated always as identity primary key,

  name text not null,
  slug text not null unique,
  description text,
  icon text,

  difficulty public.difficulty_level not null default 'easy',

  created_at timestamptz not null default now()
);

-- ============================================================
-- SCENARIOS
-- ============================================================

create table public.scenarios (
  id bigint generated always as identity primary key,

  topic_id bigint not null
    references public.topics(id)
    on delete cascade,

  title text not null,
  description text not null,

  difficulty public.difficulty_level not null default 'easy',

  estimated_minutes integer not null default 5,
  xp_reward integer not null default 50,

  order_number integer not null default 1,

  created_at timestamptz not null default now()
);

-- ============================================================
-- QUESTIONS
-- ============================================================

create table public.questions (
  id bigint generated always as identity primary key,

  scenario_id bigint not null
    references public.scenarios(id)
    on delete cascade,

  question_text text not null,

  question_type public.question_type
    not null default 'multiple_choice',

  explanation text,

  xp_reward integer not null default 10,

  order_number integer not null default 1,

  created_at timestamptz not null default now()
);

-- ============================================================
-- QUESTION OPTIONS
-- ============================================================

create table public.question_options (
  id bigint generated always as identity primary key,

  question_id bigint not null
    references public.questions(id)
    on delete cascade,

  option_text text not null,

  is_correct boolean not null default false,

  order_number integer not null default 1,

  created_at timestamptz not null default now()
);

-- ============================================================
-- USER PROGRESS
-- ============================================================

create table public.user_progress (
  id bigint generated always as identity primary key,

  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  scenario_id bigint not null
    references public.scenarios(id)
    on delete cascade,

  status public.progress_status
    not null default 'not_started',

  score integer not null default 0,

  attempts integer not null default 0,

  completed_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique(user_id, scenario_id)
);

-- ============================================================
-- QUIZ ATTEMPTS
-- ============================================================

create table public.quiz_attempts (
  id bigint generated always as identity primary key,

  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  scenario_id bigint not null
    references public.scenarios(id)
    on delete cascade,

  score integer not null,
  total_questions integer not null,

  started_at timestamptz not null default now(),
  completed_at timestamptz not null default now()
);

-- ============================================================
-- XP TRANSACTIONS
-- ============================================================

create table public.xp_transactions (
  id bigint generated always as identity primary key,

  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  amount integer not null,

  reason text not null,

  reference_id bigint,

  created_at timestamptz not null default now()
);

-- ============================================================
-- BADGES
-- ============================================================

create table public.badges (
  id bigint generated always as identity primary key,

  name text not null unique,

  description text not null,

  icon text,

  requirement_type text not null,

  requirement_value integer not null
);

-- ============================================================
-- USER BADGES
-- ============================================================

create table public.user_badges (
  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  badge_id bigint not null
    references public.badges(id)
    on delete cascade,

  earned_at timestamptz not null default now(),

  primary key(user_id, badge_id)
);

-- ============================================================
-- RESOURCES
-- ============================================================

create table public.resources (
  id bigint generated always as identity primary key,

  topic_id bigint
    references public.topics(id)
    on delete set null,

  title text not null,

  description text,

  organization text,

  url text not null,

  resource_type text,

  verified_at timestamptz,

  created_at timestamptz not null default now()
);

-- ============================================================
-- CHAT SESSIONS
-- ============================================================

create table public.chat_sessions (
  id uuid primary key default gen_random_uuid(),

  user_id uuid not null
    references public.profiles(id)
    on delete cascade,

  created_at timestamptz not null default now()
);

-- ============================================================
-- CHAT MESSAGES
-- ============================================================

create table public.chat_messages (
  id bigint generated always as identity primary key,

  session_id uuid not null
    references public.chat_sessions(id)
    on delete cascade,

  role public.chat_role not null,

  content text not null,

  created_at timestamptz not null default now()
);

-- ============================================================
-- INDEXES
-- ============================================================

create index scenarios_topic_id_idx
on public.scenarios(topic_id);

create index questions_scenario_id_idx
on public.questions(scenario_id);

create index question_options_question_id_idx
on public.question_options(question_id);

create index user_progress_user_id_idx
on public.user_progress(user_id);

create index quiz_attempts_user_id_idx
on public.quiz_attempts(user_id);

create index xp_transactions_user_id_idx
on public.xp_transactions(user_id);

create index user_badges_user_id_idx
on public.user_badges(user_id);

create index resources_topic_id_idx
on public.resources(topic_id);

create index chat_sessions_user_id_idx
on public.chat_sessions(user_id);

create index chat_messages_session_id_idx
on public.chat_messages(session_id);

-- ============================================================
-- PROFILE CREATION TRIGGER
-- ============================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin

  insert into public.profiles (
    id,
    username,
    full_name
  )
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'username',
      split_part(new.email, '@', 1)
    ),
    new.raw_user_meta_data ->> 'full_name'
  );

  return new;

end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();

-- ============================================================
-- UPDATED_AT FUNCTION
-- ============================================================

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
before update on public.profiles
for each row
execute procedure public.set_updated_at();

create trigger user_progress_updated_at
before update on public.user_progress
for each row
execute procedure public.set_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table public.profiles enable row level security;
alter table public.topics enable row level security;
alter table public.scenarios enable row level security;
alter table public.questions enable row level security;
alter table public.question_options enable row level security;
alter table public.user_progress enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.xp_transactions enable row level security;
alter table public.badges enable row level security;
alter table public.user_badges enable row level security;
alter table public.resources enable row level security;
alter table public.chat_sessions enable row level security;
alter table public.chat_messages enable row level security;

-- ============================================================
-- PROFILES POLICIES
-- ============================================================

create policy "Users can view their own profile"
on public.profiles
for select
to authenticated
using (id = auth.uid());

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

-- ============================================================
-- PUBLIC LEARNING CONTENT
-- ============================================================

create policy "Authenticated users can view topics"
on public.topics
for select
to authenticated
using (true);

create policy "Authenticated users can view scenarios"
on public.scenarios
for select
to authenticated
using (true);

create policy "Authenticated users can view questions"
on public.questions
for select
to authenticated
using (true);

-- IMPORTANT:
-- Do NOT allow users to read question_options.is_correct.
--
-- The API route will validate answers server-side.
--
-- We therefore expose options through a secure API instead of
-- direct browser access.

-- ============================================================
-- BADGES
-- ============================================================

create policy "Authenticated users can view badges"
on public.badges
for select
to authenticated
using (true);

-- ============================================================
-- RESOURCES
-- ============================================================

create policy "Authenticated users can view resources"
on public.resources
for select
to authenticated
using (true);

-- ============================================================
-- USER PROGRESS
-- ============================================================

create policy "Users can view their progress"
on public.user_progress
for select
to authenticated
using (user_id = auth.uid());

create policy "Users can insert their progress"
on public.user_progress
for insert
to authenticated
with check (user_id = auth.uid());

create policy "Users can update their progress"
on public.user_progress
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

-- ============================================================
-- QUIZ ATTEMPTS
-- ============================================================

create policy "Users can view their quiz attempts"
on public.quiz_attempts
for select
to authenticated
using (user_id = auth.uid());

create policy "Users can create their quiz attempts"
on public.quiz_attempts
for insert
to authenticated
with check (user_id = auth.uid());

-- ============================================================
-- XP
-- ============================================================

create policy "Users can view their XP transactions"
on public.xp_transactions
for select
to authenticated
using (user_id = auth.uid());

-- XP INSERTS ARE NOT ALLOWED FROM THE CLIENT.
-- The quiz API handles XP awarding.

-- ============================================================
-- USER BADGES
-- ============================================================

create policy "Users can view their badges"
on public.user_badges
for select
to authenticated
using (user_id = auth.uid());

-- Badge awarding is handled by backend logic.

-- ============================================================
-- CHAT SESSIONS
-- ============================================================

create policy "Users can view their chat sessions"
on public.chat_sessions
for select
to authenticated
using (user_id = auth.uid());

create policy "Users can create their chat sessions"
on public.chat_sessions
for insert
to authenticated
with check (user_id = auth.uid());

-- ============================================================
-- CHAT MESSAGES
-- ============================================================

create policy "Users can view messages from their sessions"
on public.chat_messages
for select
to authenticated
using (
  exists (
    select 1
    from public.chat_sessions
    where chat_sessions.id = chat_messages.session_id
      and chat_sessions.user_id = auth.uid()
  )
);

create policy "Users can create messages in their sessions"
on public.chat_messages
for insert
to authenticated
with check (
  exists (
    select 1
    from public.chat_sessions
    where chat_sessions.id = chat_messages.session_id
      and chat_sessions.user_id = auth.uid()
  )
);