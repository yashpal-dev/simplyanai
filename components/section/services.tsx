import { ServiceCard } from "@/components/cards";
import { Service } from "@/types";
import { Bug, FileText } from "lucide-react";

export function Services() {
  return (
    <section
      id="services-section"
      className="w-full min-h-screen py-16 sm:py-20 lg:py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground mb-6">
            Our{" "}
            <span className="font-mono font-bold text-primary">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light text-muted-foreground">
            Discover our AI-powered tools designed to enhance your productivity
            and streamline your workflow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard {...service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const services: Service[] = [
  {
    title: "Chatwithdoc",
    description:
      "Upload text or PDF documents and have intelligent conversations with your content. Ask questions, get summaries, and extract insights instantly.",
    url: "/upload",
    icon: FileText,
  },
  {
    title: "Buggy",
    description:
      "AI-powered code error detection and fixing. Upload your code and get instant solutions to bugs, errors, and optimization suggestions.",
    url: "/buggy",
    icon: Bug,
  },
];
