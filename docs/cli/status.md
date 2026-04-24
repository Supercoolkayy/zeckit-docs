---
title: zeckit status
description: Show container status and service health for the local devnet.
---

## Usage

```bash
zeckit status
```

## What you’ll see

Typically includes health for services like:

- `faucet`
- `miner`
- `sync`

:::tip
If you’re debugging startup, run `zeckit status` repeatedly while `zeckit up` is waiting for services.
:::
