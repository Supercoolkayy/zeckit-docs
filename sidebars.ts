import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'quickstart',
    'contributor-overview',
    'maintainer-ci',
    {
      type: 'category',
      label: 'CLI',
      items: ['cli/up', 'cli/test', 'cli/status', 'cli/down', 'cli/init'],
    },
    'troubleshooting',
    'compatibility',
    'security',
  ],
};
export default sidebars;
