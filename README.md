# ZecKit documentation

Documentation site for **[ZecKit](https://github.com/intelliDean/ZecKit)**—local Zcash devnet tooling and E2E testing. Built with [Docusaurus](https://docusaurus.io/) 3.

## Requirements

- **Node.js** 20 or newer (see `package.json` → `engines`)

## Setup

```bash
npm install
```

## Local development

```bash
npm run start
```

Starts the dev server (usually at [http://localhost:3000](http://localhost:3000)). Most edits under `docs/` and `src/` hot-reload.

## Production build

```bash
npm run build
```

Outputs a static site in `build/`. Preview it locally:

```bash
npm run serve
```

## Other scripts

| Command | Purpose |
| --- | --- |
| `npm run typecheck` | Run TypeScript (`tsc`) |
| `npm run clear` | Clear the Docusaurus cache (`.docusaurus`) |

## Project layout

| Path | Role |
| --- | --- |
| `docs/` | Markdown and MDX documentation pages |
| `docusaurus.config.ts` | Site URL, theme, navbar, footer |
| `sidebars.ts` | Docs sidebar structure |
| `src/css/custom.css` | Global styles |

## Deployment

Deploy the contents of `build/` to any static host, or use Docusaurus deploy (for example GitHub Pages):

```bash
npm run deploy
```

See [Docusaurus deployment](https://docusaurus.io/docs/deployment) for SSH, environment variables, and provider-specific steps.
