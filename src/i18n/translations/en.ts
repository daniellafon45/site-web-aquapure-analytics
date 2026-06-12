import type { Translations } from "../types";

export const en: Translations = {
  meta: {
    homeTitle: "AquaPure Analytics — Master municipal water and mining and industrial effluent management",
    homeDescription:
      "Optimize water management with data, AI and real-time intelligence. Reduce costs and meet your ESG targets.",
    digitalTwinTitle: "Digital Twin — AquaPure Analytics",
    digitalTwinDescription:
      "See how AquaPure connects your databases and uses a self-hosted AI agent to automate industrial processes and optimize real-time control.",
    blogTitle: "AquaPure Analytics Blog",
    blogDescription:
      "News, analysis and expertise for municipal, mining, pulp & paper and food-processing water managers in Quebec.",
    notFoundTitle: "Page not found",
    notFoundBody: "The page you're looking for doesn't exist or has been moved.",
    errorTitle: "This page failed to load",
    errorBody: "There was a problem on our side.",
    backHome: "Back to home",
    retry: "Retry",
  },
  nav: {
    sectors: "Sectors",
    features: "Features",
    integrations: "Integrations",
    digitalTwin: "Digital Twin",
    blog: "Blog",
    contact: "Contact",
    requestDemo: "Request a demo",
    demoShort: "Demo",
    openMenu: "Open menu",
    menu: "Menu",
    language: "Language",
  },
  footer: {
    sectorsTitle: "Industry sectors",
    companyTitle: "Company",
    blog: "Blog",
    linkedInAria: "AquaPure Analytics on LinkedIn",
    sectors: [
      { label: "Municipal water", href: "/#eaux-municipales" },
      { label: "Mining", href: "/#mine" },
      { label: "Pulp & paper", href: "/#pate-et-papier" },
      { label: "Food & beverage", href: "/#agroalimentaire" },
    ],
  },
  home: {
    hero: {
      title: "Master municipal water and mining and industrial effluent management with data and AI",
      subtitle:
        "Turn your data into immediate decisions: less waste, more control, and sustainable performance — without disrupting existing operations.",
      hosting: "Your data hosted in Quebec, on your premises.",
      contact: "Contact us",
      demo: "Request a demo",
    },
    industries: {
      eyebrow: "Our sectors",
      title: "Built for complex operational environments",
      description:
        "Turn your ESG commitments into measurable operational outcomes: lower water use, reduce carbon footprint and document progress with accuracy your teams and stakeholders can defend, using real-time analytics and AI, trusted by Quebec industries.",
      scheduleMeeting: "Schedule a meeting",
      items: [
        {
          id: "eaux-municipales",
          label: "MUNICIPAL WATER",
          title: "Optimized treatment, controlled costs and impact.",
          desc: "Run water treatment operations in real time to cut chemical and energy costs, stabilize processes and reduce the environmental footprint of your municipal plant.",
        },
        {
          id: "mine",
          label: "MINING",
          title: "Strengthen your Directive 019 compliance monitoring.",
          desc: "Monitor mining effluent quality and regulatory thresholds in real time, especially for heavy metals: anticipate deviations, document compliance and reduce environmental risk.",
        },
        {
          id: "pate-et-papier",
          label: "PULP & PAPER",
          title: "Process water guided, biodigestion strengthened.",
          desc: "Manage water from your operations and optimize effluent biodigestion in real time: stabilize processes, improve biological yield and reduce treatment costs.",
        },
        {
          id: "agroalimentaire",
          label: "FOOD & BEVERAGE",
          title: "Continuous quality and compliance.",
          desc: "Secure water quality in your food processes with intelligent analysis, proactive alerts and full traceability.",
        },
      ],
    },
    features: {
      title: "Features",
      ergonomic:
        "The interface is highly ergonomic and designed to be intuitive and easy to use.",
      body: "We deploy interoperable systems connected to your existing infrastructure and tailor each module to real needs so technology accelerates operations without complicating them.",
      learnMore: "Learn more",
      items: [
        {
          id: "connect-external-db",
          label: "Connect external DB",
          category: "Data integration\nand connectivity",
          title: "Real-time sensor data",
          description:
            "See every reading, every asset and every line, and act before issues become costly.",
        },
        {
          id: "import",
          label: "Import",
          category: "Data integration\nand connectivity",
          title: "Import and export",
          description:
            "Retrieve historical data in the formats and timeframes that matter for your reports, audits and decisions.",
        },
        {
          id: "invite-team",
          label: "Invite team",
          category: "Collaboration",
          title: "Team management",
          description:
            "Centralize roles, field activities and operational tracking — a single source of truth for your organization.",
        },
        {
          id: "share-project",
          label: "Share project",
          category: "Collaboration",
          title: "Report editor",
          description:
            "Produce clear, shareable reports that build stakeholder confidence.",
        },
        {
          id: "mission-scoot",
          label: "Field missions",
          category: "Collaboration",
          title: "Field operations",
          description:
            "Send technicians to the right place at the right time with photo evidence, GPS and precise instructions.",
        },
        {
          id: "erd",
          label: "ERD diagram",
          category: "Schema management",
          title: "ERD diagram",
          description:
            "Understand your data structure at a glance and speed up every integration.",
        },
        {
          id: "apis",
          label: "APIs",
          category: "Integrations\nand automations",
          title: "Digital twin & APIs",
          description:
            "Control parameters, safety thresholds and SCADA permissions from a unified platform.",
        },
        {
          id: "automate",
          label: "PLC integration",
          category: "Integrations\nand automations",
          title: "SCADA connections",
          description:
            "Connect your PLCs and industrial systems — PI, Ignition, Wonderware — without starting from scratch.",
        },
      ],
    },
    stats: {
      monitoring: "Intelligent control of your industrial processes",
      energy: "Measurable reductions in energy consumption",
      carbon: "Concrete reductions in carbon footprint",
    },
    integrations: {
      title: "Compatible with your production environment",
      description:
        "Connect to the PLCs and protocols you already use — Modbus, OPC UA, Siemens, Schneider and more — without reworking your infrastructure.",
    },
    partners: {
      title: "Backed by Quebec's innovation ecosystem",
      description:
        "Proven technology supported by innovation leaders to accelerate your digital transition with confidence.",
    },
    contact: {
      title: "Let's discuss your project",
      subtitle:
        "Find out how AquaPure Analytics can improve your environmental and economic performance with a tailored strategy suited to your operational reality.",
      formTitle: "Describe your need",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      website: "Website",
      websitePlaceholder: "e.g. aquapure-analytics.com",
      need: "Your need",
      needPlaceholder:
        "Describe your operational challenge, ESG goals or target sector…",
      submit: "Submit request",
      submitting: "Submitting…",
      successTitle: "Request submitted successfully",
      successBody:
        "A member of the AquaPure team will review your request and contact you within one to two business days to schedule a focused discussion about your operations.",
      honeypot: "Do not fill",
      errors: {
        lastName: "Last name is required.",
        firstName: "First name is required.",
        emailRequired: "Email is required.",
        emailInvalid: "Please enter a valid email address.",
        message: "Describe your need.",
        messageTooLong: "Message cannot exceed 5000 characters.",
        emailTooLong: "Email is too long.",
      },
    },
  },
  digitalTwin: {
    title: "How does our digital twin platform work?",
    subtitle:
      "Learn how AquaPure connects your databases and uses a self-hosted AI agent to automate industrial processes and optimize real-time control.",
    diagram: {
      selfHostedDb: "AquaPure self-hosted database",
      yourDatabase: "Your own database",
      connectedPlcs: "Connected to your PLCs",
      externalSources: "External sources",
      controlPlatform: "AquaPure control platform",
      intuitiveUi: "Intuitive interface",
      andMore: "And more!",
      localApi: "Local API and server",
      queryAutomate: "Query, automate control and visualize data",
      uiItems: ["Grid", "Monitor", "Editor", "Form"],
      apiItems: ["Web", "Third-party apps", "Mobile"],
      formatItems: ["JSON", "CSV", "Excel", "Airtable"],
    },
    whyTitle: "Why AquaPure?",
    whySubtitle:
      "Automate industrial control, reduce energy consumption and make decisions based on reliable data — without compromising security or data sovereignty.",
    whyFeatures: [
      {
        title: "AI-driven process optimization",
        desc: "Predictive models that continuously adjust parameters to maximize efficiency and reduce losses.",
      },
      {
        title: "Intelligent digital twins",
        desc: "A virtual replica of your facilities to simulate, test and validate decisions before deployment.",
      },
      {
        title: "Automated real-time control",
        desc: "Operate equipment with safety thresholds, proactive alerts and centralized supervision.",
      },
      {
        title: "Seamless integration",
        desc: "Connect SCADA, PLCs and existing databases without reworking your infrastructure.",
      },
      {
        title: "Energy and environmental impact",
        desc: "Reduce water and energy consumption while documenting ESG progress with precision.",
      },
      {
        title: "Data sovereignty and security",
        desc: "Hosted in Quebec with a self-hosted AI agent so your data stays under your control.",
      },
    ],
    partnersTitle: "Backed by Quebec's innovation ecosystem",
    partnersSubtitle:
      "Cutting-edge technology powered by trusted partners to accelerate your industry's digital transition.",
    ctaTitle: "Which sector are you in? Contact us to discuss your project!",
    municipal: "For municipalities",
    industry: "For industry",
    contactUs: "Contact us",
  },
  blog: {
    eyebrow: "Blog",
    title: "The AquaPure blog",
    subtitle:
      "News, analysis and practical experience on water management in municipal and industrial settings — without unnecessary jargon.",
    noImage: "No image",
    readArticle: "Read article",
    minRead: "min",
    minReadLong: "min read",
    backToBlog: "Back to blog",
    topicCtaTitle: "Is there a topic you'd like to see here?",
    topicCtaBody:
      "Tell us about your operational reality and we'll show how data can help, without disrupting what already works.",
    scheduleMeeting: "Schedule a meeting",
    articleCtaTitle: "Does this topic resonate with you?",
    articleCtaBody:
      "Discover how AquaPure helps Quebec teams regain control of their water operations.",
    requestDemo: "Request a demo",
    digitalTwin: "Digital twin",
    articleTitleSuffix: "AquaPure Blog",
  },
  categories: {
    "Eaux municipales": "Municipal water",
    Mine: "Mining",
    "Pâte et papier": "Pulp & paper",
    Agroalimentaire: "Food & beverage",
    Opérations: "Operations",
    Conformité: "Compliance",
  },
  seedPosts: [
    {
      id: "seed-mine",
      slug: "process-water-mining-optimize-without-compromising-compliance",
      title: "Process water in mining: optimize without compromising compliance",
      excerpt:
        "Reuse, recycle, reduce — pressure comes from both sides. Without continuous visibility, every adjustment feels like a gamble teams are reluctant to take.",
      category: "Mine",
      author: "AquaPure Team",
      content: `In mining operations, every cubic meter of water carries a double weight: the cost of supply on one hand, and regulatory obligations for discharges on the other. Teams are squeezed between production demands and heightened oversight of water impacts.

Without continuous visibility into quality and volumes, any optimization feels like a wager. Flow is reduced in one place and a compliance deviation appears elsewhere. Caution prevails, and water continues to be used — day after day — a little more than necessary.

Manual readings and monthly reports arrive too late. By the time deviations show up in a spreadsheet, thousands of cubic meters may already have been processed or discharged under suboptimal conditions. Engineers then spend hours reconstructing history instead of fixing root causes.

Predictive models tied to your field sensors let you anticipate drifts before they become incidents. You can optimize recycling loops with confidence, backed by traceability auditors can follow line by line.

The issue isn't choosing productivity over the environment. It's stopping the practice of managing one without the other — and ending the hidden cost of waiting.`,
    },
    {
      id: "seed-municipal",
      slug: "wastewater-plant-real-time-control",
      title: "Wastewater plant: regain control when every minute counts",
      excerpt:
        "Flows, sludge, discharge quality — a municipal plant generates thousands of data points per day. The problem is not the lack of information, it’s the delay to act.",
      category: "Eaux municipales",
      author: "AquaPure Team",
      content: `At a wastewater treatment plant, the margin for error is thin. An imbalance in aeration, a rise in turbidity, or a drifting pump: the consequences are measured in discharge quality, wasted energy and overtime for the shift crew.

Yet most decisions still rely on snapshots, field readings, delayed SCADA exports and weekly meetings to “take stock.” Between checks, the operational reality has already changed.

This lag creates a silent problem: operators sense an anomaly coming but lack the tools to quantify and escalate it before it becomes an incident. The result: reactive interventions, energy overconsumption and difficult explanations to the municipal board.

Real-time supervision correlated to your actual processes changes team posture. Alerts become actionable, trends visible and ESG reports documented automatically — without reconstructing history by hand each quarter.

Every week without continuous visibility accrues operational and environmental costs that don’t appear in your dashboards. The question is no longer whether you need more sensors; it’s how to turn what you already measure into immediate decisions.`,
    },
  ],
};

