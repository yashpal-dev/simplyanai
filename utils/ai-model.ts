import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getModelResponse(data: string, query: string) {
  // template for  model
  const template = llmModelTemplate(data, query);

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: template,
      },
    ],
    model: "llama3-8b-8192",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null,
  });

  const response = chatCompletion.choices[0].message;
  return response.content;
}

// template for llm
export function llmModelTemplate(data: string, query: string) {
  const template = `
You are a knowledgeable assistant who can analyze and provide insights based on the information provided. If the question is not related to the provided data, respond by stating that the question is outside the scope of the data.

Here is the data:
${data}.

Based on the above data, answer the following question:
${query}`;

  return template;
}
