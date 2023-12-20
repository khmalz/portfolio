import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: "My Portfolio - Web Developer",
      short_name: "Portfolio Web Developer",
      description: "Portofolio web developer - Creative developer with experience in various web projects with 2-3 years of experience as a full-stack developer with more back-end dominance.",
      start_url: "/",
      display: "standalone",
      background_color: "#205295",
      theme_color: "#205295",
      icons: [
         {
            src: "/favicon.ico",
            sizes: "any",
            type: "image/x-icon",
         },
      ],
   };
}
