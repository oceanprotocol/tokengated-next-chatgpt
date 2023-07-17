<a href="https://chat.vercel.ai/">
  <img alt="Next.js 13 and app template Router-ready AI chatbot." src="https://chat.vercel.ai/opengraph-image.png" />
  <h1 align="center">Ocean Protocol Tokengated AI Chatbot</h1>
</a>

<p align="center">
  A Web3 powered, Ocean Protocol tokengated, open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, Postgres DB, and Supabase.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#web3-powered"><strong>Web3 Powered</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#security-warning"><strong>Security Warning</strong></a> ·  
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- Obtain App access by purchasing a DataNFT from [Ocean Protocol](https://oceanprotocol.com/).
- Sign a Web3 transaction to identify yourself and login via a custom [Supabase Web3Auth](#supabase-web3auth).
- Prompt OpenAI (default), Anthropic, Hugging Face, or custom AI chat models and/or LangChain
- Chat History with [Supabase Postgres DB](https://supabase.com)
- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- [Rainbowkit](https://www.rainbowkit.com/) and [Wagmi](https://wagmi.sh/) as wallet providers and React hooks
- [Ethers.js](https://docs.ethers.org/v5/) and [Infura](https://app.infura.io/) for the low-level work

#### Changelog
- Next edge-runtime disabled
- Github Auth deprecated

## Web3 Powered

With a few clicks, you can deploy a Web3 enabled, tokengated, AI dApp that uses Ocean Protocol's DataNFT to prove ownership and access of the application.

What does this do?
1. Provides users with access by purchasing a DataNFT from the [Ocean Marketplace](https://market.oceanprotocol.com/).
2. Allows users to login and authorize with an off-chain Web3 signature.

## Model Providers

This template ships with OpenAI `gpt-3.5-turbo` as the default. However, thanks to the [Vercel AI SDK](https://sdk.vercel.ai/docs), you can switch LLM providers to [Anthropic](https://anthropic.com), [Hugging Face](https://huggingface.co), or using [LangChain](https://js.langchain.com) with just a few lines of code.

## Security Warning

For the Web3 implementation to work, we need to implement Supabase's service_key in the app. You can learn more about this by reading the [Supabase Web3Auth](#supabase-web3auth) for more intuition.

If you are not careful with this as a developer you can easily expose your Supabase's admin role to the user. Please be careful to not expose getServiceSupabase() or NEXT_PUBLIC_SUPABASE_SERVICE_KEY.

What does this mean? 

**[Never use a service key on the client](https://supabase.com/docs/guides/auth/row-level-security#never-use-a-service-key-on-the-client)**

## Deploy Your Own

Deploying this app with a 1-click results in you having to take more steps. Instead, we provided all of them here for you.
1. Create a new OpenAI API key
2. Deploy a new DB in Supabase
3. Get an [infura](https://www.infura.io/) API key
3. Go to Vercel to deploy a fork of this repo
4. Setup your env_vars: supabase, github, openai
5. After Vercel is deployed, uUpdate your Supabase Site URL

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

## Supabase Web3Auth
In order to have the user login to our app and only see his own data, we need to manage Authentication, and make sure the user can only access their own rows.

To establish this in Supabase, we needed something custom because of how we sign in the user via a Web3 wallet transaction. Supabase custom auth does not provide you with a session, instead it is up to us to validate the JWT and the user.

## Authors

This scaffolding is an extension of the fantastic [Vercel AI-Chatbot](https://github.com/supabase-community/vercel-ai-chatbot) project.

Ocean Protocol ([@oceanprotocol](https://twitter.com/oceanprotocol)) has provided the work to build a custom Web3 Auth on top of Supabase, token-gated access with a DataNFT, and to provide a Web3 scaffolding to create AI dApps.

Special thanks to [@kdetry](https://github.com/kdetry) and [@idiom-bytes](https://github.com/idiom-bytes) for assembling this.

No sealife was harmed in the making of this repository.