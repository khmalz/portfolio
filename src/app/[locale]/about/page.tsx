import initTranslations from "@/app/i18n";

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
   const { t } = await initTranslations(locale, ["home"]);

   return (
      <div>
         <p>Test</p>
         <h1>{t("greeting.say")}</h1>
      </div>
   );
}
