import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";

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
  const { t } = useT();

  const cards = [
    { name: "TripAdvisor", key: "tripadvisor", href: site.tripadvisor },
    { name: "Facebook", key: "facebook", href: site.facebook },
    { name: "Instagram", key: "instagram", href: site.instagram },
  ] as const;

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
          {t("reviews.kicker")}
        </span>
        <h1 className="mt-3 text-5xl font-bold text-forest md:text-7xl">{t("reviews.big")}</h1>
        <p className="mt-3 text-xl font-semibold text-forest">{t("reviews.subtitle")}</p>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("reviews.body")}</p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-5 pb-20 md:grid-cols-3">
        {cards.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl bg-cream p-8 shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-lg"
          >
            <div className="mb-6 h-1 w-10 rounded-full bg-terracotta" />
            <h2 className="text-xl font-bold text-forest">{c.name}</h2>
            <p className="mt-1 text-sm font-semibold text-terracotta">{t(`reviews.card.${c.key}.stat`)}</p>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{t(`reviews.card.${c.key}.copy`)}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-terracotta group-hover:gap-3">
              {t("reviews.read")}
            </span>
          </a>
        ))}
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <blockquote className="text-2xl font-medium italic md:text-3xl">
            {t("reviews.quote")}
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-widest text-cream/60">
            {t("reviews.quoteCap")}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
