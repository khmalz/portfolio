import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "yet-another-react-lightbox/styles.css";
import "./globals.css";

const poppins = Poppins({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
   title: "My Portfolio",
   description: "Portofolio web developer - Creative developer with experience in various web projects with 2-3 years of experience as a full-stack developer with more back-end dominance.",
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
   ],
   openGraph: {
      images: "/assets/images/projects/portfolio.webp",
      title: "Portfolio - Khairul Akmal",
      url: "https://github.com/khmalz",
      description: "Check out my portfolio website to see my skills in web developer.",
      type: "website",
      countryName: "Indonesia",
   },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${poppins.className} bg-primary text-white`}>{children}</body>
      </html>
   );
}
