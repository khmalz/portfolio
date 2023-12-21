"use client";

import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/About"), { ssr: false });
const CertificateSection = dynamic(() => import("@/components/Certificate"), { ssr: false });
const ExperienceSection = dynamic(() => import("@/components/Experience"), { ssr: false });
const HomeSection = dynamic(() => import("@/components/Home"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const ProjectSection = dynamic(() => import("@/components/Project"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
   return (
      <>
         <Navbar />

         <HomeSection />

         <AboutSection />

         <CertificateSection />

         <ExperienceSection />

         <ProjectSection />

         <ContactSection />

         <Footer />
      </>
   );
}
