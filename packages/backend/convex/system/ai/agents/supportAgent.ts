import { createOpenAI } from "@ai-sdk/openai";
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";

const openRouter = createOpenAI({
  apiKey: process.env.OPEN_ROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

export const supportAgent = new Agent(components.agent, {
  chat: openRouter.chat("openai/gpt-oss-20b:free"),
  instructions: "You are a customer support agent",
});
