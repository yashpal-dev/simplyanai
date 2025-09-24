import { LucideIcon } from "lucide-react";

type Service = {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
};

type ChatboxProps = {
  user: string;
  text: string;
  isAI: boolean;
};

type Sidebar = {
  fileName: string;
  file: File | null;
  handleFileRemove: () => void;
};
