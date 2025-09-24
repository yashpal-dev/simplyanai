import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CopyToClipboard({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <Button
      variant={"outline"}
      onClick={() => handleCopyToClipboard(text)}
      className="text-sm"
    >
      {!copied ? "copy" : "copied!"}
    </Button>
  );
}
