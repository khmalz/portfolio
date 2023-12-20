import LanguageChanger from "@/components/locale/LanguageChanger";
import { useTranslations } from "next-intl";

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
   const textTl = useTranslations("home");

   return (
      <div>
         <p>halo</p>
         <p>{textTl("header.title")}</p>
         <p>{textTl("header.ask")}</p>

         <LanguageChanger locale={locale} />
      </div>
   );
}
