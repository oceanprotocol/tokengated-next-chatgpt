import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type DfAvailableClaim = {
  __typename?: 'DFAvailableClaim';
  amount: Scalars['BigDecimal']['output'];
  /** id = {userId}-{tokenId} */
  id: Scalars['ID']['output'];
  receiver: DfReward;
  token: Token;
};

export type DfAvailableClaim_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<DfReward_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DfAvailableClaim_OrderBy {
  Amount = 'amount',
  Id = 'id',
  Receiver = 'receiver',
  Token = 'token'
}

export type DfHistory = {
  __typename?: 'DFHistory';
  amount: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  /** id = {user-id}-{txId}-{eventId} */
  id: Scalars['ID']['output'];
  receiver: DfReward;
  timestamp: Scalars['BigInt']['output'];
  token: Token;
  tx: Scalars['String']['output'];
  type: DfHistoryType;
};

export enum DfHistoryType {
  Allocated = 'Allocated',
  Claimed = 'Claimed'
}

export type DfHistory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<DfReward_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<DfHistoryType>;
  type_in?: InputMaybe<Array<DfHistoryType>>;
  type_not?: InputMaybe<DfHistoryType>;
  type_not_in?: InputMaybe<Array<DfHistoryType>>;
};

export enum DfHistory_OrderBy {
  Amount = 'amount',
  Block = 'block',
  EventIndex = 'eventIndex',
  Id = 'id',
  Receiver = 'receiver',
  Timestamp = 'timestamp',
  Token = 'token',
  Tx = 'tx',
  Type = 'type'
}

export type DfReward = {
  __typename?: 'DFReward';
  availableClaims?: Maybe<Array<DfAvailableClaim>>;
  history?: Maybe<Array<DfHistory>>;
  /** id = {user address} */
  id: Scalars['ID']['output'];
  receiver: User;
};


export type DfRewardAvailableClaimsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DfAvailableClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DfAvailableClaim_Filter>;
};


export type DfRewardHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DfHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DfHistory_Filter>;
};

export type DfReward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  availableClaims_?: InputMaybe<DfAvailableClaim_Filter>;
  history_?: InputMaybe<DfHistory_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<User_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DfReward_OrderBy {
  AvailableClaims = 'availableClaims',
  History = 'history',
  Id = 'id',
  Receiver = 'receiver'
}

export type Dispenser = {
  __typename?: 'Dispenser';
  active: Scalars['Boolean']['output'];
  allowedSwapper?: Maybe<Scalars['String']['output']>;
  /** how many tokens are left */
  balance: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  contract: Scalars['String']['output'];
  createdTimestamp: Scalars['Int']['output'];
  dispenses?: Maybe<Array<DispenserTransaction>>;
  eventIndex: Scalars['Int']['output'];
  /** token address */
  id: Scalars['ID']['output'];
  isMinter?: Maybe<Scalars['Boolean']['output']>;
  /** max balance of requester. If the balance is higher, the dispense is rejected */
  maxBalance: Scalars['BigDecimal']['output'];
  /** max tokens that can be dispensed */
  maxTokens: Scalars['BigDecimal']['output'];
  /** if using the enterprise template the owner will always be the erc721 factory, for normal template it will a user */
  owner?: Maybe<Scalars['String']['output']>;
  token: Token;
  tx: Scalars['String']['output'];
};


export type DispenserDispensesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DispenserTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DispenserTransaction_Filter>;
};

export type DispenserTransaction = {
  __typename?: 'DispenserTransaction';
  amount: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  createdTimestamp: Scalars['Int']['output'];
  dispenser: Dispenser;
  eventIndex: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  tx: Scalars['String']['output'];
  user: User;
};

export type DispenserTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dispenser?: InputMaybe<Scalars['String']['input']>;
  dispenser_?: InputMaybe<Dispenser_Filter>;
  dispenser_contains?: InputMaybe<Scalars['String']['input']>;
  dispenser_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dispenser_ends_with?: InputMaybe<Scalars['String']['input']>;
  dispenser_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dispenser_gt?: InputMaybe<Scalars['String']['input']>;
  dispenser_gte?: InputMaybe<Scalars['String']['input']>;
  dispenser_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dispenser_lt?: InputMaybe<Scalars['String']['input']>;
  dispenser_lte?: InputMaybe<Scalars['String']['input']>;
  dispenser_not?: InputMaybe<Scalars['String']['input']>;
  dispenser_not_contains?: InputMaybe<Scalars['String']['input']>;
  dispenser_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  dispenser_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dispenser_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dispenser_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  dispenser_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  dispenser_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  dispenser_starts_with?: InputMaybe<Scalars['String']['input']>;
  dispenser_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum DispenserTransaction_OrderBy {
  Amount = 'amount',
  Block = 'block',
  CreatedTimestamp = 'createdTimestamp',
  Dispenser = 'dispenser',
  EventIndex = 'eventIndex',
  Id = 'id',
  Tx = 'tx',
  User = 'user'
}

export type Dispenser_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  allowedSwapper?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_contains?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_gt?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_gte?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowedSwapper_lt?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_lte?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowedSwapper_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dispenses_?: InputMaybe<DispenserTransaction_Filter>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isMinter?: InputMaybe<Scalars['Boolean']['input']>;
  isMinter_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isMinter_not?: InputMaybe<Scalars['Boolean']['input']>;
  isMinter_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  maxBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  maxBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  maxTokens?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTokens_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTokens_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTokens_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  maxTokens_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTokens_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTokens_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  maxTokens_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Dispenser_OrderBy {
  Active = 'active',
  AllowedSwapper = 'allowedSwapper',
  Balance = 'balance',
  Block = 'block',
  Contract = 'contract',
  CreatedTimestamp = 'createdTimestamp',
  Dispenses = 'dispenses',
  EventIndex = 'eventIndex',
  Id = 'id',
  IsMinter = 'isMinter',
  MaxBalance = 'maxBalance',
  MaxTokens = 'maxTokens',
  Owner = 'owner',
  Token = 'token',
  Tx = 'tx'
}

export type FixedRateExchange = {
  __typename?: 'FixedRateExchange';
  active: Scalars['Boolean']['output'];
  /** address that is allowed to  swap tokens */
  allowedSwapper?: Maybe<Scalars['String']['output']>;
  baseToken: Token;
  baseTokenBalance: Scalars['BigDecimal']['output'];
  /** amount of basetokens available to be collected by the owner */
  baseTokenSupply: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  contract: Scalars['String']['output'];
  createdTimestamp: Scalars['Int']['output'];
  datatoken: Token;
  datatokenBalance: Scalars['BigDecimal']['output'];
  /** amount of datatokens available to be sold, this is relevant if the exchange is not able to mint */
  datatokenSupply: Scalars['BigDecimal']['output'];
  eventIndex: Scalars['Int']['output'];
  exchangeId: Scalars['String']['output'];
  /** fixed rate exchange id */
  id: Scalars['ID']['output'];
  /** if the fre has the minter role on the datatoken */
  isMinter?: Maybe<Scalars['Boolean']['output']>;
  owner: User;
  price: Scalars['BigDecimal']['output'];
  /** address of the market where the datatoken was created. This address collects market fees. */
  publishMarketFeeAddress?: Maybe<Scalars['String']['output']>;
  /** fee amount. Fixed value */
  publishMarketSwapFee?: Maybe<Scalars['BigDecimal']['output']>;
  swaps?: Maybe<Array<FixedRateExchangeSwap>>;
  /** amount of total basetokens spent */
  totalSwapValue: Scalars['BigDecimal']['output'];
  tx: Scalars['String']['output'];
  updates?: Maybe<Array<FixedRateExchangeUpdate>>;
  /** if the owner allowes the fre to mint */
  withMint?: Maybe<Scalars['Boolean']['output']>;
};


export type FixedRateExchangeSwapsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchangeSwap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixedRateExchangeSwap_Filter>;
};


export type FixedRateExchangeUpdatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchangeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixedRateExchangeUpdate_Filter>;
};

export type FixedRateExchangeSwap = {
  __typename?: 'FixedRateExchangeSwap';
  baseTokenAmount: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  by: User;
  consumeMarketFeeAmount: Scalars['BigDecimal']['output'];
  createdTimestamp: Scalars['Int']['output'];
  dataTokenAmount: Scalars['BigDecimal']['output'];
  eventIndex: Scalars['Int']['output'];
  exchangeId: FixedRateExchange;
  id: Scalars['ID']['output'];
  marketFeeAmount: Scalars['BigDecimal']['output'];
  oceanFeeAmount: Scalars['BigDecimal']['output'];
  tx: Scalars['String']['output'];
};

export type FixedRateExchangeSwap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  baseTokenAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  baseTokenAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  by?: InputMaybe<Scalars['String']['input']>;
  by_?: InputMaybe<User_Filter>;
  by_contains?: InputMaybe<Scalars['String']['input']>;
  by_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  by_ends_with?: InputMaybe<Scalars['String']['input']>;
  by_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  by_gt?: InputMaybe<Scalars['String']['input']>;
  by_gte?: InputMaybe<Scalars['String']['input']>;
  by_in?: InputMaybe<Array<Scalars['String']['input']>>;
  by_lt?: InputMaybe<Scalars['String']['input']>;
  by_lte?: InputMaybe<Scalars['String']['input']>;
  by_not?: InputMaybe<Scalars['String']['input']>;
  by_not_contains?: InputMaybe<Scalars['String']['input']>;
  by_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  by_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  by_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  by_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  by_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  by_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  by_starts_with?: InputMaybe<Scalars['String']['input']>;
  by_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumeMarketFeeAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumeMarketFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumeMarketFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumeMarketFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  consumeMarketFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumeMarketFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumeMarketFeeAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumeMarketFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dataTokenAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  dataTokenAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dataTokenAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dataTokenAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dataTokenAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dataTokenAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dataTokenAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dataTokenAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  exchangeId?: InputMaybe<Scalars['String']['input']>;
  exchangeId_?: InputMaybe<FixedRateExchange_Filter>;
  exchangeId_contains?: InputMaybe<Scalars['String']['input']>;
  exchangeId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_ends_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_gt?: InputMaybe<Scalars['String']['input']>;
  exchangeId_gte?: InputMaybe<Scalars['String']['input']>;
  exchangeId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  exchangeId_lt?: InputMaybe<Scalars['String']['input']>;
  exchangeId_lte?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_contains?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  exchangeId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_starts_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  marketFeeAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  marketFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketFeeAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oceanFeeAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  oceanFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oceanFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oceanFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oceanFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oceanFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oceanFeeAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  oceanFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum FixedRateExchangeSwap_OrderBy {
  BaseTokenAmount = 'baseTokenAmount',
  Block = 'block',
  By = 'by',
  ConsumeMarketFeeAmount = 'consumeMarketFeeAmount',
  CreatedTimestamp = 'createdTimestamp',
  DataTokenAmount = 'dataTokenAmount',
  EventIndex = 'eventIndex',
  ExchangeId = 'exchangeId',
  Id = 'id',
  MarketFeeAmount = 'marketFeeAmount',
  OceanFeeAmount = 'oceanFeeAmount',
  Tx = 'tx'
}

export type FixedRateExchangeUpdate = {
  __typename?: 'FixedRateExchangeUpdate';
  block: Scalars['Int']['output'];
  createdTimestamp: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  exchangeId: FixedRateExchange;
  id: Scalars['ID']['output'];
  newActive?: Maybe<Scalars['Boolean']['output']>;
  newAllowedSwapper?: Maybe<Scalars['String']['output']>;
  newPrice?: Maybe<Scalars['BigDecimal']['output']>;
  oldActive?: Maybe<Scalars['Boolean']['output']>;
  oldAllowedSwapper?: Maybe<Scalars['String']['output']>;
  oldPrice?: Maybe<Scalars['BigDecimal']['output']>;
  tx: Scalars['String']['output'];
};

export type FixedRateExchangeUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  exchangeId?: InputMaybe<Scalars['String']['input']>;
  exchangeId_?: InputMaybe<FixedRateExchange_Filter>;
  exchangeId_contains?: InputMaybe<Scalars['String']['input']>;
  exchangeId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_ends_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_gt?: InputMaybe<Scalars['String']['input']>;
  exchangeId_gte?: InputMaybe<Scalars['String']['input']>;
  exchangeId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  exchangeId_lt?: InputMaybe<Scalars['String']['input']>;
  exchangeId_lte?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_contains?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  exchangeId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_starts_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newActive?: InputMaybe<Scalars['Boolean']['input']>;
  newActive_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  newActive_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newAllowedSwapper?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_contains?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_gt?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_gte?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAllowedSwapper_lt?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_lte?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_not?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_not_contains?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newAllowedSwapper_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_starts_with?: InputMaybe<Scalars['String']['input']>;
  newAllowedSwapper_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  newPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  newPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  newPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  newPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  newPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  newPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  newPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oldActive?: InputMaybe<Scalars['Boolean']['input']>;
  oldActive_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  oldActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  oldActive_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  oldAllowedSwapper?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_contains?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_gt?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_gte?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldAllowedSwapper_lt?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_lte?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_not?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_not_contains?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldAllowedSwapper_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldAllowedSwapper_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oldPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum FixedRateExchangeUpdate_OrderBy {
  Block = 'block',
  CreatedTimestamp = 'createdTimestamp',
  EventIndex = 'eventIndex',
  ExchangeId = 'exchangeId',
  Id = 'id',
  NewActive = 'newActive',
  NewAllowedSwapper = 'newAllowedSwapper',
  NewPrice = 'newPrice',
  OldActive = 'oldActive',
  OldAllowedSwapper = 'oldAllowedSwapper',
  OldPrice = 'oldPrice',
  Tx = 'tx'
}

export type FixedRateExchange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  allowedSwapper?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_contains?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_gt?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_gte?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowedSwapper_lt?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_lte?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_contains?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allowedSwapper_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_starts_with?: InputMaybe<Scalars['String']['input']>;
  allowedSwapper_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseToken?: InputMaybe<Scalars['String']['input']>;
  baseTokenBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  baseTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  baseTokenSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  baseTokenSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  baseTokenSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  baseToken_?: InputMaybe<Token_Filter>;
  baseToken_contains?: InputMaybe<Scalars['String']['input']>;
  baseToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baseToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseToken_gt?: InputMaybe<Scalars['String']['input']>;
  baseToken_gte?: InputMaybe<Scalars['String']['input']>;
  baseToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baseToken_lt?: InputMaybe<Scalars['String']['input']>;
  baseToken_lte?: InputMaybe<Scalars['String']['input']>;
  baseToken_not?: InputMaybe<Scalars['String']['input']>;
  baseToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  baseToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  baseToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  baseToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  baseToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  datatoken?: InputMaybe<Scalars['String']['input']>;
  datatokenBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  datatokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  datatokenSupply?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  datatokenSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenSupply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  datatokenSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  datatoken_?: InputMaybe<Token_Filter>;
  datatoken_contains?: InputMaybe<Scalars['String']['input']>;
  datatoken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_ends_with?: InputMaybe<Scalars['String']['input']>;
  datatoken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_gt?: InputMaybe<Scalars['String']['input']>;
  datatoken_gte?: InputMaybe<Scalars['String']['input']>;
  datatoken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  datatoken_lt?: InputMaybe<Scalars['String']['input']>;
  datatoken_lte?: InputMaybe<Scalars['String']['input']>;
  datatoken_not?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_contains?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  datatoken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_starts_with?: InputMaybe<Scalars['String']['input']>;
  datatoken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  exchangeId?: InputMaybe<Scalars['String']['input']>;
  exchangeId_contains?: InputMaybe<Scalars['String']['input']>;
  exchangeId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_ends_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_gt?: InputMaybe<Scalars['String']['input']>;
  exchangeId_gte?: InputMaybe<Scalars['String']['input']>;
  exchangeId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  exchangeId_lt?: InputMaybe<Scalars['String']['input']>;
  exchangeId_lte?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_contains?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  exchangeId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  exchangeId_starts_with?: InputMaybe<Scalars['String']['input']>;
  exchangeId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isMinter?: InputMaybe<Scalars['Boolean']['input']>;
  isMinter_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isMinter_not?: InputMaybe<Scalars['Boolean']['input']>;
  isMinter_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  publishMarketFeeAddress?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_contains?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_gt?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_gte?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishMarketFeeAddress_lt?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_lte?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishMarketFeeAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  publishMarketSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swaps_?: InputMaybe<FixedRateExchangeSwap_Filter>;
  totalSwapValue?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapValue_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updates_?: InputMaybe<FixedRateExchangeUpdate_Filter>;
  withMint?: InputMaybe<Scalars['Boolean']['input']>;
  withMint_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  withMint_not?: InputMaybe<Scalars['Boolean']['input']>;
  withMint_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export enum FixedRateExchange_OrderBy {
  Active = 'active',
  AllowedSwapper = 'allowedSwapper',
  BaseToken = 'baseToken',
  BaseTokenBalance = 'baseTokenBalance',
  BaseTokenSupply = 'baseTokenSupply',
  Block = 'block',
  Contract = 'contract',
  CreatedTimestamp = 'createdTimestamp',
  Datatoken = 'datatoken',
  DatatokenBalance = 'datatokenBalance',
  DatatokenSupply = 'datatokenSupply',
  EventIndex = 'eventIndex',
  ExchangeId = 'exchangeId',
  Id = 'id',
  IsMinter = 'isMinter',
  Owner = 'owner',
  Price = 'price',
  PublishMarketFeeAddress = 'publishMarketFeeAddress',
  PublishMarketSwapFee = 'publishMarketSwapFee',
  Swaps = 'swaps',
  TotalSwapValue = 'totalSwapValue',
  Tx = 'tx',
  Updates = 'updates',
  WithMint = 'withMint'
}

export type GlobalStatistic = {
  __typename?: 'GlobalStatistic';
  /** total datatokens (tokens with isDatatoken = true) created */
  datatokenCount: Scalars['Int']['output'];
  /** number of dispensers created */
  dispenserCount: Scalars['Int']['output'];
  /** number of fixed rate exchanges */
  fixedCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** total nfts(erc721) created */
  nftCount: Scalars['Int']['output'];
  /** number of total orders. fixed rate exchange orders + dispenser orders */
  orderCount: Scalars['Int']['output'];
  /** total swap volume for each base token in fixed rate exchanges */
  totalFixedSwapVolume?: Maybe<Array<GlobalTotalFixedSwapPair>>;
  /** total ocean locked in veOcean */
  totalOceanLocked: Scalars['BigDecimal']['output'];
  /** current version */
  version?: Maybe<Scalars['String']['output']>;
};


export type GlobalStatisticTotalFixedSwapVolumeArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalTotalFixedSwapPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GlobalTotalFixedSwapPair_Filter>;
};

export type GlobalStatistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  datatokenCount?: InputMaybe<Scalars['Int']['input']>;
  datatokenCount_gt?: InputMaybe<Scalars['Int']['input']>;
  datatokenCount_gte?: InputMaybe<Scalars['Int']['input']>;
  datatokenCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  datatokenCount_lt?: InputMaybe<Scalars['Int']['input']>;
  datatokenCount_lte?: InputMaybe<Scalars['Int']['input']>;
  datatokenCount_not?: InputMaybe<Scalars['Int']['input']>;
  datatokenCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dispenserCount?: InputMaybe<Scalars['Int']['input']>;
  dispenserCount_gt?: InputMaybe<Scalars['Int']['input']>;
  dispenserCount_gte?: InputMaybe<Scalars['Int']['input']>;
  dispenserCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dispenserCount_lt?: InputMaybe<Scalars['Int']['input']>;
  dispenserCount_lte?: InputMaybe<Scalars['Int']['input']>;
  dispenserCount_not?: InputMaybe<Scalars['Int']['input']>;
  dispenserCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fixedCount?: InputMaybe<Scalars['Int']['input']>;
  fixedCount_gt?: InputMaybe<Scalars['Int']['input']>;
  fixedCount_gte?: InputMaybe<Scalars['Int']['input']>;
  fixedCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fixedCount_lt?: InputMaybe<Scalars['Int']['input']>;
  fixedCount_lte?: InputMaybe<Scalars['Int']['input']>;
  fixedCount_not?: InputMaybe<Scalars['Int']['input']>;
  fixedCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nftCount?: InputMaybe<Scalars['Int']['input']>;
  nftCount_gt?: InputMaybe<Scalars['Int']['input']>;
  nftCount_gte?: InputMaybe<Scalars['Int']['input']>;
  nftCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nftCount_lt?: InputMaybe<Scalars['Int']['input']>;
  nftCount_lte?: InputMaybe<Scalars['Int']['input']>;
  nftCount_not?: InputMaybe<Scalars['Int']['input']>;
  nftCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderCount?: InputMaybe<Scalars['Int']['input']>;
  orderCount_gt?: InputMaybe<Scalars['Int']['input']>;
  orderCount_gte?: InputMaybe<Scalars['Int']['input']>;
  orderCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  orderCount_lt?: InputMaybe<Scalars['Int']['input']>;
  orderCount_lte?: InputMaybe<Scalars['Int']['input']>;
  orderCount_not?: InputMaybe<Scalars['Int']['input']>;
  orderCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalFixedSwapVolume_?: InputMaybe<GlobalTotalFixedSwapPair_Filter>;
  totalOceanLocked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalOceanLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_gt?: InputMaybe<Scalars['String']['input']>;
  version_gte?: InputMaybe<Scalars['String']['input']>;
  version_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_lt?: InputMaybe<Scalars['String']['input']>;
  version_lte?: InputMaybe<Scalars['String']['input']>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  version_starts_with?: InputMaybe<Scalars['String']['input']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum GlobalStatistic_OrderBy {
  DatatokenCount = 'datatokenCount',
  DispenserCount = 'dispenserCount',
  FixedCount = 'fixedCount',
  Id = 'id',
  NftCount = 'nftCount',
  OrderCount = 'orderCount',
  TotalFixedSwapVolume = 'totalFixedSwapVolume',
  TotalOceanLocked = 'totalOceanLocked',
  Version = 'version'
}

/** utility type */
export type GlobalTotalFixedSwapPair = {
  __typename?: 'GlobalTotalFixedSwapPair';
  count: Scalars['BigInt']['output'];
  globalStatistic: GlobalStatistic;
  /** address of the token */
  id: Scalars['ID']['output'];
  token: Token;
  value: Scalars['BigDecimal']['output'];
};

export type GlobalTotalFixedSwapPair_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  globalStatistic?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_?: InputMaybe<GlobalStatistic_Filter>;
  globalStatistic_contains?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_ends_with?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_gt?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_gte?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_in?: InputMaybe<Array<Scalars['String']['input']>>;
  globalStatistic_lt?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_lte?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_contains?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  globalStatistic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_starts_with?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum GlobalTotalFixedSwapPair_OrderBy {
  Count = 'count',
  GlobalStatistic = 'globalStatistic',
  Id = 'id',
  Token = 'token',
  Value = 'value'
}

/** utility type */
export type GlobalTotalLiquidityPair = {
  __typename?: 'GlobalTotalLiquidityPair';
  globalStatistic: GlobalStatistic;
  /** address of the token */
  id: Scalars['ID']['output'];
  token: Token;
  value: Scalars['BigDecimal']['output'];
};

export type GlobalTotalLiquidityPair_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  globalStatistic?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_?: InputMaybe<GlobalStatistic_Filter>;
  globalStatistic_contains?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_ends_with?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_gt?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_gte?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_in?: InputMaybe<Array<Scalars['String']['input']>>;
  globalStatistic_lt?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_lte?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_contains?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  globalStatistic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_starts_with?: InputMaybe<Scalars['String']['input']>;
  globalStatistic_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum GlobalTotalLiquidityPair_OrderBy {
  GlobalStatistic = 'globalStatistic',
  Id = 'id',
  Token = 'token',
  Value = 'value'
}

export type Nft = {
  __typename?: 'Nft';
  /** same as id, it's just for easy discoverability */
  address: Scalars['String']['output'];
  /** state of the asset (described in docs) */
  assetState: Scalars['Int']['output'];
  /** block number when it was created */
  block?: Maybe<Scalars['Int']['output']>;
  /** block time nft was created */
  createdTimestamp: Scalars['Int']['output'];
  /** address of the creator of the nft */
  creator: User;
  erc20DeployerRole?: Maybe<Array<Scalars['String']['output']>>;
  eventIndex: Scalars['Int']['output'];
  /** has metadata */
  hasMetadata: Scalars['Boolean']['output'];
  /** nft address */
  id: Scalars['ID']['output'];
  managerRole?: Maybe<Array<Scalars['String']['output']>>;
  /** addresses that can update the metadata */
  metadataRole?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  nftData?: Maybe<Array<NftData>>;
  /** number of orders executed for all underlying datatokens */
  orderCount: Scalars['BigInt']['output'];
  /** address of the owner of the nft */
  owner: User;
  /** provider url that can decrypt the ddo */
  providerUrl?: Maybe<Scalars['String']['output']>;
  storeUpdateRole?: Maybe<Array<Scalars['String']['output']>>;
  symbol: Scalars['String']['output'];
  /** template address */
  template: Scalars['String']['output'];
  tokenUri?: Maybe<Scalars['String']['output']>;
  transferHistory?: Maybe<Array<NftTransferHistory>>;
  /** set if NFT is transferable */
  transferable: Scalars['Boolean']['output'];
  /** nft creation transaction id */
  tx: Scalars['String']['output'];
};


export type NftNftDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NftData_Filter>;
};


export type NftTransferHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftTransferHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NftTransferHistory_Filter>;
};

export type NftData = {
  __typename?: 'NftData';
  /** nft address+key */
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['Bytes']['output']>;
  nft: Nft;
  value?: Maybe<Scalars['Bytes']['output']>;
};

export type NftData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  key?: InputMaybe<Scalars['Bytes']['input']>;
  key_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  key_not?: InputMaybe<Scalars['Bytes']['input']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Bytes']['input']>;
  value_contains?: InputMaybe<Scalars['Bytes']['input']>;
  value_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  value_not?: InputMaybe<Scalars['Bytes']['input']>;
  value_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum NftData_OrderBy {
  Id = 'id',
  Key = 'key',
  Nft = 'nft',
  Value = 'value'
}

export type NftTransferHistory = {
  __typename?: 'NftTransferHistory';
  block: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  newOwner: User;
  nft: Nft;
  oldOwner: User;
  timestamp: Scalars['Int']['output'];
  txId?: Maybe<Scalars['String']['output']>;
};

export type NftTransferHistory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  newOwner?: InputMaybe<Scalars['String']['input']>;
  newOwner_?: InputMaybe<User_Filter>;
  newOwner_contains?: InputMaybe<Scalars['String']['input']>;
  newOwner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  newOwner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwner_gt?: InputMaybe<Scalars['String']['input']>;
  newOwner_gte?: InputMaybe<Scalars['String']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['String']['input']>;
  newOwner_lte?: InputMaybe<Scalars['String']['input']>;
  newOwner_not?: InputMaybe<Scalars['String']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  newOwner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  newOwner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldOwner?: InputMaybe<Scalars['String']['input']>;
  oldOwner_?: InputMaybe<User_Filter>;
  oldOwner_contains?: InputMaybe<Scalars['String']['input']>;
  oldOwner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldOwner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldOwner_gt?: InputMaybe<Scalars['String']['input']>;
  oldOwner_gte?: InputMaybe<Scalars['String']['input']>;
  oldOwner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldOwner_lt?: InputMaybe<Scalars['String']['input']>;
  oldOwner_lte?: InputMaybe<Scalars['String']['input']>;
  oldOwner_not?: InputMaybe<Scalars['String']['input']>;
  oldOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  oldOwner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oldOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oldOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldOwner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oldOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  oldOwner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  txId?: InputMaybe<Scalars['String']['input']>;
  txId_contains?: InputMaybe<Scalars['String']['input']>;
  txId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txId_ends_with?: InputMaybe<Scalars['String']['input']>;
  txId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txId_gt?: InputMaybe<Scalars['String']['input']>;
  txId_gte?: InputMaybe<Scalars['String']['input']>;
  txId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txId_lt?: InputMaybe<Scalars['String']['input']>;
  txId_lte?: InputMaybe<Scalars['String']['input']>;
  txId_not?: InputMaybe<Scalars['String']['input']>;
  txId_not_contains?: InputMaybe<Scalars['String']['input']>;
  txId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txId_starts_with?: InputMaybe<Scalars['String']['input']>;
  txId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum NftTransferHistory_OrderBy {
  Block = 'block',
  EventIndex = 'eventIndex',
  Id = 'id',
  NewOwner = 'newOwner',
  Nft = 'nft',
  OldOwner = 'oldOwner',
  Timestamp = 'timestamp',
  TxId = 'txId'
}

export type NftUpdate = {
  __typename?: 'NftUpdate';
  /** state of the asset in this update */
  assetState: Scalars['Int']['output'];
  block: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  nft: Nft;
  /** provider url that can decrypt the ddo */
  providerUrl?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['Int']['output'];
  tokenUri?: Maybe<Scalars['String']['output']>;
  tx: Scalars['String']['output'];
  /** type of the update: metadata created, metadata update, state update, token uri update */
  type: NftUpdateType;
  /** user that made the update */
  userAddress: Scalars['String']['output'];
};

export enum NftUpdateType {
  MetadataCreated = 'METADATA_CREATED',
  MetadataUpdated = 'METADATA_UPDATED',
  StateUpdated = 'STATE_UPDATED',
  TokenuriUpdated = 'TOKENURI_UPDATED'
}

export type NftUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  assetState?: InputMaybe<Scalars['Int']['input']>;
  assetState_gt?: InputMaybe<Scalars['Int']['input']>;
  assetState_gte?: InputMaybe<Scalars['Int']['input']>;
  assetState_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  assetState_lt?: InputMaybe<Scalars['Int']['input']>;
  assetState_lte?: InputMaybe<Scalars['Int']['input']>;
  assetState_not?: InputMaybe<Scalars['Int']['input']>;
  assetState_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl?: InputMaybe<Scalars['String']['input']>;
  providerUrl_contains?: InputMaybe<Scalars['String']['input']>;
  providerUrl_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  providerUrl_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_gt?: InputMaybe<Scalars['String']['input']>;
  providerUrl_gte?: InputMaybe<Scalars['String']['input']>;
  providerUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  providerUrl_lt?: InputMaybe<Scalars['String']['input']>;
  providerUrl_lte?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  providerUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  providerUrl_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenUri?: InputMaybe<Scalars['String']['input']>;
  tokenUri_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_gt?: InputMaybe<Scalars['String']['input']>;
  tokenUri_gte?: InputMaybe<Scalars['String']['input']>;
  tokenUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenUri_lt?: InputMaybe<Scalars['String']['input']>;
  tokenUri_lte?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NftUpdateType>;
  type_in?: InputMaybe<Array<NftUpdateType>>;
  type_not?: InputMaybe<NftUpdateType>;
  type_not_in?: InputMaybe<Array<NftUpdateType>>;
  userAddress?: InputMaybe<Scalars['String']['input']>;
  userAddress_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_gt?: InputMaybe<Scalars['String']['input']>;
  userAddress_gte?: InputMaybe<Scalars['String']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_lt?: InputMaybe<Scalars['String']['input']>;
  userAddress_lte?: InputMaybe<Scalars['String']['input']>;
  userAddress_not?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum NftUpdate_OrderBy {
  AssetState = 'assetState',
  Block = 'block',
  EventIndex = 'eventIndex',
  Id = 'id',
  Nft = 'nft',
  ProviderUrl = 'providerUrl',
  Timestamp = 'timestamp',
  TokenUri = 'tokenUri',
  Tx = 'tx',
  Type = 'type',
  UserAddress = 'userAddress'
}

export type Nft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  assetState?: InputMaybe<Scalars['Int']['input']>;
  assetState_gt?: InputMaybe<Scalars['Int']['input']>;
  assetState_gte?: InputMaybe<Scalars['Int']['input']>;
  assetState_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  assetState_lt?: InputMaybe<Scalars['Int']['input']>;
  assetState_lte?: InputMaybe<Scalars['Int']['input']>;
  assetState_not?: InputMaybe<Scalars['Int']['input']>;
  assetState_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  erc20DeployerRole?: InputMaybe<Array<Scalars['String']['input']>>;
  erc20DeployerRole_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  erc20DeployerRole_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  erc20DeployerRole_not?: InputMaybe<Array<Scalars['String']['input']>>;
  erc20DeployerRole_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  erc20DeployerRole_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hasMetadata?: InputMaybe<Scalars['Boolean']['input']>;
  hasMetadata_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  hasMetadata_not?: InputMaybe<Scalars['Boolean']['input']>;
  hasMetadata_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  managerRole?: InputMaybe<Array<Scalars['String']['input']>>;
  managerRole_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  managerRole_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  managerRole_not?: InputMaybe<Array<Scalars['String']['input']>>;
  managerRole_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  managerRole_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataRole?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataRole_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataRole_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataRole_not?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataRole_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  metadataRole_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftData_?: InputMaybe<NftData_Filter>;
  orderCount?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  orderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl?: InputMaybe<Scalars['String']['input']>;
  providerUrl_contains?: InputMaybe<Scalars['String']['input']>;
  providerUrl_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  providerUrl_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_gt?: InputMaybe<Scalars['String']['input']>;
  providerUrl_gte?: InputMaybe<Scalars['String']['input']>;
  providerUrl_in?: InputMaybe<Array<Scalars['String']['input']>>;
  providerUrl_lt?: InputMaybe<Scalars['String']['input']>;
  providerUrl_lte?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  providerUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  providerUrl_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  providerUrl_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  storeUpdateRole?: InputMaybe<Array<Scalars['String']['input']>>;
  storeUpdateRole_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  storeUpdateRole_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  storeUpdateRole_not?: InputMaybe<Array<Scalars['String']['input']>>;
  storeUpdateRole_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  storeUpdateRole_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  template_contains?: InputMaybe<Scalars['String']['input']>;
  template_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  template_ends_with?: InputMaybe<Scalars['String']['input']>;
  template_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  template_gt?: InputMaybe<Scalars['String']['input']>;
  template_gte?: InputMaybe<Scalars['String']['input']>;
  template_in?: InputMaybe<Array<Scalars['String']['input']>>;
  template_lt?: InputMaybe<Scalars['String']['input']>;
  template_lte?: InputMaybe<Scalars['String']['input']>;
  template_not?: InputMaybe<Scalars['String']['input']>;
  template_not_contains?: InputMaybe<Scalars['String']['input']>;
  template_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  template_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  template_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  template_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  template_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  template_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  template_starts_with?: InputMaybe<Scalars['String']['input']>;
  template_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri?: InputMaybe<Scalars['String']['input']>;
  tokenUri_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_gt?: InputMaybe<Scalars['String']['input']>;
  tokenUri_gte?: InputMaybe<Scalars['String']['input']>;
  tokenUri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenUri_lt?: InputMaybe<Scalars['String']['input']>;
  tokenUri_lte?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenUri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferHistory_?: InputMaybe<NftTransferHistory_Filter>;
  transferable?: InputMaybe<Scalars['Boolean']['input']>;
  transferable_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  transferable_not?: InputMaybe<Scalars['Boolean']['input']>;
  transferable_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Nft_OrderBy {
  Address = 'address',
  AssetState = 'assetState',
  Block = 'block',
  CreatedTimestamp = 'createdTimestamp',
  Creator = 'creator',
  Erc20DeployerRole = 'erc20DeployerRole',
  EventIndex = 'eventIndex',
  HasMetadata = 'hasMetadata',
  Id = 'id',
  ManagerRole = 'managerRole',
  MetadataRole = 'metadataRole',
  Name = 'name',
  NftData = 'nftData',
  OrderCount = 'orderCount',
  Owner = 'owner',
  ProviderUrl = 'providerUrl',
  StoreUpdateRole = 'storeUpdateRole',
  Symbol = 'symbol',
  Template = 'template',
  TokenUri = 'tokenUri',
  TransferHistory = 'transferHistory',
  Transferable = 'transferable',
  Tx = 'tx'
}

export type Opc = {
  __typename?: 'OPC';
  approvedTokens?: Maybe<Array<Token>>;
  id: Scalars['ID']['output'];
  /** fee in percent taken by OPC from orderFees */
  orderFee?: Maybe<Scalars['BigDecimal']['output']>;
  /** fee in percent taken by OPC from providerFees */
  providerFee?: Maybe<Scalars['BigDecimal']['output']>;
  /** fee in percent for swaps involving non OPC approved tokens */
  swapNonOceanFee?: Maybe<Scalars['BigDecimal']['output']>;
  /** fee in percent for swaps involving OPC approved tokens */
  swapOceanFee?: Maybe<Scalars['BigDecimal']['output']>;
};


export type OpcApprovedTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Token_Filter>;
};

export type Opc_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  approvedTokens?: InputMaybe<Array<Scalars['String']['input']>>;
  approvedTokens_?: InputMaybe<Token_Filter>;
  approvedTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  approvedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  approvedTokens_not?: InputMaybe<Array<Scalars['String']['input']>>;
  approvedTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  approvedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  orderFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  orderFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  orderFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  orderFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  orderFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  orderFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  orderFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  orderFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  providerFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  providerFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  providerFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  providerFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  providerFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  providerFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  providerFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  providerFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapNonOceanFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapNonOceanFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapNonOceanFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapNonOceanFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapNonOceanFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapNonOceanFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapNonOceanFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapNonOceanFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapOceanFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapOceanFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapOceanFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapOceanFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapOceanFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapOceanFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapOceanFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapOceanFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Opc_OrderBy {
  ApprovedTokens = 'approvedTokens',
  Id = 'id',
  OrderFee = 'orderFee',
  ProviderFee = 'providerFee',
  SwapNonOceanFee = 'swapNonOceanFee',
  SwapOceanFee = 'swapOceanFee'
}

export type Order = {
  __typename?: 'Order';
  amount: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  consumer: User;
  consumerMarket?: Maybe<User>;
  consumerMarketAmmount?: Maybe<Scalars['BigDecimal']['output']>;
  consumerMarketToken?: Maybe<Token>;
  createdTimestamp: Scalars['Int']['output'];
  datatoken: Token;
  estimatedUSDValue: Scalars['BigDecimal']['output'];
  eventIndex: Scalars['Int']['output'];
  /** gas price in Wei */
  gasPrice?: Maybe<Scalars['BigInt']['output']>;
  gasUsed?: Maybe<Scalars['BigDecimal']['output']>;
  /** transaction hash - token address - from address - eventIndex */
  id: Scalars['ID']['output'];
  lastPriceToken?: Maybe<Token>;
  lastPriceValue: Scalars['BigDecimal']['output'];
  nftOwner: User;
  payer: User;
  providerFee?: Maybe<Scalars['String']['output']>;
  providerFeeValidUntil?: Maybe<Scalars['BigInt']['output']>;
  publishingMarket?: Maybe<User>;
  publishingMarketAmmount?: Maybe<Scalars['BigDecimal']['output']>;
  publishingMarketToken?: Maybe<Token>;
  reuses?: Maybe<Array<OrderReuse>>;
  serviceIndex: Scalars['Int']['output'];
  tx: Scalars['String']['output'];
};


export type OrderReusesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderReuse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderReuse_Filter>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderReuse = {
  __typename?: 'OrderReuse';
  block: Scalars['Int']['output'];
  caller: Scalars['String']['output'];
  createdTimestamp: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  /** gas price in Wei */
  gasPrice?: Maybe<Scalars['BigInt']['output']>;
  gasUsed?: Maybe<Scalars['BigDecimal']['output']>;
  id: Scalars['ID']['output'];
  order: Order;
  providerFee?: Maybe<Scalars['String']['output']>;
  providerFeeValidUntil?: Maybe<Scalars['BigInt']['output']>;
  tx: Scalars['String']['output'];
};

export type OrderReuse_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  caller?: InputMaybe<Scalars['String']['input']>;
  caller_contains?: InputMaybe<Scalars['String']['input']>;
  caller_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_gt?: InputMaybe<Scalars['String']['input']>;
  caller_gte?: InputMaybe<Scalars['String']['input']>;
  caller_in?: InputMaybe<Array<Scalars['String']['input']>>;
  caller_lt?: InputMaybe<Scalars['String']['input']>;
  caller_lte?: InputMaybe<Scalars['String']['input']>;
  caller_not?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains?: InputMaybe<Scalars['String']['input']>;
  caller_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  caller_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with?: InputMaybe<Scalars['String']['input']>;
  caller_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  order?: InputMaybe<Scalars['String']['input']>;
  order_?: InputMaybe<Order_Filter>;
  order_contains?: InputMaybe<Scalars['String']['input']>;
  order_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  order_ends_with?: InputMaybe<Scalars['String']['input']>;
  order_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  order_gt?: InputMaybe<Scalars['String']['input']>;
  order_gte?: InputMaybe<Scalars['String']['input']>;
  order_in?: InputMaybe<Array<Scalars['String']['input']>>;
  order_lt?: InputMaybe<Scalars['String']['input']>;
  order_lte?: InputMaybe<Scalars['String']['input']>;
  order_not?: InputMaybe<Scalars['String']['input']>;
  order_not_contains?: InputMaybe<Scalars['String']['input']>;
  order_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  order_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  order_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  order_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  order_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  order_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  order_starts_with?: InputMaybe<Scalars['String']['input']>;
  order_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee?: InputMaybe<Scalars['String']['input']>;
  providerFeeValidUntil?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_gt?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_gte?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  providerFeeValidUntil_lt?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_lte?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_not?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  providerFee_contains?: InputMaybe<Scalars['String']['input']>;
  providerFee_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_ends_with?: InputMaybe<Scalars['String']['input']>;
  providerFee_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_gt?: InputMaybe<Scalars['String']['input']>;
  providerFee_gte?: InputMaybe<Scalars['String']['input']>;
  providerFee_in?: InputMaybe<Array<Scalars['String']['input']>>;
  providerFee_lt?: InputMaybe<Scalars['String']['input']>;
  providerFee_lte?: InputMaybe<Scalars['String']['input']>;
  providerFee_not?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_contains?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  providerFee_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_starts_with?: InputMaybe<Scalars['String']['input']>;
  providerFee_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderReuse_OrderBy {
  Block = 'block',
  Caller = 'caller',
  CreatedTimestamp = 'createdTimestamp',
  EventIndex = 'eventIndex',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Order = 'order',
  ProviderFee = 'providerFee',
  ProviderFeeValidUntil = 'providerFeeValidUntil',
  Tx = 'tx'
}

export type Order_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  consumer?: InputMaybe<Scalars['String']['input']>;
  consumerMarket?: InputMaybe<Scalars['String']['input']>;
  consumerMarketAmmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumerMarketAmmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumerMarketAmmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumerMarketAmmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  consumerMarketAmmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumerMarketAmmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumerMarketAmmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  consumerMarketAmmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  consumerMarketToken?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_?: InputMaybe<Token_Filter>;
  consumerMarketToken_contains?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_gt?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_gte?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  consumerMarketToken_lt?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_lte?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_not?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  consumerMarketToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  consumerMarketToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_?: InputMaybe<User_Filter>;
  consumerMarket_contains?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_ends_with?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_gt?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_gte?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_in?: InputMaybe<Array<Scalars['String']['input']>>;
  consumerMarket_lt?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_lte?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_not?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_not_contains?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  consumerMarket_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_starts_with?: InputMaybe<Scalars['String']['input']>;
  consumerMarket_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumer_?: InputMaybe<User_Filter>;
  consumer_contains?: InputMaybe<Scalars['String']['input']>;
  consumer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  consumer_ends_with?: InputMaybe<Scalars['String']['input']>;
  consumer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumer_gt?: InputMaybe<Scalars['String']['input']>;
  consumer_gte?: InputMaybe<Scalars['String']['input']>;
  consumer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  consumer_lt?: InputMaybe<Scalars['String']['input']>;
  consumer_lte?: InputMaybe<Scalars['String']['input']>;
  consumer_not?: InputMaybe<Scalars['String']['input']>;
  consumer_not_contains?: InputMaybe<Scalars['String']['input']>;
  consumer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  consumer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  consumer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  consumer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  consumer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  consumer_starts_with?: InputMaybe<Scalars['String']['input']>;
  consumer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  datatoken?: InputMaybe<Scalars['String']['input']>;
  datatoken_?: InputMaybe<Token_Filter>;
  datatoken_contains?: InputMaybe<Scalars['String']['input']>;
  datatoken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_ends_with?: InputMaybe<Scalars['String']['input']>;
  datatoken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_gt?: InputMaybe<Scalars['String']['input']>;
  datatoken_gte?: InputMaybe<Scalars['String']['input']>;
  datatoken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  datatoken_lt?: InputMaybe<Scalars['String']['input']>;
  datatoken_lte?: InputMaybe<Scalars['String']['input']>;
  datatoken_not?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_contains?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  datatoken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  datatoken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  datatoken_starts_with?: InputMaybe<Scalars['String']['input']>;
  datatoken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  estimatedUSDValue?: InputMaybe<Scalars['BigDecimal']['input']>;
  estimatedUSDValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  estimatedUSDValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  estimatedUSDValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  estimatedUSDValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  estimatedUSDValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  estimatedUSDValue_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  estimatedUSDValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastPriceToken?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_?: InputMaybe<Token_Filter>;
  lastPriceToken_contains?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_gt?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_gte?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPriceToken_lt?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_lte?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPriceToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceValue?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastPriceValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  nftOwner?: InputMaybe<Scalars['String']['input']>;
  nftOwner_?: InputMaybe<User_Filter>;
  nftOwner_contains?: InputMaybe<Scalars['String']['input']>;
  nftOwner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftOwner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftOwner_gt?: InputMaybe<Scalars['String']['input']>;
  nftOwner_gte?: InputMaybe<Scalars['String']['input']>;
  nftOwner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftOwner_lt?: InputMaybe<Scalars['String']['input']>;
  nftOwner_lte?: InputMaybe<Scalars['String']['input']>;
  nftOwner_not?: InputMaybe<Scalars['String']['input']>;
  nftOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftOwner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftOwner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftOwner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  payer?: InputMaybe<Scalars['String']['input']>;
  payer_?: InputMaybe<User_Filter>;
  payer_contains?: InputMaybe<Scalars['String']['input']>;
  payer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payer_ends_with?: InputMaybe<Scalars['String']['input']>;
  payer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  payer_gt?: InputMaybe<Scalars['String']['input']>;
  payer_gte?: InputMaybe<Scalars['String']['input']>;
  payer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  payer_lt?: InputMaybe<Scalars['String']['input']>;
  payer_lte?: InputMaybe<Scalars['String']['input']>;
  payer_not?: InputMaybe<Scalars['String']['input']>;
  payer_not_contains?: InputMaybe<Scalars['String']['input']>;
  payer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  payer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  payer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  payer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  payer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  payer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  payer_starts_with?: InputMaybe<Scalars['String']['input']>;
  payer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee?: InputMaybe<Scalars['String']['input']>;
  providerFeeValidUntil?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_gt?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_gte?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  providerFeeValidUntil_lt?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_lte?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_not?: InputMaybe<Scalars['BigInt']['input']>;
  providerFeeValidUntil_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  providerFee_contains?: InputMaybe<Scalars['String']['input']>;
  providerFee_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_ends_with?: InputMaybe<Scalars['String']['input']>;
  providerFee_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_gt?: InputMaybe<Scalars['String']['input']>;
  providerFee_gte?: InputMaybe<Scalars['String']['input']>;
  providerFee_in?: InputMaybe<Array<Scalars['String']['input']>>;
  providerFee_lt?: InputMaybe<Scalars['String']['input']>;
  providerFee_lte?: InputMaybe<Scalars['String']['input']>;
  providerFee_not?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_contains?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  providerFee_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  providerFee_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  providerFee_starts_with?: InputMaybe<Scalars['String']['input']>;
  providerFee_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarket?: InputMaybe<Scalars['String']['input']>;
  publishingMarketAmmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishingMarketAmmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishingMarketAmmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishingMarketAmmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  publishingMarketAmmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishingMarketAmmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishingMarketAmmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishingMarketAmmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  publishingMarketToken?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_?: InputMaybe<Token_Filter>;
  publishingMarketToken_contains?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_gt?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_gte?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishingMarketToken_lt?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_lte?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_not?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishingMarketToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishingMarketToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_?: InputMaybe<User_Filter>;
  publishingMarket_contains?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_gt?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_gte?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishingMarket_lt?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_lte?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_not?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_not_contains?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishingMarket_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishingMarket_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  reuses_?: InputMaybe<OrderReuse_Filter>;
  serviceIndex?: InputMaybe<Scalars['Int']['input']>;
  serviceIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  serviceIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  serviceIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  serviceIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  serviceIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  serviceIndex_not?: InputMaybe<Scalars['Int']['input']>;
  serviceIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Order_OrderBy {
  Amount = 'amount',
  Block = 'block',
  Consumer = 'consumer',
  ConsumerMarket = 'consumerMarket',
  ConsumerMarketAmmount = 'consumerMarketAmmount',
  ConsumerMarketToken = 'consumerMarketToken',
  CreatedTimestamp = 'createdTimestamp',
  Datatoken = 'datatoken',
  EstimatedUsdValue = 'estimatedUSDValue',
  EventIndex = 'eventIndex',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  LastPriceToken = 'lastPriceToken',
  LastPriceValue = 'lastPriceValue',
  NftOwner = 'nftOwner',
  Payer = 'payer',
  ProviderFee = 'providerFee',
  ProviderFeeValidUntil = 'providerFeeValidUntil',
  PublishingMarket = 'publishingMarket',
  PublishingMarketAmmount = 'publishingMarketAmmount',
  PublishingMarketToken = 'publishingMarketToken',
  Reuses = 'reuses',
  ServiceIndex = 'serviceIndex',
  Tx = 'tx'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  dfavailableClaim?: Maybe<DfAvailableClaim>;
  dfavailableClaims: Array<DfAvailableClaim>;
  dfhistories: Array<DfHistory>;
  dfhistory?: Maybe<DfHistory>;
  dfreward?: Maybe<DfReward>;
  dfrewards: Array<DfReward>;
  dispenser?: Maybe<Dispenser>;
  dispenserTransaction?: Maybe<DispenserTransaction>;
  dispenserTransactions: Array<DispenserTransaction>;
  dispensers: Array<Dispenser>;
  fixedRateExchange?: Maybe<FixedRateExchange>;
  fixedRateExchangeSwap?: Maybe<FixedRateExchangeSwap>;
  fixedRateExchangeSwaps: Array<FixedRateExchangeSwap>;
  fixedRateExchangeUpdate?: Maybe<FixedRateExchangeUpdate>;
  fixedRateExchangeUpdates: Array<FixedRateExchangeUpdate>;
  fixedRateExchanges: Array<FixedRateExchange>;
  globalStatistic?: Maybe<GlobalStatistic>;
  globalStatistics: Array<GlobalStatistic>;
  globalTotalFixedSwapPair?: Maybe<GlobalTotalFixedSwapPair>;
  globalTotalFixedSwapPairs: Array<GlobalTotalFixedSwapPair>;
  globalTotalLiquidityPair?: Maybe<GlobalTotalLiquidityPair>;
  globalTotalLiquidityPairs: Array<GlobalTotalLiquidityPair>;
  nft?: Maybe<Nft>;
  nftData?: Maybe<NftData>;
  nftDatas: Array<NftData>;
  nftTransferHistories: Array<NftTransferHistory>;
  nftTransferHistory?: Maybe<NftTransferHistory>;
  nftUpdate?: Maybe<NftUpdate>;
  nftUpdates: Array<NftUpdate>;
  nfts: Array<Nft>;
  opc?: Maybe<Opc>;
  opcs: Array<Opc>;
  order?: Maybe<Order>;
  orderReuse?: Maybe<OrderReuse>;
  orderReuses: Array<OrderReuse>;
  orders: Array<Order>;
  template?: Maybe<Template>;
  templates: Array<Template>;
  token?: Maybe<Token>;
  tokenValuePair?: Maybe<TokenValuePair>;
  tokenValuePairs: Array<TokenValuePair>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  users: Array<User>;
  veAllocateId?: Maybe<VeAllocateId>;
  veAllocateIds: Array<VeAllocateId>;
  veAllocateUser?: Maybe<VeAllocateUser>;
  veAllocateUsers: Array<VeAllocateUser>;
  veAllocation?: Maybe<VeAllocation>;
  veAllocationUpdate?: Maybe<VeAllocationUpdate>;
  veAllocationUpdates: Array<VeAllocationUpdate>;
  veAllocations: Array<VeAllocation>;
  veClaim?: Maybe<VeClaim>;
  veClaims: Array<VeClaim>;
  veDelegation?: Maybe<VeDelegation>;
  veDelegationUpdate?: Maybe<VeDelegationUpdate>;
  veDelegationUpdates: Array<VeDelegationUpdate>;
  veDelegations: Array<VeDelegation>;
  veDeposit?: Maybe<VeDeposit>;
  veDeposits: Array<VeDeposit>;
  veFeeDistributor?: Maybe<VeFeeDistributor>;
  veFeeDistributorCheckPoint?: Maybe<VeFeeDistributorCheckPoint>;
  veFeeDistributorCheckPoints: Array<VeFeeDistributorCheckPoint>;
  veFeeDistributors: Array<VeFeeDistributor>;
  veOCEAN?: Maybe<VeOcean>;
  veOCEANs: Array<VeOcean>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryDfavailableClaimArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDfavailableClaimsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DfAvailableClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DfAvailableClaim_Filter>;
};


export type QueryDfhistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DfHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DfHistory_Filter>;
};


export type QueryDfhistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDfrewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDfrewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DfReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DfReward_Filter>;
};


export type QueryDispenserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDispenserTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDispenserTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DispenserTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DispenserTransaction_Filter>;
};


export type QueryDispensersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dispenser_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dispenser_Filter>;
};


export type QueryFixedRateExchangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFixedRateExchangeSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFixedRateExchangeSwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchangeSwap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FixedRateExchangeSwap_Filter>;
};


export type QueryFixedRateExchangeUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFixedRateExchangeUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchangeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FixedRateExchangeUpdate_Filter>;
};


export type QueryFixedRateExchangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FixedRateExchange_Filter>;
};


export type QueryGlobalStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGlobalStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalStatistic_Filter>;
};


export type QueryGlobalTotalFixedSwapPairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGlobalTotalFixedSwapPairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalTotalFixedSwapPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalTotalFixedSwapPair_Filter>;
};


export type QueryGlobalTotalLiquidityPairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGlobalTotalLiquidityPairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalTotalLiquidityPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalTotalLiquidityPair_Filter>;
};


export type QueryNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftData_Filter>;
};


export type QueryNftTransferHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftTransferHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftTransferHistory_Filter>;
};


export type QueryNftTransferHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftUpdate_Filter>;
};


export type QueryNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type QueryOpcArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOpcsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Opc_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Opc_Filter>;
};


export type QueryOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOrderReuseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOrderReusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderReuse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrderReuse_Filter>;
};


export type QueryOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};


export type QueryTemplateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTemplatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Template_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Template_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenValuePairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenValuePairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenValuePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenValuePair_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type QueryVeAllocateIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeAllocateIdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocateId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeAllocateId_Filter>;
};


export type QueryVeAllocateUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeAllocateUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocateUser_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeAllocateUser_Filter>;
};


export type QueryVeAllocationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeAllocationUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeAllocationUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocationUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeAllocationUpdate_Filter>;
};


export type QueryVeAllocationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeAllocation_Filter>;
};


export type QueryVeClaimArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeClaimsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeClaim_Filter>;
};


export type QueryVeDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeDelegationUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeDelegationUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDelegationUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeDelegationUpdate_Filter>;
};


export type QueryVeDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeDelegation_Filter>;
};


export type QueryVeDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeDeposit_Filter>;
};


export type QueryVeFeeDistributorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeFeeDistributorCheckPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeFeeDistributorCheckPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeFeeDistributorCheckPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeFeeDistributorCheckPoint_Filter>;
};


export type QueryVeFeeDistributorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeFeeDistributor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeFeeDistributor_Filter>;
};


export type QueryVeOceanArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVeOceaNsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeOcean_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeOcean_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  dfavailableClaim?: Maybe<DfAvailableClaim>;
  dfavailableClaims: Array<DfAvailableClaim>;
  dfhistories: Array<DfHistory>;
  dfhistory?: Maybe<DfHistory>;
  dfreward?: Maybe<DfReward>;
  dfrewards: Array<DfReward>;
  dispenser?: Maybe<Dispenser>;
  dispenserTransaction?: Maybe<DispenserTransaction>;
  dispenserTransactions: Array<DispenserTransaction>;
  dispensers: Array<Dispenser>;
  fixedRateExchange?: Maybe<FixedRateExchange>;
  fixedRateExchangeSwap?: Maybe<FixedRateExchangeSwap>;
  fixedRateExchangeSwaps: Array<FixedRateExchangeSwap>;
  fixedRateExchangeUpdate?: Maybe<FixedRateExchangeUpdate>;
  fixedRateExchangeUpdates: Array<FixedRateExchangeUpdate>;
  fixedRateExchanges: Array<FixedRateExchange>;
  globalStatistic?: Maybe<GlobalStatistic>;
  globalStatistics: Array<GlobalStatistic>;
  globalTotalFixedSwapPair?: Maybe<GlobalTotalFixedSwapPair>;
  globalTotalFixedSwapPairs: Array<GlobalTotalFixedSwapPair>;
  globalTotalLiquidityPair?: Maybe<GlobalTotalLiquidityPair>;
  globalTotalLiquidityPairs: Array<GlobalTotalLiquidityPair>;
  nft?: Maybe<Nft>;
  nftData?: Maybe<NftData>;
  nftDatas: Array<NftData>;
  nftTransferHistories: Array<NftTransferHistory>;
  nftTransferHistory?: Maybe<NftTransferHistory>;
  nftUpdate?: Maybe<NftUpdate>;
  nftUpdates: Array<NftUpdate>;
  nfts: Array<Nft>;
  opc?: Maybe<Opc>;
  opcs: Array<Opc>;
  order?: Maybe<Order>;
  orderReuse?: Maybe<OrderReuse>;
  orderReuses: Array<OrderReuse>;
  orders: Array<Order>;
  template?: Maybe<Template>;
  templates: Array<Template>;
  token?: Maybe<Token>;
  tokenValuePair?: Maybe<TokenValuePair>;
  tokenValuePairs: Array<TokenValuePair>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  users: Array<User>;
  veAllocateId?: Maybe<VeAllocateId>;
  veAllocateIds: Array<VeAllocateId>;
  veAllocateUser?: Maybe<VeAllocateUser>;
  veAllocateUsers: Array<VeAllocateUser>;
  veAllocation?: Maybe<VeAllocation>;
  veAllocationUpdate?: Maybe<VeAllocationUpdate>;
  veAllocationUpdates: Array<VeAllocationUpdate>;
  veAllocations: Array<VeAllocation>;
  veClaim?: Maybe<VeClaim>;
  veClaims: Array<VeClaim>;
  veDelegation?: Maybe<VeDelegation>;
  veDelegationUpdate?: Maybe<VeDelegationUpdate>;
  veDelegationUpdates: Array<VeDelegationUpdate>;
  veDelegations: Array<VeDelegation>;
  veDeposit?: Maybe<VeDeposit>;
  veDeposits: Array<VeDeposit>;
  veFeeDistributor?: Maybe<VeFeeDistributor>;
  veFeeDistributorCheckPoint?: Maybe<VeFeeDistributorCheckPoint>;
  veFeeDistributorCheckPoints: Array<VeFeeDistributorCheckPoint>;
  veFeeDistributors: Array<VeFeeDistributor>;
  veOCEAN?: Maybe<VeOcean>;
  veOCEANs: Array<VeOcean>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionDfavailableClaimArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDfavailableClaimsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DfAvailableClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DfAvailableClaim_Filter>;
};


export type SubscriptionDfhistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DfHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DfHistory_Filter>;
};


export type SubscriptionDfhistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDfrewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDfrewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DfReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DfReward_Filter>;
};


export type SubscriptionDispenserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDispenserTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDispenserTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DispenserTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DispenserTransaction_Filter>;
};


export type SubscriptionDispensersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dispenser_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dispenser_Filter>;
};


export type SubscriptionFixedRateExchangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFixedRateExchangeSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFixedRateExchangeSwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchangeSwap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FixedRateExchangeSwap_Filter>;
};


export type SubscriptionFixedRateExchangeUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFixedRateExchangeUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchangeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FixedRateExchangeUpdate_Filter>;
};


export type SubscriptionFixedRateExchangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FixedRateExchange_Filter>;
};


export type SubscriptionGlobalStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGlobalStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalStatistic_Filter>;
};


export type SubscriptionGlobalTotalFixedSwapPairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGlobalTotalFixedSwapPairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalTotalFixedSwapPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalTotalFixedSwapPair_Filter>;
};


export type SubscriptionGlobalTotalLiquidityPairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGlobalTotalLiquidityPairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalTotalLiquidityPair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalTotalLiquidityPair_Filter>;
};


export type SubscriptionNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftData_Filter>;
};


export type SubscriptionNftTransferHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftTransferHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftTransferHistory_Filter>;
};


export type SubscriptionNftTransferHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NftUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftUpdate_Filter>;
};


export type SubscriptionNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};


export type SubscriptionOpcArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOpcsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Opc_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Opc_Filter>;
};


export type SubscriptionOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOrderReuseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOrderReusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderReuse_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrderReuse_Filter>;
};


export type SubscriptionOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};


export type SubscriptionTemplateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTemplatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Template_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Template_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenValuePairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenValuePairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenValuePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenValuePair_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type SubscriptionVeAllocateIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeAllocateIdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocateId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeAllocateId_Filter>;
};


export type SubscriptionVeAllocateUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeAllocateUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocateUser_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeAllocateUser_Filter>;
};


export type SubscriptionVeAllocationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeAllocationUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeAllocationUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocationUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeAllocationUpdate_Filter>;
};


export type SubscriptionVeAllocationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeAllocation_Filter>;
};


export type SubscriptionVeClaimArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeClaimsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeClaim_Filter>;
};


export type SubscriptionVeDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeDelegationUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeDelegationUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDelegationUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeDelegationUpdate_Filter>;
};


export type SubscriptionVeDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeDelegation_Filter>;
};


export type SubscriptionVeDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeDeposit_Filter>;
};


export type SubscriptionVeFeeDistributorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeFeeDistributorCheckPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeFeeDistributorCheckPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeFeeDistributorCheckPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeFeeDistributorCheckPoint_Filter>;
};


export type SubscriptionVeFeeDistributorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeFeeDistributor_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeFeeDistributor_Filter>;
};


export type SubscriptionVeOceanArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVeOceaNsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeOcean_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VeOcean_Filter>;
};

export type Template = {
  __typename?: 'Template';
  dispenserTemplates?: Maybe<Array<Scalars['String']['output']>>;
  fixedRateTemplates?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  ssTemplates?: Maybe<Array<Scalars['String']['output']>>;
};

export type Template_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dispenserTemplates?: InputMaybe<Array<Scalars['String']['input']>>;
  dispenserTemplates_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  dispenserTemplates_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  dispenserTemplates_not?: InputMaybe<Array<Scalars['String']['input']>>;
  dispenserTemplates_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  dispenserTemplates_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  fixedRateTemplates?: InputMaybe<Array<Scalars['String']['input']>>;
  fixedRateTemplates_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  fixedRateTemplates_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  fixedRateTemplates_not?: InputMaybe<Array<Scalars['String']['input']>>;
  fixedRateTemplates_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  fixedRateTemplates_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ssTemplates?: InputMaybe<Array<Scalars['String']['input']>>;
  ssTemplates_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  ssTemplates_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  ssTemplates_not?: InputMaybe<Array<Scalars['String']['input']>>;
  ssTemplates_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  ssTemplates_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Template_OrderBy {
  DispenserTemplates = 'dispenserTemplates',
  FixedRateTemplates = 'fixedRateTemplates',
  Id = 'id',
  SsTemplates = 'ssTemplates'
}

export type Token = {
  __typename?: 'Token';
  address: Scalars['String']['output'];
  /** block number when it was created */
  block: Scalars['Int']['output'];
  cap?: Maybe<Scalars['BigDecimal']['output']>;
  /** block time datatoken was created */
  createdTimestamp: Scalars['Int']['output'];
  decimals: Scalars['Int']['output'];
  /** dispensers using this token */
  dispensers?: Maybe<Array<Dispenser>>;
  eventIndex: Scalars['Int']['output'];
  /** fixed rate exchanges, only available for datatokens */
  fixedRateExchanges?: Maybe<Array<FixedRateExchange>>;
  /** number of addresses holding a balance of datatoken , TODO: can we actually calculate this? what happens when users trade the dts */
  holderCount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  isDatatoken: Scalars['Boolean']['output'];
  lastPriceToken?: Maybe<Token>;
  lastPriceValue: Scalars['BigDecimal']['output'];
  /** array of addresses with minter role */
  minter?: Maybe<Array<Scalars['String']['output']>>;
  name?: Maybe<Scalars['String']['output']>;
  /** address of ERC721 that owns the token, valid only for datatokens */
  nft?: Maybe<Nft>;
  /** number of orders executed for this datatoken */
  orderCount: Scalars['BigInt']['output'];
  /** orders created with the datatoken, only available for datatokens */
  orders?: Maybe<Array<Order>>;
  /** address that collects the payments (NOT fees) */
  paymentCollector?: Maybe<Scalars['String']['output']>;
  /** array of addresses with payment manager minter role */
  paymentManager?: Maybe<Array<Scalars['String']['output']>>;
  /** address of the market where the datatoken was created. This address collects market fees. */
  publishMarketFeeAddress?: Maybe<Scalars['String']['output']>;
  /** fee amount. Fixed value. */
  publishMarketFeeAmount?: Maybe<Scalars['BigDecimal']['output']>;
  /** adreess of fee token (can be Ocean, ETH, etc.) */
  publishMarketFeeToken?: Maybe<Scalars['String']['output']>;
  supply?: Maybe<Scalars['BigDecimal']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  /** template ID of the datatoken */
  templateId?: Maybe<Scalars['Int']['output']>;
  /** datatoken creation transaction id */
  tx: Scalars['String']['output'];
};


export type TokenDispensersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Dispenser_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Dispenser_Filter>;
};


export type TokenFixedRateExchangesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixedRateExchange_Filter>;
};


export type TokenOrdersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Order_Filter>;
};

/** utility type */
export type TokenValuePair = {
  __typename?: 'TokenValuePair';
  /** address of the token */
  id: Scalars['ID']['output'];
  token: Token;
  value: Scalars['BigDecimal']['output'];
};

export type TokenValuePair_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum TokenValuePair_OrderBy {
  Id = 'id',
  Token = 'token',
  Value = 'value'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cap?: InputMaybe<Scalars['BigDecimal']['input']>;
  cap_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cap_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cap_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cap_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cap_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cap_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cap_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dispensers_?: InputMaybe<Dispenser_Filter>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fixedRateExchanges_?: InputMaybe<FixedRateExchange_Filter>;
  holderCount?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isDatatoken?: InputMaybe<Scalars['Boolean']['input']>;
  isDatatoken_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isDatatoken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isDatatoken_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lastPriceToken?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_?: InputMaybe<Token_Filter>;
  lastPriceToken_contains?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_gt?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_gte?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPriceToken_lt?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_lte?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPriceToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPriceToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPriceValue?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastPriceValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPriceValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  minter?: InputMaybe<Array<Scalars['String']['input']>>;
  minter_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  minter_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  minter_not?: InputMaybe<Array<Scalars['String']['input']>>;
  minter_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  minter_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft?: InputMaybe<Scalars['String']['input']>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars['String']['input']>;
  nft_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_gt?: InputMaybe<Scalars['String']['input']>;
  nft_gte?: InputMaybe<Scalars['String']['input']>;
  nft_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_lt?: InputMaybe<Scalars['String']['input']>;
  nft_lte?: InputMaybe<Scalars['String']['input']>;
  nft_not?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains?: InputMaybe<Scalars['String']['input']>;
  nft_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nft_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with?: InputMaybe<Scalars['String']['input']>;
  nft_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  orderCount?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  orderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  orderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  orders_?: InputMaybe<Order_Filter>;
  paymentCollector?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_contains?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_ends_with?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_gt?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_gte?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_in?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentCollector_lt?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_lte?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_not?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_not_contains?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentCollector_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_starts_with?: InputMaybe<Scalars['String']['input']>;
  paymentCollector_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  paymentManager?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentManager_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentManager_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentManager_not?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentManager_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  paymentManager_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  publishMarketFeeAddress?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_contains?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_gt?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_gte?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishMarketFeeAddress_lt?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_lte?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishMarketFeeAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketFeeAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketFeeAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketFeeAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  publishMarketFeeAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketFeeAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketFeeAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  publishMarketFeeAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  publishMarketFeeToken?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_contains?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_gt?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_gte?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishMarketFeeToken_lt?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_lte?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_not?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  publishMarketFeeToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishMarketFeeToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  supply?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  supply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  supply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['Int']['input']>;
  templateId_gt?: InputMaybe<Scalars['Int']['input']>;
  templateId_gte?: InputMaybe<Scalars['Int']['input']>;
  templateId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  templateId_lt?: InputMaybe<Scalars['Int']['input']>;
  templateId_lte?: InputMaybe<Scalars['Int']['input']>;
  templateId_not?: InputMaybe<Scalars['Int']['input']>;
  templateId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Token_OrderBy {
  Address = 'address',
  Block = 'block',
  Cap = 'cap',
  CreatedTimestamp = 'createdTimestamp',
  Decimals = 'decimals',
  Dispensers = 'dispensers',
  EventIndex = 'eventIndex',
  FixedRateExchanges = 'fixedRateExchanges',
  HolderCount = 'holderCount',
  Id = 'id',
  IsDatatoken = 'isDatatoken',
  LastPriceToken = 'lastPriceToken',
  LastPriceValue = 'lastPriceValue',
  Minter = 'minter',
  Name = 'name',
  Nft = 'nft',
  OrderCount = 'orderCount',
  Orders = 'orders',
  PaymentCollector = 'paymentCollector',
  PaymentManager = 'paymentManager',
  PublishMarketFeeAddress = 'publishMarketFeeAddress',
  PublishMarketFeeAmount = 'publishMarketFeeAmount',
  PublishMarketFeeToken = 'publishMarketFeeToken',
  Supply = 'supply',
  Symbol = 'symbol',
  TemplateId = 'templateId',
  Tx = 'tx'
}

export type User = {
  __typename?: 'User';
  freSwaps?: Maybe<Array<FixedRateExchangeSwap>>;
  id: Scalars['ID']['output'];
  orders?: Maybe<Array<Order>>;
  tokenBalancesOwned?: Maybe<Array<TokenValuePair>>;
  /** total number of orders made by this user */
  totalOrders: Scalars['BigInt']['output'];
  /** total number of orders made on assets owned by this user */
  totalSales: Scalars['BigInt']['output'];
};


export type UserFreSwapsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FixedRateExchangeSwap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FixedRateExchangeSwap_Filter>;
};


export type UserOrdersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Order_Filter>;
};


export type UserTokenBalancesOwnedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenValuePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenValuePair_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  freSwaps_?: InputMaybe<FixedRateExchangeSwap_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  orders_?: InputMaybe<Order_Filter>;
  tokenBalancesOwned?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBalancesOwned_?: InputMaybe<TokenValuePair_Filter>;
  tokenBalancesOwned_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBalancesOwned_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBalancesOwned_not?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBalancesOwned_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenBalancesOwned_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  totalOrders?: InputMaybe<Scalars['BigInt']['input']>;
  totalOrders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOrders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOrders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOrders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOrders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOrders_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOrders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSales?: InputMaybe<Scalars['BigInt']['input']>;
  totalSales_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSales_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSales_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSales_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSales_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSales_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSales_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum User_OrderBy {
  FreSwaps = 'freSwaps',
  Id = 'id',
  Orders = 'orders',
  TokenBalancesOwned = 'tokenBalancesOwned',
  TotalOrders = 'totalOrders',
  TotalSales = 'totalSales'
}

export type VeAllocateId = {
  __typename?: 'VeAllocateId';
  allocatedTotal: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  chainId: Scalars['BigInt']['output'];
  eventIndex: Scalars['Int']['output'];
  firstContact: Scalars['Int']['output'];
  /** id = {DataNFT Address}-{chain id} */
  id: Scalars['ID']['output'];
  lastContact: Scalars['Int']['output'];
  nftAddress: Scalars['String']['output'];
  tx: Scalars['String']['output'];
  veAllocation?: Maybe<Array<VeAllocation>>;
};


export type VeAllocateIdVeAllocationArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeAllocation_Filter>;
};

export type VeAllocateId_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allocatedTotal?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  allocatedTotal_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  firstContact?: InputMaybe<Scalars['Int']['input']>;
  firstContact_gt?: InputMaybe<Scalars['Int']['input']>;
  firstContact_gte?: InputMaybe<Scalars['Int']['input']>;
  firstContact_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  firstContact_lt?: InputMaybe<Scalars['Int']['input']>;
  firstContact_lte?: InputMaybe<Scalars['Int']['input']>;
  firstContact_not?: InputMaybe<Scalars['Int']['input']>;
  firstContact_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastContact?: InputMaybe<Scalars['Int']['input']>;
  lastContact_gt?: InputMaybe<Scalars['Int']['input']>;
  lastContact_gte?: InputMaybe<Scalars['Int']['input']>;
  lastContact_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastContact_lt?: InputMaybe<Scalars['Int']['input']>;
  lastContact_lte?: InputMaybe<Scalars['Int']['input']>;
  lastContact_not?: InputMaybe<Scalars['Int']['input']>;
  lastContact_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nftAddress?: InputMaybe<Scalars['String']['input']>;
  nftAddress_contains?: InputMaybe<Scalars['String']['input']>;
  nftAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_gt?: InputMaybe<Scalars['String']['input']>;
  nftAddress_gte?: InputMaybe<Scalars['String']['input']>;
  nftAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftAddress_lt?: InputMaybe<Scalars['String']['input']>;
  nftAddress_lte?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veAllocation_?: InputMaybe<VeAllocation_Filter>;
};

export enum VeAllocateId_OrderBy {
  AllocatedTotal = 'allocatedTotal',
  Block = 'block',
  ChainId = 'chainId',
  EventIndex = 'eventIndex',
  FirstContact = 'firstContact',
  Id = 'id',
  LastContact = 'lastContact',
  NftAddress = 'nftAddress',
  Tx = 'tx',
  VeAllocation = 'veAllocation'
}

export type VeAllocateUser = {
  __typename?: 'VeAllocateUser';
  allocatedTotal: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  firstContact: Scalars['Int']['output'];
  /** id = {user} */
  id: Scalars['ID']['output'];
  lastContact: Scalars['Int']['output'];
  tx: Scalars['String']['output'];
  veAllocation?: Maybe<Array<VeAllocation>>;
  veOcean: VeOcean;
};


export type VeAllocateUserVeAllocationArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeAllocation_Filter>;
};

export type VeAllocateUser_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allocatedTotal?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  allocatedTotal_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  firstContact?: InputMaybe<Scalars['Int']['input']>;
  firstContact_gt?: InputMaybe<Scalars['Int']['input']>;
  firstContact_gte?: InputMaybe<Scalars['Int']['input']>;
  firstContact_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  firstContact_lt?: InputMaybe<Scalars['Int']['input']>;
  firstContact_lte?: InputMaybe<Scalars['Int']['input']>;
  firstContact_not?: InputMaybe<Scalars['Int']['input']>;
  firstContact_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastContact?: InputMaybe<Scalars['Int']['input']>;
  lastContact_gt?: InputMaybe<Scalars['Int']['input']>;
  lastContact_gte?: InputMaybe<Scalars['Int']['input']>;
  lastContact_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastContact_lt?: InputMaybe<Scalars['Int']['input']>;
  lastContact_lte?: InputMaybe<Scalars['Int']['input']>;
  lastContact_not?: InputMaybe<Scalars['Int']['input']>;
  lastContact_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veAllocation_?: InputMaybe<VeAllocation_Filter>;
  veOcean?: InputMaybe<Scalars['String']['input']>;
  veOcean_?: InputMaybe<VeOcean_Filter>;
  veOcean_contains?: InputMaybe<Scalars['String']['input']>;
  veOcean_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_ends_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_gt?: InputMaybe<Scalars['String']['input']>;
  veOcean_gte?: InputMaybe<Scalars['String']['input']>;
  veOcean_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veOcean_lt?: InputMaybe<Scalars['String']['input']>;
  veOcean_lte?: InputMaybe<Scalars['String']['input']>;
  veOcean_not?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_contains?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veOcean_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_starts_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VeAllocateUser_OrderBy {
  AllocatedTotal = 'allocatedTotal',
  Block = 'block',
  EventIndex = 'eventIndex',
  FirstContact = 'firstContact',
  Id = 'id',
  LastContact = 'lastContact',
  Tx = 'tx',
  VeAllocation = 'veAllocation',
  VeOcean = 'veOcean'
}

export type VeAllocation = {
  __typename?: 'VeAllocation';
  allocated: Scalars['BigDecimal']['output'];
  allocationId: VeAllocateId;
  allocationUser: VeAllocateUser;
  block: Scalars['Int']['output'];
  chainId: Scalars['BigInt']['output'];
  eventIndex: Scalars['Int']['output'];
  firstContact: Scalars['Int']['output'];
  /** id = {user}-{DataNFT Address}-{chain id} */
  id: Scalars['ID']['output'];
  lastContact: Scalars['Int']['output'];
  nftAddress: Scalars['String']['output'];
  tx: Scalars['String']['output'];
  updates?: Maybe<Array<VeAllocationUpdate>>;
};


export type VeAllocationUpdatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeAllocationUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeAllocationUpdate_Filter>;
};

export type VeAllocationUpdate = {
  __typename?: 'VeAllocationUpdate';
  allocatedTotal: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  /** {tx}-{VeAllocation id}-{eventIndex} */
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  tx: Scalars['String']['output'];
  type: VeAllocationUpdateType;
  veAllocation: VeAllocation;
};

export type VeAllocationUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allocatedTotal?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  allocatedTotal_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocatedTotal_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<VeAllocationUpdateType>;
  type_in?: InputMaybe<Array<VeAllocationUpdateType>>;
  type_not?: InputMaybe<VeAllocationUpdateType>;
  type_not_in?: InputMaybe<Array<VeAllocationUpdateType>>;
  veAllocation?: InputMaybe<Scalars['String']['input']>;
  veAllocation_?: InputMaybe<VeAllocation_Filter>;
  veAllocation_contains?: InputMaybe<Scalars['String']['input']>;
  veAllocation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veAllocation_ends_with?: InputMaybe<Scalars['String']['input']>;
  veAllocation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veAllocation_gt?: InputMaybe<Scalars['String']['input']>;
  veAllocation_gte?: InputMaybe<Scalars['String']['input']>;
  veAllocation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veAllocation_lt?: InputMaybe<Scalars['String']['input']>;
  veAllocation_lte?: InputMaybe<Scalars['String']['input']>;
  veAllocation_not?: InputMaybe<Scalars['String']['input']>;
  veAllocation_not_contains?: InputMaybe<Scalars['String']['input']>;
  veAllocation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veAllocation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  veAllocation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veAllocation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veAllocation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  veAllocation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veAllocation_starts_with?: InputMaybe<Scalars['String']['input']>;
  veAllocation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VeAllocationUpdate_OrderBy {
  AllocatedTotal = 'allocatedTotal',
  Block = 'block',
  EventIndex = 'eventIndex',
  Id = 'id',
  Timestamp = 'timestamp',
  Tx = 'tx',
  Type = 'type',
  VeAllocation = 'veAllocation'
}

export type VeAllocation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allocated?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocated_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocated_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocated_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  allocated_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocated_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocated_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  allocated_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  allocationId?: InputMaybe<Scalars['String']['input']>;
  allocationId_?: InputMaybe<VeAllocateId_Filter>;
  allocationId_contains?: InputMaybe<Scalars['String']['input']>;
  allocationId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationId_ends_with?: InputMaybe<Scalars['String']['input']>;
  allocationId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationId_gt?: InputMaybe<Scalars['String']['input']>;
  allocationId_gte?: InputMaybe<Scalars['String']['input']>;
  allocationId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allocationId_lt?: InputMaybe<Scalars['String']['input']>;
  allocationId_lte?: InputMaybe<Scalars['String']['input']>;
  allocationId_not?: InputMaybe<Scalars['String']['input']>;
  allocationId_not_contains?: InputMaybe<Scalars['String']['input']>;
  allocationId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allocationId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allocationId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allocationId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationId_starts_with?: InputMaybe<Scalars['String']['input']>;
  allocationId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationUser?: InputMaybe<Scalars['String']['input']>;
  allocationUser_?: InputMaybe<VeAllocateUser_Filter>;
  allocationUser_contains?: InputMaybe<Scalars['String']['input']>;
  allocationUser_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationUser_ends_with?: InputMaybe<Scalars['String']['input']>;
  allocationUser_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationUser_gt?: InputMaybe<Scalars['String']['input']>;
  allocationUser_gte?: InputMaybe<Scalars['String']['input']>;
  allocationUser_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allocationUser_lt?: InputMaybe<Scalars['String']['input']>;
  allocationUser_lte?: InputMaybe<Scalars['String']['input']>;
  allocationUser_not?: InputMaybe<Scalars['String']['input']>;
  allocationUser_not_contains?: InputMaybe<Scalars['String']['input']>;
  allocationUser_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationUser_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  allocationUser_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationUser_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  allocationUser_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  allocationUser_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  allocationUser_starts_with?: InputMaybe<Scalars['String']['input']>;
  allocationUser_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  chainId?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  chainId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not?: InputMaybe<Scalars['BigInt']['input']>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  firstContact?: InputMaybe<Scalars['Int']['input']>;
  firstContact_gt?: InputMaybe<Scalars['Int']['input']>;
  firstContact_gte?: InputMaybe<Scalars['Int']['input']>;
  firstContact_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  firstContact_lt?: InputMaybe<Scalars['Int']['input']>;
  firstContact_lte?: InputMaybe<Scalars['Int']['input']>;
  firstContact_not?: InputMaybe<Scalars['Int']['input']>;
  firstContact_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastContact?: InputMaybe<Scalars['Int']['input']>;
  lastContact_gt?: InputMaybe<Scalars['Int']['input']>;
  lastContact_gte?: InputMaybe<Scalars['Int']['input']>;
  lastContact_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastContact_lt?: InputMaybe<Scalars['Int']['input']>;
  lastContact_lte?: InputMaybe<Scalars['Int']['input']>;
  lastContact_not?: InputMaybe<Scalars['Int']['input']>;
  lastContact_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nftAddress?: InputMaybe<Scalars['String']['input']>;
  nftAddress_contains?: InputMaybe<Scalars['String']['input']>;
  nftAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_gt?: InputMaybe<Scalars['String']['input']>;
  nftAddress_gte?: InputMaybe<Scalars['String']['input']>;
  nftAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftAddress_lt?: InputMaybe<Scalars['String']['input']>;
  nftAddress_lte?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updates_?: InputMaybe<VeAllocationUpdate_Filter>;
};

export enum VeAllocation_OrderBy {
  Allocated = 'allocated',
  AllocationId = 'allocationId',
  AllocationUser = 'allocationUser',
  Block = 'block',
  ChainId = 'chainId',
  EventIndex = 'eventIndex',
  FirstContact = 'firstContact',
  Id = 'id',
  LastContact = 'lastContact',
  NftAddress = 'nftAddress',
  Tx = 'tx',
  Updates = 'updates'
}

export type VeClaim = {
  __typename?: 'VeClaim';
  VeFeeDistributor: VeFeeDistributor;
  /** amount of tokens claimed */
  amount: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  /** claim epoch */
  claim_epoch?: Maybe<Scalars['BigInt']['output']>;
  eventIndex: Scalars['Int']['output'];
  /** id = {tx}-{eventno} */
  id: Scalars['ID']['output'];
  /** max_epoch */
  max_epoch?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  tx: Scalars['String']['output'];
  veOcean: VeOcean;
};

export type VeClaim_Filter = {
  VeFeeDistributor?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_?: InputMaybe<VeFeeDistributor_Filter>;
  VeFeeDistributor_contains?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_ends_with?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_gt?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_gte?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  VeFeeDistributor_lt?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_lte?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_contains?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  VeFeeDistributor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_starts_with?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  claim_epoch?: InputMaybe<Scalars['BigInt']['input']>;
  claim_epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claim_epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claim_epoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claim_epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claim_epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claim_epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
  claim_epoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  max_epoch?: InputMaybe<Scalars['BigInt']['input']>;
  max_epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
  max_epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
  max_epoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  max_epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
  max_epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
  max_epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
  max_epoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean?: InputMaybe<Scalars['String']['input']>;
  veOcean_?: InputMaybe<VeOcean_Filter>;
  veOcean_contains?: InputMaybe<Scalars['String']['input']>;
  veOcean_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_ends_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_gt?: InputMaybe<Scalars['String']['input']>;
  veOcean_gte?: InputMaybe<Scalars['String']['input']>;
  veOcean_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veOcean_lt?: InputMaybe<Scalars['String']['input']>;
  veOcean_lte?: InputMaybe<Scalars['String']['input']>;
  veOcean_not?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_contains?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veOcean_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_starts_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VeClaim_OrderBy {
  VeFeeDistributor = 'VeFeeDistributor',
  Amount = 'amount',
  Block = 'block',
  ClaimEpoch = 'claim_epoch',
  EventIndex = 'eventIndex',
  Id = 'id',
  MaxEpoch = 'max_epoch',
  Timestamp = 'timestamp',
  Tx = 'tx',
  VeOcean = 'veOcean'
}

export type VeDelegation = {
  __typename?: 'VeDelegation';
  amount: Scalars['BigDecimal']['output'];
  cancelTime: Scalars['BigInt']['output'];
  delegator: VeOcean;
  expireTime: Scalars['BigInt']['output'];
  /** id = VeDelegation contract + tokenId */
  id: Scalars['ID']['output'];
  lockedAmount: Scalars['BigDecimal']['output'];
  receiver: VeOcean;
  timeLeftUnlock: Scalars['Int']['output'];
  tokenId: Scalars['BigInt']['output'];
  updates?: Maybe<Array<VeDelegationUpdate>>;
};


export type VeDelegationUpdatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDelegationUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeDelegationUpdate_Filter>;
};

export type VeDelegationUpdate = {
  __typename?: 'VeDelegationUpdate';
  amount: Scalars['BigDecimal']['output'];
  block: Scalars['Int']['output'];
  cancelTime: Scalars['BigInt']['output'];
  eventIndex: Scalars['Int']['output'];
  expireTime: Scalars['BigInt']['output'];
  /** id = {tx}-{eventIndex} */
  id: Scalars['ID']['output'];
  sender: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
  tx: Scalars['String']['output'];
  /** type: CREATE_BOOST = 0, EXTEND_BOOST = 1, BURN_BOOST = 2 */
  type: Scalars['Int']['output'];
  veDelegation: VeDelegation;
};

export type VeDelegationUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cancelTime?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cancelTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  expireTime?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expireTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  type_gt?: InputMaybe<Scalars['Int']['input']>;
  type_gte?: InputMaybe<Scalars['Int']['input']>;
  type_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type_lt?: InputMaybe<Scalars['Int']['input']>;
  type_lte?: InputMaybe<Scalars['Int']['input']>;
  type_not?: InputMaybe<Scalars['Int']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  veDelegation?: InputMaybe<Scalars['String']['input']>;
  veDelegation_?: InputMaybe<VeDelegation_Filter>;
  veDelegation_contains?: InputMaybe<Scalars['String']['input']>;
  veDelegation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veDelegation_ends_with?: InputMaybe<Scalars['String']['input']>;
  veDelegation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veDelegation_gt?: InputMaybe<Scalars['String']['input']>;
  veDelegation_gte?: InputMaybe<Scalars['String']['input']>;
  veDelegation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veDelegation_lt?: InputMaybe<Scalars['String']['input']>;
  veDelegation_lte?: InputMaybe<Scalars['String']['input']>;
  veDelegation_not?: InputMaybe<Scalars['String']['input']>;
  veDelegation_not_contains?: InputMaybe<Scalars['String']['input']>;
  veDelegation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veDelegation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  veDelegation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veDelegation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veDelegation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  veDelegation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veDelegation_starts_with?: InputMaybe<Scalars['String']['input']>;
  veDelegation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VeDelegationUpdate_OrderBy {
  Amount = 'amount',
  Block = 'block',
  CancelTime = 'cancelTime',
  EventIndex = 'eventIndex',
  ExpireTime = 'expireTime',
  Id = 'id',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Tx = 'tx',
  Type = 'type',
  VeDelegation = 'veDelegation'
}

export type VeDelegation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cancelTime?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cancelTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  cancelTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<VeOcean_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  expireTime?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expireTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  expireTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockedAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lockedAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  receiver_?: InputMaybe<VeOcean_Filter>;
  receiver_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_gt?: InputMaybe<Scalars['String']['input']>;
  receiver_gte?: InputMaybe<Scalars['String']['input']>;
  receiver_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_lt?: InputMaybe<Scalars['String']['input']>;
  receiver_lte?: InputMaybe<Scalars['String']['input']>;
  receiver_not?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains?: InputMaybe<Scalars['String']['input']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with?: InputMaybe<Scalars['String']['input']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timeLeftUnlock?: InputMaybe<Scalars['Int']['input']>;
  timeLeftUnlock_gt?: InputMaybe<Scalars['Int']['input']>;
  timeLeftUnlock_gte?: InputMaybe<Scalars['Int']['input']>;
  timeLeftUnlock_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timeLeftUnlock_lt?: InputMaybe<Scalars['Int']['input']>;
  timeLeftUnlock_lte?: InputMaybe<Scalars['Int']['input']>;
  timeLeftUnlock_not?: InputMaybe<Scalars['Int']['input']>;
  timeLeftUnlock_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updates_?: InputMaybe<VeDelegationUpdate_Filter>;
};

export enum VeDelegation_OrderBy {
  Amount = 'amount',
  CancelTime = 'cancelTime',
  Delegator = 'delegator',
  ExpireTime = 'expireTime',
  Id = 'id',
  LockedAmount = 'lockedAmount',
  Receiver = 'receiver',
  TimeLeftUnlock = 'timeLeftUnlock',
  TokenId = 'tokenId',
  Updates = 'updates'
}

export type VeDeposit = {
  __typename?: 'VeDeposit';
  block: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  /** id = {user address}-{tx}-{eventIndex} */
  id: Scalars['ID']['output'];
  /** veOcean holder */
  provider: Scalars['String']['output'];
  /** who initiated the tx */
  sender: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  totalOceanLocked: Scalars['BigDecimal']['output'];
  tx: Scalars['String']['output'];
  /** deposit type: DEPOSIT_FOR = 0, CREATE_LOCK_TYPE = 1,INCREASE_LOCK_AMOUNT = 2,INCREASE_UNLOCK_TIME = 3, WITHDRAW = 4 */
  type: Scalars['BigInt']['output'];
  /** unlock timestamp */
  unlockTime: Scalars['BigInt']['output'];
  /** amount of tokens locked */
  value: Scalars['BigDecimal']['output'];
  veOcean: VeOcean;
};

export type VeDeposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_contains?: InputMaybe<Scalars['String']['input']>;
  provider_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_ends_with?: InputMaybe<Scalars['String']['input']>;
  provider_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_gt?: InputMaybe<Scalars['String']['input']>;
  provider_gte?: InputMaybe<Scalars['String']['input']>;
  provider_in?: InputMaybe<Array<Scalars['String']['input']>>;
  provider_lt?: InputMaybe<Scalars['String']['input']>;
  provider_lte?: InputMaybe<Scalars['String']['input']>;
  provider_not?: InputMaybe<Scalars['String']['input']>;
  provider_not_contains?: InputMaybe<Scalars['String']['input']>;
  provider_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  provider_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  provider_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  provider_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  provider_starts_with?: InputMaybe<Scalars['String']['input']>;
  provider_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOceanLocked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalOceanLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalOceanLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['BigInt']['input']>;
  type_gt?: InputMaybe<Scalars['BigInt']['input']>;
  type_gte?: InputMaybe<Scalars['BigInt']['input']>;
  type_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  type_lt?: InputMaybe<Scalars['BigInt']['input']>;
  type_lte?: InputMaybe<Scalars['BigInt']['input']>;
  type_not?: InputMaybe<Scalars['BigInt']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockTime?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  veOcean?: InputMaybe<Scalars['String']['input']>;
  veOcean_?: InputMaybe<VeOcean_Filter>;
  veOcean_contains?: InputMaybe<Scalars['String']['input']>;
  veOcean_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_ends_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_gt?: InputMaybe<Scalars['String']['input']>;
  veOcean_gte?: InputMaybe<Scalars['String']['input']>;
  veOcean_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veOcean_lt?: InputMaybe<Scalars['String']['input']>;
  veOcean_lte?: InputMaybe<Scalars['String']['input']>;
  veOcean_not?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_contains?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  veOcean_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  veOcean_starts_with?: InputMaybe<Scalars['String']['input']>;
  veOcean_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VeDeposit_OrderBy {
  Block = 'block',
  EventIndex = 'eventIndex',
  Id = 'id',
  Provider = 'provider',
  Sender = 'sender',
  Timestamp = 'timestamp',
  TotalOceanLocked = 'totalOceanLocked',
  Tx = 'tx',
  Type = 'type',
  UnlockTime = 'unlockTime',
  Value = 'value',
  VeOcean = 'veOcean'
}

export type VeFeeDistributor = {
  __typename?: 'VeFeeDistributor';
  checkpoints?: Maybe<Array<VeFeeDistributorCheckPoint>>;
  claims?: Maybe<Array<VeClaim>>;
  /** id = contract address */
  id: Scalars['ID']['output'];
  /** token used by FeeDistributor */
  token: Token;
};


export type VeFeeDistributorCheckpointsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeFeeDistributorCheckPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeFeeDistributorCheckPoint_Filter>;
};


export type VeFeeDistributorClaimsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeClaim_Filter>;
};

export type VeFeeDistributorCheckPoint = {
  __typename?: 'VeFeeDistributorCheckPoint';
  VeFeeDistributor: VeFeeDistributor;
  block: Scalars['Int']['output'];
  eventIndex: Scalars['Int']['output'];
  /** id = {tx}-{eventno} */
  id: Scalars['ID']['output'];
  /** who initiated the tx */
  sender: Scalars['String']['output'];
  timestamp: Scalars['BigInt']['output'];
  /** amount of tokens for rewards */
  tokens: Scalars['BigDecimal']['output'];
  tx: Scalars['String']['output'];
};

export type VeFeeDistributorCheckPoint_Filter = {
  VeFeeDistributor?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_?: InputMaybe<VeFeeDistributor_Filter>;
  VeFeeDistributor_contains?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_ends_with?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_gt?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_gte?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  VeFeeDistributor_lt?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_lte?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_contains?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  VeFeeDistributor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_starts_with?: InputMaybe<Scalars['String']['input']>;
  VeFeeDistributor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  eventIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not?: InputMaybe<Scalars['Int']['input']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  sender?: InputMaybe<Scalars['String']['input']>;
  sender_contains?: InputMaybe<Scalars['String']['input']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_gt?: InputMaybe<Scalars['String']['input']>;
  sender_gte?: InputMaybe<Scalars['String']['input']>;
  sender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_lt?: InputMaybe<Scalars['String']['input']>;
  sender_lte?: InputMaybe<Scalars['String']['input']>;
  sender_not?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains?: InputMaybe<Scalars['String']['input']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with?: InputMaybe<Scalars['String']['input']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokens_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokens_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokens_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokens_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokens_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokens_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokens_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tx?: InputMaybe<Scalars['String']['input']>;
  tx_contains?: InputMaybe<Scalars['String']['input']>;
  tx_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_gt?: InputMaybe<Scalars['String']['input']>;
  tx_gte?: InputMaybe<Scalars['String']['input']>;
  tx_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_lt?: InputMaybe<Scalars['String']['input']>;
  tx_lte?: InputMaybe<Scalars['String']['input']>;
  tx_not?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains?: InputMaybe<Scalars['String']['input']>;
  tx_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tx_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with?: InputMaybe<Scalars['String']['input']>;
  tx_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VeFeeDistributorCheckPoint_OrderBy {
  VeFeeDistributor = 'VeFeeDistributor',
  Block = 'block',
  EventIndex = 'eventIndex',
  Id = 'id',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Tokens = 'tokens',
  Tx = 'tx'
}

export type VeFeeDistributor_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  checkpoints_?: InputMaybe<VeFeeDistributorCheckPoint_Filter>;
  claims_?: InputMaybe<VeClaim_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum VeFeeDistributor_OrderBy {
  Checkpoints = 'checkpoints',
  Claims = 'claims',
  Id = 'id',
  Token = 'token'
}

export type VeOcean = {
  __typename?: 'VeOCEAN';
  allocation?: Maybe<VeAllocateUser>;
  block: Scalars['Int']['output'];
  claims?: Maybe<Array<VeClaim>>;
  delegates?: Maybe<Array<VeDelegation>>;
  delegation?: Maybe<Array<VeDelegation>>;
  deposits?: Maybe<Array<VeDeposit>>;
  /** id = {user address} */
  id: Scalars['ID']['output'];
  /** total amount of locked tokens */
  lockedAmount: Scalars['BigDecimal']['output'];
  /** unlock timestamp */
  unlockTime: Scalars['BigInt']['output'];
};


export type VeOceanClaimsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeClaim_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeClaim_Filter>;
};


export type VeOceanDelegatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeDelegation_Filter>;
};


export type VeOceanDelegationArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDelegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeDelegation_Filter>;
};


export type VeOceanDepositsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VeDeposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VeDeposit_Filter>;
};

export type VeOcean_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allocation_?: InputMaybe<VeAllocateUser_Filter>;
  block?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  claims_?: InputMaybe<VeClaim_Filter>;
  delegates_?: InputMaybe<VeDelegation_Filter>;
  delegation_?: InputMaybe<VeDelegation_Filter>;
  deposits_?: InputMaybe<VeDeposit_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockedAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lockedAmount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lockedAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  unlockTime?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlockTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VeOcean_OrderBy {
  Allocation = 'allocation',
  Block = 'block',
  Claims = 'claims',
  Delegates = 'delegates',
  Delegation = 'delegation',
  Deposits = 'deposits',
  Id = 'id',
  LockedAmount = 'lockedAmount',
  UnlockTime = 'unlockTime'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export enum VeAllocationUpdateType {
  Removed = 'REMOVED',
  Set = 'SET'
}

export type GetOrderQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
}>;


export type GetOrderQuery = { __typename?: 'Query', order?: { __typename?: 'Order', id: string, eventIndex: number, amount: any, serviceIndex: number, providerFee?: string | null, providerFeeValidUntil?: any | null, createdTimestamp: number, tx: string, block: number, lastPriceValue: any, estimatedUSDValue: any, gasUsed?: any | null, gasPrice?: any | null, datatoken: { __typename?: 'Token', id: string }, consumer: { __typename?: 'User', id: string }, payer: { __typename?: 'User', id: string }, nftOwner: { __typename?: 'User', id: string }, publishingMarket?: { __typename?: 'User', id: string } | null, publishingMarketToken?: { __typename?: 'Token', id: string } | null, consumerMarket?: { __typename?: 'User', id: string } | null, consumerMarketToken?: { __typename?: 'Token', id: string } | null, lastPriceToken?: { __typename?: 'Token', id: string } | null } | null };

export type GetOrdersQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
}>;


export type GetOrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', id: string, block: number, amount: any, createdTimestamp: number, consumer: { __typename?: 'User', id: string } }> };

export type GetUserQueryVariables = Exact<{
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, totalOrders: any, totalSales: any } | null };


export const GetOrderDocument = gql`
    query GetOrder($block: Block_height, $id: ID!, $subgraphError: _SubgraphErrorPolicy_! = deny) {
  order(block: $block, id: $id, subgraphError: $subgraphError) {
    id
    eventIndex
    datatoken {
      id
    }
    consumer {
      id
    }
    payer {
      id
    }
    amount
    serviceIndex
    nftOwner {
      id
    }
    publishingMarket {
      id
    }
    publishingMarketToken {
      id
    }
    providerFee
    providerFeeValidUntil
    consumerMarket {
      id
    }
    consumerMarketToken {
      id
    }
    createdTimestamp
    tx
    eventIndex
    block
    lastPriceToken {
      id
    }
    lastPriceValue
    estimatedUSDValue
    gasUsed
    gasPrice
  }
}
    `;
export const GetOrdersDocument = gql`
    query GetOrders($block: Block_height, $first: Int = 100, $orderBy: Order_orderBy, $orderDirection: OrderDirection, $skip: Int = 0, $subgraphError: _SubgraphErrorPolicy_! = deny, $where: Order_filter) {
  orders(
    block: $block
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    skip: $skip
    subgraphError: $subgraphError
    where: $where
  ) {
    id
    block
    consumer {
      id
    }
    amount
    createdTimestamp
  }
}
    `;
export const GetUserDocument = gql`
    query GetUser($block: Block_height, $id: ID!, $subgraphError: _SubgraphErrorPolicy_! = deny) {
  user(block: $block, id: $id, subgraphError: $subgraphError) {
    id
    totalOrders
    totalSales
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetOrder(variables: GetOrderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOrderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrderQuery>(GetOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOrder', 'query');
    },
    GetOrders(variables?: GetOrdersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrdersQuery>(GetOrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOrders', 'query');
    },
    GetUser(variables: GetUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUser', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;