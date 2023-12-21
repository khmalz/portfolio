"use client";

import { useFormatter } from "next-intl";
import convertStringToDate from "./converStringToDate";

export default function TranslatedStringDate(date: string): string {
   const format = useFormatter();

   const result = convertStringToDate(date);
   return format.dateTime(result, {
      year: "numeric",
      month: "long",
   });
}
