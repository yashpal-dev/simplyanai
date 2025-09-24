import { User, Bot, Copy, Check } from "lucide-react";
import clsx from "clsx";
import { ChatboxProps } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Chatbox({ user, text, isAI }: ChatboxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={clsx("flex w-full", isAI ? "justify-start" : "justify-end")}
    >
      <div
        className={clsx(
          "group flex gap-3 p-4 rounded-2xl transition-all duration-200",
          isAI
            ? "max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] bg-muted/30 hover:bg-muted/40"
            : "max-w-[85%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%] bg-primary/10 hover:bg-primary/15"
        )}
      >
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div
            className={clsx(
              "w-8 h-8 rounded-full flex items-center justify-center",
              isAI ? "bg-primary/20" : "bg-primary"
            )}
          >
            {isAI ? (
              <Bot className="w-4 h-4 text-primary" />
            ) : (
              <User className="w-4 h-4 text-primary-foreground" />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-foreground">
              {user}
            </span>

            {isAI && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-6 w-6 p-0 hover:bg-primary/10"
              >
                {copied ? (
                  <Check className="w-3 h-3 text-green-600" />
                ) : (
                  <Copy className="w-3 h-3 text-muted-foreground" />
                )}
              </Button>
            )}
          </div>

          {/* Message */}
          <div className="text-foreground text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
