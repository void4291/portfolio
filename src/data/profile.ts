/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no component changes needed.
 */

export const profile = {
  name: 'Wajahat Rahman',
  firstName: 'Wajahat',
  lastName: 'Rahman',
  initials: 'WR',
  title: 'Software Development Manager',
  company: 'Techlogix',
  companyUrl: 'https://www.techlogix.com/',
  /** Used to compute "years of experience" dynamically. */
  careerStart: '2017-11-01',
  roles: [
    'Software Development Manager',
    'Associate Software Architect',
    'SRE & DevOps Lead',
    'Full-Stack Technical Lead',
  ],
  headline:
    'I lead engineering teams that build, ship and scale enterprise-grade platforms — across architecture, SRE and delivery.',
  about: [
    "I'm a Software Development Manager at Techlogix in a cross-functional leadership role spanning engineering, SRE and project management. I currently lead the company-wide Core Platform initiative, and contribute as an Associate Software Architect to solution design, architecture reviews and technical direction across multiple projects.",
    'My background runs through both development and operations. I started hands-on with IBM BPM and Java, grew into full-stack and technical-lead roles on Oracle OBDX digital-banking implementations, and today run containerized deployments, CI/CD pipelines and cloud-native systems for products in the financial and retail verticals.',
    'I care about execution efficiency and delivery quality — owning the path from requirement analysis and architecture design to production rollout and operational oversight. Increasingly that means AI-augmented engineering: I use Claude Code and GPT to orchestrate development workflows and keep delivery timelines tight.',
  ],
  /**
   * Contact links. Leave a value empty ('') to hide that button.
   *  - email:    'you@example.com'
   *  - linkedin: 'https://www.linkedin.com/in/your-handle'
   *  - github:   'https://github.com/your-handle'
   *  - resume:   '/resume.pdf' (place the file in /public)
   */
  links: {
    email: 'wajahat.rahman.wr@gmail.com',
    linkedin: 'https://www.linkedin.com/in/wajahat-rahman-067bb410b/',
    github: 'https://github.com/void4291',
    resume: '',
  },
}

export type Pillar = {
  icon: 'users' | 'layers' | 'server' | 'code'
  title: string
  text: string
}

export const pillars: Pillar[] = [
  {
    icon: 'users',
    title: 'Engineering Leadership',
    text: 'Leading cross-functional teams through delivery, support and scaling of enterprise products — planning, stakeholder communication and mentoring.',
  },
  {
    icon: 'layers',
    title: 'Architecture & Solution Design',
    text: 'Translating business requirements into functional solutions, running architecture reviews and driving proofs-of-concept end to end.',
  },
  {
    icon: 'server',
    title: 'SRE & DevOps',
    text: 'Container orchestration, deployment automation, observability and CI/CD — keeping production reliable and environments ready.',
  },
  {
    icon: 'code',
    title: 'Full-Stack Delivery',
    text: 'Hands-on across React & Next.js, Java Spring Boot and Java EE — from technical design to service and front-end implementation.',
  },
]

export const facts = [
  { label: 'Current role', value: 'Manager Software Development' },
  { label: 'Company', value: 'Techlogix' },
  { label: 'Domains', value: 'Banking · Retail · Publishing' },
  { label: 'Education', value: 'BE, NED University' },
]

export const ladder = [
  { title: 'Software Engineer', since: 'Nov 2017' },
  { title: 'Senior Software Engineer', since: 'Apr 2020' },
  { title: 'Principal Software Engineer', since: 'Dec 2021' },
  { title: 'Manager Software Development', since: 'Jan 2024' },
]

export type Experience = {
  period: string
  org: string
  role: string
  project: string
  summary: string
  points: string[]
  tech: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    period: 'Jun 2025 — Present',
    org: 'Techlogix',
    role: 'Manager Software Development · Project Manager',
    project: 'Core Platform',
    summary:
      'Leading the company-wide Core Platform initiative — an enterprise-grade foundation unifying architecture and accelerating delivery across all products and projects.',
    points: [
      'Lead a high-performing, cross-functional team architecting and building the platform from the ground up.',
      'Own development, delivery and scalability to ensure consistency, reusability and long-term maintainability.',
      'Drive the roadmap of the Core Framework — the foundational layer for future digital products and services.',
      'Align technical direction with business goals alongside stakeholders, product owners and engineering leads.',
    ],
    tech: ['Platform Engineering', 'Core Framework', 'Roadmap', 'Delivery'],
    current: true,
  },
  {
    period: 'Dec 2022 — Present',
    org: 'Techlogix',
    role: 'Associate Software Architect',
    project: 'AFX Platform · UAE',
    summary:
      'Architecture and reliability for the Alfardan Foreign Exchange platform in the banking industry — first as Principal Software Engineer, then as Manager Software Development.',
    points: [
      'Lead SRE and infrastructure initiatives: container orchestration, deployment automation, reliability and scalability.',
      'Direct the DevOps team on production uptime, observability and environment readiness across the pipeline.',
      'Translate business requirements into functional software solutions with engineers, PMs and stakeholders.',
      'Drive proofs-of-concept end to end to validate feasibility and inform decision-making.',
    ],
    tech: ['Docker', 'Kubernetes', 'API Gateways', 'Integration Platforms'],
    current: true,
  },
  {
    period: 'Apr 2022 — Present',
    org: 'Techlogix',
    role: 'Technical Lead',
    project: 'MMS — Onepub',
    summary:
      'Senior developer and technical lead for the team building medical-journal publication platforms.',
    points: [
      'Deliver complete modules from inception and technical design to services and front-end implementation.',
      'Shape application architecture and design in close coordination with clients.',
      'Improve development processes through automation and CI/CD practices.',
    ],
    tech: ['React', 'Next.js', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
    current: true,
  },
  {
    period: 'Dec 2021 — Apr 2022',
    org: 'Techlogix',
    role: 'Principal Software Engineer · Technical Lead',
    project: 'Oracle OBDX 21.1 Implementation',
    summary:
      'OBDX 21.1 digital-banking implementation for a leading bank, covering both retail and corporate sectors.',
    points: [
      'Led cross-functional teams across multiple threads, enforcing code standards, conventions and documentation.',
      'Maintained quality gates with code-quality tooling and applied CI/CD best practices.',
      'Managed release cycles and built Jira automation rules for visibility and tracking.',
    ],
    tech: ['KnockoutJS', 'Java EE', 'Jenkins', 'Docker', 'SonarQube', 'Balsamiq'],
  },
  {
    period: 'Apr 2020 — Dec 2021',
    org: 'Techlogix',
    role: 'Senior Software Engineer · Full-Stack Developer',
    project: 'Oracle OBDX 20.1 Implementation',
    summary: 'OBDX 20.1 implementation for one of the leading concerns in the banking industry.',
    points: [
      'Delivered complete modules from UI design and technical analysis to service and front-end implementation.',
      'Improved development processes using automation and CI/CD practices.',
    ],
    tech: ['KnockoutJS', 'Java EE', 'Jenkins', 'Docker', 'Balsamiq'],
  },
  {
    period: 'Jul 2019 — Mar 2020',
    org: 'Techlogix',
    role: 'Software Engineer · Full-Stack Developer',
    project: 'Oracle OBDX 18.3 Implementation',
    summary: 'Development and support of an OBDX 18.3 implementation for a leading bank.',
    points: [
      'Delivered complete modules from technical design to service and front-end implementation.',
    ],
    tech: ['KnockoutJS', 'Java EE'],
  },
  {
    period: 'Aug 2018 — Jun 2019',
    org: 'Techlogix',
    role: 'Software Engineer · Spring Boot → Full-Stack Developer',
    project: 'Event Management & CRM Integrations',
    summary:
      'Business solutions for a leading marketing-industry client: event-management services, CRM integration services and a web portal for lead capturing.',
    points: [
      'Started as back-end developer for the services, then owned modules full-stack from technical design to front-end.',
    ],
    tech: ['Angular 7', 'Java Spring Boot', 'MySQL', 'Postman'],
  },
  {
    period: 'Jun 2018 — Aug 2018',
    org: 'Techlogix',
    role: 'Software Engineer · Java Spring Boot Developer',
    project: 'Supply Chain Financing',
    summary:
      'Supply-chain financing and user-management services for a leading bank, with an Angular front-end and Spring Boot back-end.',
    points: ['Back-end developer for the platform services.'],
    tech: ['Java Spring Boot', 'Oracle', 'Postman'],
  },
  {
    period: 'Nov 2017 — May 2018',
    org: 'Techlogix',
    role: 'Software Engineer · IBM BPM Developer',
    project: 'Banking Process Automation',
    summary:
      'Business solutions for a leading bank, bringing daily operations into harmony with organizational goals and strategy.',
    points: ['Worked on optimization and solutions for production issues.'],
    tech: ['IBM BPM v8.5.7', 'JavaScript', 'DB2', 'REST', 'WebSphere'],
  },
  {
    period: 'Jun 2016 — Jul 2016',
    org: 'Bank Alfalah',
    role: 'Student Intern',
    project: 'IT Internship',
    summary:
      'Exposure to core banking operations, customer dealing and applications including Temenos.',
    points: ['IT intern working alongside branch banking operations.'],
    tech: ['Temenos', 'Core Banking'],
  },
]

export type Work = {
  icon: 'boxes' | 'zap' | 'terminal' | 'landmark' | 'book' | 'bank' | 'microscope' | 'calendar'
  sector: string
  title: string
  text: string
  role: string
  tech: string[]
  /** Small highlighted label next to the title. */
  badge?: string
  /** Shell command shown in a copyable snippet. */
  command?: string
  links?: { label: string; href: string }[]
}

export const work: Work[] = [
  {
    icon: 'boxes',
    sector: 'Enterprise Platform',
    title: 'Core Platform',
    text: 'A company-wide, enterprise-grade foundation that unifies architecture and accelerates delivery across every Techlogix product and project — built from the ground up around a reusable Core Framework.',
    role: 'Software Development Manager · Project Manager',
    tech: ['Platform Engineering', 'Core Framework', 'Reusability', 'Scalability'],
    badge: 'Current focus',
  },
  {
    icon: 'zap',
    sector: 'Internal Tooling',
    title: 'Blitz',
    text: 'An orchestration tool I built to run AI-assisted development workflows end to end. Adopted by the organization and now used in live project delivery.',
    role: 'Creator',
    tech: ['Workflow Orchestration', 'AI-Assisted Development', 'Developer Tooling'],
    badge: 'In use across projects',
  },
  {
    icon: 'landmark',
    sector: 'Banking · UAE',
    title: 'AFX Platform',
    text: 'The Alfardan Foreign Exchange platform — solution architecture, SRE and infrastructure, from container orchestration to observability.',
    role: 'Associate Software Architect',
    tech: ['Docker', 'Kubernetes', 'API Gateways', 'Integrations'],
  },
  {
    icon: 'terminal',
    sector: 'Open Source · npm',
    title: 'Tokemitsu',
    text: 'An open-source CLI that cuts Claude Code token usage. One command wires up shell-output compression (rtk), a local code knowledge graph over MCP (GitNexus) and a cheap-model delegation pattern — then reports recorded usage in the terminal and a local dashboard. Runs entirely on your machine, no API keys.',
    role: 'Creator & Maintainer · MIT licensed',
    tech: ['Node.js', 'Claude Code', 'MCP', 'Hooks', 'CLI'],
    badge: 'Open source',
    command: 'npm install -g tokemitsu',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/tokemitsu' },
      { label: 'GitHub', href: 'https://github.com/void4291/tokemitsu' },
    ],
  },
  {
    icon: 'book',
    sector: 'Medical Publishing',
    title: 'Onepub',
    text: 'A publication platform for medical journals, delivered module by module with clients shaping architecture and design.',
    role: 'Technical Lead',
    tech: ['React', 'Next.js', 'GitHub Actions', 'Terraform'],
  },
  {
    icon: 'bank',
    sector: 'Digital Banking',
    title: 'Oracle OBDX',
    text: 'Three generations of Oracle Banking Digital Experience — 18.3, 20.1 and 21.1 — for a leading bank across retail and corporate.',
    role: 'Full-Stack Developer → Technical Lead',
    tech: ['KnockoutJS', 'Java EE', 'Jenkins', 'SonarQube'],
  },
  {
    icon: 'microscope',
    sector: 'Research · Final Year Project',
    title: 'Lung Cancer Detection',
    text: 'A tool classifying lung nodules on CT scans as benign or malignant using machine-learning and deep-learning techniques, reducing the false-positive rate.',
    role: 'Top 10 Projects — CIS Department, HEC Exhibition 2017',
    tech: ['Python', 'TensorFlow', 'MATLAB', 'Java'],
    links: [
      {
        label: 'Read the publication',
        href: 'http://www.indjst.org/index.php/indjst/article/view/130707',
      },
    ],
  },
  {
    icon: 'calendar',
    sector: 'Marketing',
    title: 'Event Management Suite',
    text: 'Event-management services, CRM integration services and a lead-capturing web portal for a leading marketing client.',
    role: 'Full-Stack Developer',
    tech: ['Angular 7', 'Spring Boot', 'MySQL'],
  },
]

export type SkillGroup = {
  icon: 'code' | 'container' | 'building' | 'database' | 'wrench' | 'users'
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    icon: 'code',
    title: 'Languages & Frameworks',
    items: [
      'React',
      'Next.js',
      'Java',
      'Spring Boot',
      'Java EE',
      'Angular 7',
      'KnockoutJS',
      'JavaScript',
      'Python',
      'Android (Java)',
      'SQL',
      'PHP',
      'C++',
      'HTML',
      'CSS',
    ],
  },
  {
    icon: 'container',
    title: 'DevOps & Cloud-Native',
    items: [
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Jenkins',
      'GitHub Actions',
      'Terraform',
      'SonarQube',
      'Git',
      'API Gateways',
      'Linux (Red Hat)',
    ],
  },
  {
    icon: 'building',
    title: 'Enterprise Platforms',
    items: [
      'Oracle OBDX 18.3 / 20.1 / 21.1',
      'IBM BPM v8.5',
      'IBM WebSphere',
      'Apache',
      'Integration Platforms',
    ],
  },
  {
    icon: 'database',
    title: 'Databases',
    items: ['Oracle 11g & 12c', 'SQL Server', 'MySQL', 'DB2'],
  },
  {
    icon: 'wrench',
    title: 'Tools',
    items: [
      'Jira',
      'Confluence',
      'Trello',
      'Postman',
      'Balsamiq',
      'IntelliJ',
      'Android Studio',
      'PyCharm',
      'NetBeans',
      'Visual Studio',
      'Spring Tool Suite',
    ],
  },
  {
    icon: 'users',
    title: 'Leadership & Delivery',
    items: [
      'Project Planning',
      'Stakeholder Communication',
      'Team Mentoring',
      'Architecture Reviews',
      'Solution Design',
      'Release Management',
    ],
  },
]

export type AiPractice = {
  icon: 'workflow' | 'rocket' | 'list' | 'shield'
  title: string
  text: string
}

/** Featured block at the top of the Skills section. */
export const aiDelivery = {
  eyebrow: 'AI-augmented delivery',
  text: 'I treat AI as part of the delivery pipeline, not a side tool. Claude Code and GPT sit inside my day-to-day engineering workflow — orchestrating the path from requirement to reviewed, tested code — so teams move faster without lowering the bar on quality.',
  tools: [
    'Claude Code',
    'GPT',
    'Agentic Workflows',
    'Workflow Orchestration',
    'Prompt Engineering',
    'AI-Assisted Code Review',
    'Test Generation',
    'Technical Documentation',
    'MCP',
  ],
  /** Tools of my own that came out of this way of working. */
  built: [
    {
      name: 'Blitz',
      text: 'Workflow orchestration tool, used across projects in the organization',
      href: '#work',
    },
    {
      name: 'Tokemitsu',
      text: 'Open-source CLI that cuts Claude Code token usage',
      href: 'https://www.npmjs.com/package/tokemitsu',
    },
  ],
  practices: [
    {
      icon: 'workflow',
      title: 'Workflow orchestration',
      text: 'Chaining AI agents across task breakdown, technical design, implementation and review into one repeatable development workflow.',
    },
    {
      icon: 'rocket',
      title: 'Spearheading delivery timelines',
      text: 'Automating repetitive engineering work to compress delivery cycles, keeping the team focused on architecture and the decisions that matter.',
    },
    {
      icon: 'list',
      title: 'Planning & estimation',
      text: 'Turning requirements into structured task breakdowns, estimates and technical design documents before a line of code is written.',
    },
    {
      icon: 'shield',
      title: 'Quality built in',
      text: 'AI-assisted code review, focused test generation and root-cause analysis woven into the pipeline as quality gates.',
    },
  ] satisfies AiPractice[],
}

export const marqueeTop = [
  'Claude Code',
  'Kubernetes',
  'Docker',
  'React',
  'Next.js',
  'Java',
  'Spring Boot',
  'Terraform',
  'GitHub Actions',
  'Jenkins',
  'CI/CD',
]

export const marqueeBottom = [
  'GPT',
  'Agentic Workflows',
  'Oracle OBDX',
  'IBM BPM',
  'Java EE',
  'Angular',
  'KnockoutJS',
  'SonarQube',
  'API Gateways',
  'Python',
  'SQL',
  'Linux',
]

export const certifications = [
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Udemy · Techlogix',
    date: 'Jun 2024',
    note: 'Certification course',
  },
  {
    title: 'Docker for Java Developers',
    issuer: 'Udemy · Techlogix',
    date: 'Oct 2021',
    note: 'Certification course',
  },
  {
    title: 'Master Microservices with Spring Boot and Spring Cloud',
    issuer: 'Udemy · Techlogix',
    date: 'Jul 2019',
    note: 'Certification course',
  },
  {
    title: 'IBM BPM Certified Application Developer — v8.5.7 Process Designer',
    issuer: 'Techlogix',
    date: 'Jan 2019',
    note: 'Certification exam',
  },
]

export const trainings = [
  {
    kind: 'Conducted',
    title: 'IBM BPM Administration',
    org: 'Faysal Bank',
    when: '24 Dec 2019 · 1 day',
    text: 'Training session enabling the team to handle post-production tasks.',
  },
  {
    kind: 'Attended',
    title: 'Administration of IBM BPM 8.5.7 (WB871G)',
    org: 'IBM',
    when: 'May 2018 · 5 days',
    text: 'Hands-on with WebSphere Application Server, environments and server profiles.',
  },
  {
    kind: 'Attended',
    title: 'Application Development in IBM BPM 8.5.7 (WB861G)',
    org: 'IBM',
    when: 'May 2018 · 5 days',
    text: 'Performance targets, data tracking and report generation.',
  },
  {
    kind: 'Attended',
    title: 'IBM BPM Training',
    org: 'Techlogix',
    when: 'Nov 2017 – Jan 2018 · 14 days',
    text: 'Developing business processes using REST services.',
  },
]

export const education = [
  {
    school: 'NED University of Engineering and Technology',
    place: 'Karachi',
    degree: 'BE — Computer & Information Systems Engineering',
    date: 'Oct 2017',
    score: 'GPA 3.59',
    href: 'http://www.neduet.edu.pk',
  },
  {
    school: 'Bahria College Karsaz',
    place: 'Karachi',
    degree: 'HSSC — Pre-Engineering',
    date: 'Aug 2013',
    score: '82.9%',
    href: 'http://www.bckk.edu.pk',
  },
  {
    school: 'Karachi Public School',
    place: 'Karachi',
    degree: 'SSC — Computer Science',
    date: 'Aug 2011',
    score: '91.4%',
    href: 'http://www.kps.edu.pk',
  },
]

export const awards = {
  headline: {
    title: 'First Place',
    event: 'Techlogix AI Hackathon',
    year: '2024',
  },
  aom: {
    title: 'Achiever of the Month',
    org: 'Techlogix',
    months: ['May 2022', 'Apr 2022', 'Dec 2020', 'Feb 2019', 'Feb 2018'],
  },
  publication: {
    title: 'Comparative Analysis of Learning Algorithms for Lung Cancer Identification',
    venue: 'Indian Journal of Science & Technology',
    href: 'http://www.indjst.org/index.php/indjst/article/view/130707',
  },
  others: [
    {
      place: 'Top 10',
      title: 'Final Year Project — CIS Department',
      event: 'HEC Project Exhibition 2017 · NED University',
    },
    {
      place: '2nd',
      title: 'Online Pharmaceutical Store',
      event: "CACHE'16 Project Exhibition · NED University",
    },
    {
      place: '3rd',
      title: 'Supermarket Management System (Java)',
      event: "CACHE'15 Project Exhibition · NED University",
    },
  ],
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]

export function yearsOfExperience(now = new Date()): number {
  const start = new Date(profile.careerStart)
  let years = now.getFullYear() - start.getFullYear()
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  if (beforeAnniversary) years -= 1
  return Math.max(years, 0)
}
