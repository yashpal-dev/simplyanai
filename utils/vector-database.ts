import { createFileId } from "@/helpers";
import { Index } from "@upstash/vector";

// Initialize Upstash Vector index
const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL!,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
});

export async function storeToVectorDB(
  chunks: string[],
  fileName: string,
  hashedIp: string
) {
  const uniqueKey = hashedIp + fileName;

  try {
    const dataToUpsert = chunks.map((chunk, idx) => ({
      id: createFileId(hashedIp, fileName, idx + 1),
      data: chunk,
      metadata: {
        data: chunk,
        key: uniqueKey,
        fileName: fileName,
        chunkIndex: idx,
      },
    }));

    await index.upsert(dataToUpsert);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fetchFromVectorDB(
  queryText: string,
  hashedIp: string,
  fileName: string
) {
  const uniqueKey = hashedIp + fileName;

  const response = await index.query({
    data: queryText,
    topK: 2,
    includeMetadata: true,
    filter: `key = '${uniqueKey}'`,
  });

  let records = "";
  for (const obj of response) {
    records += obj.metadata?.data + "\n";
  }
  return records;
}
