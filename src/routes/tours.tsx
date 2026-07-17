import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useTours } from "@/lib/tours";
import { whatsappMessage } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours & Services — Ma Na Van Tours Batumi" },
      {
        name: "description",
        content:
          "Full list of Ma Na Van tours: city sightseeing, mountain hiking, wine and cooking home visits, ATV adventures, airport transfers, private and group tours.",
      },
      { property: "og:title", content: "Tours & Services — Ma Na Van Tours" },
      { property: "og:description", content: "Seven ways to see Georgia with a local guide." },
    ],
  }),
  component: ToursPage,
});

function ToursPage() {
  const { t } = useI18n();
  const tours = useTours();

  return (
    <SiteLayout>
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
            {t.tourPage.eyebrow}
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            {t.tourPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream/80">
            {t.tourPage.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="space-y-16">
          {tours.map((tour, i) => (
            <article
              key={tour.slug}
              className={`grid gap-8 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-sea">
                  0{i + 1}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-forest md:text-3xl">
                  {tour.title}
                </h2>
                <p className="mt-4 text-muted-foreground">{tour.long}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tour.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-forest/80"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappMessage(t.waMessages.tour(tour.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream hover:bg-terracotta-deep"
                >
                  {t.cta.messageWhatsapp}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
