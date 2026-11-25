"use client";

import { useEffect, useState } from "react";

// Where the booking form goes: added once the page has loaded, so the embed script fills it without React minding.
// ?service=mini-valet in the address starts it on that service.
export function BookingForm({ slug }: { slug: string }) {
  const [service, setService] = useState<string | null>(null);
  useEffect(() => setService(new URLSearchParams(window.location.search).get("service")?.slice(0, 80) ?? ""), []);
  return service !== null ? (
    <div data-centrus-booking-form={slug} {...(service ? { "data-service": service } : {})} />
  ) : (
    <div className="min-h-[480px]" aria-hidden="true" />
  );
}
