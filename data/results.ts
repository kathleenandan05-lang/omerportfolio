// ============================================================
// RESULTS & IMPACT DATA
//
// HOW TO UPDATE:
// - Edit or add entries in the `results` array
// - These appear as animated metric cards in the Results section
// - Keep value strings short (2–5 characters max)
// ============================================================

export interface ResultMetric {
  value: string;         // * The big number/stat (e.g., "90%", "6+", "37")
  label: string;         // * What it measures
  description?: string;  // Optional: brief context sentence
  icon?: string;         // Optional: emoji for the card
}

export const results: ResultMetric[] = [
  {
    value: "90%",
    label: "Shipping Delay Reduction",
    description: "Achieved through process redesign and real-time monitoring systems",
    icon: "📦",
  },
  {
    value: "50%",
    label: "Customer Complaints Reduced",
    description: "Via root cause analysis and structured complaint resolution process",
    icon: "⭐",
  },
  {
    value: "92%",
    label: "Marketing Time Saved",
    description: "Weekly newsletter production dropped from 6+ hours to under 30 minutes",
    icon: "✉️",
  },
  {
    value: "40%",
    label: "Lead-to-Close Time Cut",
    description: "Through integrated marketing stack and automated follow-up sequences",
    icon: "⚡",
  },
  {
    value: "6+",
    label: "Years in Operations",
    description: "From logistics leadership and team coordination to remote admin and VA support",
    icon: "🗓️",
  },
  {
    value: "97",
    label: "Team Members Standardized",
    description: "SOPs and KPI systems built and adopted across a 97-person port operations team",
    icon: "👥",
  },
  {
    value: "30%",
    label: "Deal Close Rate Improved",
    description: "After CRM pipeline rebuild and stage-based automation",
    icon: "📈",
  },
  {
    value: "100%",
    label: "Lead Response Rate",
    description: "Every incoming inquiry followed up within 2 minutes through automated workflows",
    icon: "⏱️",
  },
];
