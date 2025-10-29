import type { createFormatter } from "use-intl";
import convertStringToDate from "./converStringToDate";

export default function TranslatedStringDate(date: string, format: ReturnType<typeof createFormatter>): string {
   const result = convertStringToDate(date);

   return format.dateTime(result, {
      year: "numeric",
      month: "long",
   });
}
