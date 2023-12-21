"use client";

import { useEffect, useState } from "react";

export default function useLangAttribute() {
   const [lang, setLang] = useState<string>("");

   useEffect(() => {
      const langValue = document.documentElement.lang;
      setLang(() => langValue);
   }, []);

   return lang;
}
