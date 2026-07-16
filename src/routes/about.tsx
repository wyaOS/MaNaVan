import { createFileRoute, Link } from "@tanstack/react-router";
import guideImg from "@/assets/guide.jpg";
import { SiteLayout } from "@/components/SiteLayout";
import { site } from "@/lib/site";

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
            Our story
          </span>
          <h1 className="mt-3 text-4xl font-bold text-forest md:text-5xl">
            Not just a tour — a proper Georgian welcome.
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ma Na Van Tours is a small family operation based at {site.address}. We
              started out driving friends of friends around Adjara, and never really
              stopped. Today we run city, mountain, ATV, and cultural tours across
              Batumi, Tbilisi, Kutaisi and the villages in between.
            </p>
            <p>
              We believe in the old Georgian saying <em>Stumari Rvtisaa</em> — a guest is
              a gift from God. That's why our tours look less like a schedule and more
              like a day out with a friend who happens to know the best khachapuri, the
              quiet viewpoint above Batumi, and the family who still makes wine in clay
              qvevri.
            </p>
            <p>
              With 4,200+ Facebook followers, 2,000+ on Instagram, and a 100%
              recommendation rate from our TripAdvisor reviewers, we're proud of the
              community that's grown around this small business.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/tours"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream hover:bg-terracotta-deep"
            >
              See our tours
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-forest/25 bg-cream px-6 py-3 text-sm font-semibold text-forest hover:bg-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-3">
          {[
            { t: "Local expertise", d: "Guides born and raised in Adjara. No script, no shortcuts on quality." },
            { t: "Personal service", d: "We reply on WhatsApp within minutes and adjust plans to fit you." },
            { t: "All of Georgia", d: "From the Black Sea coast to Tbilisi and the high Caucasus." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl bg-cream p-8 ring-1 ring-border/60">
              <h3 className="text-lg font-bold text-forest">{v.t}</h3>
              <p className="mt-2 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
