type Services = {
  title: string;
  description: string;
  url: string;
};

type Chatbox = {
  user: string;
  text: string;
  isAI: boolean;
};

type Sidebar = {
  fileName: string;
  file: File | null;
  handleFileRemove: () => void;
};

type Embedding = EmbeddingItem | MultipleEncodingsEmbeddingItem;
