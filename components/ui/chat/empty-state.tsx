import { MessageSquare } from "lucide-react";
import { FileInput } from "./file-input";

export function EmptyState({
  file,
  setFile,
  handleInputVisibility,
  handleFileRemove,
}: {
  file: File | null;
  setFile: (file: File | null) => void;
  handleInputVisibility: (bool: boolean) => void;
  handleFileRemove: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-lg space-y-10">
        {/* Header */}
        <div className="text-center space-y-6">
          {/* Icon with gradient background */}
          <div className="relative">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg border border-primary/20">
              <MessageSquare className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Title and description */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight">
              <span className="text-foreground">Chat with</span>{" "}
              <span className="font-mono font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Documents
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
              Upload a document and start having intelligent conversations with
              your content
            </p>
          </div>
        </div>

        {/* File Input */}
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Get Started
            </h2>
            <p className="text-sm text-muted-foreground">
              Choose a document to begin your AI-powered conversation
            </p>
          </div>

          <div className="flex justify-center">
            {" "}
            <FileInput
              file={file!}
              setFile={setFile}
              handleInputVisibility={handleInputVisibility}
              handleFileRemove={handleFileRemove}
            />
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground/80 leading-relaxed">
            Supported formats: PDF, TXT • Max size: 10MB • Powered by Simplyanai
          </p>
        </div>
      </div>
    </div>
  );
}
