// ============================================================
// SKILLS & TOOLS DATA
//
// HOW TO UPDATE:
// - `skillCategories` powers the homepage Skills section and the
//   Skills & Tools block on the resume page — these are capability
//   groups, mirrored from the resume's Core Skills section.
// - `toolCategories` powers the homepage Tools section — these are
//   the actual product/platform names, grouped by use case.
// ============================================================

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ToolCategory {
  name: string;
  tools: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Automation",
    skills: ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "Google Apps Script", "AI-assisted workflows"],
  },
  {
    name: "CRM & Operations",
    skills: ["GoHighLevel", "JobNimbus", "Airtable", "AppSheet"],
  },
  {
    name: "Reporting & Data",
    skills: ["Google Sheets", "Excel", "KPI dashboards", "Data cleanup & reconciliation"],
  },
  {
    name: "Documentation",
    skills: ["SOPs", "Process maps", "Onboarding guides", "Workflow documentation"],
  },
  {
    name: "Marketing Operations",
    skills: ["Flodesk", "Canva", "Facebook Lead Ads", "Email workflows"],
  },
  {
    name: "AI Tools",
    skills: ["Claude", "ChatGPT", "Codex", "Gemini Enterprise"],
  },
];

export const toolCategories: ToolCategory[] = [
  {
    name: "Automation & Workflows",
    tools: ["Zapier", "Make.com", "n8n", "Microsoft Power Automate", "Google Apps Script"],
  },
  {
    name: "CRM & Business Systems",
    tools: ["GoHighLevel", "JobNimbus", "Airtable", "AppSheet"],
  },
  {
    name: "Reporting & Data",
    tools: ["Google Sheets", "Microsoft Excel", "Google Data Studio"],
  },
  {
    name: "Marketing & Content",
    tools: ["Flodesk", "Canva", "Kajabi", "Facebook Lead Ads"],
  },
  {
    name: "AI & Productivity",
    tools: ["Claude", "ChatGPT", "Codex", "Gemini Enterprise", "Notion", "Google Workspace", "Slack", "VS Code"],
  },
];
