"use client";

import { useEffect, useRef } from "react";

// Where the booking form goes: a box React leaves alone, with the form's own box added once the page has loaded, for
// the embed script to fill. ?service=mini-valet in the address starts it on that service.
export function BookingForm({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const spot = document.createElement("div");
    spot.setAttribute("data-centrus-booking-form", slug);
    const service = new URLSearchParams(window.location.search).get("service");
    if (service) spot.setAttribute("data-service", service.slice(0, 80));
    ref.current?.appendChild(spot);
    return () => spot.remove();
  }, [slug]);
  return <div ref={ref} className="min-h-[480px]" />;
}
