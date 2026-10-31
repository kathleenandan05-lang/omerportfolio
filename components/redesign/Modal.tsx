"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** Accessible name announced by screen readers when the dialog opens. */
  label: string;
  children: ReactNode;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Reusable dialog overlay. Slides up as a bottom sheet on phones and fades
 * in as a centered panel on larger screens. Closes on the X button, a click
 * on the dimmed backdrop, or Escape. While open it locks page scrolling,
 * keeps keyboard focus inside the panel, and returns focus to whatever
 * opened it on close.
 *
 * Renders in place (no portal) so it inherits the homepage's scoped design
 * tokens and fonts; don't mount it inside a transformed ancestor, which
 * would break `position: fixed`.
 */
export default function Modal({ open, onClose, label, children }: ModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Kept in a ref so a new onClose function on each parent render doesn't
  // re-run the open/close effect below (which would steal focus again).
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus({ preventScroll: true });

    // Lock background scroll. Padding by the scrollbar's width stops the
    // page from shifting sideways when the scrollbar disappears.
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      // Wrap Tab / Shift+Tab around the panel's focusable elements.
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      html.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [open]);

  const offset = shouldReduceMotion ? 0 : 48;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 z-100 flex items-end sm:items-center justify-center sm:p-6 bg-(--rp-navy)/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          // Only a click on the backdrop itself closes, not one inside the panel.
          onClick={(e) => {
            if (e.target === e.currentTarget) onCloseRef.current();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            className="relative w-full sm:max-w-4xl max-h-[92dvh] overflow-y-auto overscroll-contain rounded-t-2xl sm:rounded-2xl bg-white dark:bg-slate-900 shadow-2xl"
            initial={{ y: offset, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: offset, opacity: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", damping: 32, stiffness: 320, mass: 0.9 }
            }
          >
            {/* Zero-height sticky row keeps the X pinned while the panel scrolls. */}
            <div className="sticky top-0 z-10 h-0">
              <button
                ref={closeRef}
                type="button"
                onClick={() => onCloseRef.current()}
                aria-label="Close"
                className="absolute right-3 top-3 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 shadow-md backdrop-blur hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue)"
              >
                <X className="w-5 h-5" strokeWidth={2.25} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
