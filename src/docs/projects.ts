import { projectType } from "@/types/projectType";

const projectsCollection: projectType[] = [
   {
      image: "/images/projects/portfolio.webp",
      title: "Portfolio",
      tech: ["NextJS", "Tailwind CSS"],
      description: "Personal website and porfolio",
      github: "https://github.com/khmalz/portfolio",
      demo: "#",
   },
   {
      image: "/images/projects/tefa-digital.webp",
      title: "Tefa Digital",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      description:
         "An e-commerce platform that gives students the opportunity to offer their digital services for sale. The objective is to encourage students to channel their talents and skills into the community through practical learning experiences.",
      github: "https://github.com/khmalz/tefa-digital",
   },
   {
      image: "/images/projects/service-tools.webp",
      title: "Service Tools",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      description: "An electronic appliance repair reservation platform. The project is designed to provide an efficient solution for users in need of appliance repair, with the option of in-shop or at-home repair.",
      github: "https://github.com/khmalz/ServiceTools",
   },
   {
      image: "/images/projects/quicktick.webp",
      title: "Quicktick",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      description: "An easy-to-use travel/bus ticket booking platform. The main goal is to simplify the ticket booking process, providing a fast, efficient user experience.",
      github: "https://github.com/khmalz/QuickTick-App",
   },
   {
      image: "/images/projects/foursichology.webp",
      title: "Foursichology",
      tech: ["Laravel", "Tailwind CSS", "Bootstrap", "MySQL"],
      description: "A school reporting platform that allows students to report bullying crimes at school. The project is aiming to create a safe and supportive educational environment.",
      github: "https://github.com/khmalz/Foursichology-App",
   },
   {
      image: "/images/projects/kompensasi-benefit-karyawan.webp",
      title: "Kompensasi dan Benefit Karyawan",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      description: "A website that efficiently manages employee benefits and perks, improving well-being and satisfaction in the work environment.",
      github: "https://github.com/khmalz/kompensasi-dan-benefit-karyawan",
   },
];

export default projectsCollection;
