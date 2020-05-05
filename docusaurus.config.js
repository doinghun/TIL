module.exports = {
  title: "Today Dohun Learned",
  tagline: "Public Archive of Everything I Learned",
  url: "https://doinghun.github.io",
  baseUrl: "/TIL/",
  favicon: "img/TIL.png",
  organizationName: "doinghun", // Usually your GitHub org/user name.
  projectName: "TIL", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/TIL.png",
      },
      links: [
        { to: "docs/set-vs-map", label: "Docs", position: "left" },
        {
          href: "https://github.com/doinghun/TIL",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "JavaScript",
              to: "docs/set-vs-map",
            },
            {
              label: "React",
              to: "docs/prop-vs-state",
            },
            {
              label: "CSS",
              to: "docs/em-vs-rem",
            },
          ],
        },

        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://dohun.xyz",
            },
            {
              label: "GitHub",
              href: "https://github.com/doinghun/TIL",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/dotheVsign",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TIL, Inc. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: "UA-149595338-1",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/doinghun/TIL/edit/master/website/",
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}
