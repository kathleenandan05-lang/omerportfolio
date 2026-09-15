"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/components/redesign/hooks/useActiveSection";

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "case-studies", label: "Case Studies" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const sectionIds = navLinks.map((l) => l.id);

export default function RedesignNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-(--rp-warm-white)/90 backdrop-blur-md border-b border-(--rp-slate)/15"
          : "bg-(--rp-warm-white)/0 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold text-xl tracking-tight text-(--rp-navy) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--rp-blue) rounded-sm"
          >
            OE<span className="text-(--rp-blue)">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-current={activeId === link.id ? "true" : undefined}
                className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue) ${
                  activeId === link.id
                    ? "text-(--rp-navy)"
                    : "text-(--rp-slate) hover:text-(--rp-navy)"
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute left-3.5 right-3.5 -bottom-[1px] h-[2px] bg-(--rp-blue) rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/resume"
              className="text-sm font-medium text-(--rp-slate) hover:text-(--rp-navy) transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue) rounded-sm px-1"
            >
              Download Résumé
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold bg-(--rp-navy) hover:bg-(--rp-midnight) text-(--rp-soft-white) px-4 py-2.5 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue)"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 text-(--rp-navy) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue) rounded-md cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-(--rp-slate)/15 bg-(--rp-warm-white)">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-base font-medium text-(--rp-navy) py-3 border-b border-(--rp-slate)/10 last:border-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--rp-blue) rounded-sm cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-3 pt-4">
              <a
                href="/resume"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center text-sm font-medium border border-(--rp-slate)/30 text-(--rp-navy) px-4 py-2.5 rounded-md"
              >
                Résumé
              </a>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center text-sm font-semibold bg-(--rp-navy) text-(--rp-soft-white) px-4 py-2.5 rounded-md"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
