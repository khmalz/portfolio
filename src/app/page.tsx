"use client";

import Navbar from "@/components/Navbar";
import certificatesCollection from "@/docs/certificates";
import { certificateType } from "@/types/certificateType";
import { Tab } from "@headlessui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

export default function Home() {
   const typeText = useRef(null);
   const [open, setOpen] = useState(false);
   const [certificates] = useState<certificateType[]>(certificatesCollection);

   useEffect(() => {
      const typed = new Typed(typeText.current, {
         strings: ["FullStack Developer", "Backend Developer", "Student"],
         typeSpeed: 70,
         backSpeed: 70,
         backDelay: 1000,
         loop: true,
         shuffle: true,
         cursorChar: " .",
      });

      return () => {
         typed.destroy();
      };
   }, []);

   return (
      <>
         <Navbar />

         <section id="home" className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-4 md:space-y-2">
               <div className="flex flex-wrap items-center justify-center">
                  <div className="h-px w-7 flex-1 bg-white md:w-10"></div>
                  <h4 className="mx-1 text-sm font-bold text-white md:text-base">Welcome</h4>
                  <div className="h-px w-7 flex-1 bg-white md:w-10"></div>
               </div>
               <div className="py-10">
                  <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                     I am <span className="text-pink">Khairul</span> Akmal
                  </h1>
               </div>
               <div>
                  <h4 className="text-base font-bold text-white md:text-xl lg:text-2xl">
                     <span ref={typeText}></span>
                  </h4>
               </div>
            </div>
         </section>

         <section id="about" className="container">
            <div className="flex flex-col justify-between space-y-8 rounded-xl bg-secondary px-5 py-10 text-white shadow-xl md:flex-row md:space-x-8 md:space-y-0">
               <div className="flex w-full flex-col space-y-5 bg-opacity-50 backdrop-blur-lg backdrop-filter md:w-1/2">
                  <div className="flex items-center self-start">
                     <div className="h-px w-10 flex-1 border bg-white"></div>
                     <h4 className="mx-1 text-3xl font-bold">About</h4>
                  </div>
                  <h4 className="md:text-xl">Hi, Khairul Akmal here.</h4>
                  <p className="text-justify text-sm md:text-base">
                     I am a web developer who is dedicated to creating useful websites for the outside world. I live in East Jakarta, Indonesia, and I am currently a student at SMKN 46 Jakarta. Started learning programming in 2020, which until now
                     has continued to improve and upgrade technical skills.
                  </p>
                  <p className="text-justify text-sm md:text-base">
                     I started off as a front-end developer and ended up as a back-end developer because I love the challenges that are getting bigger and bigger. My favorite thing is turning source code into{" "}
                     <span className="font-semibold text-pink">clean</span> code.
                  </p>
                  <a
                     href="#"
                     className="inline-flex items-center self-baseline rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-fourth focus:z-10 focus:text-fourth focus:outline-none focus:ring-4 focus:ring-gray-200">
                     <svg className="me-2.5 h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                     </svg>
                     Download CV
                  </a>
               </div>

               <div className="flex w-full items-center md:w-1/2">
                  <div className="grid w-full grid-cols-2 flex-wrap gap-5 px-4 lg:grid-cols-4 lg:px-0">
                     <div className="card-about">
                        <div className="w-full max-w-[2.5rem]">
                           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>HTML5</title>
                              <path
                                 fill="#E34F26"
                                 d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                              />
                           </svg>
                        </div>
                     </div>
                     <div className="card-about">
                        <div className="w-full max-w-[2.5rem]">
                           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>CSS3</title>
                              <path
                                 fill="#1572B6"
                                 d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                              />
                           </svg>
                        </div>
                     </div>
                     <div className="card-about">
                        <div className="w-full max-w-[2.5rem]">
                           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>Tailwind CSS</title>
                              <path
                                 fill="#06B6D4"
                                 d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                              />
                           </svg>
                        </div>
                     </div>
                     <div className="card-about">
                        <div className="w-full max-w-[2.5rem]">
                           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>JavaScript</title>
                              <path
                                 fill="#F7DF1E"
                                 d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                              />
                           </svg>
                        </div>
                     </div>
                     <div className="card-about">
                        <div className="w-full max-w-[2.5rem]">
                           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>React</title>
                              <path
                                 fill="#61DAFB"
                                 d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                              />
                           </svg>
                        </div>
                     </div>
                     <div className="card-about">
                        <div className="w-full max-w-[2.5rem]">
                           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>Next.js</title>
                              <path
                                 fill="#000000"
                                 d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"
                              />
                           </svg>
                        </div>
                     </div>
                     <div className="card-about">
                        <div className="w-full max-w-[2.5rem]">
                           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>PHP</title>
                              <path
                                 fill="#777BB4"
                                 d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"
                              />
                           </svg>
                        </div>
                     </div>
                     <div className="card-about">
                        <div className="w-full max-w-[2.5rem]">
                           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <title>Laravel</title>
                              <path
                                 fill="#FF2D20"
                                 d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"
                              />
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section id="certificate" className="container mt-14 py-10 text-white">
            <div className="flex flex-col">
               <div className="flex items-center self-start">
                  <div className="h-px w-10 flex-1 border bg-white"></div>
                  <h4 className="mx-1 text-3xl font-bold">Certificate</h4>
               </div>
               <div className="mt-10 flex flex-col">
                  <Tab.Group vertical>
                     <div className="md:flex">
                        <Tab.List className="flex flex-col space-y-2 rounded-xl p-5 md:w-2/5 md:justify-center">
                           {certificates.map((certificate: certificateType, index) => (
                              <Tab
                                 key={index}
                                 className={({ selected }) =>
                                    `w-full rounded-lg py-5 text-sm font-medium leading-5 ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
                                       selected ? "bg-white text-blue-700 shadow" : "bg-fourth text-white hover:bg-white/[0.12] hover:text-white"
                                    }`
                                 }>
                                 {certificate.title}
                              </Tab>
                           ))}
                        </Tab.List>
                        <Tab.Panels className="items-center justify-center p-5 text-black md:flex md:w-3/5">
                           {certificates.map((certificate: certificateType, index) => (
                              <Tab.Panel key={index} className="w-full rounded-lg bg-white p-4 md:w-[580px]">
                                 <Image loading="lazy" width={500} height={400} className="w-full cursor-pointer rounded-lg border object-cover shadow-md" src={certificate.image} alt={certificate.title} onClick={() => setOpen(true)} />
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

         <section id="experience" className="container mt-10 py-10 text-white">
            <div className="flex flex-col">
               <div className="flex items-center self-baseline">
                  <div className="h-px w-10 flex-1 border bg-white"></div>
                  <h4 className="mx-1 text-3xl font-bold">Experience</h4>
               </div>
               <div className="mt-16 w-full">
                  <ol className="relative ml-8 border-s border-gray-200">
                     <li className="mb-10 ms-10">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                           <svg
                              className="h-2.5 w-2.5 text-secondary"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                              <line x1="8" y1="21" x2="16" y2="21"></line>
                              <line x1="12" y1="17" x2="12" y2="21"></line>
                           </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-white">PT. Indi Teknokreasi Internasional</h3>
                        <time className="mb-2 block text-xs font-normal leading-none text-slate-300 md:text-sm">Februari 2023 - Mei 2023</time>
                        <p className="text-base font-normal text-slate-200">Web Developer</p>
                     </li>
                     <li className="ms-10">
                        <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                           <svg
                              className="h-2.5 w-2.5 text-secondary"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                              <line x1="8" y1="21" x2="16" y2="21"></line>
                              <line x1="12" y1="17" x2="12" y2="21"></line>
                           </svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-white">PT. Rajawali Telekomunikasi Selular</h3>
                        <time className="mb-2 block text-xs font-normal leading-none text-slate-300 md:text-sm">Agustus 2022 - November 2022</time>
                        <p className="text-base font-normal text-slate-200">Web Developer</p>
                     </li>
                  </ol>
               </div>
            </div>
         </section>
      </>
   );
}
