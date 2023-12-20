"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
   const { t } = useTranslation();

   return <h3 className="text-2xl font-semibold">{t("greeting.say")}</h3>;
}
