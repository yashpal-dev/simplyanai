const splitString = require("split-string");

export function chunkText(text: string, chunkSize: number) {
  const tokens = splitString(text, { separator: /\s+/ });
  const chunks = [];

  for (let i = 0; i < tokens.length; i += chunkSize) {
    chunks.push(tokens.slice(i, i + chunkSize).join(" "));
  }

  return chunks;
}
