import { RequestHandler } from "express";
import { openai } from "@ai-sdk/openai";
import { generateText, streamText } from "ai";

const model = openai("gpt-4o");

export const chatBot: RequestHandler = async (req, res, next) => {
  const { messages } = req.body;
  console.log(messages);
  const { text } = await generateText({
    model,
    messages: [
      {
        role: "system",
        content:
          "You are a financial assistant. Answer with financial expertise.",
      },
      ...messages,
    ],
  });

  console.log(text);
  res.status(200).json({
    message: {
      role: "assistant",
      content: text,
    },
  });
};
