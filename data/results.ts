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
    label: "Newsletter Time Saved",
    description: "Weekly production dropped from 6+ hours to under 30 minutes",
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
    description: "From logistics leadership to digital systems and automation",
    icon: "🗓️",
  },
  {
    value: "37",
    label: "Team Members Led",
    description: "Warehouse and port operations teams at enterprise scale",
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
    label: "Lead Response in 2 Min",
    description: "Automated follow-up system with zero manual intervention",
    icon: "⏱️",
  },
];
