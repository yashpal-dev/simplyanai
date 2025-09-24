import { Button } from "@/components/ui/button";
import { Plus, FileText, Home } from "lucide-react";
import Link from "next/link";

type Sidebar = {
  fileName: string;
  file: File | null;
  handleFileRemove: () => void;
};

export function Sidebar({
  fileName,
  file,
  handleFileRemove,
}: Sidebar): React.JSX.Element {
  return (
    <div className="w-full h-full min-h-screen bg-background border-r border-border/50">
      <div className="p-4 space-y-4">
        {/* File Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border/50">
            <FileText className="w-4 h-4 text-primary" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                Current File
              </p>
              <p className="text-sm font-bold text-foreground truncate leading-tight">
                {fileName ? fileName : "No File Selected"}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button
            onClick={handleFileRemove}
            disabled={!file}
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 font-medium"
          >
            <Plus className="w-4 h-4" />
            New Chat
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50 font-medium"
            asChild
          >
            <Link href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Info */}
        <div className="mt-8 p-3 rounded-lg bg-secondary/20 border border-border/30">
          <p className="text-sm text-foreground/90 leading-relaxed font-normal">
            Upload a document to start chatting with AI. Ask questions, get
            summaries, and extract insights from your content.
          </p>
        </div>
      </div>
    </div>
  );
}
