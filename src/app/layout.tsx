import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { assistant, booking } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ridgeway Car Detailing",
    template: "%s | Ridgeway Car Detailing",
  },
  description:
    "Car valeting, detailing, paint correction and ceramic coatings in Harlow, Essex, at your home or work or at our unit. Book online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${archivo.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SkipLink />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {/* Wendy, our website assistant, from Centrus CRM. She only shows on ridgewaycardetailing.co.uk. */}
        <Script src={assistant.src} data-key={assistant.key} strategy="afterInteractive" />
        {/* Booking, from Centrus CRM: the form on /book, and every "Book online" button opens it over the page. */}
        <Script src={`${booking.app}/embed.js`} data-centrus-booking={booking.slug} strategy="afterInteractive" />
      </body>
    </html>
  );
}
