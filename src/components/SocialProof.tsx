import { useT } from "@/lib/i18n";

export function SocialProof() {
  const { t } = useT();
  const items = [
    { value: t("social.1.v"), label: t("social.1.l") },
    { value: t("social.2.v"), label: t("social.2.l") },
    { value: t("social.3.v"), label: t("social.3.l") },
    { value: t("social.4.v"), label: t("social.4.l") },
  ];
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="text-center md:text-left">
            <div className="text-2xl font-bold text-cream md:text-3xl">{i.value}</div>
            <div className="mt-1 text-[11px] uppercase tracking-widest text-cream/70">
              {i.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
