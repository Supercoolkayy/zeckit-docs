---
title: zeckit up
description: Start a local Zcash devnet and supporting services.
---

## Usage

```bash
zeckit up [options]
```

## What it does

Starts the local devnet and common supporting services (faucet, miner, indexer).

## Options

| Option | Value | Description |
| --- | --- | --- |
| `--backend` | `lwd` \| `zaino` | Select the backend |
| `--fresh` | flag | Start from a clean state (when supported) |
| `--timeout` | seconds | Maximum wait time for services to become healthy |
| `--fund-address` | address | Address to fund (if supported by your setup) |
| `--fund-amount` | amount | Amount to fund (if supported by your setup) |

## Examples

Start with the `zaino` backend:

```bash
zeckit up --backend zaino
```

Start fresh with a longer timeout:

```bash
zeckit up --fresh --timeout 300
```

:::tip
Use `zeckit status` while booting to see what’s still unhealthy.
:::
