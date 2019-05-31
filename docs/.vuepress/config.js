const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
dest: './solid-kubernetes',
base: "/docs/",
ga: 'UA-132184138-2',
locales: {
    '/': {
        lang: 'en-US',
        title: 'Solid Kubernetes',
        description: 'Building a kubernetes guide based on real world experiences'
    },
    // '/zh/': {
    //     lang: 'zh-CN',
    //     title: 'Solid Kubernetes',
    //     description: 'Building a kubernetes guide based on real world experiences'
    // }
},
head: [
    ['link', { rel: 'icon', href: `/tesseract.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
],
extend: '@vuepress/theme-default',
themeConfig: {
    repo: 'rjain15/solid-kubernetes',
    editLinks: true,
    logo: '../tesseract.png',
    docsDir: 'docs',
    lastUpdated: false,

    // #697 Provided by the official algolia team.
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,
    locales: {
        '/': {
            label: 'English',
            selectText: 'Languages',
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
            sidebar: [
                ["/", "Home"],
                ["./gettingstarted/", "Getting Started"],
                "./rbac/",
                "./tls/",
                "./loadbalancing/",
                "./ingress/",
                "./cicd/",
                "./servicediscovery/",
                "./servicemesh/",
                "./monitoring/",
                "./logging/",
                "./tracing/",
                "./ha/",
              ],
              nav: require('./nav/en'),
        }
    }
},
plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
        ga: 'UA-128189152-1'
    }],
    ['container', {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
    }],
    ['container', {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>',
    }],
],
extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js',
]
})

function getGuideSidebar () {
    return [
        {
            title: "Solid Kubernetes",
            collapsable: false,
                children: [
                    '',
                    'getting-started',
                    'directory-structure',
                    'basic-config',
                    'assets',
                    'markdown',
                    'using-vue',
                    'i18n',
                    'deploy',
                ]
        }
    ]
}

const officalPlugins = fs
.readdirSync(path.resolve(__dirname, '../plugin/official'))
.map(filename => 'official/' + filename.slice(0, -3))
.sort()

