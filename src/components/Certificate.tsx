import certificatesCollection from "@/docs/certificates";
import { certificateType } from "@/types/certificateType";
import { Tab } from "@headlessui/react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

export default function CertificateSection() {
   const trlns = useTranslations("certificate");
   const [certificates] = useState<certificateType[]>(certificatesCollection);
   const [isImageLoaded, setIsImageLoaded] = useState(false);
   const [open, setOpen] = useState(false);

   return (
      <section id="certificate" className="container mt-5 py-10 pt-16 md:mt-10">
         <div className="flex flex-col">
            <div className="flex items-center self-start">
               <div className="h-px w-10 flex-1 border bg-white"></div>
               <h4 className="mx-1 text-3xl font-bold">{trlns("title")}</h4>
            </div>
            <div className="mt-10 flex flex-col">
               <Tab.Group vertical>
                  <div className="md:flex">
                     <Tab.List className="flex flex-col space-y-2 rounded-xl p-5 md:w-2/5 md:justify-center">
                        {certificates.map((certificate: certificateType, index) => (
                           <Tab
                              key={index}
                              className={({ selected }) =>
                                 `focus:outline-hidden w-full rounded-lg py-5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:ring-2 ${
                                    selected ? "bg-white text-blue-700 shadow-sm" : "bg-fourth text-white hover:bg-white/[0.12] hover:text-white"
                                 }`
                              }>
                              {certificate.title}
                           </Tab>
                        ))}
                     </Tab.List>
                     <Tab.Panels className="items-center justify-center p-5 text-black md:flex md:w-3/5">
                        {certificates.map((certificate: certificateType, index) => (
                           <Tab.Panel key={index} className="md:w-145 rounded-lg bg-white p-4">
                              <Image
                                 onLoad={() => setIsImageLoaded(true)}
                                 loading="lazy"
                                 width={500}
                                 height={400}
                                 className={`w-full cursor-pointer rounded-lg border object-cover shadow-md transition-transform duration-500 ${isImageLoaded ? "filter-none" : "blur-xs filter"}`}
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
                           </Tab.Panel>
                        ))}
                     </Tab.Panels>
                  </div>
               </Tab.Group>
            </div>
         </div>
      </section>
   );
}
