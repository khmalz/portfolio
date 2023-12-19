"use client";

import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

const defaultOptions: TypedOptions = {
   typeSpeed: 70,
   backSpeed: 70,
   backDelay: 1000,
   loop: true,
   shuffle: true,
   cursorChar: " .",
};

export default function useTyped(words: string[]) {
   const typedRef = useRef<HTMLSpanElement>(null);

   useEffect(() => {
      const options = { ...defaultOptions };

      const typedInstance = new Typed(typedRef.current!, {
         strings: words,
         ...options,
      });

      return () => {
         typedInstance.destroy();
      };
   }, [words]);

   return typedRef;
}
