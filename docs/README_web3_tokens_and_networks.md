# Expanding Web3 Support

Below is a breakdown on some concepts as they relate to web3 integration.

Think this is a lot of work? Please see [Readme - Project Improvements](README_improvements.md#improve-this-project) on how you can help, and make it easier to support more chains.

## Sign to Login

You do not need to be on a specific chain to sign your offchain transaction and login. The server simplify verifies that your address is who you say you are.

To verify the Ocean Protocol DataNFT access, the server needs the right configuration so it can verify token + purchase on the right chain.

## Adding new Networks

Adding new Networks enables you to implement direct-to-contract functionality such as manipulating DataNFTs. 

If your goal is to do a lot of DataNFT oriented work with ocean, then we recommend looking into [ocean.js](https://github.com/oceanprotocol/ocean.js) which could be integrated directly into this project.

To add a new network to the app via Rainbokit & Wagmi:
1. Go to `/components/providers.tsx` and add more chain providers through wagmi. Wagmi provides a lot of interfaces to different RPC/chains, and you can easily add more EVM based chains. Simply search for network RPCs and how to add a new network, and how to configure it in wagmi.

Below is an example of the current implementation
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

## Tokengating app on new networks

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

## Tokengating with different currencies

If you want to tokengate your app with a DataNFT that is offered in a different ERC20 currency other than OCEAN, you totally can!

However, to do this we're going to have to run some python code through ocean.py to configure out token beyond what market.oceanprotocol.com can do. To illustrate how to publish and purchase with H2O, the data-backed stablecoin, we're going to do the following.

This script [follows this ocean.py tutorial](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/main-flow.md) which is our recommended approach for publishing your Datatoken in a custom fashion but with relative ease.

In this DX scenario, you would be continuing from the final part of the tutorials linked above with alice in this case, having access to some Ethereum. You would not need any H2O tokens to publish the token, just to purchase it.

This is a pseudo implementation that has not been tested.
```
from ocean_lib.ocean.util import to_wei

from brownie import Contract
from brownie.network.contract import InterfaceContainer

# H2O is correct, ABI is exemplified for brevity
H2O_address = "0x0642026e7f0b6ccac5925b4e7fa61384250e1701"
H2O_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"}...yadda... yadda]

# Load the ERC20 token contract
H2O_contract = Contract.from_abi(
  "H2O",  # This is just a name and can be anything you want
  H2O_address,  # This is the address where the contract is deployed
  InterfaceContainer(H2O_ABI)  # This is the contract's ABI
)

# Alice posts for sale, bob buys
# 1. Alice creates exchange
price = to_wei(100)
exchange = datatoken.create_exchange({"from": alice}, price, H2O_address)

# 2. Alice makes 100 datatokens available on the exchange
datatoken.mint(alice, to_wei(100), {"from": alice})
datatoken.approve(exchange.address, to_wei(100), {"from": alice})

# 3. Bob lets exchange pull the H2O needed
H2O_needed = exchange.BT_needed(to_wei(1), consume_market_fee=0)
H2O_contract.approve(exchange.address, H2O_needed, {"from":bob})

# 4 Bob buys datatoken
exchange.buy_DT(to_wei(1), consume_market_fee=0, tx_dict={"from": bob})

print(datatoken.address) # you need the datatoken address (0x address)
print(exchange.details) # you need the exchange details (url)
```

## Deploy Build 

Finally, after configuring the app to be on the network of your choice, make sure the project is rebuilt in the correct environment.

### Update Local

After updating everything, just enter your terminal, and run `yarn generate && yarn build` from your terminal/root project folder.

### Update Vercel

If you are using Vercel, then simply update your `NEXT_PUBLIC_SUBGRAPH_URL` Vercel->Project->Settings->Environment Variable

Vercel should recompoile your GraphQL SDK.js if you configure your Vercel->Project->Settings->General, Build Command to be: `yarn generate && yarn build`.

