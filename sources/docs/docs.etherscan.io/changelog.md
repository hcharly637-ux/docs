# Source: https://docs.etherscan.io/changelog

[​](https://docs.etherscan.io/#may-2026)

May 2026

## 

[​](https://docs.etherscan.io/#upcoming-change-reduced-maximum-records-per-request-on-the-free-api-tier)

\[Upcoming Change\] Reduced Maximum Records Per Request on the Free API Tier

**Updated:** May 1, 2026**Effective date:** July 1, 2026The maximum number of records returned per request will be reduced from **10,000 to 1,000** for **Free tier API users**. This change affects the following endpoints:

- [Get Beacon Chain Withdrawals by Address](https://docs.etherscan.io/api-reference/endpoint/txsbeaconwithdrawal)
- [Get Blocks Validated by Address](https://docs.etherscan.io/api-reference/endpoint/getminedblocks)
- [Get ERC20 Token Transfers by Address](https://docs.etherscan.io/api-reference/endpoint/tokentx)
- [Get ERC721 Token Transfers by Address](https://docs.etherscan.io/api-reference/endpoint/tokennfttx)
- [Get ERC1155 Token Transfers by Address](https://docs.etherscan.io/api-reference/endpoint/token1155tx)
- [Get Ethereum Nodes Size](https://docs.etherscan.io/api-reference/endpoint/chainsize)
- [Get Event Logs by Address](https://docs.etherscan.io/api-reference/endpoint/getlogs)
- [Get Internal Transactions by Address](https://docs.etherscan.io/api-reference/endpoint/txlistinternal)
- [Get Normal Transactions By Address](https://docs.etherscan.io/api-reference/endpoint/txlist)
- [Get Plasma Deposits by Address](https://docs.etherscan.io/api-reference/endpoint/txnbridge)
- [Get Token Holder List by Contract Address](https://docs.etherscan.io/api-reference/endpoint/tokenholderlist)

**What you need to do:** Update your integration for the above endpoints to paginate records in batches of 1,000 or fewer.**Note:** If your application does not use any of the endpoints listed above, no action is required.

## 

[​](https://docs.etherscan.io/#upcoming-change-get-internal-transactions-by-block-range-endpoint-moving-to-pro-plans)

\[Upcoming Change\] Get Internal Transactions by Block Range Endpoint Moving to Pro Plans

**Updated:** May 1, 2026**Effective date:** July 1, 2026[Get Internal Transactions by Block Range](https://docs.etherscan.io/api-reference/endpoint/txlistinternal-blockrange) will be moved to Pro endpoint.**What you need to do:** If your application relies on this endpoint, check your plan tier and upgrade if needed, or update your integration.**Note:** If your application does not use any of the endpoints listed above, no action is required.

[​](https://docs.etherscan.io/#april-2026)

April 2026

## 

[​](https://docs.etherscan.io/#scroll-mainnet-&-sepolia-testnet-deprecation)

Scroll Mainnet & Sepolia Testnet deprecation

Scroll Mainnet (chainid: 534352) and Scroll Sepolia Testnet (chainid: 534351) API support will be deprecated effective April 16, 2026.After this date, API requests to these chains will no longer be supported.

[​](https://docs.etherscan.io/#february-2026)

February 2026

## 

[​](https://docs.etherscan.io/#memecore-formicarium-testnet-migration)

MemeCore Formicarium Testnet migration

MemeCore Formicarium Testnet (chainid: 43521) has migrated to Insectarium Testnet (chainid: 43522) effective February 25, 2026.API requests should now use the Insectarium Testnet (chainid: 43522) endpoint.

## 

[​](https://docs.etherscan.io/#swell-mainnet-&-testnet-deprecation)

Swell Mainnet & Testnet deprecation

Swell Mainnet (chainid: 1923) and Swell Testnet (chainid: 1924) API support has been deprecated effective February 25, 2026.API requests to these chains are no longer supported.

⌘I