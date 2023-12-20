"use client";

import AboutSection from "@/components/About";
import CertificateSection from "@/components/Certificate";
import ExperienceSection from "@/components/Experience";
import HomeSection from "@/components/Home";
import Navbar from "@/components/Navbar";
import ProjectSection from "../../components/Project";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

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
