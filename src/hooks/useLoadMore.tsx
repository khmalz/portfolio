import { useState } from "react";

export default function useLoadMore() {
   const initialProjectList = 3;
   const incrementInitialProjectList = 3;
   const [displayProjects, setDisplayProjects] = useState<number>(initialProjectList);

   const handleLoadMore = () => {
      setDisplayProjects(displayProjects + incrementInitialProjectList);
   };

   return {
      displayProjects,
      handleLoadMore,
   };
}
