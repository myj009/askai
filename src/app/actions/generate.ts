"use server";

import { streamText } from "ai";
import { openai } from "@/lib/openai";
import { createStreamableValue } from "ai/rsc";

export async function generate(msg: string) {
  const stream = createStreamableValue("");

  (async () => {
    const { textStream } = await streamText({
      model: openai("gpt-4o-mini"),
      prompt: msg,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
