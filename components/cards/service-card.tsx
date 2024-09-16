import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export function ServiceCard({ title, description, url }: Services) {
  return (
    <>
      <Card className="w-full h-full p-10">
        <CardContent className="flex flex-col justify-center items-center gap-4">
          <CardTitle className="text-2xl font-semibold text-secondary-foreground">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-secondary-foreground/60 text-center">
            {description}
          </CardDescription>
          <CardFooter className="px-5 py-2 rounded-sm bg-primary flex hover:bg-transparent text-primary-foreground hover:text-primary border-2 border-border">
            <Link href={url}>
              <span className="">Try Now</span>
            </Link>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}
