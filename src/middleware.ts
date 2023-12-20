import createMiddleware from "next-intl/middleware";

export default createMiddleware({
   locales: ["en-US", "id-ID"],
   localeDetection: false,
   defaultLocale: "id-ID",
});

export const config = {
   // Skip all paths that should not be internationalized.
   // This skips the folders "api", "_next" and all files
   // with an extension (e.g. favicon.ico)
   matcher: ["/((?!api|_next|.*\\..*).*)"],
};
