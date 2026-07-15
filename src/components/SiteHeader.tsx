import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
              activeProps={{ className: "text-forest" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          className="relative h-6 w-6 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-2 bg-forest transition-transform duration-300",
              open && "translate-y-0 rotate-45"
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1/2 h-0.5 w-6 bg-forest transition-opacity duration-300",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1/2 h-0.5 w-6 translate-y-2 bg-forest transition-transform duration-300",
              open && "translate-y-0 -rotate-45"
            )}
          />
        </button>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-border/60 bg-cream md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-terracotta"
                activeProps={{ className: "text-forest" }}
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
