<a href="https://chat.vercel.ai/">
  <img alt="Next.js 13 and app template Router-ready AI chatbot." src="https://chat.vercel.ai/opengraph-image.png" />
  <h1 align="center">Next.js AI Chatbot</h1>
</a>

<p align="center">
  An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase Auth and Postgres DB.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- Support for OpenAI (default), Anthropic, Hugging Face, or custom AI chat models and/or LangChain
- Edge runtime-ready
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History with [Supabase Postgres DB](https://supabase.com)
- [Supabase Auth](https://supabase.com/auth) for authentication

## Model Providers

This template ships with OpenAI `gpt-3.5-turbo` as the default. However, thanks to the [Vercel AI SDK](https://sdk.vercel.ai/docs), you can switch LLM providers to [Anthropic](https://anthropic.com), [Hugging Face](https://huggingface.co), or using [LangChain](https://js.langchain.com) with just a few lines of code.

## Deploy Your Own

You can deploy your own version of the Next.js AI Chatbot to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fvercel-ai-chatbot&env=OPENAI_API_KEY&envDescription=You%20must%20first%20activate%20a%20Billing%20Account%20here%3A%20https%3A%2F%2Fplatform.openai.com%2Faccount%2Fbilling%2Foverview&envLink=https%3A%2F%2Fplatform.openai.com%2Faccount%2Fapi-keys&project-name=vercel-ai-chatbot-with-supabase&repository-name=vercel-ai-chatbot-with-supabase&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fvercel-ai-chatbot%2Ftree%2Fmain)

### Set up GitHub OAuth

This demo uses GitHub Oauth. Follow the [GitHub OAuth setup steps](https://supabase.com/docs/guides/auth/social-login/auth-github) on your Supabase project.

### Configure your site url

In the Supabase Dashboard, navigate to [Auth > URL configuration](https://app.supabase.com/project/_/auth/url-configuration) and set your Vercel URL as the site URL.

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

Copy the `.env.example` file and populate the required env vars:

```bash
cp .env.example .env
```

[Install the Supabase CLI](https://supabase.com/docs/guides/cli) and start the local Supabase stack:

```bash
npm install supabase --save-dev
npx supabase start
```

Install the local dependencies and start dev mode:

```bash
pnpm install
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

## Web3Auth Overview
1. Every time the user needs to login, he'll have to sign a tx.
1. To sign this tx, the client requests the server /api/web3auth/nonce for a new nonce
1. A user is created if needed, has the nonce generated, and returns to the client
1. The client/wallet now must sign the nonce => then send to server to login
/api/web3auth/login then verifies the msg is signed by the wallet and starts the auth process
1. Supabase auth.users row is created by the backend, and configured to have the address in the metadata
1. For the server to read and find the auth.users via the address inside metadata (previous step), it creates an auth_users view inside supabase public schema
public.users.id is then linked to the auth.users account via id, this enables us to complete the supabase/auth

## Setup Supabase Tables
There are various steps you have to do right now to bootstrap your supabase project.
I have tried to list all of them below, please push a PR if you find a problem.

At the end of this you will end up with:
- A public.users table with 2x RLS policies. All user-related data lives here.
- A public.auth_users view with strict role-access at the pg-db level.
- 4x Supabase .env params: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_SERVICE_KEY, NEXT_PUBLIC_SUPABASE_JWT_SECRET
- 2x web3auth .env params: NEXT_PUBLIC_WEB3AUTH_MESSAGE, NEXT_PUBLIC_APP_DOMAN

### Security Warning

**[Never use a service key on the client](https://supabase.com/docs/guides/auth/row-level-security#never-use-a-service-key-on-the-client)**
**Do not expose getServiceSupabase() or NEXT_PUBLIC_SUPABASE_SERVICE_KEY**
These items are key to implement web3auth on Supabase.
Please review [Web3Auth Overview](#web3auth-overview) for the intuition.

## SQL Editor - Bootstrap the db
// 1. Create tables & views
// 1. Create RLS policies
```
TODO - FIX THIS, IT's WRONG
<!-- -- Create user table used by web3auth
create table
  public.users (
    id // string, links to auth.users,
    created_at timestamp with time zone null default now(),
    auth json null,
    address character varying null, // primary key, has to be initialized with it
    constraint users_pkey primary key (address) // adjusted manually, fix query
  ) tablespace pg_default; -->

-- Create view of auth.users and set strict access.
create view public.auth_users as select * from auth.users;
revoke all on public.auth_users from anon, authenticated;

-- TODO - See what can be removed
-- service-role policy
CREATE POLICY service_role_access ON public.users
AS PERMISSIVE FOR ALL
TO service_role
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- github auth policy
CREATE POLICY authenticated_users_can_write ON public.users
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- web3 auth policy
-- **Please replace 'request.jwt.claims'
CREATE POLICY web3_auth ON public.users
AS PERMISSIVE FOR UPDATE
TO authenticated
USING ((current_setting('request.jwt.claims', true))::json ->> 'address' = address)
WITH CHECK ((current_setting('request.jwt.claims', true))::json ->> 'address' = address);
```

## Authors

This library is created by [Vercel](https://vercel.com) and [Next.js](https://nextjs.org) team members, with contributions from:

- Jared Palmer ([@jaredpalmer](https://twitter.com/jaredpalmer)) - [Vercel](https://vercel.com)
- Shu Ding ([@shuding\_](https://twitter.com/shuding_)) - [Vercel](https://vercel.com)
- shadcn ([@shadcn](https://twitter.com/shadcn)) - [Contractor](https://shadcn.com)
- Thor Schaeff ([@thorwebdev](https://twitter.com/thorwebdev)) - [Supabaseifier](https://thor.bio)

## Ocean Protocol

This scaffolding is extended by Ocean Protocol ([@oceanprotocol](https://twitter.com/oceanprotocol)) to provide web3auth, token-gated access, and a base stack to build AI dApps.
