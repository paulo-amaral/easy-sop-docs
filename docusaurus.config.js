/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Documentação de Servidores do TRIBUNAL',
    tagline: 'Tribunal de Recurso TIMOR-LESTE',
    url: 'https://docs.tribunais.tl',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Tribunal',
    projectName: 'Tribunal',
    plugins: //for tag manager - install the plugin
        [[ require.resolve('docusaurus-lunr-search'), 
          {
            languages: ['en', 'pt'], // language codes
            indexBaseUrl: true,
          }],
        ],
           
    themeConfig: {
        prism: {
            additionalLanguages: ['java', 'csharp', 'ruby', 'rust', 'swift', 'dart'],
        },
        tagManager: {
            trackingID: '',
        },
        navbar: {
            title: 'Tribunal de Recurso',
            logo: {
                alt: 'TR Logo',
                src: 'img/logo.png',
            },
            items: [
                // {
                //     type: 'doc',
                //     docId: 'intro',
                //     position: 'left',
                //     label: 'Documentos',
                // },
                {
                    to: 'https://www.tribunais.tl',
                    label: 'Website',
                    position: 'left',
                },
                {
                    href: 'https://git.tribunais.tl',
                    label: 'GitLab TR',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'TIC - Tribunal de Recurso',
                    items: [
                        {
                            label: 'docs.tribunais.tl',
                            to: 'https://docs.tribunais.tl/',
                        },
                       
                    ],
                },
                {
                    title: 'GIT',
                    items: [
                        {
                            label: 'Git Tribunais',
                            href: 'https://git.tribunais.tl',
                        },
                    ],
                },
                
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Tribunal de Recurso.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                   // editUrl: 'https://git.tribunais.tl/apps/sop-docs/-/tree/main/docs',
                   editUrl: undefined,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
