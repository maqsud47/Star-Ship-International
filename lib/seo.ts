import { routing } from "@/i18n/routing";
import { SERVICES } from "@/lib/site-data";

/**
 * Public site URL for canonical + OG + sitemap. Reads NEXT_PUBLIC_SITE_URL
 * (Vercel URL or the future starshipintlbd.com); falls back to localhost.
 */
export function siteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}

/** All localized paths for a given route ("/", "/services", …). */
export function localePaths(path: string): { locale: string; url: string }[] {
  const base = siteUrl();
  const p = path === "/" ? "" : path;
  return routing.locales.map((locale) => ({
    locale,
    url: `${base}/${locale}${p}`,
  }));
}

/** Every public route we know about, for the sitemap. */
export const ROUTES: string[] = [
  "/",
  "/services",
  ...SERVICES.map((s) => `/services/${s.slug}`),
  "/about",
  "/clients",
  "/road-transportation",
  "/gallery",
  "/contact",
  "/quote",
];
