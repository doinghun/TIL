module.exports = {
  title: 'Today I Learnt',
  tagline: 'Public Archive of Everything I Learnt',
  url: 'https://doinghun.github.io',
  baseUrl: '/TIL/',
  favicon: 'img/favicon.ico',
  organizationName: 'doinghun', // Usually your GitHub org/user name.
  projectName: 'TIL', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TIL',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
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
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
      
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://doinghun.github.io/',
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/doinghun/TIL/edit/master/website/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
