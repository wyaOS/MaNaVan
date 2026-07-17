import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { LANGS, useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/tours", label: t.nav.tours },
    { to: "/about", label: t.nav.about },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/reviews", label: t.nav.reviews },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="text-lg font-bold uppercase tracking-tight text-terracotta">Ma Na Van</span>
          <span className="text-xs uppercase tracking-[0.2em] text-forest/60">Tours</span>
        </Link>

        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-terracotta transition-opacity hover:opacity-75 data-[status=active]:text-forest"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} setLang={setLang} />

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
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-border/60 bg-cream md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-terracotta data-[status=active]:text-forest"
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

function LanguageSwitcher({
  lang,
  setLang,
}: {
  lang: ReturnType<typeof useI18n>["lang"];
  setLang: ReturnType<typeof useI18n>["setLang"];
}) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center overflow-hidden rounded-full border border-forest/25 bg-cream/60 text-[11px] font-semibold uppercase tracking-wider"
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className={cn(
              "px-2.5 py-1 transition-colors",
              active ? "bg-forest text-cream" : "text-forest/70 hover:text-forest"
            )}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
