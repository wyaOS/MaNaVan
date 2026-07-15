import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Tours" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="text-lg font-bold uppercase tracking-tight text-terracotta">Ma Na Van</span>
          <span className="text-xs uppercase tracking-[0.2em] text-forest/60">Tours</span>
        </Link>

        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-terracotta transition-opacity hover:opacity-75"
              activeProps={{ className: "opacity-75" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="mb-1.5 h-0.5 w-6 bg-forest" />
          <div className="mb-1.5 h-0.5 w-6 bg-forest" />
          <div className="h-0.5 w-6 bg-forest" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-cream md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-terracotta"
                activeProps={{ className: "opacity-75" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
