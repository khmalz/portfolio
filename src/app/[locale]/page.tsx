import { getTranslations, setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";

import certificatesCollection from "@/docs/certificates";

import AboutSection from "@/components/pages/About";
import ContactSection from "@/components/pages/Contact";
import ExperienceSection from "@/components/pages/Experience";
import Footer from "@/components/pages/Footer";
import HomeSection from "@/components/pages/Home";
import { cacheLife } from "next/cache";

const CertificateSection = dynamic(() => import("@/components/pages/Certificate"));
const Navbar = dynamic(() => import("@/components/pages/Navbar"));
const ProjectSection = dynamic(() => import("@/components/pages/Project"));

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
   "use cache";
   cacheLife("home");

   const awaitedParams = await params;
   const { locale } = awaitedParams;
   setRequestLocale(locale);

   const trlns = await getTranslations("certificate");

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
