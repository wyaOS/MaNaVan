import { createFileRoute, Link } from "@tanstack/react-router";
import guideImg from "@/assets/guide.jpg";
import { SiteLayout } from "@/components/SiteLayout";
import { site } from "@/lib/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ma Na Van Tours Batumi" },
      {
        name: "description",
        content:
          "Ma Na Van Tours is a small, family-run tour operator based in Batumi, Georgia. Meet the local guides behind the hikes, city tours and home visits.",
      },
      { property: "og:title", content: "About Ma Na Van Tours" },
      { property: "og:description", content: "Local guides. Personal service. Georgian hospitality." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useT();
  return (
    <SiteLayout>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl shadow-lg">
          <img
            src={guideImg}
            alt="A Ma Na Van tour guide smiling in front of the Adjara mountains"
            loading="lazy"
            width={900}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
            {t("about.kicker")}
          </span>
          <h1 className="mt-3 text-4xl font-bold text-forest md:text-5xl">
            {t("about.title")}
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>{t("about.p1", { address: site.address })}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/tours"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:bg-terracotta-deep"
            >
              {t("about.seeTours")}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-forest/25 bg-cream px-6 py-3 text-sm font-semibold text-forest hover:bg-white"
            >
              {t("about.getInTouch")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-3">
          {["1", "2", "3"].map((n) => (
            <div key={n} className="rounded-2xl bg-cream p-8 ring-1 ring-border/60">
              <h3 className="text-lg font-bold text-forest">{t(`about.v${n}.t`)}</h3>
              <p className="mt-2 text-muted-foreground">{t(`about.v${n}.d`)}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
