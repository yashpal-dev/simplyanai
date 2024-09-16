import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center ">
        <div className=" select-none">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-center text-secondary-foreground">
            Experience the age of AI
          </h1>
          <p className="text-sm xl:text-base text-center text-secondary-foreground/60 mt-2">
            Experience the power, realm of the AI. And the unbelivable power
            which you need.
          </p>
        </div>
        <div className="absolute bottom-10">
          <Link href={"#tools-section"}>
            <div className="w-20 aspect-square flex justify-center items-center rounded-full bg-primary text-primary-foreground hover:bg-transparent hover:text-secondary-foreground border-2">
              <ArrowDown size={"2rem"} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

// export function Hero() {
//   return (
//     <>
//       <section id="hero-section">
//         <WavyBackground
//           className="max-w-4xl mx-auto mt-32"
//           blur={20}
//           colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
//         >
//           <div className="w-full h-[80vh] flex flex-col justify-center items-center">
//             <div className="flex flex-col justify-center items-start">
//               <p className="text-base text-left text-white">
//                 Experience the age of <span className="text-primary">AI</span>
//               </p>
//               <h1 className="text-3xl sm:text-5xl lg:text-7xl mt-2 mb-10 text-white">
//                 Tools that make You <br />
//                 <span className="text-primary">Productive</span>
//               </h1>
//               <div className="w-full flex flex-col lg:flex-row items-center gap-2">
//                 <Link
//                   href="/upload"
//                   className="w-full bg-background text-foreground border-2 transition-all ease-out hover:opacity-80 px-3 py-3 rounded-md text-center text-xl font-semibold mx-auto"
//                 >
//                   Try Now
//                 </Link>
//                 <Link
//                   href="#info-section"
//                   className="w-full bg-transparent text-white border-2 transition-all ease-out px-3 py-3 rounded-md text-center text-xl font-semibold mx-auto"
//                 >
//                   Read More...
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </WavyBackground>
//       </section>
//     </>
//   );
// }
