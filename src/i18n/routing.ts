import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
   locales: ["en", "id"],
   defaultLocale: "en",
   localePrefix: {
      mode: "as-needed",
   },
   localeDetection: false,
   pathnames: {
      "/": "/",
   },
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
