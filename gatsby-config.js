require("dotenv").config();
module.exports = {
  plugins: [
    {
      resolve: "@opensumi/gatsby-theme",
      options: {
        // GATrackingId: 'G-63DR4G0WD7',
        theme: {
          "primary-color": "#9f5fdb"
        },
        pwa: true,
        cname: false,
        codeSplit: true
      }
    }
  ],
  siteMetadata: {
    title: "Scaleph",
    description:
      "基于 Flink 和 Kubernetes 的开放数据平台，支持基于 SeaTunnel 的拖拉拽数据集成和 YARN 与 Kubernetes 集群上的 Flink 任务管理 - Open data platform based on Flink and Kubernetes, supports web-ui click-and-drop data integration with SeaTunnel on Flink, manage flink jar job both YARN and Kubernetes",
    siteUrl: "https://flowerfine.github.io/scaleph/",
    logo: {
      img:
        "https://github.com/flowerfine/scaleph/blob/dev/scaleph-ui-react/public/scaleph.svghttps://github.com/flowerfine/scaleph/blob/dev/scaleph-ui-react/public/scaleph.svg",
      link: "https://flowerfine.github.io/scaleph/"
    },
    logoUrl:
      "https://github.com/flowerfine/scaleph/blob/dev/scaleph-ui-react/public/scaleph.svg",
    githubUrl: "https://github.com/flowerfine/scaleph",
    docsUrl: "https://github.com/flowerfine/scaleph-website",
    navs: [
      {
        slug: "docs/integrate/overview",
        title: {
          en: "Documentation",
          zh: "集成文档"
        }
      },
      {
        slug: "docs/develop/how-to-contribute",
        title: {
          en: "Development",
          zh: "开发文档"
        }
      },
      {
        slug: "https://marketplace.opentrs.cn/square",
        title: {
          en: "Marketplace",
          zh: "插件市场"
        }
      }
    ],
    docs: [
      {
        slug: "integrate/quick-start",
        title: {
          zh: "快速开始",
          en: "Quick Start"
        },
        order: 1
      },
      {
        slug: "integrate/universal-integrate-case",
        title: {
          zh: "常见集成场景",
          en: "Integrate Case"
        },
        order: 2
      },
      {
        slug: "integrate/module-usage",
        title: {
          zh: "模块使用",
          en: "Module Usage"
        },
        order: 3
      },
      {
        slug: "integrate/browser-extension",
        title: {
          zh: "浏览器插件",
          en: "Browser Extension"
        },
        order: 4
      },
      {
        slug: "develop/basic-design",
        title: {
          zh: "基础设计",
          en: "Basic Design"
        },
        order: 4
      },
      {
        slug: "develop/module-apis",
        title: {
          zh: "模块 API",
          en: "Modules API"
        },
        order: 5
      },
      {
        slug: "develop/sample",
        title: {
          zh: "经典案例",
          en: "Sample"
        },
        order: 6
      }
    ],
    showDingTalkQRCode: false,
    // dingTalkQRCode:
    //   'https://img.alicdn.com/imgextra/i1/O1CN01k3gCmL1HWPjLchVv7_!!6000000000765-0-tps-200-199.jpg',
    showSearch: false, // 是否展示搜索框
    showChinaMirror: false, // 是否展示国内镜像链接
    showLanguageSwitcher: false, // 用于定义是否展示语言切换
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    // docsearchOptions: {
    //   appId: 'TJ9L5P0JEZ',
    //   apiKey: 'ea572740263d426554e711fca503c754',
    //   indexName: 'opensumi'
    // },
    redirects: []
  }
};
