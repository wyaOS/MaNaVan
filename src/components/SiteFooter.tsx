import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-forest-deep text-cream/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-xl font-bold uppercase tracking-tight text-cream">
            Ma Na Van Tours
          </div>
          <p className="mt-3 max-w-sm text-sm text-cream/70">
            Local guides for the Black Sea coast, Adjara mountains, and the warmth of a Georgian home.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/25 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-cream/10">
              Instagram
            </a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/25 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-cream/10">
              Facebook
            </a>
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-cream">
            Visit
          </div>
          <address className="not-italic text-sm leading-relaxed text-cream/80">
            {site.address}
            <br />
            {site.hours}
          </address>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-cream">
            Contact
          </div>
          <div className="space-y-2 text-sm">
            <a href={site.phoneHref} className="block text-cream/80 hover:text-cream">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block break-all text-cream/80 hover:text-cream">
              {site.email}
            </a>
            <Link to="/contact" className="mt-3 inline-block text-cream hover:underline">
              Send an inquiry →
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-cream/50 md:flex-row">
          <span>© {new Date().getFullYear()} Ma Na Van Tours · Batumi, Georgia</span>
          <span className="uppercase tracking-widest">Discover Batumi with local heart</span>
        </div>
      </div>
    </footer>
  );
}
