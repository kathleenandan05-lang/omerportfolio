"use client";

import { ArrowRight } from "lucide-react";

type Props =
  | {
      type: "before-after";
      before: { value: string; label: string };
      after: { value: string; label: string };
    }
  | {
      type: "dual-metric";
      metrics: [{ value: string; label: string }, { value: string; label: string }];
    };

export default function CaseStudyVisual(props: Props) {
  if (props.type === "before-after") {
    const { before, after } = props;
    return (
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex-1 rounded-xl border border-(--rp-slate)/20 bg-(--rp-warm-white) p-5 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-(--rp-slate) mb-2">
            Before
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-(--rp-slate)">{before.value}</p>
          <p className="mt-1 text-xs text-(--rp-slate)">{before.label}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-(--rp-blue) flex-shrink-0" strokeWidth={2.5} />
        <div className="flex-1 rounded-xl border-2 border-(--rp-blue)/40 bg-(--rp-navy) p-5 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-(--rp-cyan)/80 mb-2">
            After
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-(--rp-soft-white)">{after.value}</p>
          <p className="mt-1 text-xs text-(--rp-soft-white)/70">{after.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {props.metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-xl border-2 border-(--rp-blue)/40 bg-(--rp-navy) p-5 text-center"
        >
          <p className="text-2xl sm:text-3xl font-bold text-(--rp-cyan)">{m.value}</p>
          <p className="mt-1 text-xs text-(--rp-soft-white)/70">{m.label}</p>
        </div>
      ))}
    </div>
  );
}
