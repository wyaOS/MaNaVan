import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-batumi.jpg";
import { SiteLayout } from "@/components/SiteLayout";
import { SocialProof } from "@/components/SocialProof";
import { tours } from "@/lib/tours";
import { site, whatsappMessage } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ma Na Van Tours — See Georgia Like a Local | Batumi" },
      {
        name: "description",
        content:
          "Local tour operator in Batumi. City tours across Batumi, Tbilisi & Kutaisi, Adjara mountain hiking, wine & cooking home visits, ATV and airport transfers.",
      },
      { property: "og:title", content: "Ma Na Van Tours — See Georgia Like a Local" },
      { property: "og:description", content: "Private and group tours across Batumi, Tbilisi & Kutaisi." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
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
            Batumi · Adjara · Georgia
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-cream md:text-6xl lg:text-7xl">
            See Georgia Like a Local
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/85 md:text-xl">
            Private and group tours across Batumi, Tbilisi & Kutaisi — city sightseeing,
            mountain hikes, wine tastings and more, led by local guides.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappMessage("Hi! I'd like to ask about your tours.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream shadow-lg transition-colors hover:bg-terracotta-deep"
            >
              Message us on WhatsApp
            </a>
            <Link
              to="/tours"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-base font-semibold text-cream backdrop-blur hover:bg-cream/20"
            >
              Explore tours
            </Link>
          </div>
        </div>
      </section>

      <SocialProof />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
          Ma Na Van Tours
        </span>
        <h2 className="text-3xl font-bold text-forest md:text-4xl">
          From the Black Sea to the mountains — discover Georgia the Ma Na Van way.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          We're a small, family-run team based in Batumi, sharing the corners of Adjara
          and greater Georgia we grew up loving. No script, no oversized coach — just a
          proper Georgian welcome, on your schedule.
        </p>
      </section>

      {/* Tours grid */}
      <section id="tours" className="bg-white/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-sea">
                What we do
              </span>
              <h2 className="mt-2 text-3xl font-bold text-forest md:text-4xl">
                Our adventures
              </h2>
            </div>
            <Link to="/tours" className="hidden shrink-0 text-sm font-semibold text-terracotta hover:underline md:inline">
              All tours →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => (
              <article
                key={t.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-sm ring-1 ring-border/60 transition-shadow hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-forest">{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.short}</p>
                  <a
                    href={whatsappMessage(`Hi! I'd like to know more about the ${t.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sea transition-all group-hover:gap-3"
                  >
                    Send inquiry →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-terracotta text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="mb-12 max-w-2xl text-3xl font-bold md:text-4xl">
            Why book with Ma Na Van?
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { n: "01", t: "Born-and-raised guides", d: "We know the trails, the family kitchens, and the shortcuts you won't find on a map." },
              { n: "02", t: "Real people on WhatsApp", d: "Message us directly — no bots, no booking portal. We answer in minutes, in English." },
              { n: "03", t: "Small groups, big welcome", d: "Trips feel like a road trip with friends, not a tour bus. Stumari Rvtisaa — the guest is a gift." },
            ].map((f) => (
              <div key={f.n}>
                <div className="mb-4 text-3xl font-bold text-cream/50">{f.n}</div>
                <h3 className="text-xl font-bold">{f.t}</h3>
                <p className="mt-2 text-cream/85">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h2 className="text-3xl font-bold text-forest md:text-4xl">
          Plan your Georgia trip with a local
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us your dates and interests. We'll suggest an itinerary within the day.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappMessage("Hi! I'd like help planning a trip.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3.5 text-base font-semibold text-cream hover:bg-terracotta-deep"
          >
            WhatsApp {site.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-forest/25 bg-cream px-7 py-3.5 text-base font-semibold text-forest hover:bg-white"
          >
            Send an inquiry
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
