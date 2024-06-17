import { callOpenAIapi } from "./openai-test";

describe("callOpenAIapi", () => {
  it("should call the OpenAI API and return the completion message", async () => {
    const userInput = { message: "Tomatoes, onions, garlic" };
    const key = "your-api-key";

    const result = await callOpenAIapi(userInput, key);

    expect(result).toBeDefined();
    expect(typeof result).toBe("string");
  });
});
