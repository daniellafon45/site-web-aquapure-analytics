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
    {
      id: "seed-heavy-metals",
      slug: "heavy-metals-ai-sensor-prediction-mining",
      title: "Heavy metals in mining: why your sensors fall short — and how AI closes the gap",
      excerpt:
        "Copper, nickel, zinc: lab results arrive too late. Site managers correlate turbidity and pH by regression — AquaPure automates that logic with AI and your existing sensors.",
      category: "Mine",
      author: "AquaPure Team",
      content: `<p><strong>Heavy metals in mine effluent</strong> are trace elements (copper, nickel, zinc, lead, iron) whose discharge limits are tightly regulated in Quebec, notably under <a href="https://www.environnement.gouv.qc.ca/mines/effluents/directive019.htm" rel="noopener noreferrer" target="_blank">Directive 019</a>. The challenge is not whether to measure them — it is seeing concentrations <em>in time</em> to act.</p>

<h2>Why heavy-metal monitoring remains a blind spot</h2>

<p>Most mining sites already run continuous sensors: pH, turbidity, conductivity (EC), dissolved oxygen (DO), dissolved organic carbon (DOC/COD). These instruments excel at process control. They do not directly measure copper, nickel, or zinc.</p>

<p>For heavy metals, the reference remains <strong>manual sampling</strong> followed by accredited lab analysis. Typical turnaround: 3 to 10 business days between collection and results. In that window, thousands of cubic meters may be discharged or recycled without anyone knowing the actual Cu or Ni concentration.</p>

<h2>What teams already do: regression and correlations</h2>

<p>Environmental engineers build <strong>regression curves</strong> linking easy-to-measure parameters to lab metal results. Turbidity often tracks colloidal fractions carrying copper and iron. pH affects metal hydroxide solubility. DOC and DO influence complexation and redox behaviour.</p>

<figure>
<img src="/blog/article-regression-loupe.png" alt="Magnifying glass over a regression chart showing correlation between process variables and heavy metal concentrations" width="800" height="450" loading="lazy" />
<figcaption>Manual regression between turbidity, pH, or DOC and heavy metals is common — but it struggles to keep pace with operations.</figcaption>
</figure>

<h2>Correlated variables vs target metals in mining</h2>

<table>
<thead><tr><th>Continuous sensor</th><th>Often correlated metal(s)</th><th>Limit of manual approach</th></tr></thead>
<tbody>
<tr><td>Turbidity</td><td>Cu, Fe, Zn (particulate phase)</td><td>Seasonal drift missed</td></tr>
<tr><td>pH</td><td>Cu, Ni, Zn (solubility)</td><td>Non-linear process effects</td></tr>
<tr><td>DOC / COD</td><td>Cu, Ni (complexation)</td><td>Changing water matrix</td></tr>
<tr><td>DO</td><td>Fe, other redox metals</td><td>Lag between measure and impact</td></tr>
<tr><td>Conductivity (EC)</td><td>Overall ionic load indicator</td><td>Low metal specificity</td></tr>
</tbody>
</table>

<h2>Five priority metals for Quebec mining</h2>

<ul>
<li><strong>Copper (Cu)</strong> — flotation circuits and tailings</li>
<li><strong>Nickel (Ni)</strong> — Ni-Cu mines and concentration effluent</li>
<li><strong>Zinc (Zn)</strong> — acid mine drainage and neutralization</li>
<li><strong>Lead (Pb)</strong> — polymetallic deposits</li>
<li><strong>Iron (Fe)</strong> — precipitation and colloidal transport indicator</li>
</ul>

<h2>How AquaPure turns your sensors into metal predictors</h2>

<p>AquaPure Analytics applies <strong>AI models</strong> trained on <em>your</em> sensor history and <em>your</em> lab results. Instead of buying new metal probes, the platform uses pH, turbidity, DOC, DO, and conductivity to estimate Cu, Ni, Zn, Pb, and Fe continuously.</p>

<ol>
<li><strong>Initial calibration</strong> — cross sensor series with lab analyses over a representative period</li>
<li><strong>Real-time prediction</strong> — estimated metal concentrations at each sensor timestep</li>
<li><strong>Pre-threshold alerts</strong> — notification when trajectories approach regulatory limits</li>
<li><strong>Auditable reports</strong> — traceability for inspections and MELCCFP reporting</li>
</ol>

<h2>Lower costs, less stress during MELCCFP inspections</h2>

<p>Accredited multi-metal lab analyses often cost CAD 80–250 per sample. Multiply by weekly sampling across multiple points and the line item quickly reaches tens of thousands per year — before field time.</p>

<p>Continuous prediction does not replace required reference analyses. It <strong>focuses sampling</strong> where the model flags risk and helps teams answer when Quebec's environment ministry asks what happened between two official samples.</p>

<h2>Frequently asked questions</h2>

<h3>Can pH and turbidity sensors really predict copper?</h3>
<p>Yes, when a stable statistical link exists between process parameters and lab results — the same logic your engineers already use in regression, industrialized and updated continuously by AI.</p>

<h3>Does AI prediction replace accredited lab analysis?</h3>
<p>No. It complements regulatory monitoring with visibility between official samples and targeted lab campaigns.</p>

<h3>Which sensors does AquaPure use?</h3>
<p>Those already on site: pH, turbidity, conductivity, dissolved oxygen (DO), dissolved organic carbon (DOC/COD), and other process signals from SCADA or API.</p>

<h3>How many metals does the platform predict?</h3>
<p>Five priority metals in Quebec mining: copper (Cu), nickel (Ni), zinc (Zn), lead (Pb), and iron (Fe).</p>

<p><em>Last updated: June 2026.</em></p>`,
    },
  ],
};

