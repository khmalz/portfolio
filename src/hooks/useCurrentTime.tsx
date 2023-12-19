import moment from "moment";
import { useEffect, useState } from "react";

export default function useCurrentTime() {
   const [currentTime, setCurrentTime] = useState(moment().format("HH:mm"));

   useEffect(() => {
      const timeInterval = setInterval(() => {
         setCurrentTime(moment().format("HH:mm"));
      }, 60000);

      return () => clearInterval(timeInterval);
   }, []);

   return currentTime;
}
