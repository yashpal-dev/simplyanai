import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section>
      <div className="px-2 pb-10 relative w-full min-h-screen flex flex-col items-center justify-center">
        <div className=" select-none space-y-5">
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-center text-secondary-foreground">
            Experience the age of AI
          </h1>
          <p className="text-sm xl:text-base text-center text-secondary-foreground/60 mt-2">
            Experience the power, realm of the AI. And the unbelievable power
            which you need.
          </p>
        </div>
        <div className="absolute bottom-10">
          <Link href={"#services-section"}>
            <div className="w-20 aspect-square flex justify-center items-center rounded-full bg-primary text-primary-foreground hover:bg-transparent hover:text-secondary-foreground border-2">
              <ArrowDown size={"2rem"} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
