# Supabase Web3Auth

In order to have the user login to our app and only see his own data, we need to manage Authentication, and make sure the user can only access their own rows.  

To establish this in Supabase, we needed something custom because of how we sign in the user via a Web3 wallet transaction. Supabase custom auth does not provide you with a session, instead it is up to us to validate the JWT and the user.  

## Nonce and Login

The logic for `/api/nonce` and `api/login` looks a bit like this:
1. Every time the user needs to login, he'll have to sign a tx.
1. To sign this tx, the client requests the server /api/web3auth/nonce for a new nonce
1. A user is created if needed, has the nonce generated, and returns to the client
1. The client/wallet now must sign the nonce => then send to server to login
/api/web3auth/login then verifies the msg is signed by the wallet and starts the auth process
1. Supabase auth.users row is created by the backend, and configured to have the address in the metadata
1. For the server to read and find the auth.users via the address inside metadata (previous step), it creates an auth_users view inside supabase public schema. public.users.id is then linked to auth.users.id, enabling us to complete the auth process.  

Now, only the user's rows from the database will be available to them.

# Supabase RLS and JWT

To make sure Row Level-Security (RLS) work with the JWT, we need to create a special security policy in Supabase's DB. The following blog post from [Grace Wang](https://medium.com/@gracew/using-supabase-rls-with-a-custom-auth-provider-b31564172d5d) and further discussions inside Supabase's github repo, provided insights for this configuration.

<img alt="JWT RLS" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KXa6CqDNG8XI-IaiNqwmvg.png" />

If your app is up and running, you have already completed this setup by running the following command in your SQL editor.
```
-- web3 auth policy
CREATE POLICY web3_auth ON public.users
AS PERMISSIVE FOR UPDATE
TO authenticated
USING ((current_setting('request.jwt.claims', true))::json ->> 'address' = address)
WITH CHECK ((current_setting('request.jwt.claims', true))::json ->> 'address' = address);
```

By creating this policy, we make sure that the `public.user` table and related security we want to implement, are configured to verify against the `jwt.address` parameter.  

**Important TLDR:**
1. If you want to secure a table for a user, such that only their rows are visible, then... You should have a `varchar address` column so the user rows can be identifed by the policy.
2. You will also need to link the `table.user.id` column, to the `auth.user.id` column so when using supabase to `supabase = createClient()` to retrieve an authorized user, the `supabase.auth.getUser().id` will work with the table you're trying to query. Such that when using `supabase.from('table').select('column').eq('id', authUser.id).single()`, you will only find rows where the user matches the `auth.user.id`.