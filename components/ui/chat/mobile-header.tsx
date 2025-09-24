import { FileText, Plus } from "lucide-react";
import { Button } from "../button";

export function MobileHeader({
  file,
  onFileRemove,
}: {
  file: File | null;
  onFileRemove: () => void;
}) {
  return (
    <section className="fixed top-0 left-0 right-0 z-20 xl:hidden bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="grid grid-cols-2 h-14">
        <Button
          variant="outline"
          className="h-full gap-2 cursor-auto rounded-none border-r border-border/50 bg-secondary/30"
        >
          <FileText className="w-4 h-4" />
          <span className="text-xs font-medium">
            {file?.name ? `${file.name.substring(0, 12)}...` : "No File"}
          </span>
        </Button>

        <Button
          onClick={onFileRemove}
          disabled={!file}
          className="h-full gap-2 text-xs font-medium hover:bg-destructive/10 hover:text-destructive border-l-0 rounded-none"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </Button>
      </div>
    </section>
  );
}
