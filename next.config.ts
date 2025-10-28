import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

export const nextConfig: NextConfig = {
   trailingSlash: true
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
