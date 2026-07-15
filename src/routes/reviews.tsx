import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { site } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Ma Na Van Tours" },
      {
        name: "description",
        content:
          "100% recommendation rate from 62 TripAdvisor reviews, 4,200+ Facebook followers and 2,000+ on Instagram. See what travelers say about Ma Na Van Tours.",
      },
      { property: "og:title", content: "Reviews — Ma Na Van Tours" },
      { property: "og:description", content: "100% recommendation rate from 62 reviews." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
          Reviews
        </span>
        <h1 className="mt-3 text-5xl font-bold text-forest md:text-7xl">100%</h1>
        <p className="mt-3 text-xl font-semibold text-forest">
          recommendation rate from 62 reviews
        </p>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We don't reprint testimonials here — our reviews live where you'd expect them,
          so you can read every honest one directly on the platform.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-5 pb-20 md:grid-cols-3">
        {[
          {
            name: "TripAdvisor",
            stat: "100% recommend",
            copy: "62 verified reviews across city sightseeing, ATV, hiking and cultural tours.",
            href: site.tripadvisor,
            color: "bg-sea",
          },
          {
            name: "Facebook",
            stat: "4,200+ followers",
            copy: "Photos, group tour updates and traveler check-ins from every season.",
            href: site.facebook,
            color: "bg-terracotta",
          },
          {
            name: "Instagram",
            stat: "2,000+ followers",
            copy: "Daily stories from the mountains, kitchens and coastlines of Georgia.",
            href: site.instagram,
            color: "bg-forest",
          },
        ].map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl bg-cream p-8 shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-lg"
          >
            <div className={`mb-6 h-1 w-10 rounded-full ${c.color}`} />
            <h2 className="text-xl font-bold text-forest">{c.name}</h2>
            <p className="mt-1 text-sm font-semibold text-terracotta">{c.stat}</p>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.copy}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sea group-hover:gap-3">
              Read reviews →
            </span>
          </a>
        ))}
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <blockquote className="text-2xl font-medium italic md:text-3xl">
            "Every single traveler who has reviewed us has recommended us to a friend."
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-widest text-cream/60">
            Something we're quietly proud of.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
