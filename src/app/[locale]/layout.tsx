import "./globals.css";

import clsx from "clsx/lite";
import type { Metadata, Viewport } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { Locale } from "@/types/intlType";
import { cacheLife } from "next/cache";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["500"],
});

export function generateViewport(): Viewport {
   return {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
      themeColor: "blue",
   };
}

export const metadata: Metadata = {
   title: "My Portfolio",
   description: "Portofolio web developer - Creative developer with experience in various web projects with experience since 2020 as a full-stack developer with more back-end dominance.",
   authors: [
      {
         name: "Khairul Akmal",
         url: "https://github.com/khmalz",
      },
   ],
   keywords: [
      "portfolio",
      "personal website",
      "web developer",
      "full-stack developer",
      "back-end developer",
      "FS",
      "BE",
      "CSS",
      "Laravel",
      "Javascript",
      "Typescript",
      "PHP",
      "Node Js",
      "Tailwind",
      "Bootstrap",
      "React",
      "React Js",
      "Next",
      "Next Js",
      "SMK",
      "Pelajar",
      "Mahasiswa",
      "UNJ",
   ],
   metadataBase: new URL("https://khmalz-portfolio.vercel.app"),
   alternates: {
      canonical: "/",
      languages: {
         en: "/en",
         id: "/id",
      },
   },
   openGraph: {
      images: "/images/projects/portfolio.webp",
      title: "Portfolio - Khairul Akmal",
      url: "https://github.com/khmalz",
      description: "Check out my portfolio website to see my skills as web developer.",
      type: "website",
      countryName: "Indonesia",
   },
};

export function generateStaticParams() {
   return routing.locales.map(locale => ({ locale }));
}

type Props = {
   children: React.ReactNode;
   params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
   "use cache";
   cacheLife("layout");

   const { locale } = await params;

   if (!locale || !hasLocale(routing.locales, locale)) {
      notFound();
   }
   setRequestLocale(locale);

   const validLocale = locale as Locale;
   const messages = await getMessages();

   return (
      <html lang={validLocale}>
         <NextIntlClientProvider locale={validLocale} messages={messages}>
            <body className={clsx(poppins.className, "bg-primary text-white")}>{children}</body>
         </NextIntlClientProvider>
      </html>
   );
}
