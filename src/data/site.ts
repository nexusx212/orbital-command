import { Cpu, Cloud, Fingerprint, BarChart3, Globe2, HeartPulse } from "lucide-react";

export const platforms = [
  {
    slug: "dtfs",
    name: "DTFS",
    tagline: "Digital Trade Facilitation System",
    description:
      "Helping African businesses export globally through intelligent digital trade infrastructure.",
    features: [
      "AI Trade Assistant",
      "Export Marketplace",
      "Trade Finance",
      "Logistics",
      "Compliance",
      "Cross-border Payments",
      "Analytics",
    ],
    icon: Globe2,
  },
  {
    slug: "nexcare",
    name: "NexCare",
    tagline: "AI-Powered Digital Health Platform",
    description:
      "Connecting patients, providers, hospitals, insurers, pharmacies, laboratories and wearable devices through one intelligent ecosystem.",
    features: [
      "Telemedicine",
      "Medical Travel",
      "Remote Monitoring",
      "AI Health Assistant",
      "Wearables",
      "Electronic Medical Records",
    ],
    icon: HeartPulse,
  },
  {
    slug: "nexus-ai",
    name: "Nexus AI",
    tagline: "Enterprise AI Infrastructure",
    description:
      "Models, agents and governance tooling that let institutions deploy AI safely at national scale.",
    features: ["Model Orchestration", "AI Agents", "Evaluation & Guardrails", "Private Deployment"],
    icon: Cpu,
  },
  {
    slug: "nexus-cloud",
    name: "Nexus Cloud",
    tagline: "Cloud Infrastructure",
    description:
      "Resilient, region-aware compute and storage engineered for African latency, sovereignty and cost realities.",
    features: ["Elastic Compute", "Data Residency", "Managed Kubernetes", "Edge Delivery"],
    icon: Cloud,
  },
  {
    slug: "nexus-identity",
    name: "Nexus Identity",
    tagline: "Digital Identity Infrastructure",
    description:
      "Verifiable identity, KYC and consent rails that make digital public and private services trustworthy.",
    features: ["Identity Verification", "KYC / AML", "Consent Ledger", "Single Sign-On"],
    icon: Fingerprint,
  },
  {
    slug: "nexus-data",
    name: "Nexus Data",
    tagline: "Enterprise Analytics Platform",
    description:
      "Unified data pipelines and predictive analytics that turn fragmented operations into decisions.",
    features: ["Data Pipelines", "Real-time Dashboards", "Predictive Models", "Reporting APIs"],
    icon: BarChart3,
  },
];

export const industries = [
  { name: "Healthcare", description: "Connected care, records and remote monitoring." },
  { name: "Trade", description: "Export readiness, compliance and cross-border payments." },
  { name: "Finance", description: "Identity, risk and payment infrastructure." },
  { name: "Education", description: "Digital learning delivery and credentialing." },
  { name: "Government", description: "Intelligent public services and digital identity." },
  { name: "Agriculture", description: "Traceability, market access and yield intelligence." },
  { name: "Manufacturing", description: "Operations visibility and supply chain systems." },
  { name: "Energy", description: "Grid data, metering and distribution analytics." },
  { name: "Transportation", description: "Fleet, freight and logistics coordination." },
  { name: "Telecommunications", description: "APIs, data platforms and service enablement." },
  { name: "Smart Cities", description: "Sensor networks and urban service platforms." },
  { name: "Development Agencies", description: "Impact measurement and programme delivery." },
];

export const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "Blockchain",
  "Cybersecurity",
  "Internet of Things",
  "APIs",
  "Big Data",
  "Predictive Analytics",
  "Digital Identity",
];

export const recognitions = [
  { name: "DEAP", detail: "Digital Exports Acceleration Programme" },
  { name: "iDICE", detail: "Startup Bridge" },
  { name: "NBTI", detail: "National Board for Technology Incubation" },
  { name: "NexGen", detail: "Innovation Challenge Finalist" },
];

export const differentiators = [
  {
    title: "Enterprise Security",
    description: "Zero-trust architecture, encryption by default and auditable access across every platform.",
  },
  {
    title: "Built for Scale",
    description: "Systems engineered for millions of concurrent users and national-scale workloads.",
  },
  {
    title: "AI Native",
    description: "Intelligence is designed into the core of each platform, not bolted on afterwards.",
  },
  {
    title: "Cloud Infrastructure",
    description: "Resilient, region-aware deployment with data residency and sovereignty controls.",
  },
  {
    title: "African Expertise",
    description: "Built by teams who understand the regulatory, connectivity and market realities of the continent.",
  },
  {
    title: "Global Standards",
    description: "Interoperable, standards-compliant engineering that meets international expectations.",
  },
];

export const impactStats = [
  { value: 54, suffix: "", label: "African Countries" },
  { value: 100, suffix: "M+", label: "Potential Users" },
  { value: 10, suffix: "M+", label: "Businesses" },
  { value: 100, prefix: "$", suffix: "B+", label: "Long-term Economic Enablement Goal" },
  { value: 1, suffix: "B+", label: "Potential Digital Transactions" },
  { value: 0, suffix: "", label: "Jobs Enabled", display: "Thousands" },
];

export const timeline = [
  { title: "Concept", detail: "Identifying the infrastructure gaps holding back African industries." },
  { title: "Product Development", detail: "Engineering the first platform primitives for trade and health." },
  { title: "DEAP Selection", detail: "Selected for the Digital Exports Acceleration Programme." },
  { title: "iDICE Startup Bridge", detail: "Joining Nigeria's flagship digital innovation programme." },
  { title: "NexCare Finalist", detail: "Recognised at the NexGen Innovation Challenge." },
  { title: "Commercial Launch", detail: "Bringing platforms to enterprise and government customers." },
  { title: "African Expansion", detail: "Scaling infrastructure across regional markets." },
  { title: "Global Partnerships", detail: "Interconnecting Africa with global trade and technology networks." },
];

export const newsroom = [
  {
    category: "AI",
    title: "Designing AI systems for low-bandwidth African enterprises",
    excerpt:
      "How model routing, caching and edge inference make AI viable where connectivity is intermittent.",
    date: "2026",
  },
  {
    category: "Healthcare",
    title: "The interoperability problem in African health systems",
    excerpt:
      "Records, labs, pharmacies and insurers rarely share data. Here is the infrastructure layer that fixes it.",
    date: "2026",
  },
  {
    category: "Trade",
    title: "What it really takes for an SME to export",
    excerpt:
      "Compliance, finance and logistics friction — measured across seven West African corridors.",
    date: "2026",
  },
  {
    category: "Innovation",
    title: "Infrastructure companies compound. Apps do not.",
    excerpt: "Why platform primitives create durable value in emerging digital economies.",
    date: "2026",
  },
  {
    category: "Government Technology",
    title: "Digital identity as public infrastructure",
    excerpt: "Consent-first identity rails that governments and citizens can both trust.",
    date: "2026",
  },
];

export const openRoles = [
  { title: "Senior Platform Engineer", team: "Nexus Cloud", location: "Lagos / Remote", type: "Full-time" },
  { title: "Machine Learning Engineer", team: "Nexus AI", location: "Lagos / Remote", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Remote", type: "Full-time" },
  { title: "Trade Solutions Lead", team: "DTFS", location: "Lagos", type: "Full-time" },
  { title: "Clinical Product Manager", team: "NexCare", location: "Lagos / Remote", type: "Full-time" },
  { title: "Security Engineer", team: "Infrastructure", location: "Remote", type: "Full-time" },
];
