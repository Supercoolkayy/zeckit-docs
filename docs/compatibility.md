---
title: Compatibility
description: Supported OSes and requirements for running ZecKit.
---

## Supported platforms

| Platform | Status | Notes |
| --- | --- | --- |
| macOS | ✅ Supported | Recommended with Docker Desktop |
| Linux | ✅ Supported | Works with Docker Engine |
| Windows | ⚠️ Limited | Use **WSL2** + Docker |

## Requirements

| Dependency | Why you need it |
| --- | --- |
| Rust (Cargo) | Install/build the `zeckit` CLI |
| Docker | Run the local devnet services |

## Install guides

### Rust

- Install Rust via rustup: [rustup.rs](https://rustup.rs/)
- Official Rust install docs: [Install Rust](https://www.rust-lang.org/tools/install)

### Docker

| Platform | Recommended |
| --- | --- |
| macOS | [Docker Desktop for Mac](https://docs.docker.com/desktop/setup/install/mac-install/) |
| Windows | [Docker Desktop for Windows](https://docs.docker.com/desktop/setup/install/windows-install/) (commonly with WSL2) |
| Linux | [Install Docker Engine](https://docs.docker.com/engine/install/) |

:::tip
**Windows:** If you hit issues on Windows, try reproducing in **WSL2** first—most problems are Docker/host integration.
:::
