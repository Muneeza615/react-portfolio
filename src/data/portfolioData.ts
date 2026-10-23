export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'systems' | 'apps' | 'editorial' | 'performance';
  categoryLabel: string;
  year: string;
  role: string;
  client: string;
  image: string;
  summary: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  challenge: string;
  solution: string;
  techStack: string[];
  reactFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarText: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muneeza Aijaz",
    title: "Frontend Developer & React Engineer",
    shortBio: "Crafting web interfaces that feel alive, intuitive, and deeply human.",
    extendedBio: "I'm a frontend engineer specializing in React, TypeScript, and modern component systems. I believe software should feel tactile, calm, and effortlessly responsive. Over the past 4+ years, I've built multi-tenant design systems, interactive workspaces, and high-conversion editorial products that balance mathematical performance with human delight.",
    location: "Lahore, Pakistan · Available Worldwide (Remote)",
    email: "anamtaijaz56@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    portraitImage: "/src/assets/images/muneeza_aijaz_portrait.png",
  },

  stats: [
    { label: "Engineering Experience", value: "4+ Years" },
    { label: "Production Web Apps", value: "28+ Apps" },
    { label: "Lighthouse Score Avg", value: "99.4%" },
    { label: "Accessibility (WCAG)", value: "100% AA" },
  ],

  principles: [
    {
      number: "01",
      title: "Design with Humanness",
      description: "Software isn't just data flows; it's an extension of human intention. I eliminate cognitive friction by designing gentle transitions, clear feedback states, and calm visual hierarchy.",
      detail: "No harsh jarring flashes or abrupt state swaps. Every interaction respects the user's natural pace.",
    },
    {
      number: "02",
      title: "Obsessive Performance",
      description: "Speed is the quietest form of empathy. I engineer applications for sub-100ms interaction latency, 60 FPS spring animations, and minimal JavaScript payloads.",
      detail: "Strategic bundle splitting, asset preloading, virtualized lists, and meticulous memoization prevent layout thrash.",
    },
    {
      number: "03",
      title: "Inclusive by Architecture",
      description: "Accessibility is not an afterthought checkbox at the end of a sprint. It is baked into semantic HTML, ARIA landmarks, keyboard flows, and strict contrast mathematics.",
      detail: "Full focus-trap management in modals, screen-reader live announcements, and WCAG AA compliant palettes.",
    },
    {
      number: "04",
      title: "The Code & Craft Bridge",
      description: "I speak fluent design tokens and strict TypeScript. I partner closely with product designers to translate nuances, micro-gestures, and physics into maintainable code.",
      detail: "Atomic component architecture, robust Storybook documentation, and automated visual regression safeguards.",
    },
  ],

  projects: [
    {
      id: "aura-design-system",
      title: "Aura Design System",
      tagline: "Accessible multi-brand component library and token infrastructure",
      category: "systems" as const,
      categoryLabel: "Design Systems",
      year: "2024",
      role: "Lead Frontend Engineer",
      client: "Enterprise SaaS Ecosystem",
      image: "/src/assets/images/project_design_system_1792779284599.jpg",
      summary: "Architected a comprehensive React component library adopted by 14 cross-functional squads, standardizing design tokens, accessibility primitives, and dark/light modes.",
      metrics: [
        { label: "Adoption Across Squads", value: "14 Teams" },
        { label: "Component Primitives", value: "48 Components" },
        { label: "WCAG Compliance", value: "100% AA" },
        { label: "Dev Velocity Increase", value: "+38%" },
      ],
      tags: ["React 19", "TypeScript", "Tailwind CSS", "Radix Primitives", "Storybook", "Figma Tokens"],
      challenge: "Design debt and inconsistent UI across 5 disparate legacy applications caused developer confusion and poor customer experience. State management and accessibility behaviors varied wildly across product teams.",
      solution: "Built a headless-first, composable architecture with Radix UI and Tailwind CSS. Extracted design tokens directly from Figma via custom scripts, ensuring single-source-of-truth across web and mobile surfaces.",
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "CVA (Class Variance Authority)", "Radix UI", "Vitest"],
      reactFeatures: ["Custom headless hooks (useFocusTrap, useControllableState)", "Compound component patterns", "Ref forwarding and polymorphic 'asChild' props"],
      liveUrl: "https://example.com/aura-system",
      githubUrl: "https://github.com/muneeza/aura-design-system",
    },
    {
      id: "creative-flow-workspace",
      title: "CreativeFlow Studio",
      tagline: "Collaborative project management and fluid canvas workspace",
      category: "apps",
      categoryLabel: "React Web Apps",
      year: "2024",
      role: "Senior React Developer",
      client: "Global Creative Agencies",
      image: "/src/assets/images/project_workflow_app_1792779285243.jpg",
      summary: "Designed and engineered an ultra-smooth project and task orchestration dashboard with optimistic UI updates, drag-and-drop kanban boards, and real-time team presence.",
      metrics: [
        { label: "Frame Rate Target", value: "60 FPS" },
        { label: "Optimistic Response", value: "< 40ms" },
        { label: "Active Monthly Users", value: "85,000+" },
        { label: "Task Throughput Boost", value: "+45%" },
      ],
      tags: ["React", "Zustand", "Motion", "WebSockets", "Tailwind CSS", "DnD Kit"],
      challenge: "High-density data views caused significant input lag during rapid task reorganization and real-time WebSocket state synchronizations.",
      solution: "Implemented fine-grained reactive subscriptions with Zustand, offloading heavy calculations to Web Workers and using virtualized viewports for lists exceeding 10,000 items.",
      techStack: ["React 18", "Zustand", "Motion", "Tailwind CSS", "TypeScript", "WebSockets"],
      reactFeatures: ["Selective store selectors preventing rerenders", "Custom canvas gesture hooks", "Optimistic mutation rollback engine"],
      liveUrl: "https://example.com/creativeflow",
      githubUrl: "https://github.com/muneeza/creativeflow",
    },
    {
      id: "habitat-living-journal",
      title: "Habitat Living Journal",
      tagline: "Editorial commerce platform blending organic storytelling with modern retail",
      category: "editorial",
      categoryLabel: "Editorial & Living",
      year: "2023",
      role: "Frontend Architect",
      client: "Habitat Interiors London",
      image: "/src/assets/images/project_editorial_web_1792779284647.jpg",
      summary: "Created a tactile, magazine-inspired e-commerce platform featuring silky smooth page transitions, interactive room configurators, and editorial photography layouts.",
      metrics: [
        { label: "Core Web Vitals", value: "99 / 100" },
        { label: "Session Dwell Time", value: "+54%" },
        { label: "Mobile Conversion", value: "+28%" },
        { label: "LCP Load Time", value: "0.8s" },
      ],
      tags: ["Next.js", "React", "Tailwind CSS", "Motion", "IntersectionObserver", "Shopify API"],
      challenge: "High-resolution editorial photography traditionally resulted in heavy page weights and poor mobile performance on cellular connections.",
      solution: "Engineered an adaptive image loading pipeline with responsive srcset, progressive blur-up placeholders, and client-side page transitions that retain scroll states.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "Shopify Storefront"],
      reactFeatures: ["Route transition orchestration", "Custom image progressive disclosure", "Micro-cart drawer state machine"],
      liveUrl: "https://example.com/habitat",
      githubUrl: "https://github.com/muneeza/habitat-journal",
    },
    {
      id: "pulse-health-dashboard",
      title: "Pulse Health Portal",
      tagline: "Patient-centered biometric tracking with screen-reader first accessibility",
      category: "performance",
      categoryLabel: "Performance & Health",
      year: "2023",
      role: "Frontend Engineer",
      client: "Pulse Telehealth",
      image: "/src/assets/images/project_workflow_app_1792779285243.jpg",
      summary: "Engineered a resilient, offline-first health portal allowing chronic care patients to log readings, review accessible data charts, and message doctors seamlessly.",
      metrics: [
        { label: "Accessibility Score", value: "100 / 100" },
        { label: "Check-in Friction", value: "-65%" },
        { label: "Offline Cache Hit", value: "94%" },
        { label: "Total Bundle Size", value: "72 KB" },
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Accessible Charts", "Web Vitals"],
      challenge: "Elderly patients with varied visual capabilities and intermittent internet connectivity required effortless operation without complex multi-step forms.",
      solution: "Created large tactile hit targets (minimum 48px), dynamic text scaling up to 200% without breakage, and automatic local-first background syncing.",
      techStack: ["React", "TypeScript", "IndexedDB", "Tailwind CSS", "ChartJS Accessible", "Service Workers"],
      reactFeatures: ["Custom useOfflineSync hook", "Live ARIA region announcer", "Keyboard accessible chart navigation"],
      liveUrl: "https://example.com/pulse",
      githubUrl: "https://github.com/muneeza/pulse-health",
    },
  ] as Project[],

  experiences: [
    {
      id: "exp-1",
      role: "Senior Frontend Engineer",
      company: "Studio Horizon",
      period: "2024 — Present",
      location: "Remote",
      description: "Leading frontend architecture and React engineering for tier-1 web applications, focusing on scalable design systems and high-throughput interactive tools.",
      achievements: [
        "Architected core component tokens reducing cross-team UI divergence by 80%",
        "Mentored a distributed team of 6 engineers across React best practices and testing",
        "Pioneered internal performance monitoring tooling that lowered average LCP by 450ms",
      ],
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Vite", "Zustand"],
    },
    {
      id: "exp-2",
      role: "React & UI Developer",
      company: "Nova Interactive",
      period: "2022 — 2024",
      location: "Hybrid",
      description: "Built dynamic client portals, real-time collaboration tools, and marketing experiences with a heavy emphasis on smooth animations and accessibility.",
      achievements: [
        "Shipped 12+ production client web apps with zero critical production rollback incidents",
        "Engineered real-time optimistic update patterns that improved user satisfaction scores to 4.9/5",
        "Conducted weekly frontend accessibility audits, reaching 100% WCAG AA compliance across client apps",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS", "Jest"],
    },
    {
      id: "exp-3",
      role: "Frontend Developer",
      company: "Pulse Digital Studio",
      period: "2021 — 2022",
      location: "Lahore, Pakistan",
      description: "Developed responsive web applications, interactive landing pages, and component modules from Figma design specs.",
      achievements: [
        "Converted 40+ complex Figma wireframes into pixel-perfect, accessible React components",
        "Reduced bundle sizes across client sites by 35% using tree-shaking and lazy loading",
        "Collaborated with UX researchers to test and refine interactive form validation experiences",
      ],
      technologies: ["JavaScript (ES6+)", "React", "CSS3 / Sass", "Tailwind CSS", "Git"],
    },
  ],

  skills: {
    core: [
      { name: "React 19 & 18", level: "Expert", desc: "Hooks, Concurrent Mode, Suspense, State Machines" },
      { name: "TypeScript", level: "Advanced", desc: "Strict typing, Generics, Discriminated Unions" },
      { name: "Next.js & Vite", level: "Advanced", desc: "SSR, SSG, Bundle Splitting, Modern Tooling" },
      { name: "Tailwind CSS", level: "Expert", desc: "Design tokens, Fluid spacing, Responsive Grid" },
      { name: "Motion & Animation", level: "Advanced", desc: "Spring physics, Layout animations, Gestures" },
    ],
    architecture: [
      { name: "Component Systems", desc: "Radix UI, Headless UI, Token architecture" },
      { name: "State Management", desc: "Zustand, Context API, Redux Toolkit, TanStack Query" },
      { name: "Web Performance", desc: "Core Web Vitals, Virtualization, Memoization, Profiling" },
      { name: "Accessibility (a11y)", desc: "WCAG 2.1 AA, Screen readers, Focus traps, ARIA semantics" },
    ],
    tools: [
      "Figma to Code", "Git / GitHub", "Storybook", "Vitest & RTL", "Chrome DevTools", "npm / pnpm", "ESLint / Prettier", "PostCSS"
    ],
  },

  testimonials: [
    {
      id: "t-1",
      name: "Sarah Jenkins",
      role: "Lead Product Designer",
      company: "Studio Horizon",
      content: "Muneeza is that rare frontend engineer who doesn't just replicate Figma designs—she elevates them. Her natural eye for soft micro-interactions, pacing, and human empathy makes every project she touches a joy to use.",
      avatarText: "SJ",
    },
    {
      id: "t-2",
      name: "David Zhao",
      role: "Head of Engineering",
      company: "Nova Interactive",
      content: "Working with Muneeza on our core React platform was an absolute pleasure. She brought deep architectural discipline, reduced re-renders across our dashboard by 70%, and explained complex engineering trade-offs with immense clarity.",
      avatarText: "DZ",
    },
    {
      id: "t-3",
      name: "Ayla Chen",
      role: "Product Lead",
      company: "Pulse Digital",
      content: "Muneeza has an extraordinary talent for turning intricate user flows into calm, peaceful interfaces. Her code is pristine, well-tested, and always accessible right out of the box.",
      avatarText: "AC",
    },
  ],

  themeGradients: [
    {
      id: "royal-sapphire",
      name: "Royal Sapphire",
      color1: "rgba(219, 234, 254, 0.65)",
      color2: "rgba(224, 231, 255, 0.6)",
      color3: "rgba(199, 210, 254, 0.45)",
      accent: "#1d4ed8",
      accentBg: "#eff6ff",
      pillBorder: "#bfdbfe",
    },
    {
      id: "midnight-azure",
      name: "Midnight Azure",
      color1: "rgba(186, 230, 253, 0.55)",
      color2: "rgba(224, 231, 255, 0.5)",
      color3: "rgba(241, 245, 249, 0.65)",
      accent: "#0284c7",
      accentBg: "#f0f9ff",
      pillBorder: "#bae6fd",
    },
    {
      id: "lavender-mist",
      name: "Lavender Mist",
      color1: "rgba(224, 231, 255, 0.55)",
      color2: "rgba(243, 232, 255, 0.55)",
      color3: "rgba(238, 242, 255, 0.45)",
      accent: "#6366f1",
      accentBg: "#eef2ff",
      pillBorder: "#c7d2fe",
    },
    {
      id: "cashmere-slate",
      name: "Cashmere Slate",
      color1: "rgba(241, 245, 249, 0.6)",
      color2: "rgba(224, 231, 255, 0.45)",
      color3: "rgba(248, 250, 252, 0.6)",
      accent: "#334155",
      accentBg: "#f8fafc",
      pillBorder: "#cbd5e1",
    },
  ],
};
