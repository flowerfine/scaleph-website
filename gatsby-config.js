require("dotenv").config();
module.exports = {
  pathPrefix: "/scaleph-website",
  plugins: [
    {
      resolve: "@scaleph/scaleph-gatsby-theme",
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
    siteUrl: "https://flowerfine.github.io/scaleph-website/",
    logo: {
      img:
        "https://github.com/flowerfine/scaleph/raw/e9151fec13875881c38fece98588e9dee371575f/scaleph-ui-react/public/scaleph.svg",
      link: "https://flowerfine.github.io/scaleph-website/"
    },
    logoUrl:
      "https://github.com/flowerfine/scaleph/raw/e9151fec13875881c38fece98588e9dee371575f/scaleph-ui-react/public/scaleph.svg",
    githubUrl: "https://github.com/flowerfine/scaleph",
    docsUrl: "https://github.com/flowerfine/scaleph-website",
    navs: [
      {
        slug: "docs/guide/overview",
        title: {
          en: "Overview",
          zh: "概览"
        }
      },
      {
        slug: "docs/contribute/develop",
        title: {
          en: "Develop",
          zh: "开发文档"
        }
      },
      {
        slug: "docs/design/design",
        title: {
          en: "Design",
          zh: "功能设计"
        }
      },
      {
        slug: "docs/roadmap/roadmap",
        title: {
          en: "Roadmap",
          zh: "路线图"
        }
      }
      /*
      {
        slug: "https://marketplace.opentrs.cn/square",
        title: {
          en: "Marketplace",
          zh: "插件市场"
        }
      }*/
    ],
    docs: [
      {
        slug: "guide/quick-start",
        title: {
          zh: "快速开始",
          en: "Quick Start"
        },
        order: 3
      },
      {
        slug: "design/storage",
        title: {
          zh: "存储功能",
          en: "Storage"
        },
        order: 3
      },
      {
        slug: "design/kubernetes",
        title: {
          zh: "Flink Kubernetes",
          en: "Flink Kubernetes"
        },
        order: 5
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
