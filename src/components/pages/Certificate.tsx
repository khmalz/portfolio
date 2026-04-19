"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx/lite";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import type { certificateType } from "@/types/certificateType";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

function CertificateImage({ certificate, onClick }: { certificate: certificateType; onClick: () => void }) {
   const [isLoaded, setIsLoaded] = useState(false);

   return (
      <div className="relative flex w-full items-center justify-center aspect-[1.414/1] rounded-xl">
         {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/5 animate-pulse border border-white/10">
               <svg className="h-8 w-8 animate-spin text-white/30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
            </div>
         )}

         <Image
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            width={500}
            height={400}
            className={clsx(
               "relative z-10 w-full h-full cursor-pointer rounded-xl object-contain shadow-lg transition-all duration-700 hover:scale-[1.02]",
               isLoaded ? "opacity-100 blur-none" : "opacity-0 blur-sm"
            )}
            src={certificate.image}
            alt={certificate.title}
            onClick={onClick}
         />
      </div>
   );
}

export default function CertificateSection({ title, certificates }: { title: string; certificates: certificateType[] }) {
   const [open, setOpen] = useState(false);

   return (
      <section id="certificate" className="container mt-5 py-10 pt-16 md:mt-10">
         <div className="flex flex-col">
            <div className="flex items-center self-start">
               <div className="h-px w-10 flex-1 border bg-white"></div>
               <h4 className="mx-1 text-3xl font-bold">{title}</h4>
            </div>
            <div className="mt-10 flex flex-col">
               <TabGroup vertical>
                  <div className="md:flex md:gap-8 lg:gap-10">
                     <TabList className="flex w-full flex-col space-y-3 md:w-1/3">
                        {certificates.map((certificate: certificateType, index) => (
                           <Tab
                              key={index}
                              className={({ selected }) =>
                                 clsx(
                                    "w-full rounded-xl py-4 px-5 text-left text-sm md:text-base leading-relaxed font-medium transition-all duration-300 focus:outline-hidden",
                                    selected
                                       ? "bg-white/10 text-white shadow-[0_8px_32px_0_#00000033] border border-white/20 backdrop-blur-md scale-[1.02] translate-x-2"
                                       : "bg-transparent text-slate-400 border border-transparent hover:bg-white/5 hover:text-white hover:translate-x-1"
                                 )
                              }>
                              {certificate.title}
                           </Tab>
                        ))}
                     </TabList>
                     <TabPanels className="mt-8 flex w-full items-center justify-center focus:outline-hidden md:mt-0 md:w-2/3">
                        {certificates.map((certificate: certificateType, index) => (
                           <TabPanel key={index} className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_8px_32px_0_#00000033] backdrop-blur-md transition-all duration-500 hover:shadow-[0_8px_32px_0_#ffffff1a] focus:outline-hidden md:p-6">
                              <CertificateImage certificate={certificate} onClick={() => setOpen(true)} />
                              <Lightbox
                                 styles={{ container: { backgroundColor: "rgba(0, 0, 0, .85)" } }}
                                 render={{
                                    buttonPrev: () => null,
                                    buttonNext: () => null,
                                 }}
                                 open={open}
                                 close={() => setOpen(false)}
                                 slides={[{ src: certificate.image, alt: certificate.title }]}
                              />
                           </TabPanel>
                        ))}
                     </TabPanels>
                  </div>
               </TabGroup>
            </div>
         </div>
      </section>
   );
}
