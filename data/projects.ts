// ============================================================
// PROJECTS DATA
//
// HOW TO ADD A NEW PROJECT:
// 1. Copy the object template at the bottom of this file
// 2. Fill in each field - required fields are marked with (*)
// 3. Set featuredOnHome: true to show it on the homepage
// 4. Set resumeVisible: true to include it on the resume page
// 5. Save the file. The site updates automatically everywhere
//
// SLUG: must be URL-safe (lowercase, hyphens only, no spaces)
// CATEGORY: use one of the defined ProjectCategory values below
// ============================================================

export type ProjectCategory =
  | "Automation"
  | "CRM"
  | "Dashboard"
  | "SOP"
  | "Operations"
  | "Data Cleanup"
  | "Email Marketing"
  | "Integration";

export interface CaseStudyStep {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;                 // * URL-safe identifier
  title: string;                // * Project title
  category: ProjectCategory;    // * Primary category for filtering
  tags: string[];               // * Searchable tags
  client: string;               // * Client type or industry
  shortSummary: string;         // * 1–2 sentence homepage summary
  problem: string;              // * What challenge was the client facing?
  solution: string;             // * What did you build or implement?
  process: CaseStudyStep[];     // * Step-by-step process breakdown
  tools: string[];              // * Tools and platforms used
  results: string[];            // * Bullet-point outcomes
  metrics: {                    // * Quantified impact numbers
    value: string;
    label: string;
  }[];
  lessons?: string;             // Optional: what you learned or would improve
  dateCompleted: string;        // YYYY-MM format
  featuredOnHome: boolean;      // Show on homepage featured section?
  resumeVisible: boolean;       // Include on resume page?
  icon?: string;                // Optional emoji icon for the card
}

export const projects: Project[] = [
  // ─── PROJECT 1 ───────────────────────────────────────────
  {
    slug: "automated-lead-capture-roofing",
    title: "Automated Lead Capture & Follow-Up System",
    category: "Automation",
    tags: ["GoHighLevel", "Zapier", "CRM", "Lead Automation", "SMS", "Real Estate"],
    client: "Roofing & Home Services Company",
    shortSummary:
      "Built a fully automated lead pipeline that responds to every new inquiry within 2 minutes, replacing a slow, manual spreadsheet process.",
    problem:
      "The client was tracking leads in spreadsheets and relying on manual follow-up. Response times averaged 2–4 hours, resulting in lost opportunities to faster-responding competitors. There was no visibility into pipeline stages or lead status.",
    solution:
      "Designed and deployed a GoHighLevel CRM pipeline with Zapier-triggered automations. Every new lead from web forms and ads is automatically entered, tagged, assigned to a stage, and sent a personalized SMS and email sequence, all within 2 minutes of submission.",
    process: [
      {
        heading: "Audit & Discovery",
        body: "Reviewed the existing spreadsheet workflow, identified manual touchpoints, and mapped the full lead lifecycle from inquiry to close.",
      },
      {
        heading: "CRM Pipeline Design",
        body: "Built a structured GoHighLevel pipeline with defined stages: New Lead → Contacted → Qualified → Proposal Sent → Won/Lost. Each stage has automated tasks and notifications.",
      },
      {
        heading: "Zapier Automation Build",
        body: "Connected web form submissions to GoHighLevel via Zapier. Built multi-step Zaps for SMS triggers, email sequences, task creation, and sales rep notifications.",
      },
      {
        heading: "Testing & Refinement",
        body: "Ran 20+ test submissions to verify trigger accuracy, message personalization, and timing. Refined follow-up copy based on client feedback.",
      },
    ],
    tools: ["GoHighLevel", "Zapier", "Google Sheets", "Facebook Lead Ads"],
    results: [
      "100% of leads receive an automated response within 2 minutes",
      "Eliminated manual spreadsheet tracking entirely",
      "Full pipeline visibility with stage-based dashboards",
      "Reduced time spent on follow-up by approximately 3 hours per day",
    ],
    metrics: [
      { value: "100%", label: "Lead response rate in under 2 min" },
      { value: "2 min", label: "Average response time (was 2–4 hrs)" },
      { value: "3 hrs/day", label: "Manual follow-up time eliminated" },
    ],
    lessons:
      "The biggest improvement came from standardizing the lead stages before any automation was built. Getting the pipeline logic right first made the automation far more reliable and maintainable.",
    dateCompleted: "2025-06",
    featuredOnHome: true,
    resumeVisible: true,
    icon: "⚡",
  },

  // ─── PROJECT 2 ───────────────────────────────────────────
  {
    slug: "ai-newsletter-generator",
    title: "AI-Powered Newsletter Production System",
    category: "Automation",
    tags: ["ChatGPT", "Claude", "Zapier", "Flodesk", "Email Marketing", "AI"],
    client: "Marketing & Real Estate Coaching Team",
    shortSummary:
      "Cut weekly newsletter production from 6+ hours to under 30 minutes using an AI drafting and automated distribution pipeline.",
    problem:
      "The marketing team was spending 6+ hours per week manually researching topics, writing newsletter drafts, formatting content in HTML, and scheduling sends. The process was inconsistent, error-prone, and created a bottleneck every single week.",
    solution:
      "Built a multi-step automation pipeline: Zapier aggregates content topics from approved sources, Claude/ChatGPT drafts the newsletter in a branded HTML format, and Flodesk handles scheduling and send. Human review is the only manual step.",
    process: [
      {
        heading: "Process Mapping",
        body: "Documented every step of the existing newsletter workflow, timing each stage to identify the biggest time drains (content sourcing and HTML formatting were the top two).",
      },
      {
        heading: "Content Aggregation",
        body: "Set up Zapier workflows to pull approved content from RSS feeds, saved articles, and team-submitted topics into a structured queue.",
      },
      {
        heading: "AI Drafting Pipeline",
        body: "Built a prompt template in Claude/ChatGPT that takes the topic queue and outputs a fully formatted, on-brand newsletter draft in HTML, including the subject line and preview text.",
      },
      {
        heading: "Flodesk Integration",
        body: "Connected the pipeline to Flodesk so drafted newsletters land directly in the email builder, ready for a 10-minute human review and one-click schedule.",
      },
    ],
    tools: ["Claude", "ChatGPT", "Zapier", "Flodesk", "Google Sheets", "RSS Feeds"],
    results: [
      "Newsletter production time reduced from 6+ hours to under 30 minutes per week",
      "Consistent formatting and tone across every issue",
      "Content sourcing fully automated with zero manual research time",
      "Team capacity freed up for higher-value creative and strategy work",
    ],
    metrics: [
      { value: "92%", label: "Reduction in newsletter production time" },
      { value: "30 min", label: "End-to-end production time (was 6+ hrs)" },
      { value: "5×", label: "Faster publishing cadence achievable" },
    ],
    lessons:
      "The most impactful change was the AI prompt template. Investing time in designing a detailed, structured prompt paid off massively. The output quality eliminated the need for heavy editing.",
    dateCompleted: "2025-08",
    featuredOnHome: true,
    resumeVisible: true,
    icon: "✉️",
  },

  // ─── PROJECT 3 ───────────────────────────────────────────
  {
    slug: "crm-pipeline-rebuild",
    title: "CRM Pipeline Rebuild & Sales Automation",
    category: "CRM",
    tags: ["JobNimbus", "CRM", "Data Cleanup", "Automation", "Reporting", "Sales"],
    client: "Home Services Sales Team",
    shortSummary:
      "Audited, rebuilt, and automated a CRM system that had become unusable, transforming it into a reliable pipeline that improved deal close rates by 30%.",
    problem:
      "The client's JobNimbus CRM had accumulated 18 months of dirty data: duplicate records, stale pipeline stages, inconsistent tagging, and no automated follow-through. Sales reps were ignoring it entirely and reverting to ad-hoc tracking methods.",
    solution:
      "Performed a full CRM audit and data cleanup, rebuilt the pipeline stage logic, set up automated status updates and task triggers, and built reporting dashboards to give management real-time visibility into pipeline health and rep activity.",
    process: [
      {
        heading: "CRM Audit",
        body: "Exported all records and ran a full audit: identified ~340 duplicate contacts, 60+ stale deals older than 6 months, and 12 inconsistently used pipeline stages. Documented all issues.",
      },
      {
        heading: "Data Cleanup",
        body: "Merged duplicates, archived stale records, standardized contact and deal fields, and normalized stage names to a clean 6-stage pipeline.",
      },
      {
        heading: "Pipeline Rebuild & Automations",
        body: "Rebuilt pipeline stages in JobNimbus with clear entry/exit criteria. Configured automated tasks, reminders, and status updates at each stage transition. Set up escalation alerts for deals that stall.",
      },
      {
        heading: "Reporting Dashboard",
        body: "Built a dashboard showing pipeline volume by stage, conversion rates, average deal age, and rep activity, giving management weekly visibility without manual reporting.",
      },
    ],
    tools: ["JobNimbus", "Google Sheets", "Zapier", "Google Data Studio"],
    results: [
      "30% improvement in deal close rate within 60 days of launch",
      "Eliminated 340+ duplicate records and rebuilt clean data foundation",
      "Sales reps re-adopted the CRM with consistent usage within 2 weeks",
      "Management gained real-time pipeline visibility for the first time",
    ],
    metrics: [
      { value: "30%", label: "Improvement in deal close rate" },
      { value: "340+", label: "Duplicate records eliminated" },
      { value: "40%", label: "Reduction in lead-to-close time" },
    ],
    lessons:
      "CRM adoption is a people problem as much as a system problem. Rebuilding the data was important, but the biggest win was simplifying the pipeline stages so reps could use it without thinking: fewer stages, clearer criteria.",
    dateCompleted: "2025-10",
    featuredOnHome: true,
    resumeVisible: true,
    icon: "🔧",
  },

  // ─── PROJECT 4 ───────────────────────────────────────────
  {
    slug: "marketing-stack-integration",
    title: "Multi-Channel Marketing Stack Integration",
    category: "Integration",
    tags: ["Make.com", "Facebook Ads", "CRM", "Email Marketing", "Audience Segmentation"],
    client: "Digital Marketing Agency",
    shortSummary:
      "Connected fragmented Facebook Ads, CRM, and email marketing data into a single automated pipeline, cutting lead-to-close time by 40%.",
    problem:
      "Lead data was siloed across Facebook Ads Manager, GoHighLevel CRM, and Flodesk. Marketing teams were manually exporting CSVs and copy-pasting data between platforms, a process taking 4-6 hours per week and introducing frequent errors.",
    solution:
      "Built a Make.com integration architecture that connects all three platforms in real time. New Facebook leads auto-populate in GoHighLevel, trigger segmented email sequences in Flodesk, and sync campaign performance data back to a reporting sheet, with zero manual data movement.",
    process: [
      {
        heading: "Integration Mapping",
        body: "Mapped all data flows between platforms, identified the key trigger events (new lead, form submit, ad spend threshold), and documented the desired automated outcomes for each.",
      },
      {
        heading: "Make.com Scenario Build",
        body: "Built 4 Make.com scenarios: Facebook → GHL sync, GHL stage change → Flodesk list update, ad performance → reporting sheet, and a daily data reconciliation audit.",
      },
      {
        heading: "Audience Segmentation",
        body: "Set up dynamic Flodesk segments based on lead source, campaign, and pipeline stage, enabling targeted follow-up sequences for different audience groups.",
      },
      {
        heading: "QA & Monitoring",
        body: "Ran a 2-week QA period, monitoring sync accuracy, error rates, and data integrity. Built an error-alert Zap to notify the team of any failed scenario runs.",
      },
    ],
    tools: ["Make.com", "GoHighLevel", "Flodesk", "Facebook Ads", "Google Sheets"],
    results: [
      "40% reduction in lead-to-close time",
      "Eliminated 4–6 hours per week of manual data entry",
      "Real-time cross-platform visibility into campaign and pipeline performance",
      "Audience segmentation enabled more relevant, timely follow-up sequences",
    ],
    metrics: [
      { value: "40%", label: "Reduction in lead-to-close time" },
      { value: "5 hrs/wk", label: "Manual data entry time eliminated" },
      { value: "4", label: "Platforms connected in real time" },
    ],
    lessons:
      "Start with one clean integration and expand. We tried connecting all 4 platforms at once in the first version, which made debugging complex. Rebuilding it as sequential, modular scenarios made the system far more maintainable.",
    dateCompleted: "2025-04",
    featuredOnHome: true,
    resumeVisible: true,
    icon: "🔗",
  },

  // ─── PROJECT 5 ───────────────────────────────────────────
  {
    slug: "port-operations-sop-system",
    title: "Port Operations SOP & KPI Reporting System",
    category: "SOP",
    tags: ["SOP", "Operations", "KPI", "Excel", "Process Documentation", "Logistics"],
    client: "Port Logistics Company (SMILSI)",
    shortSummary:
      "Developed a comprehensive SOP library and KPI tracking system for a port operations team, reducing cargo damage incidents by 10%.",
    problem:
      "The operations team lacked standardized procedures for ship unloading, truck staging, and resource allocation. Process knowledge was tribal, training was inconsistent, and there was no systematic way to track performance KPIs over time.",
    solution:
      "Created a full SOP library covering all core port operations procedures, developed KPI tracking templates in Excel, and implemented a monthly reporting cadence that gave management clear operational visibility.",
    process: [
      {
        heading: "Process Observation & Documentation",
        body: "Spent 3 weeks shadowing all operational roles, documenting every procedure, decision point, and safety requirement. Identified 24 core processes that needed standardization.",
      },
      {
        heading: "SOP Authoring",
        body: "Wrote 24 SOPs with clear step-by-step instructions, visual diagrams, role assignments, and safety checklists. All formatted consistently with version control.",
      },
      {
        heading: "KPI Framework",
        body: "Defined 8 operational KPIs (cargo damage rate, truck turnaround time, vessel dwell time, etc.) and built Excel tracking templates that field supervisors could update daily.",
      },
      {
        heading: "Rollout & Training",
        body: "Conducted 3 training sessions with a 97-person team, integrated SOPs into onboarding materials, and established a monthly KPI review cadence with management.",
      },
    ],
    tools: ["Microsoft Excel", "Google Sheets", "Google Docs", "Canva"],
    results: [
      "10% reduction in cargo damage incidents within 6 months",
      "24 core operations procedures documented and standardized",
      "97-person team trained and aligned on consistent procedures",
      "Monthly KPI reporting became a standard management tool",
    ],
    metrics: [
      { value: "10%", label: "Reduction in cargo damage incidents" },
      { value: "24", label: "SOPs created and deployed" },
      { value: "97", label: "Team members trained" },
    ],
    dateCompleted: "2024-01",
    featuredOnHome: false,
    resumeVisible: true,
    icon: "📋",
  },

  // ─── PROJECT 6 ───────────────────────────────────────────
  {
    slug: "shipping-process-optimization",
    title: "Shipping & Dispatch Process Optimization",
    category: "Operations",
    tags: ["Process Improvement", "Barcode Scanning", "Root Cause Analysis", "ISO", "Logistics"],
    client: "FMCG Export Company (FBCOP)",
    shortSummary:
      "Led a process improvement initiative that eliminated 90% of shipping delays and cut customer complaints by 50% through root cause analysis and real-time monitoring.",
    problem:
      "The shipping and dispatch department was experiencing frequent delays and a high volume of customer complaints. The root causes were unclear, tracking was manual, and there was no real-time visibility into shipment status.",
    solution:
      "Conducted systematic root cause analysis using Lean Six Sigma methods, implemented a barcode scanning system for real-time shipment tracking, and established a complaint resolution process with structured feedback loops.",
    process: [
      {
        heading: "Root Cause Analysis",
        body: "Used fishbone diagrams and 5-why analysis to trace the top complaint categories back to their root causes. Identified 3 primary drivers: scheduling conflicts, labeling errors, and documentation gaps.",
      },
      {
        heading: "Process Redesign",
        body: "Redesigned the dispatch workflow to eliminate the identified root causes: introduced pre-dispatch checklists, standardized labeling procedures, and built scheduling buffers.",
      },
      {
        heading: "Barcode Scanning Implementation",
        body: "Implemented a barcode-based real-time monitoring system for all outbound shipments, giving the team immediate visibility into shipment status at every stage.",
      },
      {
        heading: "Customer Feedback System",
        body: "Established a structured complaint logging and resolution process, enabling faster response times and continuous improvement based on customer feedback data.",
      },
    ],
    tools: ["Barcode Scanning System", "Microsoft Excel", "ISO 9001:2015 Tools"],
    results: [
      "90% reduction in shipping delays through process redesign",
      "50% reduction in customer complaints within 6 months",
      "Real-time shipment visibility eliminated manual status inquiries",
      "Process improvements maintained through ISO 9001:2015 audit cycles",
    ],
    metrics: [
      { value: "90%", label: "Reduction in shipping delays" },
      { value: "50%", label: "Reduction in customer complaints" },
      { value: "ISO 9001", label: "Compliance maintained" },
    ],
    dateCompleted: "2021-03",
    featuredOnHome: false,
    resumeVisible: true,
    icon: "🚢",
  },

  // ─── PROJECT 7 ───────────────────────────────────────────
  {
    slug: "flodesk-status-sync-automation",
    title: "Status-Driven CRM & Flodesk Sync Automation",
    category: "Automation",
    tags: ["Zapier", "Flodesk", "Google Sheets", "CRM Sync", "QA Automation", "Segmentation"],
    client: "Custom Product Fulfillment Business",
    shortSummary:
      "Built a multi-path Zapier automation that keeps Flodesk audience segments in sync with a live production tracker and automatically alerts the internal team when items are ready for quality review.",
    problem:
      "The client tracked customization project status and service tier in a shared Google Sheet, but keeping the matching Flodesk email segments up to date required manually moving contacts between lists every time a project's status changed. Missed updates meant customers received the wrong lifecycle emails, and the team had no automatic signal when an item was actually ready for internal quality review.",
    solution:
      "Designed a single Zapier automation that triggers on any new or updated row in the Master Data sheet, branches into parallel paths by Status and Tier, and updates the matching Flodesk segment for each combination (e.g. \"Tier 1/2/3 – Awaiting Client Completion,\" \"Missing Items,\" \"Complete / Needs QA\"). When a row lands in a Complete/Needs QA path, a filtered branch also fires an internal email to the review team with the project and tier details, so nothing waits on someone noticing it in the sheet.",
    process: [
      {
        heading: "Trigger & Path Mapping",
        body: "Mapped every Status × Tier combination in the Master Data sheet to its own Zapier path, using nested Paths steps to branch first by status category and then by tier.",
      },
      {
        heading: "Flodesk Segment Logic",
        body: "Built Create/Update Subscriber and add-to-segment actions for each path, so a single row update moves a contact into the correct Flodesk segment without any manual list management.",
      },
      {
        heading: "QA Alert Branch",
        body: "Added a Filter by Zapier step on the Complete/Needs QA paths so only genuinely QA-ready rows continue, then triggered a Gmail notification to the internal review team with the project and tier included.",
      },
      {
        heading: "Testing Across Paths",
        body: "Tested each status/tier path combination individually to confirm rows routed to the correct Flodesk segment and that QA alerts fired only on the intended status.",
      },
    ],
    tools: ["Zapier", "Google Sheets", "Flodesk", "Gmail"],
    results: [
      "Flodesk segments now stay in sync with the production tracker automatically, with zero manual list moves",
      "Internal QA team is notified the moment an item is ready for review, instead of relying on someone checking the sheet",
      "8+ status/tier combinations routed correctly through a single automation",
      "Eliminated the risk of customers receiving outdated lifecycle emails due to stale segment membership",
    ],
    metrics: [
      { value: "8+", label: "Status/tier paths automated in one Zap" },
      { value: "3", label: "Platforms connected (Sheets, Flodesk, Gmail)" },
    ],
    lessons:
      "The hardest part wasn't the automation logic, it was mapping every real-world status and tier combination up front so no edge case fell through to the wrong Flodesk segment.",
    dateCompleted: "2025-12",
    featuredOnHome: true,
    resumeVisible: true,
    icon: "🔄",
  },

  // ─── PROJECT 8 ───────────────────────────────────────────
  {
    slug: "intake-to-invoice-automation",
    title: "Intake-to-Invoice Automation",
    category: "Automation",
    tags: ["Typeform", "Airtable", "Zoho", "Outlook", "Zapier", "Invoicing"],
    client: "Freelance Service Business Client",
    shortSummary:
      "Built an automated intake-to-invoice pipeline that takes a client from form submission to a scheduled appointment with zero manual data entry.",
    problem:
      "New client intake, invoicing, and scheduling were handled as separate manual steps. A submitted form still required someone to log the details, generate an invoice, and manually book the appointment.",
    solution:
      "Connected a Typeform intake form to Airtable for structured record-keeping, added a checkbox-triggered automation that generates a Zoho invoice, and synced confirmed appointments directly to Outlook, turning a 3-step manual handoff into one continuous flow.",
    process: [
      {
        heading: "Intake Capture",
        body: "Routed Typeform submissions directly into Airtable, creating a structured record for every new inquiry.",
      },
      {
        heading: "Checkbox-Triggered Invoicing",
        body: "Built a checkbox field in Airtable that, when checked, triggers automatic Zoho invoice generation for that record.",
      },
      {
        heading: "Appointment Scheduling",
        body: "Connected confirmed records to Outlook so appointments are scheduled automatically without a separate booking step.",
      },
      {
        heading: "Testing",
        body: "Tested the full path from form submission through invoice generation and calendar sync to confirm each handoff fired correctly.",
      },
    ],
    tools: ["Typeform", "Airtable", "Zoho", "Outlook", "Zapier"],
    results: [
      "Eliminated manual data entry between intake, invoicing, and scheduling",
      "Turned a 3-step manual handoff into one continuous automated flow",
      "Reduced the chance of dropped or delayed invoices after intake",
    ],
    metrics: [],
    dateCompleted: "2025-06",
    featuredOnHome: false,
    resumeVisible: true,
    icon: "🧾",
  },

  // ─── PROJECT 9 ───────────────────────────────────────────
  {
    slug: "ai-assisted-web-app-development",
    title: "AI-Assisted Web & App Development",
    category: "Automation",
    tags: ["Claude", "ChatGPT", "Codex", "Web Development", "AI-Assisted Development"],
    client: "Freelance Web & App Clients",
    shortSummary:
      "Designed and shipped client websites and applications using AI-assisted development workflows to speed up delivery.",
    problem:
      "Clients needed working websites and applications delivered quickly, without the multi-week timelines typical of a fully manual build.",
    solution:
      "Used AI-assisted coding tools (Claude, ChatGPT/Codex) throughout the development workflow, from scaffolding and component generation to debugging and refactoring, to design and ship client websites and applications faster than a fully manual build.",
    process: [
      {
        heading: "Requirements & Scoping",
        body: "Gathered client requirements and mapped out the site or app structure before writing any code.",
      },
      {
        heading: "AI-Assisted Build",
        body: "Used Claude and ChatGPT/Codex to scaffold components, generate boilerplate, and accelerate implementation across the stack.",
      },
      {
        heading: "Review & Refinement",
        body: "Reviewed and refined AI-generated code for correctness, performance, and maintainability before shipping.",
      },
      {
        heading: "Delivery",
        body: "Deployed finished sites and applications for client use.",
      },
    ],
    tools: ["Claude", "ChatGPT", "Codex"],
    results: [
      "Delivered client websites and applications faster than a fully manual build",
      "Used AI-assisted workflows across scaffolding, debugging, and refactoring",
      "Maintained code quality through manual review of AI-generated output before shipping",
    ],
    metrics: [],
    dateCompleted: "2025-05",
    featuredOnHome: false,
    resumeVisible: true,
    icon: "💻",
  },

  // ─── PROJECT 10 ──────────────────────────────────────────
  {
    slug: "web-scraping-ai-agent",
    title: "Web-Scraping AI Agent",
    category: "Automation",
    tags: ["Claude", "ChatGPT", "AI Agents", "Web Scraping", "Data Structuring"],
    client: "Freelance Research & Operations Clients",
    shortSummary:
      "Built an AI agent that automates web data collection and structuring for client research and operations.",
    problem:
      "Clients needed structured data gathered from the web for research and operational decision-making, a task that was slow and repetitive to do by hand.",
    solution:
      "Built an AI agent that automates the collection and structuring of web data, turning an unstructured, manual research task into a repeatable pipeline.",
    process: [
      {
        heading: "Target & Structure Definition",
        body: "Defined the data sources and the structured output format the client needed for downstream use.",
      },
      {
        heading: "Agent Build",
        body: "Built an AI agent to navigate and extract the required data from target web sources.",
      },
      {
        heading: "Data Structuring",
        body: "Structured the scraped output into a clean, usable format for client research and operations.",
      },
      {
        heading: "Validation",
        body: "Spot-checked extracted data for accuracy before handoff.",
      },
    ],
    tools: ["Claude", "ChatGPT", "AI Agents", "Web Scraping"],
    results: [
      "Automated collection and structuring of web data for client research and operations",
      "Replaced manual data-gathering with a repeatable AI agent pipeline",
      "Delivered structured, ready-to-use datasets instead of raw unstructured pages",
    ],
    metrics: [],
    dateCompleted: "2025-07",
    featuredOnHome: false,
    resumeVisible: true,
    icon: "🕸️",
  },
];

// ─── HOW TO ADD A NEW PROJECT ─────────────────────────────
// Copy this template, fill it in, and paste it above this comment.
//
// {
//   slug: "your-project-slug",               // * URL-safe, lowercase, hyphens
//   title: "Your Project Title",             // * Display title
//   category: "Automation",                  // * One of the ProjectCategory values
//   tags: ["Tag1", "Tag2"],                  // * For filtering and search
//   client: "Client Industry or Type",       // * Who was this for?
//   shortSummary: "One to two sentence...",  // * Shown on homepage cards
//   problem: "What challenge did they...",   // * Full problem description
//   solution: "What you built or did...",    // * Full solution description
//   process: [                               // * Step-by-step process
//     { heading: "Step Name", body: "What you did in this step..." },
//   ],
//   tools: ["Tool1", "Tool2"],               // * Platforms/tools used
//   results: ["Outcome 1", "Outcome 2"],     // * Bulleted outcomes
//   metrics: [                               // * Key metrics (shown as stat cards)
//     { value: "X%", label: "What it means" },
//   ],
//   lessons: "Optional: what you learned",  // Optional
//   dateCompleted: "2025-12",               // * YYYY-MM format
//   featuredOnHome: true,                   // * Show on homepage?
//   resumeVisible: true,                    // * Show on resume page?
//   icon: "⚡",                             // Optional emoji
// },
