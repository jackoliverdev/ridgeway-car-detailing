import Link from "next/link";
import { invertedButtonClass, primaryButtonClass } from "@/components/ui/buttonStyles";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  book,
}: {
  href: string;
  /** Opens the booking form over the page (the embed script), on this service if one's given; the link goes to
   * the booking page if the script hasn't loaded. */
  book?: string | true;
  children: React.ReactNode;
  variant?: "primary" | "inverted";
  className?: string;
  onClick?: () => void;
}) {
  // Our booking page's links open the form over the page instead (the embed script), on the service they name.
  const service = book ?? bookingService(href);
  const variantClass =
    variant === "inverted" ? invertedButtonClass : primaryButtonClass;
  const classes = `${variantClass} ${className}`;

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick} {...(service !== undefined ? { "data-centrus-book": service === true ? "" : service } : {})}>
      {children}
    </Link>
  );
}

/** The service a link to our booking page names ("" for none), or undefined if it isn't one. */
export function bookingService(href: string): string | undefined {
  if (!/^\/book(\?|$)/.test(href)) return undefined;
  return new URLSearchParams(href.split("?")[1] ?? "").get("service") ?? "";
}
