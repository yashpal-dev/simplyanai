"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Code, Check } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

interface DropdownProps {
  language: string;
  handleSelect: (language: string) => void;
}

export function Dropdown({ language, handleSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleLanguageSelect = (lang: string) => {
    handleSelect(lang);
    setIsOpen(false);
  };

  return (
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={clsx(
            "h-10 px-4 flex items-center justify-between gap-3 min-w-[140px] transition-all duration-200",
            "hover:bg-primary/5 hover:border-primary/50 focus:ring-2 focus:ring-primary/20",
            isOpen && "bg-primary/5 border-primary/50"
          )}
        >
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium capitalize">{language}</span>
          </div>
          <ChevronDown
            className={clsx(
              "w-4 h-4 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 p-2 bg-background/95 backdrop-blur-lg border border-border/50 shadow-lg"
        align="start"
      >
        <DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Programming Languages
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuGroup className="space-y-1">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.value}
              onClick={() => handleLanguageSelect(lang.value)}
              className={clsx(
                "flex items-center justify-between px-3 py-2.5 rounded-md cursor-pointer transition-all duration-200",
                "hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary",
                language === lang.value && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-sm bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-primary">
                    {lang.icon}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium capitalize">
                    {lang.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {lang.description}
                  </div>
                </div>
              </div>

              {language === lang.value && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const languages = [
  {
    value: "javascript",
    label: "JavaScript",
    icon: "JS",
    description: "Web development",
  },
  {
    value: "typescript",
    label: "TypeScript",
    icon: "TS",
    description: "Typed JavaScript",
  },
  {
    value: "python",
    label: "Python",
    icon: "PY",
    description: "Data science & AI",
  },
  {
    value: "java",
    label: "Java",
    icon: "JA",
    description: "Enterprise applications",
  },
  {
    value: "c",
    label: "C",
    icon: "C",
    description: "System programming",
  },
  {
    value: "cpp",
    label: "C++",
    icon: "++",
    description: "High performance",
  },
  {
    value: "go",
    label: "Go",
    icon: "GO",
    description: "Cloud native",
  },
  {
    value: "ruby",
    label: "Ruby",
    icon: "RB",
    description: "Web applications",
  },
  {
    value: "php",
    label: "PHP",
    icon: "PH",
    description: "Server-side scripting",
  },
];
