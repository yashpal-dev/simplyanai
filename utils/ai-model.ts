import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getModelResponse(data: string, query: string) {
  // template for  model
  const template = llmModelTemplate(data, query);

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
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

export function llmModelTemplate(data: string, query: string) {
  const template = `
You are a question-answer chatbot, you will be given data and a question. You have to use that data for giving appropriate answer.
In case you do not know answer or the data and the question does not match or you get special symbols or punctuation marks which do not have any specific meaning, return response you don't know."\n

Data : ${data}.\n
Question : ${query};
`;

  return template;
}
