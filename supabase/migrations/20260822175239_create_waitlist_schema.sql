create table public.waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  first_name text not null check (char_length(trim(first_name)) between 1 and 80),
  last_name text not null check (char_length(trim(last_name)) between 1 and 80),
  email text not null unique check (
    email = lower(trim(email))
    and char_length(email) between 3 and 320
  ),
  marketing_consent boolean not null check (marketing_consent = true),
  consented_at timestamptz not null default now(),
  intended_use text check (
    intended_use is null
    or intended_use in (
      'personal_use',
      'healthcare_professional',
      'coach_or_trainer',
      'research_or_education',
      'business_or_organisation',
      'other'
    )
  ),
  country_code text check (
    country_code is null
    or country_code ~ '^[A-Z]{2}$'
  ),
  organisation_name text check (
    organisation_name is null
    or char_length(trim(organisation_name)) <= 160
  ),
  use_case text check (
    use_case is null
    or char_length(trim(use_case)) <= 1000
  ),
  status text not null default 'pending' check (
    status in ('pending', 'subscribed', 'unsubscribed')
  ),
  confirmation_token_hash text unique,
  confirmation_expires_at timestamptz,
  confirmation_sent_at timestamptz,
  confirmed_at timestamptz,
  verification_attempts integer not null default 0 check (
    verification_attempts >= 0
  ),
  unsubscribed_at timestamptz,
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint waitlist_confirmation_fields_consistent check (
    (confirmation_token_hash is null and confirmation_expires_at is null)
    or
    (confirmation_token_hash is not null and confirmation_expires_at is not null)
  )
);

create table public.waitlist_interests (
  waitlist_entry_id uuid not null references public.waitlist_entries(id) on delete cascade,
  product_slug text not null check (
    product_slug in (
      'kradle',
      'kinetix',
      'kursor',
      'kovert',
      'kapture',
      'konnect'
    )
  ),
  created_at timestamptz not null default now(),
  primary key (waitlist_entry_id, product_slug)
);

create index waitlist_entries_status_idx
  on public.waitlist_entries (status);

create index waitlist_entries_created_at_idx
  on public.waitlist_entries (created_at desc);

create index waitlist_interests_product_slug_idx
  on public.waitlist_interests (product_slug);

create function public.set_waitlist_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_waitlist_entries_updated_at
before update on public.waitlist_entries
for each row
execute function public.set_waitlist_updated_at();

alter table public.waitlist_entries enable row level security;
alter table public.waitlist_interests enable row level security;

revoke all on table public.waitlist_entries from anon, authenticated;
revoke all on table public.waitlist_interests from anon, authenticated;

grant select, insert, update, delete on table public.waitlist_entries to service_role;
grant select, insert, update, delete on table public.waitlist_interests to service_role;
