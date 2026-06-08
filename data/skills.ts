// ============================================================
// SKILLS & TOOLS DATA
//
// HOW TO UPDATE:
// - Add tools to the relevant category in `toolCategories`
// - Add or edit core skill cards in `coreSkills`
// - The resume and tools section update automatically
// ============================================================

export interface ToolCategory {
  name: string;
  tools: string[];
}

export interface CoreSkill {
  title: string;
  description: string;
  icon: string;
}

export const toolCategories: ToolCategory[] = [
  {
    name: "Automation",
    tools: ["Zapier", "Make.com", "Google Apps Script"],
  },
  {
    name: "CRM & Operations",
    tools: ["GoHighLevel", "JobNimbus", "Airtable", "AppSheet"],
  },
  {
    name: "Productivity & Docs",
    tools: ["Google Workspace", "Notion", "Microsoft Office"],
  },
  {
    name: "Email & Marketing",
    tools: ["Flodesk", "Canva"],
  },
  {
    name: "AI & Analysis",
    tools: ["Claude", "ChatGPT", "Google Sheets", "Excel"],
  },
];

export const coreSkills: CoreSkill[] = [
  {
    title: "Operations Systems",
    description:
      "SOP creation, process standardization, bottleneck elimination, and KPI framework design for operations teams.",
    icon: "⚙️",
  },
  {
    title: "Automation & Workflows",
    description:
      "End-to-end automation with Zapier, Make.com, and Google Apps Script — connecting tools and eliminating manual steps.",
    icon: "⚡",
  },
  {
    title: "CRM Management",
    description:
      "CRM setup, data cleanup, pipeline configuration, and stage-based automation in GoHighLevel and JobNimbus.",
    icon: "🔧",
  },
  {
    title: "Reporting & Dashboards",
    description:
      "KPI dashboards, performance reports, and data visualization using Google Sheets, Airtable, and connected BI tools.",
    icon: "📊",
  },
  {
    title: "Process Documentation",
    description:
      "Writing clear, structured SOPs and work instructions that teams can follow without ambiguity.",
    icon: "📋",
  },
  {
    title: "Systems Integration",
    description:
      "Connecting fragmented tools and platforms so data flows automatically — no manual exports, no CSV gymnastics.",
    icon: "🔗",
  },
];
