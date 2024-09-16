import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

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
    <div className=" w-full min-h-screen px-5 py-10 bg-accent">
      <div className="flex flex-col items-stretch gap-5">
        <Button variant={"outline"} className="py-7 gap-5 text-sm cursor-auto">
          <span className="text-xl">File:</span>
          <CardTitle className="text-xl font-semibold">
            {fileName ? fileName : "No File Selected"}
          </CardTitle>
        </Button>

        <Button
          onClick={handleFileRemove}
          disabled={!file}
          className="py-7 gap-5 text-base font-bold hover:bg-transparent text-center hover:text-secondary-foreground border-2"
        >
          <Plus />
          New Chat
        </Button>
      </div>
    </div>
  );
}
