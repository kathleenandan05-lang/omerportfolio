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
    endDate: "2026-06",
    current: false,
    location: "Remote",
    summary:
      "Built and maintained the automation and marketing-ops backbone for a real estate coaching business, cutting hours of manual work down to minutes every week.",
    responsibilities: [
      "Designed and maintained Zapier & Make.com automation workflows for lead capture, CRM updates, and team notifications",
      "Built an AI-assisted newsletter production system, reducing weekly marketing production from 6+ hours to under 30 minutes",
      "Automated lead intake workflows end-to-end, eliminating manual data entry and improving response consistency",
      "Built and maintained 8+ active Zapier and Make.com workflows across CRM, email, reporting, and operations, reducing manual handoffs",
      "Created courses, modules, and landing pages via Kajabi to support program launches",
      "Assisted with email copywriting and preparation of marketing materials, reviewing Canva templates for design accuracy and brand consistency",
    ],
    achievements: [
      "Reduced newsletter production time from 6+ hours to under 30 minutes per week",
      "Automated 100% of lead intake workflows, eliminating manual data entry",
      "Built and maintained 8+ active Zapier/Make workflows simultaneously",
    ],
    tools: ["Zapier", "Make.com", "Kajabi", "Flodesk", "Claude", "ChatGPT", "Canva", "Google Workspace"],
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
      "Delivered administrative, operations, CRM, and marketing-ops support to multiple clients in real estate, home services, and marketing — managing concurrent engagements with consistent quality.",
    responsibilities: [
      "Provided administrative and operations support to clients across real estate and home services, managing task lists, tracking project timelines, and sending regular status reminders",
      "Built KPI dashboards and reporting systems that gave management visibility into pipeline activity, operational performance, and task completion",
      "Managed contact databases, organized digital files, and audited folder structures to maintain data accuracy across client platforms",
      "Coordinated project deliverables and kept multi-department task lists aligned, ensuring deadlines were met across concurrent engagements",
      "Conducted online research for vendors, tools, and partnership opportunities, compiling findings into clear, actionable summaries for client review",
      "Drafted and bulk-scheduled marketing posts for Facebook, Pinterest, Instagram, and TikTok through GoHighLevel",
      "Built and managed CRM pipelines in GoHighLevel and Airtable, maintaining accurate contact records and pipeline data",
      "Documented all systems, workflows, and processes for client handoffs and ongoing team reference",
    ],
    achievements: [
      "Built a lead capture automation that achieved 100% response rate within 2 minutes",
      "Delivered a 40% reduction in lead-to-close time through marketing stack integration",
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
      "Developed and maintained comprehensive SOPs and work instructions for a 97-person team",
      "Tracked and reported operational KPIs including cargo damage rates, vessel dwell times, and truck turnaround",
      "Coordinated resource planning and scheduling to optimize operational throughput",
      "Ensured compliance with safety, quality, and regulatory standards",
    ],
    achievements: [
      "Achieved 10% reduction in cargo damage incidents through process standardization",
      "Created 24 SOPs that standardized operations for a 97-person team",
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
      "Served as internal auditor for BRC, Halal, and ISO 9001:2015 certification cycles, with hands-on HACCP compliance audit experience",
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
];
