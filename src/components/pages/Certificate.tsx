"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx/lite";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

import type { certificateType } from "@/types/certificateType";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

export default function CertificateSection({ title, certificates }: { title: string; certificates: certificateType[] }) {
   const [isImageLoaded, setIsImageLoaded] = useState(false);
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
                              <Image
                                 onLoad={() => setIsImageLoaded(true)}
                                 loading="lazy"
                                 width={500}
                                 height={400}
                                 className={clsx("w-full aspect-[1.414/1] cursor-pointer rounded-xl object-contain shadow-lg transition-transform duration-500 hover:scale-[1.02]", isImageLoaded ? "filter-none" : "blur-xs filter")}
                                 src={certificate.image}
                                 alt={certificate.title}
                                 onClick={() => setOpen(true)}
                              />
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
