import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFab } from "./WhatsAppFab";
import { LanguageProvider } from "@/lib/i18n";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-cream">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </div>
    </LanguageProvider>
  );
}
