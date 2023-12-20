import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
   locales,
   localePrefix,
   localeDetection: false,
   defaultLocale: "en",
});

// only applies this middleware to files in the app directory
export const config = {
   matcher: ["/((?!api|_next|.*\\..*).*)"],
};
