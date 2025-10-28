"use client";

import useTyped from "@/hooks/useTyped";
import { useTranslations } from "next-intl";

export default function TypedText() {
   const trlns = useTranslations("home");
   const strings = ["FullStack Developer", "Backend Developer", "Mobile Developer", "Android Developer", trlns("student")];
   const typeTexRef = useTyped(strings);

   return <span ref={typeTexRef}></span>;
}
