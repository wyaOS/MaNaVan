import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-batumi.jpg";
import { SiteLayout } from "@/components/SiteLayout";
import { SocialProof } from "@/components/SocialProof";
import { tours } from "@/lib/tours";
import { site, whatsappMessage } from "@/lib/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ma Na Van Tours — See Georgia Like a Local | Batumi" },
      {
        name: "description",
        content:
          "Local tour operator in Batumi. City tours across Batumi, Tbilisi & Kutaisi, Adjara mountain hiking, wine & cooking home visits, ATV and airport transfers.",
      },
      { property: "og:title", content: "Ma Na Van Tours — See Georgia Like a Local | Batumi" },
      { property: "og:description", content: "Local tour operator in Batumi. City tours across Batumi, Tbilisi & Kutaisi, Adjara mountain hiking, wine & cooking home visits, ATV and airport transfers." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useT();
  return (
    <SiteLayout>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Batumi coastline where the Black Sea meets the Adjara mountains at sunset"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/40 to-forest-deep/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-16 md:py-24">
          <span className="mb-5 inline-block rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur">
            {t("home.hero.badge")}
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-cream md:text-6xl lg:text-7xl">
            {t("home.hero.title")}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/85 md:text-xl">
            {t("home.hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappMessage(t("home.hero.whatsappMsg"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-terracotta bg-cream px-7 py-3.5 text-base font-semibold text-terracotta shadow-lg transition-colors hover:bg-terracotta hover:text-cream"
            >
              {t("home.hero.whatsapp")}
            </a>
            <Link
              to="/tours"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-base font-semibold text-cream backdrop-blur hover:bg-cream/20"
            >
              {t("home.hero.explore")}
            </Link>
          </div>
        </div>
      </section>

      <SocialProof />

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
          {t("home.intro.kicker")}
        </span>
        <h2 className="text-3xl font-bold text-forest md:text-4xl">
          {t("home.intro.title")}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {t("home.intro.body")}
        </p>
      </section>

      <section id="tours" className="bg-white/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
                {t("home.tours.kicker")}
              </span>
              <h2 className="mt-2 text-3xl font-bold text-forest md:text-4xl">
                {t("home.tours.title")}
              </h2>
            </div>
            <Link to="/tours" className="hidden shrink-0 text-sm font-semibold text-terracotta hover:underline md:inline">
              {t("home.tours.all")}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => {
              const title = t(`tour.${tour.slug}.title`);
              return (
                <article
                  key={tour.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-terracotta">{title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{t(`tour.${tour.slug}.short`)}</p>
                    <a
                      href={whatsappMessage(t("home.tours.inquireMsg", { title }))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-terracotta transition-all group-hover:gap-3"
                    >
                      {t("home.tours.inquire")}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="mb-12 max-w-2xl text-3xl font-bold md:text-4xl">
            {t("home.why.title")}
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {["1", "2", "3"].map((n) => (
              <div key={n}>
                <div className="mb-4 text-3xl font-bold text-cream/50">0{n}</div>
                <h3 className="text-xl font-bold">{t(`home.why.${n}.t`)}</h3>
                <p className="mt-2 text-cream/85">{t(`home.why.${n}.d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="text-3xl font-bold text-terracotta md:text-4xl">
          {t("home.cta.title")}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">{t("home.cta.body")}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappMessage(t("home.cta.whatsappMsg"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-terracotta bg-cream px-7 py-3.5 text-base font-semibold text-terracotta hover:bg-terracotta hover:text-cream"
          >
            {t("home.cta.whatsapp")} {site.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-forest/25 bg-cream px-7 py-3.5 text-base font-semibold text-forest hover:bg-white"
          >
            {t("home.cta.inquire")}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
