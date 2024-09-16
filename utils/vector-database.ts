import { createFileId } from "@/helpers";
import { Pinecone } from "@pinecone-database/pinecone";

//@ts-ignore
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const pcIndex = pc.index("chatbot");

// insert records in database
export async function storeToVectorDB(
  embeddings: Embedding,
  fileData: string,
  fileName: string,
  hashedIp: string,
  index: number
) {
  const fileId = createFileId(hashedIp, fileName, index);
  const uniqueKey = hashedIp + fileName;

  try {
    await pcIndex.namespace("cb1").upsert([
      {
        id: fileId,
        values: embeddings,
        metadata: {
          data: fileData,
          key: uniqueKey,
        },
      },
    ]);
  } catch (error: any) {
    throw new Error(error);
  }
}

// fetch records from database
export async function fetchFromVectorDB(
  embeddings: Embedding,
  hashedIp: string,
  fileName: string
) {
  const uniqueKey = hashedIp + fileName;

  const response = await pcIndex.namespace("cb1").query({
    vector: embeddings,
    topK: 2,
    includeMetadata: true,
    filter: {
      key: { $eq: uniqueKey },
    },
  });

  let records = "";
  for (const obj of response.matches) {
    records += obj.metadata?.data + "\n";
  }
  return records;
}
