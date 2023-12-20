"use client";

import { useRouter, usePathname } from "@/navigation";

export default function LanguageChanger({ locale }: { locale: string }) {
   const router = useRouter();
   const pathname = usePathname();

   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      router.push(pathname, { locale: e.target.value });
   };

   return (
      <select value={locale} onChange={handleChange} id="countries" className="block w-1/5 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
         <option disabled selected>
            Choose a country
         </option>
         <option value="en">English</option>
         <option value="id">Indonesia</option>
      </select>
   );
}
