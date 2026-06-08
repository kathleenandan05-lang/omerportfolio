// ============================================================
// EXPERIENCE DATA
//
// HOW TO ADD A NEW ROLE:
// 1. Add a new entry to the `experience` array
// 2. Fill in all required fields (marked with *)
// 3. Set `current: true` if this is your current role
// 4. The resume and homepage timeline update automatically
// ============================================================

export interface ExperienceEntry {
  id: string;                   // * Unique identifier
  company: string;              // * Company or client name
  role: string;                 // * Your job title
  type: "remote" | "on-site" | "hybrid";
  startDate: string;            // * YYYY-MM format
  endDate: string;              // * YYYY-MM or "Present"
  current: boolean;             // * Is this your current role?
  location: string;             // * City, Country
  summary: string;              // * 1–2 sentence overview
  responsibilities: string[];   // * Key responsibilities
  achievements: string[];       // * Measurable achievements
  tools: string[];              // * Tools used in this role
  relatedProjects?: string[];   // * Slugs from projects.ts
}

export const experience: ExperienceEntry[] = [
  {
    id: "real-estate-coaches",
    company: "Real Estate Coaches",
    role: "Automation & Operations Virtual Assistant",
    type: "remote",
    startDate: "2025-03",
    endDate: "2026-01",
    current: false,
    location: "Remote",
    summary:
      "Built and managed automation systems, CRM pipelines, and marketing workflows for a real estate coaching business.",
    responsibilities: [
      "Designed and maintained Zapier & Make.com workflows for lead capture, CRM updates, and team notifications",
      "Managed JobNimbus CRM: pipeline configuration, contact management, and stage-based automation",
      "Built an AI-powered newsletter generator using Claude/ChatGPT, reducing production time by 92%",
      "Integrated Flodesk with CRM and marketing platforms for automated email sequences",
      "Created SOPs and documentation for all automation systems",
    ],
    achievements: [
      "Reduced newsletter production time from 6+ hours to under 30 minutes per week",
      "Automated 100% of lead intake workflows, eliminating manual data entry",
      "Built and maintained 8+ active Zapier/Make workflows simultaneously",
    ],
    tools: ["Zapier", "Make.com", "JobNimbus", "Flodesk", "Claude", "ChatGPT", "Google Workspace"],
    relatedProjects: ["ai-newsletter-generator", "crm-pipeline-rebuild"],
  },
  {
    id: "freelance-va",
    company: "Freelance",
    role: "Virtual Assistant & Remote Operations Specialist",
    type: "remote",
    startDate: "2024-04",
    endDate: "2025-07",
    current: false,
    location: "Remote",
    summary:
      "Delivered automation, CRM, and operations support across multiple clients in real estate, home services, and marketing.",
    responsibilities: [
      "Built and managed GoHighLevel automation campaigns and CRM pipelines for multiple clients",
      "Created Zapier and Make.com workflows to reduce manual processes across various business operations",
      "Conducted lead generation, data research, and contact list management",
      "Provided project coordination and administrative operations support",
      "Documented all systems and workflows for client handoffs",
    ],
    achievements: [
      "Built a lead capture automation that achieved 100% response rate within 2 minutes",
      "Completed 40% reduction in lead-to-close time through marketing stack integration",
      "Delivered multi-client engagements simultaneously with consistent quality",
    ],
    tools: ["GoHighLevel", "Zapier", "Make.com", "Airtable", "Notion", "Google Workspace", "Canva"],
    relatedProjects: ["automated-lead-capture-roofing", "marketing-stack-integration"],
  },
  {
    id: "smilsi-port-ops",
    company: "San Miguel Integrated Logistics Services, Inc.",
    role: "Port Operations Supervisor",
    type: "on-site",
    startDate: "2021-11",
    endDate: "2025-03",
    current: false,
    location: "Philippines",
    summary:
      "Led port operations for a major logistics company, overseeing ship unloading, truck staging, team coordination, and operational reporting.",
    responsibilities: [
      "Supervised ship unloading, truck staging, and resource allocation for daily port operations",
      "Developed and maintained comprehensive SOPs and work instructions for a 37-person team",
      "Tracked and reported operational KPIs including cargo damage rates, vessel dwell times, and truck turnaround",
      "Coordinated resource planning and scheduling to optimize operational throughput",
      "Ensured compliance with safety, quality, and regulatory standards",
    ],
    achievements: [
      "Achieved 10% reduction in cargo damage incidents through process standardization",
      "Created 24 SOPs that standardized operations for a 37-person team",
      "Built KPI reporting systems adopted by management as standard operational tools",
    ],
    tools: ["Microsoft Excel", "Google Sheets", "Google Workspace", "Canva"],
    relatedProjects: ["port-operations-sop-system"],
  },
  {
    id: "fbcop-shipping",
    company: "Franklin Baker Company of the Philippines (FBCOP)",
    role: "Shipping & Dispatch Supervisor",
    type: "on-site",
    startDate: "2020-01",
    endDate: "2021-03",
    current: false,
    location: "Philippines",
    summary:
      "Led process improvement initiatives for an FMCG export company's shipping department, achieving dramatic reductions in delays and customer complaints.",
    responsibilities: [
      "Supervised day-to-day shipping and dispatch operations for export operations",
      "Conducted root cause analysis on recurring delays and customer complaints",
      "Implemented barcode scanning and real-time monitoring systems for shipment tracking",
      "Served as internal auditor for BRC, Halal, and ISO 9001:2015 certification cycles",
      "Managed cross-functional coordination with warehouse, production, and procurement teams",
    ],
    achievements: [
      "Reduced shipping delays by 90% through process redesign and barcode scanning implementation",
      "Reduced customer complaints by 50% within 6 months via root cause analysis",
      "Successfully maintained ISO 9001:2015, BRC, and Halal certification compliance",
    ],
    tools: ["Barcode Scanning System", "Microsoft Excel", "ISO 9001:2015 Tools"],
    relatedProjects: ["shipping-process-optimization"],
  },
  {
    id: "fbcop-warehouse",
    company: "Franklin Baker Company of the Philippines (FBCOP)",
    role: "Warehouse & Inventory Specialist",
    type: "on-site",
    startDate: "2019-06",
    endDate: "2020-01",
    current: false,
    location: "Philippines",
    summary:
      "Managed warehouse operations and inventory control, leading a 37-person team and participating in multi-plant executive planning.",
    responsibilities: [
      "Led daily warehouse operations for a 37-person team",
      "Managed inventory accuracy, stock control, and cycle count procedures",
      "Acted as Officer-in-Charge in absence of department management",
      "Participated in multi-plant PPIC-Sales executive planning meetings",
      "Maintained compliance across BRC, Halal, and ISO 9001:2015 audit cycles",
    ],
    achievements: [
      "Led a 37-person team with consistent operational performance",
      "Maintained audit compliance across multiple international certification standards",
    ],
    tools: ["Microsoft Excel", "Inventory Management Systems"],
    relatedProjects: [],
  },
];
