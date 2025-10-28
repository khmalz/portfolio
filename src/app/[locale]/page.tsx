import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { use } from "react";

import certificatesCollection from "@/docs/certificates";

import AboutSection from "@/components/pages/About";
import ContactSection from "@/components/pages/Contact";
import ExperienceSection from "@/components/pages/Experience";
import Footer from "@/components/pages/Footer";
import HomeSection from "@/components/pages/Home";

const CertificateSection = dynamic(() => import("@/components/pages/Certificate"));
const Navbar = dynamic(() => import("@/components/pages/Navbar"));
const ProjectSection = dynamic(() => import("@/components/pages/Project"));

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
   const { locale } = use(params);
   setRequestLocale(locale);

   const trlns = useTranslations("certificate");

   return (
      <>
         <Navbar />

         <HomeSection />

         <AboutSection />

         <CertificateSection title={trlns("title")} certificates={certificatesCollection} />

         <ExperienceSection />

         <ProjectSection />

         <ContactSection />

         <Footer />
      </>
   );
}
