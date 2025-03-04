import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "yet-another-react-lightbox/styles.css";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Locale } from "@/types/intlType";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import clsx from "clsx/lite";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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

type Params = Promise<{ locale: Locale }>;
export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Params }) {
   const { locale } = await params;

   if (!locale || !routing.locales.includes(locale as Locale)) {
      notFound();
   }

   const messages = await getMessages();

   return (
      <html lang={locale}>
         <NextIntlClientProvider locale={locale} messages={messages}>
            <body className={clsx(poppins.className, "bg-primary text-white")}>{children}</body>
         </NextIntlClientProvider>
      </html>
   );
}
