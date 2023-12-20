"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import initTranslations from "@/app/i18n";
import type { i18n as i18nType } from "i18next";

export default function TranslationsProvider({ children, locale, namespaces, resources }: any) {
   const i18n = createInstance() as i18nType;

   initTranslations(locale, namespaces, i18n, resources);

   return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
