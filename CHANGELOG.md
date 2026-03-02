# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- `CODE_OF_CONDUCT.md` — GoDaddy Contributor Covenant
- `CONTRIBUTING.md` — contribution guidelines
- `SECURITY.md` — security vulnerability reporting process
- `.github/workflows/publish.yml` — automated npm publishing via OIDC trusted publishing on `v*` tag push

### Changed
- Use default npm registry
- `LICENSE` — updated copyright from Poynt Co. to GoDaddy Operating Company, LLC.
- `package.json` — updated repository, bugs, and homepage URLs to `github.com/godaddy/poynt-node`; updated author to GoDaddy
- `CHANGELOG.md` — reformatted to Keep a Changelog standard; backfilled missing versions

## [0.0.48]
### Added
- `customUserAgentPrefix` option to customize the User-Agent header on all requests

## [0.0.47]
### Added
- Optional `source` parameter to `nakedRequest` for custom User-Agent headers

## [0.0.46]
### Added
- Support `storeId` parameter in tokenize API

## [0.0.45]
### Added
- `channelId` parameter to `chargeToken`
- Updated `uuid` dependency to v9

## [0.0.43]
### Added
- Support for `fundingSourceType` in charge requests

## [0.0.42]
### Added
- `getMerchantPaymentAccount` endpoint

## [0.0.41]
### Added
- Support for transaction cancellation

## [0.0.40]
### Added
- Currency support in `refundTransaction`

## [0.0.39]
### Added
- Ability to pass `source` of transaction during token charge

## [0.0.36]
### Added
- `requestId` validation for idempotent transaction retries

## [0.0.35]
### Changed
- Updated Applications API fields

## [0.0.34]
### Added
- Local environment URL support

## [0.0.33]
### Changed
- Moved `/api/services` prefix to individual function calls

## [0.0.32]
### Changed
- Government identification migration (PON-297)

## [0.0.31]
### Added
- `referralUrlId`, `name`, `site`, and `businessCategory` fields in `createApplication`
- `createBusiness` flag for `createApplication`

## [0.0.27]
### Added
- Apple Pay merchant registration v2
- GDP-by-default support

## [0.0.20]
### Added
- `refundTransaction` endpoint

## [0.0.16]
### Added
- Processing accounts API
- Poynt Collect: `tokenizeCard`, `chargeToken`, `charge` methods
- Invoicing APIs: `getInvoices`, `getInvoice`, `createInvoice`, `sendInvoiceReminder`, `cancelInvoice`
- Business application APIs
- Payment bridge cloud message API (`sendPaymentBridgeMessage`)
- Apple Pay domain association and merchant registration APIs
- `partialAuthEnabled` flag on charge requests
- `createTransaction`, `createOrder`, `completeOrder` endpoints
- Test and OTE environment support
- Pricing profile API (PON-27)

## [0.0.7] - 2019-09-25
### Added
- Reports APIs: `getReports`, `createReport`

## [0.0.6] - 2018-09-07
### Added
- Support for `eu` region (`services-eu.poynt.net` endpoint)

## [0.0.5] - 2017-08-28
### Added
- `deleteCatalog`, `getHook`, `deleteHook`, `getBusinessByDeviceId` endpoints

## [0.0.4] - 2017-08-27
### Added
- Cloud messages: `sendRawCloudMessage`, `sendCloudMessage`
- Webhooks: `getHooks`, `createHook`
- Store, catalog, category, product, and tax management endpoints

## [0.0.2] - 2017-08-24
### Added
- `getOrders`, `getOrder`, `getTransactions`, `getTransaction`
- `getBusinessUsers`, `getBusinessUser`, `getCustomers`, `getCustomer`
- `getCatalogs`, `getCatalog`, `getFullCatalog`, `getCategory`
- `getProducts`, `lookupProducts`, `getProduct`, `getTaxes`, `getTax`

## [0.0.1] - 2017-08-23
### Added
- Initial release
- Authentication using application private key
- `getBusiness` endpoint
