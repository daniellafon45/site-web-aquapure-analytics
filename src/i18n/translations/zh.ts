import type { Translations } from "../types";

export const zh: Translations = {
  meta: {
    homeTitle: "AquaPure Analytics — 降低废水处理成本",
    homeDescription:
      "化学品、能源、实验室分析：用现有传感器与 AI 实时管理废水。数据托管于魁北克。",
    digitalTwinTitle: "数字孪生 — AquaPure Analytics",
    digitalTwinDescription:
      "了解 AquaPure 如何连接您的数据库并使用自托管的 AI 代理来自动化工业流程并优化实时控制。",
    blogTitle: "AquaPure Analytics 博客",
    blogDescription:
      "为魁北克的市政、采矿、纸浆造纸和食品加工水务管理者提供新闻、分析与专业见解。",
    notFoundTitle: "页面未找到",
    notFoundBody: "您要查找的页面不存在或已被移动。",
    errorTitle: "页面加载失败",
    errorBody: "我们这端发生了问题。",
    backHome: "返回首页",
    retry: "重试",
  },
  nav: {
    sectors: "行业",
    features: "功能",
    integrations: "集成",
    digitalTwin: "数字孪生",
    blog: "博客",
    contact: "联系我们",
    requestDemo: "申请演示",
    demoShort: "演示",
    openMenu: "打开菜单",
    menu: "菜单",
    language: "语言",
  },
  footer: {
    sectorsTitle: "行业领域",
    companyTitle: "公司",
    blog: "博客",
    privacy: "隐私政策",
    linkedInAria: "AquaPure Analytics 的 LinkedIn 页面",
    sectors: [
      { label: "市政用水", href: "/#eaux-municipales" },
      { label: "采矿", href: "/#mine" },
      { label: "纸浆与造纸", href: "/#pate-et-papier" },
      { label: "食品与饮料", href: "/#agroalimentaire" },
    ],
  },
  consent: {
    ariaLabel: "数据收集同意",
    message:
      "我们使用必要 Cookie 记住您的偏好，并仅在您同意的情况下启用分析工具，符合魁北克第 25 号法案与加拿大 PIPEDA。",
    accept: "接受",
    reject: "拒绝",
    learnMore: "隐私政策",
  },
  home: {
    hero: {
      title: "降低废水处理成本，在账单不断攀升之前",
      subtitle:
        "将数据转化为即时决策：减少浪费、提升控制力、实现可持续绩效 — 无需扰乱现有运营。",
      hosting: "您的数据留在魁北克，托管在本地。",
      contact: "了解如何降低成本",
      demo: "申请演示",
    },
    industries: {
      eyebrow: "我们的行业",
      title: "为复杂的运营环境而设计",
      description:
        "将您的 ESG 承诺转化为可衡量的运营成果：降低用水、减少碳足迹并以可被团队与利益相关者证明的精确度记录进展，采用实时分析与 AI，受魁北克行业信赖。",
      scheduleMeeting: "安排会议",
      items: [
        {
          id: "eaux-municipales",
          label: "市政用水",
          title: "优化处理，控制成本与环境影响。",
          desc: "实时管理水处理运行，降低化学品与能源成本，稳定工艺流程，并减少市政水厂的环境足迹。",
        },
        {
          id: "mine",
          label: "采矿",
          title: "强化 Directive 019 合规监测。",
          desc: "实时监控矿山水水质及法规阈值，重点关注重金属：提前发现偏差，记录合规数据并降低环境风险。",
        },
        {
          id: "pate-et-papier",
          label: "纸浆与造纸",
          title: "工艺用水精控，生物消化增效。",
          desc: "实时管理工艺用水并优化废水生物消化：稳定工艺流程，提高生物处理效率并降低处理成本。",
        },
        {
          id: "agroalimentaire",
          label: "食品与饮料",
          title: "持续的质量与合规性。",
          desc: "在食品工艺中保障用水质量，提供智能分析、主动告警与完整可追溯性。",
        },
      ],
    },
    features: {
      title: "功能",
      ergonomic:
        "界面高度符合人体工学，设计直观且易于使用。",
      body: "我们部署与您现有基础设施互操作的系统，并将每个模块根据实际需求定制，使技术加速运营而非增加复杂性。",
      learnMore: "了解更多",
      items: [
        {
          id: "connect-external-db",
          label: "连接外部数据库",
          category: "数据集成\n与连接性",
          title: "实时传感器数据",
          description:
            "查看每一条读数、每一台设备、每一条工艺线，并在问题变得昂贵之前采取行动。",
        },
        {
          id: "import",
          label: "导入",
          category: "数据集成\n与连接性",
          title: "导入与导出",
          description:
            "以对报告、审计与决策重要的格式和时间范围检索历史数据。",
        },
        {
          id: "invite-team",
          label: "邀请团队",
          category: "协作",
          title: "团队管理",
          description:
            "集中管理角色、现场活动与运营跟踪，为组织提供单一可信来源。",
        },
        {
          id: "share-project",
          label: "共享项目",
          category: "协作",
          title: "报告编辑器",
          description:
            "生成清晰且可共享的报告，增强利益相关方的信任。",
        },
        {
          id: "mission-scoot",
          label: "现场任务",
          category: "协作",
          title: "现场任务",
          description:
            "在正确的时间将技术人员派到正确的位置，附带照片证据、GPS 和精确指令。",
        },
        {
          id: "erd",
          label: "ERD 图",
          category: "模式管理",
          title: "ERD 图",
          description:
            "一目了然地理解数据结构，加快每次集成的速度。",
        },
        {
          id: "apis",
          label: "API",
          category: "集成\n与自动化",
          title: "数字孪生与 API",
          description:
            "从统一平台控制参数、安全阈值与 SCADA 权限。",
        },
        {
          id: "automate",
          label: "PLC 集成",
          category: "集成\n与自动化",
          title: "SCADA 连接",
          description:
            "将您的 PLC 与工业系统（PI、Ignition、Wonderware）连接，无需重头开始。",
        },
      ],
    },
    stats: {
      monitoring: "对您的工业流程进行智能化管控",
      energy: "可量化的能源消耗减少",
      carbon: "切实减少碳足迹",
    },
    integrations: {
      title: "兼容您的生产环境",
      description:
        "连接您当前使用的 PLC 与协议 — Modbus、OPC UA、Siemens、Schneider 等 — 无需重构基础设施。",
    },
    partners: {
      title: "得到魁北克创新生态系统的支持",
      description:
        "由值得信赖的创新领导者支持的成熟技术，加速您的数字化转型并增强信心。",
    },
    contact: {
      title: "让我们讨论您的项目",
      subtitle:
        "了解 AquaPure Analytics 如何通过量身定制的策略提升您的环境与经济绩效，适配您的运营现实。",
      formTitle: "描述您的需求",
      firstName: "名",
      lastName: "姓",
      email: "电子邮件",
      phone: "电话",
      company: "公司",
      website: "网站",
      websitePlaceholder: "例如 aquapure-analytics.com",
      need: "您的需求",
      needPlaceholder:
        "描述您的运营挑战、ESG 目标或目标行业…",
      submit: "发送请求",
      submitting: "发送中…",
      successTitle: "请求已成功提交",
      successBody:
        "AquaPure 团队成员将审核您的需求，并在一至两个工作日内与您联系，安排一次针对您运营的深入讨论。",
      honeypot: "请勿填写",
      privacyConsentBefore: "我同意按照",
      privacyConsentLink: "隐私政策",
      privacyConsentAfter: "处理我的个人信息。",
      errors: {
        lastName: "姓氏为必填项。",
        firstName: "名字为必填项。",
        emailRequired: "电子邮件为必填项。",
        emailInvalid: "请输入有效的电子邮件地址。",
        message: "请描述您的需求。",
        messageTooLong: "消息不能超过 5000 个字符。",
        emailTooLong: "电子邮件过长。",
        consentRequired: "提交请求前必须接受隐私政策。",
      },
    },
  },
  digitalTwin: {
    title: "我们的数字孪生平台如何工作？",
    subtitle:
      "了解 AquaPure 如何连接您的数据库并利用自托管 AI 代理自动化工业流程并优化实时控制。",
    diagram: {
      selfHostedDb: "AquaPure 自托管数据库",
      yourDatabase: "您自己的数据库",
      connectedPlcs: "连接到您的 PLC",
      externalSources: "外部来源",
      controlPlatform: "AquaPure 控制平台",
      intuitiveUi: "直观界面",
      andMore: "还有更多！",
      localApi: "本地 API 与服务器",
      queryAutomate: "查询、自动控制并可视化数据",
      uiItems: ["网格", "监视器", "编辑器", "表单"],
      apiItems: ["Web", "第三方应用", "移动端"],
      formatItems: ["JSON", "CSV", "Excel", "Airtable"],
    },
    whyTitle: "为什么选择 AquaPure？",
    whySubtitle:
      "自动化工业控制，降低能耗，基于可靠数据做出决策，同时不牺牲安全性或数据主权。",
    whyFeatures: [
      {
        title: "基于 AI 的流程优化",
        desc: "预测模型持续调整参数以最大化效率并减少损失。",
      },
      {
        title: "智能数字孪生",
        desc: "设施的虚拟副本，用于在部署前模拟、测试与验证决策。",
      },
      {
        title: "自动化实时控制",
        desc: "使用安全阈值、主动告警和集中监控来控制设备运行。",
      },
      {
        title: "无缝集成",
        desc: "将 SCADA、PLC 与现有数据库连接起来，无需重构基础设施。",
      },
      {
        title: "能源与环境影响",
        desc: "在减少用水与能耗的同时，以精确方式记录 ESG 进展。",
      },
      {
        title: "数据主权与安全",
        desc: "托管于魁北克，配合自托管 AI 代理，使您的数据保持可控。",
      },
    ],
    partnersTitle: "得到魁北克创新生态系统的支持",
    partnersSubtitle:
      "由值得信赖的合作伙伴推动的前沿技术，助力行业数字化转型。",
    ctaTitle: "您属于哪个领域？联系我们讨论您的项目！",
    municipal: "面向市政",
    industry: "面向工业",
    contactUs: "联系我们",
  },
  blog: {
    eyebrow: "博客",
    title: "AquaPure 博客",
    subtitle:
      "关于市政与工业环境中水务管理的新闻、分析与实战分享 — 无需不必要的术语。",
    noImage: "无图像",
    readArticle: "阅读全文",
    minRead: "分",
    minReadLong: "分钟阅读",
    backToBlog: "返回博客",
    topicCtaTitle: "有您想看到的话题吗？",
    topicCtaBody:
      "告诉我们您的运营现实，我们会展示数据如何帮助您，而不打乱现有可行方案。",
    scheduleMeeting: "安排会议",
    articleCtaTitle: "这个话题是否与您相关？",
    articleCtaBody:
      "了解 AquaPure 如何帮助魁北克团队重新掌控其水务运营。",
    requestDemo: "申请演示",
    digitalTwin: "数字孪生",
    articleTitleSuffix: "AquaPure 博客",
    relatedAria: "相关文章与网站页面",
    relatedTitle: "其他已发布文章",
    seeAlso: "另请参阅：",
    and: "和",
    allArticles: "全部文章",
    privacyPolicy: "隐私政策",
  },
  categories: {
    "Eaux municipales": "市政用水",
    Mine: "采矿",
    "Pâte et papier": "纸浆与造纸",
    Agroalimentaire: "食品与饮料",
    Opérations: "运营",
    Conformité: "合规",
  },
  seedPosts: [
    {
      id: "seed-mine",
      slug: "kuangshan-guocheng-shui-youhua",
      title: "采矿过程用水：在不妥协合规性的前提下优化",
      excerpt:
        "重复利用、循环、减少——来自各方的压力真实存在。在没有持续可视性的情况下，每一次调整都像是一场团队不愿冒的赌博。",
      category: "Mine",
      author: "AquaPure 团队",
      content: `在采矿环境中，每立方米水都承担着双重意义：一方面是供应成本，另一方面是关于排放的监管义务。团队被生产需求与日益严格的水环境监管夹在中间。

在没有对水质量与用量的持续可视性的情况下，任何优化都像是在押注。这里减少了一个流量，那里却出现了合规偏差。谨慎占据上风，水每天被使用的量都比必要的多出一点。

人工采样与月度报告到来时已太迟。当偏差在表格中显现时，可能已有数千立方米在次优条件下被处理或排放。工程师于是花费数小时去重建历史，而非解决根本问题。

将预测模型与现场传感器连接，可以在偏差演变成事故之前进行预判。您可以有信心地优化回收回路，并提供审计可逐行追踪的可追溯性。

关键不是在生产力与环境之间做选择。而是停止单独管理其中一项、停止为等待付出代价。`,
    },
    {
      id: "seed-municipal",
      slug: "wushui-chuli-zhan-shishi-kongzhi",
      title: "污水处理厂：在每一分钟都重要时重新掌控",
      excerpt:
        "流量、污泥、排放质量——市政厂每天产生数千个数据点。问题不在于信息不足，而在于采取行动的延迟。",
      category: "Eaux municipales",
      author: "AquaPure 团队",
      content: `在污水处理厂中，容差极小。曝气失衡、浊度上升、泵出现漂移：后果体现在排放质量、能耗浪费与班组的加班。

然而，多数决策仍依赖瞬时快照、现场读数、延迟的 SCADA 导出和每周的“盘点”会议。在两次检查之间，运营现实已经发生变化。

这种滞后产生了一个隐性问题：操作员能够感知异常正在形成，但缺乏量化并上报的工具，导致问题变成事故后才被发现。结果是被动应对、能源过度消耗以及向市政委员会做出困难的说明。

与真实流程相关联的实时监督可以改变团队的工作方式。告警变得可操作、趋势清晰、ESG 报告自动记录——无需每季度手工重建历史。

每周缺乏持续可视性，都会累积出在仪表盘上看不见的运营与环境成本。问题不再是是否需要更多传感器，而是如何把已有测量转化为即时决策。`,
    },
    {
      id: "seed-heavy-metals",
      slug: "zhongjinshu-ai-chuanganqi-yuce-kuangshan",
      title: "矿山重金属：现有传感器为何不够——AI 如何弥补监测空白",
      excerpt:
        "铜、镍、锌：实验室结果往往滞后。现场管理者用浊度、pH 等做回归相关——AquaPure 用 AI 与现有传感器将这一逻辑自动化。",
      category: "Mine",
      author: "AquaPure 团队",
      content: `<p><strong>矿山废水中的重金属</strong>（铜、镍、锌、铅、铁）在魁北克受严格监管，尤其是<a href="https://www.environnement.gouv.qc.ca/mines/effluents/directive019.htm" rel="noopener noreferrer" target="_blank">第 019 号指令</a>。难点不在于要不要测，而在于能否<em>及时</em>掌握浓度并采取行动。</p>

<h2>实时监测的盲区</h2>

<p>多数矿山已部署连续传感器：pH、浊度、电导率（EC）、溶解氧（DO）、溶解有机碳（DOC/COD）。它们擅长过程控制，却无法直接测量铜、镍、锌。重金属仍依赖<strong>人工取样</strong>与认可实验室，通常需 3 至 10 个工作日。</p>

<h2>回归与相关：行业常见做法</h2>

<p>工程师建立<strong>回归曲线</strong>，将易测参数与实验室金属结果关联。浊度常与 Cu、Fe 相关；pH 影响 Ni、Zn 溶解度；DOC 与 DO 影响络合与氧化还原。</p>

<figure>
<img src="/blog/article-regression-loupe.png" alt="放大镜下的回归图表，展示过程变量与重金属浓度之间的相关性" width="800" height="450" loading="lazy" />
<figcaption>人工回归很常见，但难以跟上运营节奏。</figcaption>
</figure>

<h2>魁北克矿山五种优先金属</h2>

<ul>
<li><strong>铜（Cu）</strong> — 浮选与尾矿</li>
<li><strong>镍（Ni）</strong> — 镍铜矿与选矿废水</li>
<li><strong>锌（Zn）</strong> — 酸性矿山排水与中和</li>
<li><strong>铅（Pb）</strong> — 多金属矿床</li>
<li><strong>铁（Fe）</strong> — 沉淀与胶体运移指标</li>
</ul>

<h2>AquaPure 如何用 AI 预测金属浓度</h2>

<p>AquaPure 用<strong>人工智能模型</strong>，结合现场传感器历史与实验室数据，连续估算 Cu、Ni、Zn、Pb、Fe，无需新增金属探头。</p>

<h2>降低成本，减轻魁北克环境部检查压力</h2>

<p>认可实验室单项分析约 80–250 加元。连续预测不取代法规要求的参考分析，但能在两次正式取样之间提供可见性，并在 MELCCFP 突击检查时拿出可审计的轨迹。</p>

<p>延伸阅读：<a href="/blogue/kuangshan-guocheng-shui-youhua" rel="noopener noreferrer">矿山过程水优化</a>与<a href="/blogue/wushui-chuli-zhan-shishi-kongzhi" rel="noopener noreferrer">污水厂实时控制</a>。</p>

<p><em>最后更新：2026 年 6 月。</em></p>`,
    },
  ],
};

