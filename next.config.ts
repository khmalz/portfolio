import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

export const nextConfig: NextConfig = {
   trailingSlash: true,
   cacheComponents: true,
   cacheLife: {
      layout: {
         stale: 60 * 60 * 24 * 7, // 7 Hari (dalam detik)
         revalidate: 31536000, // 1 Tahun (dalam detik)
         expire: 31536001, // 1 Tahun + 1 detik
      },
      home: {
         stale: 60 * 60 * 24, // 1 Hari (dalam detik)
         revalidate: 31536000, // 1 Tahun (dalam detik)
         expire: 31536001, // 1 Tahun + 1 detik
      },
   },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
