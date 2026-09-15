"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ListChecks,
  CalendarClock,
  Inbox,
  FolderKanban,
  Search,
  CalendarRange,
  Gauge,
  Users,
  Target,
  Briefcase,
  Grid3x3,
  Smartphone,
  Mail,
  Megaphone,
  Zap,
  GitMerge,
  Workflow,
  PlayCircle,
  Code2,
  Bot,
  MessageSquare,
  Terminal,
  Sparkles,
  Table,
  BarChart3,
  RefreshCcw,
  FileText,
  Map,
  GraduationCap,
  BookOpen,
  Palette,
  type LucideIcon,
} from "lucide-react";

interface SkillItem {
  label: string;
  icon: LucideIcon;
}

interface SkillBucket {
  title: string;
  items: SkillItem[];
}

const buckets: SkillBucket[] = [
  {
    title: "Executive Support",
    items: [
      { label: "Task & deadline tracking", icon: ListChecks },
      { label: "Meeting coordination", icon: CalendarClock },
      { label: "Inbox & calendar support", icon: Inbox },
      { label: "Cross-team follow-ups", icon: Users },
      { label: "Project coordination", icon: FolderKanban },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Root cause analysis", icon: Search },
      { label: "Resource planning & scheduling", icon: CalendarRange },
      { label: "KPI tracking & reporting cadence", icon: Gauge },
      { label: "Cross-functional coordination", icon: Users },
    ],
  },
  {
    title: "CRM & Sales Systems",
    items: [
      { label: "GoHighLevel", icon: Target },
      { label: "JobNimbus", icon: Briefcase },
      { label: "Airtable", icon: Grid3x3 },
      { label: "AppSheet", icon: Smartphone },
      { label: "Flodesk", icon: Mail },
      { label: "Facebook Lead Ads", icon: Megaphone },
    ],
  },
  {
    title: "Automation",
    items: [
      { label: "Zapier", icon: Zap },
      { label: "Make.com", icon: GitMerge },
      { label: "n8n", icon: Workflow },
      { label: "Microsoft Power Automate", icon: PlayCircle },
      { label: "Google Apps Script", icon: Code2 },
      { label: "Claude", icon: Bot },
      { label: "ChatGPT", icon: MessageSquare },
      { label: "Codex", icon: Terminal },
      { label: "Gemini Enterprise", icon: Sparkles },
    ],
  },
  {
    title: "Reporting & Analytics",
    items: [
      { label: "Google Sheets", icon: Table },
      { label: "Excel", icon: BarChart3 },
      { label: "KPI dashboards", icon: Gauge },
      { label: "Data cleanup & reconciliation", icon: RefreshCcw },
    ],
  },
  {
    title: "Documentation & Process Improvement",
    items: [
      { label: "SOPs", icon: FileText },
      { label: "Process maps", icon: Map },
      { label: "Onboarding guides", icon: GraduationCap },
      { label: "Workflow documentation", icon: BookOpen },
      { label: "Canva", icon: Palette },
    ],
  },
];

export default function SkillsMatrix() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 lg:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--rp-blue) mb-4">
            Skills & Tools
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--rp-navy) leading-tight">
            A connected capability matrix, not a pile of tags.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--rp-slate)/15 border border-(--rp-slate)/15 rounded-2xl overflow-hidden">
          {buckets.map((bucket, i) => (
            <motion.div
              key={bucket.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut", delay: shouldReduceMotion ? 0 : (i % 3) * 0.06 }}
              className="bg-(--rp-soft-white) p-7"
            >
              <h3 className="text-sm font-bold text-(--rp-navy) mb-5">{bucket.title}</h3>
              <ul className="space-y-3">
                {bucket.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4 text-(--rp-blue) flex-shrink-0" strokeWidth={2} />
                    <span className="text-sm text-(--rp-slate)">{item.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
