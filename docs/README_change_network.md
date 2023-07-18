# Expanding Web3 Support

Below is a breakdown on some concepts as they relate to web3 integration.

## Adding new Networks

1. Go to `/components/providers.tsx` and you can add more chain providers through wagmi. Wagmi provides a lot of interfaces to different chains, and you can add more EVM based chains. Simply search for their network details and configure it here.

**You do not need** to be on a specific chain to sign your offchain transaction and login. What the server will need, is to have the right token configuration so we can verify the purchase on the right chain.

```
import {
  mainnet,
  polygon,
  goerli,
} from 'wagmi/chains';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);
```

To satisfy DRY: follow the steps below.

## Tokengating on new networks

Now we're going to make sure the backend will validate the token purchase & access to the app.

Follow these steps
1. Decide on the network you're going to want to use. If you choose Ethereum Mainnet, aka `mainnet`, you should use it for the remainder of this tutorial.
1. Change the `NEXT_PUBLIC_SUBGRAPH_URL` inside of your .env file to one of our other subgraphs (below)
1. Update `codegen.yml` with the same subgraph url that you used in the previous step.
1. Finally, update your local or vercel environment (**next section**).

Subgraph Endpoints
```
Ethereum Mainnet - https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph
Polygon - https://v4.subgraph.polygon.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph
Goerli - https://v4.subgraph.goerli.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph
Mumbai - https://v4.subgraph.mumbai.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph
```

### Update Local

Just enter your terminal, and run `yarn generate && yarn build` from your terminal/root project folder.

### Update Vercel

If you are using Vercel, then simply update your `NEXT_PUBLIC_SUBGRAPH_URL` Vercel->Project->Settings->Environment Variable

Vercel should recompoile your GraphQL SDK.js if you configure your Vercel->Project->Settings->General, Build Command to be: `yarn generate && yarn build`.

