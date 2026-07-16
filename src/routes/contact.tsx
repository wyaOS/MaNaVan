import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { site, whatsappMessage } from "@/lib/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ma Na Van Tours Batumi" },
      {
        name: "description",
        content:
          "Contact Ma Na Van Tours in Batumi, Georgia. WhatsApp +995 511 71 85 16, email manavantours@gmail.com, or visit us at Tchaikovsky Street 40. Daily 08:00–23:00.",
      },
      { property: "og:title", content: "Contact Ma Na Van Tours" },
      { property: "og:description", content: "Message us on WhatsApp — we reply within minutes." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useT();
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const message = String(form.get("message") || "");
    const dates = String(form.get("dates") || "");
    const text = t("contact.form.greeting", { name, dates, message });
    window.open(whatsappMessage(text), "_blank");
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
          {t("contact.kicker")}
        </span>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold text-forest md:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">{t("contact.subtitle")}</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 md:grid-cols-2">
        <div className="space-y-6">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-whatsapp px-6 py-5 text-cream shadow-sm hover:brightness-105"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-cream/80">
                {t("contact.whatsapp")}
              </div>
              <div className="mt-1 text-lg font-bold">{site.phone}</div>
            </div>
            <span className="text-xl">→</span>
          </a>

          <a
            href={site.phoneHref}
            className="flex items-center justify-between rounded-2xl bg-cream px-6 py-5 ring-1 ring-border/60 hover:bg-white"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-terracotta">
                {t("contact.call")}
              </div>
              <div className="mt-1 text-lg font-bold text-forest">{site.phone}</div>
            </div>
            <span className="text-xl text-forest">→</span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="flex items-center justify-between rounded-2xl bg-cream px-6 py-5 ring-1 ring-border/60 hover:bg-white"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-sea">
                {t("contact.email")}
              </div>
              <div className="mt-1 break-all text-lg font-bold text-forest">
                {site.email}
              </div>
            </div>
            <span className="text-xl text-forest">→</span>
          </a>

          <div className="rounded-2xl bg-cream px-6 py-5 ring-1 ring-border/60">
            <div className="text-xs font-bold uppercase tracking-widest text-forest/60">
              {t("contact.visit")}
            </div>
            <address className="mt-1 not-italic text-lg font-semibold text-forest">
              {site.address}
            </address>
            <div className="mt-2 text-sm text-muted-foreground">{site.hours}</div>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-border/60">
            <iframe
              title="Ma Na Van Tours location in Batumi"
              src="https://www.google.com/maps?q=Tchaikovsky+Street+40,+Batumi,+Georgia&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-forest p-8 text-cream md:p-10">
          <h2 className="text-2xl font-bold">{t("contact.form.title")}</h2>
          <p className="mt-2 text-cream/70">{t("contact.form.body")}</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-cream/70">
                {t("contact.form.name")}
              </span>
              <input
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-cream placeholder-cream/40 focus:border-terracotta focus:outline-none"
                placeholder={t("contact.form.namePh")}
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-cream/70">
                {t("contact.form.dates")}
              </span>
              <input
                name="dates"
                className="mt-2 w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-cream placeholder-cream/40 focus:border-terracotta focus:outline-none"
                placeholder={t("contact.form.datesPh")}
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-widest text-cream/70">
                {t("contact.form.msg")}
              </span>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-lg border border-cream/20 bg-cream/10 px-4 py-3 text-cream placeholder-cream/40 focus:border-terracotta focus:outline-none"
                placeholder={t("contact.form.msgPh")}
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-terracotta px-6 py-3.5 text-base font-bold text-cream hover:bg-terracotta-deep"
            >
              {t("contact.form.submit")}
            </button>
            {sent && (
              <p className="text-sm text-cream/70">{t("contact.form.sent")}</p>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
