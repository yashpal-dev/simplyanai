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
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function Dropdown({ language, handleSelect }: any) {
  const [visible, setVisible] = useState(false);

  function handleVisible() {
    setVisible(!visible);
  }
  return (
    <DropdownMenu onOpenChange={handleVisible}>
      <DropdownMenuTrigger asChild onClick={handleVisible}>
        <Button
          variant={"outline"}
          className="py- flex items-center justify-center gap-2 transition-all delay-100"
        >
          {language}

          {visible ? (
            <ChevronUp size={"1rem"} />
          ) : (
            <ChevronDown size={"1rem"} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {lang.map((lang, index) => {
            return (
              <DropdownMenuItem key={index} onClick={() => handleSelect(lang)}>
                {lang}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const lang = [
  "javascript",
  "typescript",
  "python",
  "java",
  "c",
  "c++",
  "go",
  "ruby",
  "php",
];

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function Dropdown({ language, handleSelect }: any) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" className="px-3 py-1">
//           {language}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>Language</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           {lang.map((lang, index) => {
//             return (
//               <DropdownMenuItem key={index} onClick={() => handleSelect(lang)}>
//                 {lang}
//               </DropdownMenuItem>
//             );
//           })}
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// const lang = [
//   "javascript",
//   "typescript",
//   "python",
//   "java",
//   "c",
//   "c++",
//   "go",
//   "ruby",
//   "php",
// ];
