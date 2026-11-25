import type { Metadata } from "next";
import { BookingForm } from "@/components/sections/book/BookingForm";
import { Section } from "@/components/ui/Section";
import { booking, bookPage } from "@/content/site";

export const metadata: Metadata = {
  title: bookPage.title,
  description: bookPage.intro,
};

// Booking on our own site: the form from Ridgeway's booking system (Centrus CRM), put here by the embed script
// (loaded in the layout). ?service=mini-valet starts on that service.
export default function BookPage() {
  return (
    <Section className="pb-10 md:pb-16">
      <h1>{bookPage.title}</h1>
      <p className="mt-6 max-w-[900px]">{bookPage.intro}</p>
      <div className="mt-10">
        <BookingForm slug={booking.slug} />
      </div>
    </Section>
  );
}
