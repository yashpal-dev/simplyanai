import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import clsx from "clsx";

export function Chatbox({ user, text, isAI }: Chatbox) {
  // formatted time
  const currentTime = getCurrentTime();

  return (
    <Card
      className={clsx(
        "px-4 py-1 md:py-2 border-none bg-accent/60 w-full",
        isAI
          ? "justify-self-start md:max-w-[60%]"
          : "justify-self-end md:max-w-[40%]"
      )}
    >
      <CardHeader className="text-primary-foreground bg-primary rounded-full px-2 py-0 max-w-min">
        <CardTitle className="p-0 text-xs md:text-sm xl:text-sm">
          {user}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 py-1">
        <CardDescription className="text-primary text-sm md:text-base font-semibold text-start tracking-wider leading-loose text-wrap">
          {text}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-0 py-1">
        <div className="flex flex-1 justify-end items-center gap-1">
          <Clock size={"1rem"} />
          <p className="text-sm ">{currentTime}</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export function getCurrentTime() {
  const date = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Enables AM/PM format
  });

  return formatter.format(date);
}
