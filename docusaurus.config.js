const math = require('remark-math');
const katex = require('rehype-katex');

const { appendPath, getFirstContent } = require('./src/utils');
const { CATEGORY_SLUGS } = require('./src/utils/constants');

const docNavs = Object.entries(CATEGORY_SLUGS).map(
  ([category, categorySlug]) => ({
    to: getFirstContent(category),
    activeBasePath: appendPath('docs', category),
    label: categorySlug,
  })
);

const docFooters = docNavs.map(({ to, label }) => ({ to, label }));

module.exports = {
  title: 'Today Dohun Learned',
  tagline: 'Public Archive of Everything I Learned',
  url: 'https://doinghun.github.io/TIL',
  baseUrl: '/',
  favicon: 'img/TIL.png',
  organizationName: 'doinghun', // Usually your GitHub org/user name.
  projectName: 'TIL', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/TIL.png',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [...docNavs],
        },
        {
          href: 'https://dohun.xyz/about',
          label: 'About',
          position: 'right',
        },
        {
          href: 'https://dohun.xyz',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/doinghun/TIL',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [...docFooters],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://dohun.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/doinghun/TIL',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dotheVsign',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TIL, Inc. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-149595338-1',
    },
    algolia: {
      apiKey: 'b9cc66726951000cf12231b88155cd4c',
      indexName: 'dohun',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/doinghun/TIL/edit/master/website/',
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
};
