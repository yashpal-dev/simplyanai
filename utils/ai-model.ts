import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getModelResponse(data: string, query: string) {
  // template for  model

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: CHATBOT_PROMPT,
      },
      {
        role: "user",
        content: `
        Here is the data:
        ${data}.

        Based on the above data, answer the following question:
        ${query}`,
      },
    ],
    model: "openai/gpt-oss-120b",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    stream: false,
    stop: null,
  });

  const response = chatCompletion.choices[0].message;
  return response.content;
}

export async function getBuggyResponse(code: string, language: string) {
  // template for  model

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: BUGGY_PROMPT,
      },
      {
        role: "user",
        content: `
              Language: ${language}
              Here is the Code snippet:
              ${code}`,
      },
    ],
    model: "openai/gpt-oss-120b",
    // model: "llama-3.1-70b-versatile",
    temperature: 1,
    max_tokens: 5024,
    // max_tokens: 1024,
    response_format: {
      type: "json_object",
    },
    top_p: 1,
    stream: false,
    stop: "```",
  });

  const response = chatCompletion.choices[0].message;
  return response.content;
}

// template for llm
const CHATBOT_PROMPT = `
You are a knowledgeable assistant who can analyze and provide insights based on the information provided. If the question is not related to the provided data, respond by stating that the question is outside the scope of the data.
`;

const BUGGY_PROMPT = `
  You are a code fixer and formatter. You will be given a code snippet that may contain syntax errors, incorrect variable declarations and logical errors. Your task is to fix these issues and return the corrected code. If you do not understand code simply return json object {codeSnippet":"Sorry i cannot parse the code.", "changed":""}}
  The JSON should be in the format: {"codeSnippet":"Here come's the corrected code with proper formatting", "changed":"description of changes made in code"}}
  You have to only return JSON object.
  `;
