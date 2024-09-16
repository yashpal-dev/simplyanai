import fs from "fs/promises";
import * as mime from "mime-types";
//@ts-expect-error
import pdf from "pdf-parse";

export async function readFileContent(filePath: string, fileName: string) {
  try {
    const fileType = mime.lookup(fileName);

    if (fileType === "application/pdf") {
      // for pdf run without any encoding
      const dataBuffer = await fs.readFile(filePath);
      const data = await pdf(dataBuffer);
      return data.text;
    }

    const dataBuffer = await fs.readFile(filePath, "utf-8"); // Read the file as a string

    // if it is a text document (.txt)
    return dataBuffer;
  } catch (error) {
    // if file is corrupted or format do not match with data
    return false;
  }
}
