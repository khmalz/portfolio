import { projectType } from "@/types/projectType";

const projectsCollection: projectType[] = [
   {
      image: "/images/projects/portfolio.webp",
      title: "portfolio",
      tech: ["NextJS", "Tailwind CSS"],
      description: "Personal website and porfolio",
      github: "https://github.com/khmalz/portfolio",
      demo: "https://khmalz-portfolio.vercel.app",
   },
   {
      image: "/images/projects/tefa-digital.webp",
      title: "tefa_digital",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      description:
         "An e-commerce platform that gives students the opportunity to offer their digital services for sale. The objective is to encourage students to channel their talents and skills into the community through practical learning experiences.",
      github: "https://github.com/khmalz/tefa-digital",
   },
   {
      image: "/images/projects/service-tools.webp",
      title: "service_tools",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      description: "An electronic appliance repair reservation platform. The project is designed to provide an efficient solution for users in need of appliance repair, with the option of in-shop or at-home repair.",
      github: "https://github.com/khmalz/ServiceTools",
   },
   {
      image: "/images/projects/quicktick.webp",
      title: "quicktick",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      description: "An easy-to-use travel/bus ticket booking platform. The main goal is to simplify the ticket booking process, providing a fast, efficient user experience.",
      github: "https://github.com/khmalz/QuickTick-App",
   },
   {
      image: "/images/projects/foursichology.webp",
      title: "foursichology",
      tech: ["Laravel", "Tailwind CSS", "Bootstrap", "MySQL"],
      description: "A school reporting platform that allows students to report bullying crimes at school. The project is aiming to create a safe and supportive educational environment.",
      github: "https://github.com/khmalz/Foursichology-App",
   },
   {
      image: "/images/projects/kompensasi-benefit-karyawan.webp",
      title: "kompensasi_dan_benefit_karyawan",
      tech: ["Laravel", "Bootstrap", "MySQL"],
      description: "A website that efficiently manages employee benefits and perks, improving well-being and satisfaction in the work environment.",
      github: "https://github.com/khmalz/kompensasi-dan-benefit-karyawan",
   },
   {
      image: "/images/projects/digiworks.webp",
      title: "digiworks",
      tech: ["Laravel", "Tailwind CSS", "Flowbite", "MySQL"],
      description:
         "A platform that collects student work from software engineering majors in schools. The goal is to provide a space for students to showcase their creativity and abilities in application development, as well as inspire their peers.",
      github: "https://github.com/khmalz/showcase-project",
   },
   {
      image: "/images/projects/e-certificate.webp",
      title: "e_certificate",
      tech: ["Laravel", "Tailwind CSS", "Flowbite", "MySQL"],
      description:
         "A project derived from the results of the Competency Certification Test. This project aims to provide a solution to companies that need a website for the automatic generation of certificates based on the completion of organized training. With e-certificate, companies can save time and resources in the process of making certificates.",
      github: "https://github.com/khmalz/lsp-certificate",
   },
   {
      image: "/images/projects/checker-account.webp",
      title: "checker_account",
      tech: ["Flutter"],
      description:
         "A mobile application designed to check Mobile Legends accounts based on the ID and server inputted by the user. This application allows users to get the username of the Mobile Legends account they want, providing convenience in verifying their account information.",
      github: "https://github.com/khmalz/checker_ml_account",
   },
   {
      image: "/images/projects/ongkir.webp",
      title: "ongkos_kirim",
      tech: ["Flutter"],
      description:
         "A mobile application designed to check shipping prices and estimated delivery times based on origin and destination locations. The app allows users to easily get information on shipping costs and estimated delivery days, helping them to plan their shipments more efficiently.",
      github: "https://github.com/khmalz/ongkir",
   },
];

export default projectsCollection;
