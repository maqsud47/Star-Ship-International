import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "bn"],
  defaultLocale: "en",
  // English default on first load; Bangla via the switcher.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
