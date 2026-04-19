export default function Background() {
   return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-primary">
         <div className="absolute -left-[10%] -top-[10%] h-[40%] w-[40%] animate-blob rounded-full bg-fourth mix-blend-screen blur-[120px] opacity-40"></div>
         <div className="animation-delay-2000 absolute -right-[10%] top-[20%] h-[50%] w-[50%] animate-blob rounded-full bg-[#38bdf8] mix-blend-screen blur-[120px] opacity-20"></div>
         <div className="animation-delay-4000 absolute -bottom-[20%] left-[20%] h-[60%] w-[60%] animate-blob rounded-full bg-[#818cf8] mix-blend-screen blur-[150px] opacity-20"></div>

         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>
   );
}
