import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import boulevard from "@/assets/gallery-boulevard.jpg";
import hiking from "@/assets/tour-hiking.jpg";
import waterfall from "@/assets/gallery-waterfall.jpg";
import wine from "@/assets/tour-wine.jpg";
import atv from "@/assets/tour-atv.jpg";
import dance from "@/assets/gallery-dance.jpg";
import city from "@/assets/tour-city.jpg";
import group from "@/assets/tour-group.jpg";
import priv from "@/assets/tour-private.jpg";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ma Na Van Tours" },
      {
        name: "description",
        content:
          "Photos from Ma Na Van tours: Batumi boulevard, Adjara mountains, Makhuntseti waterfall, Georgian supra feasts, ATV rides and folklore performances.",
      },
      { property: "og:title", content: "Gallery — Ma Na Van Tours" },
      { property: "og:description", content: "A glimpse of what a Ma Na Van trip looks like." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: boulevard, alt: "Batumi Boulevard at sunset with palm trees and the Black Sea" },
  { src: hiking, alt: "A hiking trail through the misty green Adjara mountains" },
  { src: waterfall, alt: "Makhuntseti waterfall and the old stone arch bridge" },
  { src: wine, alt: "A traditional Georgian supra table with khachapuri and homemade wine" },
  { src: atv, alt: "ATV rider on a muddy mountain trail above Batumi" },
  { src: dance, alt: "Adjarian folk dancers in traditional black chokha costumes" },
  { src: city, alt: "Colorful Batumi old town street" },
  { src: group, alt: "A small tour group at a Georgian mountain viewpoint" },
  { src: priv, alt: "A couple watching the sunset over the Caucasus mountains" },
];

function GalleryPage() {
  const { t } = useT();
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
          {t("gallery.kicker")}
        </span>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold text-forest md:text-5xl">
          {t("gallery.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {t("gallery.body")}{" "}
          <a
            href="https://instagram.com/manavantours"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sea underline underline-offset-4"
          >
            {t("gallery.instagram")}
          </a>
          .
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl bg-secondary ${
                i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
