"use client";

import { Menu, Transition } from "@headlessui/react";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";

export default function Navbar() {
   const [currentTime, setCurrentTime] = useState(moment().format("HH:mm"));

   useEffect(() => {
      const timeInterval = setInterval(() => {
         setCurrentTime(moment().format("HH:mm"));
      }, 60000);

      return () => clearInterval(timeInterval);
   }, []);

   const navLink = [
      {
         text: "Home",
         link: "#home",
         active: true,
      },
      {
         text: "About",
         link: "#about",
         active: false,
      },
      {
         text: "Skill",
         link: "#skill",
         active: false,
      },
      {
         text: "Project",
         link: "#project",
         active: false,
      },
      {
         text: "Experience",
         link: "#experience",
         active: false,
      },
   ];

   return (
      <nav className="fixed start-0 top-0 z-20 w-full bg-white bg-opacity-5 shadow-sm backdrop-blur-sm">
         <div className="container mx-auto">
            <div className="flex items-center justify-between py-4">
               <div className="flex w-full justify-between space-x-3 md:order-2 md:w-auto md:justify-start md:space-x-0">
                  <div className="rounded-lg bg-fourth px-4  py-2 text-center text-sm font-medium text-white">{currentTime}</div>
                  <Menu as="div" className="relative inline-block text-left md:hidden">
                     <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white/20 px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
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
                        <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right  divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                           <div className="px-1 py-1">
                              {navLink.map((item, index) => (
                                 <Menu.Item key={index}>
                                    {({ active }) => (
                                       <a href={item.link} className={`${active || item.active ? "bg-fourth text-white" : "text-gray-900"} group mb-1 flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                          {item.text}
                                       </a>
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
                     {navLink.map((item, index) => (
                        <li key={index}>
                           <a href={item.link} className={`hover-underline ${item.active && "active"}`}>
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
