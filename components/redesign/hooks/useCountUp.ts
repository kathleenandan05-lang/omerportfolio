"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

/**
 * Counts a number up from 0 to `target` exactly once, the first time
 * the returned ref's element enters the viewport. Snaps instantly to
 * `target` under prefers-reduced-motion.
 */
export function useCountUp(target: number, duration = 1.2) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    // duration 0 under reduced motion jumps straight to the final value
    // via the same onUpdate callback, instead of a separate direct setState.
    const controls = animate(0, target, {
      duration: shouldReduceMotion ? 0 : duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, shouldReduceMotion, target, duration]);

  return { ref, value };
}
