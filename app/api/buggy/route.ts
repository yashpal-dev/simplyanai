import { getBuggyResponse } from "@/utils/ai-model";
import { NextRequest, NextResponse } from "next/server";

const res = NextResponse;

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { codeSnippet, language } = data;

  try {
    console.error("typeof obj");

    const llmResponse = (await getBuggyResponse(codeSnippet, language)) || "";
    console.warn(llmResponse);

    const obj = JSON.parse(llmResponse);

    return res.json(
      { success: true, fixedCode: obj.codeSnippet, description: obj.changed },
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
