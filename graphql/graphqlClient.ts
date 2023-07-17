import { GraphQLClient } from 'graphql-request'
import { getSdk } from './sdk'

export const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_SUBGRAPH_URL || ''
)

export const subgraphSDK = getSdk(graphqlClient)
