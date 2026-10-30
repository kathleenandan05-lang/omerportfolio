"use client";

import {
  Inbox,
  Workflow,
  Database,
  MailCheck,
  CheckCircle2,
  Circle,
  TrendingDown,
} from "lucide-react";

const pipelineStages = [
  { label: "New Lead", count: 6 },
  { label: "Contacted", count: 4 },
  { label: "Qualified", count: 3 },
  { label: "Won", count: 5 },
];

const kpiBars = [92, 68, 74, 88, 96];

const sopTasks = [
  { label: "Lead routing SOP", done: true },
  { label: "CRM stage automation", done: true },
  { label: "QA alert workflow", done: true },
  { label: "Monthly KPI review", done: false },
];

const systemStatus = [
  { label: "CRM Sync", status: "Active" },
  { label: "Newsletter Automation", status: "Synced" },
  { label: "QA Alerts", status: "Monitoring" },
];

const flowNodes = [
  { icon: Inbox, label: "Lead In" },
  { icon: Workflow, label: "Automation" },
  { icon: Database, label: "CRM" },
  { icon: MailCheck, label: "Follow-up" },
];

export default function DashboardMockup() {
  return (
    <div className="w-full max-w-xl rounded-2xl border border-(--rp-slate)/20 bg-(--rp-soft-white) shadow-[0_20px_60px_-15px_rgba(7,20,34,0.35)] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-(--rp-slate)/15 bg-(--rp-navy)">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-(--rp-slate)/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-(--rp-slate)/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-(--rp-cyan)/70" />
        </div>
        <span className="text-xs font-medium text-(--rp-soft-white)/70 tracking-wide">
          Operations Command Center
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-(--rp-cyan)">
          <span className="w-1.5 h-1.5 rounded-full bg-(--rp-cyan) rp-status-dot" />
          Live
        </span>
      </div>

      {/* Workflow strip */}
      <div className="px-5 py-5 border-b border-(--rp-slate)/12">
        <div className="flex items-center justify-between relative">
          <svg
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-4"
            viewBox="0 0 400 16"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="30"
              y1="8"
              x2="370"
              y2="8"
              stroke="var(--rp-slate)"
              strokeOpacity="0.25"
              strokeWidth="2"
            />
            <line
              x1="30"
              y1="8"
              x2="370"
              y2="8"
              stroke="var(--rp-cyan)"
              strokeWidth="2"
              className="rp-connector-dash"
            />
          </svg>
          {flowNodes.map((node) => (
            <div
              key={node.label}
              className="relative z-10 flex flex-col items-center gap-1.5 bg-(--rp-soft-white) px-1"
            >
              <div className="w-9 h-9 rounded-lg bg-(--rp-navy) flex items-center justify-center">
                <node.icon className="w-4 h-4 text-(--rp-cyan)" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-medium text-(--rp-slate) whitespace-nowrap">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2x2 panel grid */}
      <div className="grid grid-cols-2 divide-x divide-(--rp-slate)/12">
        {/* CRM pipeline */}
        <div className="p-5 border-b border-(--rp-slate)/12">
          <p className="text-[11px] font-semibold tracking-wide uppercase text-(--rp-slate) mb-3">
            Pipeline
          </p>
          <div className="space-y-2">
            {pipelineStages.map((stage) => (
              <div key={stage.label} className="flex items-center justify-between">
                <span className="text-xs text-(--rp-navy) font-medium">{stage.label}</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-(--rp-blue)">{stage.count}</span>
                  <span
                    className="h-1.5 rounded-full bg-(--rp-blue)/70"
                    style={{ width: `${stage.count * 6}px` }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* KPI chart */}
        <div className="p-5 border-b border-(--rp-slate)/12">
          <p className="text-[11px] font-semibold tracking-wide uppercase text-(--rp-slate) mb-3">
            Response Time
          </p>
          <div className="flex items-end gap-1.5 h-16">
            {kpiBars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-sm bg-(--rp-blue)"
                style={{ height: `${h}%`, opacity: 0.4 + i * 0.12 }}
              />
            ))}
          </div>
          <p className="mt-2.5 flex items-center gap-1 text-xs font-semibold text-(--rp-navy)">
            <TrendingDown className="w-3.5 h-3.5 text-(--rp-cyan)" strokeWidth={2.5} />
            Trending down
          </p>
        </div>

        {/* SOP / task completion */}
        <div className="p-5">
          <p className="text-[11px] font-semibold tracking-wide uppercase text-(--rp-slate) mb-3">
            SOP Rollout
          </p>
          <div className="space-y-2 mb-3">
            {sopTasks.map((task) => (
              <div key={task.label} className="flex items-center gap-2">
                {task.done ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-(--rp-blue) flex-shrink-0" strokeWidth={2} />
                ) : (
                  <Circle className="w-3.5 h-3.5 text-(--rp-slate)/40 flex-shrink-0" strokeWidth={2} />
                )}
                <span
                  className={`text-xs ${task.done ? "text-(--rp-slate) line-through" : "text-(--rp-navy) font-medium"}`}
                >
                  {task.label}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1.5 rounded-full bg-(--rp-slate)/15 overflow-hidden">
            <div className="h-full rounded-full bg-(--rp-blue) rp-progress-fill" style={{ width: "75%" }} />
          </div>
        </div>

        {/* Project status */}
        <div className="p-5">
          <p className="text-[11px] font-semibold tracking-wide uppercase text-(--rp-slate) mb-3">
            System Status
          </p>
          <div className="space-y-2.5">
            {systemStatus.map((sys) => (
              <div key={sys.label} className="flex items-center justify-between">
                <span className="text-xs text-(--rp-navy) font-medium">{sys.label}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-(--rp-slate)">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--rp-cyan) rp-status-dot" />
                  {sys.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
