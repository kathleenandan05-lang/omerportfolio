"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Counts a number up from 0 to `target` the first time the returned ref's
 * element scrolls into the viewport.
 *
 * Progressive enhancement: state starts at `target`, so the server HTML,
 * visitors without JavaScript, crawlers and link previews always see the
 * real number, never 0. Only on the client, and only for counters that are
 * still below the fold, does it drop to 0 before first paint and wait to
 * count up. Counters already on screen at load, and visitors who prefer
 * reduced motion, simply keep the final number.
 */
export function useCountUp(target: number, duration = 1.2) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(target);
  // True once the counter has been reset to 0 and is waiting to animate.
  const armed = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Runs before the browser paints the hydrated page, so the reset to 0
  // is never visible as a jump backward.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const belowFold = el.getBoundingClientRect().top > window.innerHeight;
    if (!reduceMotion && belowFold) {
      armed.current = true;
      // Deliberate: this depends on measuring layout, which only exists in
      // the browser, and must land before first paint.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(0);
    }
  }, []);

  // No "has run" guard: if React stops and restarts this effect (Strict
  // Mode does in development), the animation restarts from 0 instead of
  // being skipped and left stuck at 0.
  useEffect(() => {
    if (!armed.current || !inView) return;
    const decimals = (String(target).split(".")[1] ?? "").length;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Number(v.toFixed(decimals))),
      onComplete: () => setValue(target),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return { ref, value };
}
