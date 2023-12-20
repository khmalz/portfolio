import { useTranslations } from "next-intl";

export default function AboutPage() {
   const textTl = useTranslations("header");

   return (
      <div>
         <p>halo</p>
         <p>{textTl("title")}</p>
         <p>{textTl("ask")}</p>
      </div>
   );
}
