import { CircleArrowUp, Loader2 } from "lucide-react";
import { Button } from "../button";
import { Textarea } from "../textarea";

export function InputArea({
  query,
  setQuery,
  onSubmit,
  inputVisible,
  inputRef,
  isLoading,
}: {
  query: string;
  setQuery: (query: string) => void;
  onSubmit: () => void;
  inputVisible: boolean;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  isLoading: boolean;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-background/95 backdrop-blur-lg border-t border-border/50">
      <div className="max-w-4xl mx-auto p-4 pb-6">
        <div className="relative">
          <Textarea
            ref={inputRef}
            placeholder="Ask a question about your document..."
            className="min-h-[60px] max-h-32 pr-14 resize-none border-border/50 focus:border-primary/50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit();
              }
            }}
            disabled={!inputVisible || isLoading}
          />

          <Button
            className="absolute bottom-2 right-2 w-10 h-10 p-0"
            variant="ghost"
            disabled={!inputVisible || query.trim() === "" || isLoading}
            onClick={onSubmit}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <CircleArrowUp className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
