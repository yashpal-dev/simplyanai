import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Service } from "@/types";

export function ServiceCard({ title, description, url, icon: Icon }: Service) {
  return (
    <Card className="group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 mb-4">
          {/* <div className="text-3xl">{icon}</div> */}
          <Icon className="w-6 h-6 text-primary" />
          <CardTitle className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-6">
        <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-0">
        <Link href={url} className="w-full group/btn">
          <div className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
            <span>Try Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
}
