---
title: zeckit test
description: Run an end-to-end test against the local devnet.
---

## Usage

```bash
zeckit test [options]
```

## Options

| Option | Value | Description |
| --- | --- | --- |
| `--amount` | number | Amount to send/spend in the test (when applicable) |
| `--memo` | string | Memo to include (when applicable) |
| `--check` | flag | Run extra checks/assertions (when supported) |

## Example

```bash
zeckit test --check
```

:::note
Exact flags and semantics may vary as the CLI evolves—if a flag isn’t recognized, run `zeckit test --help`.
:::
