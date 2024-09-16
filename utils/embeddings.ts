import { MixedbreadAIClient } from "@mixedbread-ai/sdk";

const mxbai = new MixedbreadAIClient({
  //@ts-ignore
  apiKey: process.env.MXBAI_EMBEDDINGS_API_KEY,
});

const createEmbeddings = async (data: string) => {
  const res = await mxbai.embeddings({
    model: "mixedbread-ai/mxbai-embed-large-v1",
    input: [data],
    normalized: true,
    encodingFormat: "float",
    truncationStrategy: "end",
  });

  return res.data[0].embedding;
};

export { createEmbeddings };
