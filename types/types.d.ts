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

type Embedding = EmbeddingItem | MultipleEncodingsEmbeddingItem;
