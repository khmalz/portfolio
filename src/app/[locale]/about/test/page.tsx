import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/locale/TranslationsProvider";
import ExampleClientComponent from "@/components/locale/ExampleClientComponent";

const i18nNamespaces = ["home"];

export default async function Test({ params: { locale } }: { params: { locale: string } }) {
   const { t, resources } = await initTranslations(locale, i18nNamespaces);

   return (
      <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
         <main>
            <h1>{t("header")}</h1>
            <ExampleClientComponent />
         </main>
      </TranslationsProvider>
   );
}
