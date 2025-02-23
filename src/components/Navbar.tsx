import useLangAttribute from "@/hooks/useLangAttribute";
import { Link, routing } from "@/i18n/routing";
import { Locale } from "@/types/intlType";
import { navLinkType } from "@/types/navLinkType";
import { Menu, Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

export default function Navbar() {
   const trlns = useTranslations("navbar");
   const lang = useLangAttribute();

   const navLink: navLinkType[] = [
      { text: "Home", link: "#home" },
      { text: trlns("about"), link: "#about" },
      { text: trlns("certificate"), link: "#certificate" },
      { text: trlns("experience"), link: "#experience" },
      { text: trlns("project"), link: "#project" },
      { text: trlns("contact"), link: "#contact" },
   ];

   return (
      <nav className="shadow-2xs backdrop-blur-xs fixed start-0 top-0 z-20 w-full bg-white/5">
         <div className="container mx-auto">
            <div className="flex items-center justify-between py-4">
               <div className="flex w-full justify-between space-x-3 md:order-2 md:w-auto md:justify-start md:space-x-0">
                  <Menu as="div" className="relative inline-block text-left md:hidden">
                     <div>
                        <Menu.Button className="focus:outline-hidden inline-flex w-full justify-center rounded-md bg-white/20 px-4 py-2 text-sm font-medium  text-white focus-visible:ring-2 focus-visible:ring-white/75">
                           <svg className="h-5 w-5 fill-current text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 17 14">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                           </svg>
                        </Menu.Button>
                     </div>
                     <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="focus:outline-hidden absolute left-0 mt-2 w-40 origin-top-left divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 sm:w-72">
                           <div className="px-1 py-1">
                              {navLink.map((item, index) => (
                                 <Menu.Item key={index}>
                                    {({ active }) => (
                                       <a href={item.link} className={`${active ? "bg-fourth text-white" : "text-gray-900"} group mb-1 flex w-full items-center rounded-md px-2 py-2 text-sm capitalize`}>
                                          {item.text}
                                       </a>
                                    )}
                                 </Menu.Item>
                              ))}
                           </div>
                        </Menu.Items>
                     </Transition>
                  </Menu>

                  <Menu as="div" className="relative inline-block text-left">
                     <div>
                        <Menu.Button className="focus:outline-hidden flex items-center rounded-md bg-white/20 px-3 py-2 text-sm font-medium uppercase text-white focus-visible:ring-2 focus-visible:ring-white/75">
                           {lang}
                           <svg viewBox="0 0 24 24" className="h-5 w-5 pb-0.5 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                              <g id="SVGRepo_iconCarrier">
                                 <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
                              </g>
                           </svg>
                        </Menu.Button>
                     </div>
                     <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="focus:outline-hidden absolute right-0 mt-2 w-20 origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                           <div className="px-1 py-1">
                              {routing.locales.map((locale: Locale) => (
                                 <Menu.Item key={locale}>
                                    {({ active }) => (
                                       <Link locale={locale} href="/" className={`${active ? "bg-fourth text-white" : "text-gray-900"} group mb-1 flex w-full items-center rounded-md px-2 py-2 text-sm uppercase`}>
                                          {locale}
                                       </Link>
                                    )}
                                 </Menu.Item>
                              ))}
                           </div>
                        </Menu.Items>
                     </Transition>
                  </Menu>
               </div>
               <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
                  <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
                     {navLink.map((item: navLinkType, index: number) => (
                        <li key={index}>
                           <a href={item.link} className="hover-underline capitalize">
                              {item.text}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   );
}
