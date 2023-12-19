import { svgTechType } from "@/types/svgTechType";

export default function SvgTech({ title, fill, path }: svgTechType) {
   return (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <title>{title}</title>
         <path fill={fill} d={path} />
      </svg>
   );
}
