import { getBuggyResponse } from "@/utils/ai-model";
import { NextRequest, NextResponse } from "next/server";

const res = NextResponse;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { codeSnippet, language } = data;

  const maxLimit = 5;
  let flag = true; //
  let iterations = 0; // track the number of time loop runs

  // default result
  let result = { codeSnippet: codeSnippet, changed: "" };

  try {
    while (flag && iterations < maxLimit) {
      const llmResponse = (await getBuggyResponse(codeSnippet, language)) || "";
      // console.warn(llmResponse);

      const obj = isValidJSON(llmResponse);
      if (obj !== false) {
        flag = false;
        result = obj;
      }

      iterations += 1;
    }

    return res.json(
      {
        success: true,
        fixedCode: result.codeSnippet,
        description: result.changed,
      },
      { status: 200 }
    );
  } catch (error) {
     console.error(error);
    return res.json(
      { success: false, error: "Please try again" },
      { status: 200 }
    );
  }
}

function isValidJSON(str: string) {
  try {
    let obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return false;
  }
}
