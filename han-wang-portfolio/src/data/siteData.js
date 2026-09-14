export const LANGUAGE_OPTIONS = [
  { code: 'zh-CN', label: '中文' },
  { code: 'zh-Hant', label: '繁體' },
  { code: 'en', label: 'EN' },
]

export const defaultLanguage = 'zh-CN'

export const sectionMeta = {
  home: {
    label: { 'zh-CN': '主页', 'zh-Hant': '主頁', en: 'HOME' },
    number: '00',
    path: '/',
    description: {
      'zh-CN': '探索 王霄汉 的数字空间。',
      'zh-Hant': '探索 王霄漢 的數位空間。',
      en: 'Explore the living archive of Xiaohan Wang.',
    },
  },
  about: {
    label: { 'zh-CN': '关于', 'zh-Hant': '關於', en: 'ABOUT' },
    number: '01',
    path: '/about',
    description: {
      'zh-CN': '设计产品、叙事与系统，连接人类体验与数字文化。',
      'zh-Hant': '設計產品、敘事與系統，連接人類體驗與數位文化。',
      en: 'Designing products, stories, and systems that connect human experience with digital culture.',
    },
  },
  experience: {
    label: { 'zh-CN': '经历', 'zh-Hant': '經歷', en: 'EXPERIENCE' },
    number: '02',
    path: '/experience',
    description: {
      'zh-CN': '跨学科实践，围绕研究、服务设计与互动产品思维展开。',
      'zh-Hant': '跨學科實踐，圍繞研究、服務設計與互動產品思維展開。',
      en: 'Cross-disciplinary practice shaped by research, service design, and interactive product thinking.',
    },
  },
  projects: {
    label: { 'zh-CN': '项目', 'zh-Hant': '專案', en: 'PROJECTS' },
    number: '03',
    path: '/projects',
    description: {
      'zh-CN': '围绕真实需求展开的产品、服务与传播实验。',
      'zh-Hant': '圍繞真實需求展開的產品、服務與傳播實驗。',
      en: 'A collection of product, service, and communication experiments anchored in real-world needs.',
    },
  },
  portfolio: {
    label: { 'zh-CN': '作品', 'zh-Hant': '作品', en: 'PORTFOLIO' },
    number: '04',
    path: '/portfolio',
    description: {
      'zh-CN': '设计、技术与文化边界上的精选视觉与叙事。',
      'zh-Hant': '設計、技術與文化邊界上的精選視覺與敘事。',
      en: 'Selected visuals and narratives from the edge of design, technology, and culture.',
    },
  },
  contact: {
    label: { 'zh-CN': '联系', 'zh-Hant': '聯絡', en: 'CONTACT' },
    number: '05',
    path: '/contact',
    description: {
      'zh-CN': '欢迎合作、设计咨询与创意研究。',
      'zh-Hant': '歡迎合作、設計諮詢與創意研究。',
      en: 'Available for design collaborations, product strategy, and creative research.',
    },
  },
}

export const homeEntries = {
  'zh-CN': [
    { label: '关于', path: '/about', style: { top: '19%', left: '22%' } },
    { label: '项目', path: '/projects', style: { top: '44%', left: '68%' } },
    { label: '经历', path: '/experience', style: { top: '63%', left: '32%' } },
    { label: '作品', path: '/portfolio', style: { top: '28%', left: '74%' } },
    { label: '联系', path: '/contact', style: { top: '72%', left: '57%' } },
  ],
  'zh-Hant': [
    { label: '關於', path: '/about', style: { top: '19%', left: '22%' } },
    { label: '專案', path: '/projects', style: { top: '44%', left: '68%' } },
    { label: '經歷', path: '/experience', style: { top: '63%', left: '32%' } },
    { label: '作品', path: '/portfolio', style: { top: '28%', left: '74%' } },
    { label: '聯絡', path: '/contact', style: { top: '72%', left: '57%' } },
  ],
  en: [
    { label: 'ABOUT', path: '/about', style: { top: '19%', left: '22%' } },
    { label: 'PROJECTS', path: '/projects', style: { top: '44%', left: '68%' } },
    { label: 'EXPERIENCE', path: '/experience', style: { top: '63%', left: '32%' } },
    { label: 'PORTFOLIO', path: '/portfolio', style: { top: '28%', left: '74%' } },
    { label: 'CONTACT', path: '/contact', style: { top: '72%', left: '57%' } },
  ],
}

export const experienceEntries = [
  {
    year: '2024',
    company: 'Shanghai Bengten Electric Co., Ltd.',
    role: 'Product Research Intern',
    period: '2024.10 — 2025.06',
    summary: 'Explored product opportunities, user research, and service framing for industrial communication systems.',
  },
  {
    year: '2025',
    company: 'Independent Practice',
    role: 'Designer / Creative Technologist',
    period: '2025 — Present',
    summary: 'Building intersectional design work across product, identity, and digital experiences.',
  },
  {
    year: '2026',
    company: 'Future Studio',
    role: 'Design Research & Concept Direction',
    period: '2026 — Ongoing',
    summary: 'Shaping concept-driven work at the boundary of design strategy, art experimentation, and technology.',
  },
]

export const projectList = [
  {
    id: 'cookmind',
    title: 'COOKMIND',
    category: 'Service Design',
    year: '2025',
    accent: 'Culinary intelligence',
  },
  {
    id: 'buick',
    title: 'BUICK FUTURE RV',
    category: 'UX Strategy',
    year: '2025',
    accent: 'Mobility narratives',
  },
  {
    id: 'heartbeat',
    title: 'HEARTBEAT RESONANCE',
    category: 'Interactive Art',
    year: '2024',
    accent: 'Immersive sensory signal',
  },
  {
    id: 'medical',
    title: 'SMART MEDICAL ESCORT VEHICLE',
    category: 'Product Concept',
    year: '2025',
    accent: 'Human-centered mobility',
  },
]

export const portfolioWorks = [
  { title: 'COOKMIND', type: 'Service Design', year: '2025' },
  { title: 'HEARTBEAT RESONANCE', type: 'Interactive Experience', year: '2024' },
  { title: 'BUICK FUTURE RV', type: 'Concept System', year: '2025' },
  { title: 'MEDICAL ESCORT', type: 'Product Storytelling', year: '2025' },
]

export const localeText = {
  'zh-CN': {
    homeIndex: '01 / 探索',
    tagline: '艺术 × 科技 × 商业',
    note: '探索设计、艺术与科技之间的人与数字连接。',
    nav: { home: '主页', about: '关于', experience: '经历', projects: '项目', portfolio: '作品', contact: '联系' },
    about: {
      eyebrow: '产品设计 / 创意实践者',
      chips: ['产品设计', '服务设计', '交互设计', '艺术科技', '文化创意'],
      summary: '我在真实需求与人类体验之间寻找设计的逻辑，让复杂的问题能够被感知、被理解，并最终变成有温度的数字体验。',
    },
    experience: {
      company: '上海奔腾电工有限公司',
      role: '产品研发实习生',
      summary: '支持工业与智能服务场景下的产品探索、用户研究与概念构建。',
    },
    contact: {
      eyebrow: '欢迎合作',
      title: '设计、策略与文化创新',
      email: 'hello@hanwang.design',
    },
  },
  'zh-Hant': {
    homeIndex: '01 / 探索',
    tagline: '藝術 × 科技 × 商業',
    note: '探索設計、藝術與科技之間的人與數位連結。',
    nav: { home: '主頁', about: '關於', experience: '經歷', projects: '專案', portfolio: '作品', contact: '聯絡' },
    about: {
      eyebrow: '產品設計 / 創意實踐者',
      chips: ['產品設計', '服務設計', '互動設計', '藝術科技', '文化創意'],
      summary: '我在真實需求與人類體驗之間尋找設計的邏輯，讓複雜的問題能被感知、被理解，並轉化為有溫度的數位體驗。',
    },
    experience: {
      company: '上海奔騰電工有限公司',
      role: '產品研發實習生',
      summary: '支持工業與智慧服務場景下的產品探索、使用者研究與概念構建。',
    },
    contact: {
      eyebrow: '歡迎合作',
      title: '設計、策略與文化創新',
      email: 'hello@hanwang.design',
    },
  },
  en: {
    homeIndex: '01 / EXPLORATION',
    tagline: 'ART × TECHNOLOGY × BUSINESS',
    note: 'Exploring design, art, and strategy between human experience and digital culture.',
    nav: { home: 'HOME', about: 'ABOUT', experience: 'EXPERIENCE', projects: 'PROJECTS', portfolio: 'PORTFOLIO', contact: 'CONTACT' },
    about: {
      eyebrow: 'Product Designer / Creative Practitioner',
      chips: ['Product Design', 'Service Design', 'Interaction Design', 'Art & Technology', 'Cultural Creativity'],
      summary: 'I design experiences at the intersection of human behavior, digital systems, and emotional meaning. My practice blends strategic thinking with visual storytelling to turn complex needs into intuitive, resonant spaces.',
    },
    experience: {
      company: 'Shanghai Bengten Electric Co., Ltd.',
      role: 'Product Research Intern',
      summary: 'Supported product exploration, user research, and concept framing for industrial and smart service contexts.',
    },
    contact: {
      eyebrow: 'Open for collaboration',
      title: 'Design, Strategy, & Cultural Innovation',
      email: 'hello@hanwang.design',
    },
  },
}
