export const LOCALES = ["fr", "en", "zh", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  zh: "中文",
  es: "Español",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  zh: "中文",
  es: "ES",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  zh: "zh-Hans",
  es: "es",
};

export const LOCALE_DATE: Record<Locale, string> = {
  fr: "fr-CA",
  en: "en-CA",
  zh: "zh-CN",
  es: "es-ES",
};

export type IndustryItem = {
  id: string;
  label: string;
  title: string;
  desc: string;
};

export type FeatureItem = {
  id: string;
  label: string;
  category: string;
  title: string;
  description: string;
};

export type WhyFeature = {
  title: string;
  desc: string;
};

export type FaqAnswerSegment =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string; external?: boolean };

export type DigitalTwinFaqItem = {
  question: string;
  answerPlain: string;
  segments: FaqAnswerSegment[];
};

export type DigitalTwinFaqContent = {
  title: string;
  subtitle: string;
  items: DigitalTwinFaqItem[];
};

export type SeedPostTranslation = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  content: string;
};

export type Translations = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    digitalTwinTitle: string;
    digitalTwinDescription: string;
    blogTitle: string;
    blogDescription: string;
    notFoundTitle: string;
    notFoundBody: string;
    errorTitle: string;
    errorBody: string;
    backHome: string;
    retry: string;
  };
  nav: {
    sectors: string;
    features: string;
    integrations: string;
    digitalTwin: string;
    blog: string;
    contact: string;
    requestDemo: string;
    demoShort: string;
    openMenu: string;
    menu: string;
    language: string;
  };
  footer: {
    sectorsTitle: string;
    companyTitle: string;
    blog: string;
    privacy: string;
    linkedInAria: string;
    sectors: { label: string; href: string }[];
  };
  consent: {
    ariaLabel: string;
    message: string;
    accept: string;
    reject: string;
    learnMore: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      hosting: string;
      contact: string;
      demo: string;
    };
    industries: {
      eyebrow: string;
      title: string;
      description: string;
      scheduleMeeting: string;
      items: IndustryItem[];
    };
    features: {
      title: string;
      ergonomic: string;
      body: string;
      learnMore: string;
      items: FeatureItem[];
    };
    stats: {
      monitoring: string;
      energy: string;
      carbon: string;
    };
    integrations: {
      title: string;
      description: string;
    };
    partners: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      subtitle: string;
      formTitle: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      company: string;
      website: string;
      websitePlaceholder: string;
      need: string;
      needPlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      honeypot: string;
      privacyConsentBefore: string;
      privacyConsentLink: string;
      privacyConsentAfter: string;
      errors: {
        lastName: string;
        firstName: string;
        emailRequired: string;
        emailInvalid: string;
        message: string;
        messageTooLong: string;
        emailTooLong: string;
        consentRequired: string;
      };
    };
  };
  digitalTwin: {
    title: string;
    subtitle: string;
    diagram: {
      selfHostedDb: string;
      yourDatabase: string;
      connectedPlcs: string;
      externalSources: string;
      controlPlatform: string;
      intuitiveUi: string;
      andMore: string;
      localApi: string;
      queryAutomate: string;
      uiItems: string[];
      apiItems: string[];
      formatItems: string[];
    };
    whyTitle: string;
    whySubtitle: string;
    whyFeatures: WhyFeature[];
    partnersTitle: string;
    partnersSubtitle: string;
    ctaTitle: string;
    municipal: string;
    industry: string;
    contactUs: string;
    faq: DigitalTwinFaqContent;
  };
  blog: {
    eyebrow: string;
    title: string;
    subtitle: string;
    noImage: string;
    readArticle: string;
    minRead: string;
    minReadLong: string;
    backToBlog: string;
    topicCtaTitle: string;
    topicCtaBody: string;
    scheduleMeeting: string;
    articleCtaTitle: string;
    articleCtaBody: string;
    requestDemo: string;
    digitalTwin: string;
    articleTitleSuffix: string;
    relatedAria: string;
    relatedTitle: string;
    seeAlso: string;
    and: string;
    allArticles: string;
    privacyPolicy: string;
  };
  categories: Record<string, string>;
  seedPosts: SeedPostTranslation[];
};
