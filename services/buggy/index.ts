import axios from "axios";

export async function sendCode(codeSnippet: string, language: string) {
  try {
    const res = await axios.post("/api/buggy", {
      codeSnippet,
      language,
    });
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
