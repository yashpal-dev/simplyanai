import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { MoveLeft, Plus } from "lucide-react";
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
    <div className="relative w-full h-full min-h-screen px-5 bg-accent">
      <div className="sticky  top-10 bottom-0">
        <div className="flex flex-col items-stretch gap-5">
          <Button
            variant={"outline"}
            className="py-7 gap-2 text-sm cursor-auto"
          >
            <span className="text-xl">File:</span>
            <CardTitle className="text-xl font-semibold">
              {fileName
                ? `${fileName.substring(0, 10)}...`
                : "No File Selected"}
            </CardTitle>
          </Button>

          <Button
            onClick={handleFileRemove}
            disabled={!file}
            className="py-7 gap-3 text-base font-bold hover:bg-transparent text-center hover:text-secondary-foreground border-2"
          >
            <Plus size={"1rem"} />
            New Chat
          </Button>
          <Button className="py-7 gap-3 text-base font-bold hover:bg-transparent text-center hover:text-secondary-foreground border-2">
            <MoveLeft size={"1rem"} />
            <Link href={"/"}>Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
