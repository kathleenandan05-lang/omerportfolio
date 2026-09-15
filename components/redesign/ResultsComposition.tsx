"use client";

import { results } from "@/data/results";
import { useCountUp } from "@/app/redesign-preview/hooks/useCountUp";

function parseValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: raw };
  const [, prefix, num, suffix] = match;
  return { num: parseFloat(num), prefix, suffix };
}

function AnimatedStat({ value, className }: { value: string; className: string }) {
  const { num, prefix, suffix } = parseValue(value);
  const { ref, value: animated } = useCountUp(num);
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}
      {animated}
      {suffix}
    </span>
  );
}

const featuredLabel = "Marketing Time Saved";
const supportingLabels = [
  "Shipping Delay Reduction",
  "Customer Complaints Reduced",
  "Deal Close Rate Improved",
];

export default function ResultsComposition() {
  const featured = results.find((r) => r.label === featuredLabel);
  const supporting = supportingLabels
    .map((l) => results.find((r) => r.label === l))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  if (!featured) return null;

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-(--rp-blue) mb-4">
            Results
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--rp-navy) leading-tight">
            What good operations actually look like.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Featured metric */}
          <div className="rounded-2xl bg-(--rp-navy) p-10 lg:p-14">
            <AnimatedStat
              value={featured.value}
              className="block text-6xl sm:text-7xl font-bold text-(--rp-cyan) tabular-nums"
            />
            <p className="mt-3 text-lg font-semibold text-(--rp-soft-white)">{featured.label}</p>
            <p className="mt-4 text-sm text-(--rp-soft-white)/70 leading-relaxed max-w-sm">
              {featured.description}
            </p>
          </div>

          {/* Supporting metrics + explanation */}
          <div>
            <p className="text-(--rp-slate) leading-relaxed mb-8 max-w-lg">
              These outcomes weren&apos;t one-off wins — they came from applying the same
              approach every time: map the process, find the bottleneck, automate or
              document the fix, then track whether it actually held.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {supporting.map((stat) => (
                <div key={stat.label} className="border-l-2 border-(--rp-slate)/20 pl-4">
                  <AnimatedStat
                    value={stat.value}
                    className="block text-3xl font-bold text-(--rp-navy) tabular-nums"
                  />
                  <p className="mt-1.5 text-sm font-medium text-(--rp-navy)">{stat.label}</p>
                  {stat.description && (
                    <p className="mt-1 text-xs text-(--rp-slate) leading-relaxed">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
