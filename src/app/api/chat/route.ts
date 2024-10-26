import { createOpenAI } from "@ai-sdk/openai";
import { generateText, streamText } from "ai";
import { NextResponse } from "next/server";

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const res = await streamText({
    model: openai("gpt-4o-mini"),
    prompt: message,
  });

  console.log(res.text);

  // for await (const textPart of res.textStream) {
  //   console.log(textPart);
  // }

  return new Response("abc");
}
