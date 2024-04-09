import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

async function callOpenAIapi(userInput) {
  const input =
    "Erstelle mir ein Rezept aus den folgenden Zutaten: " + userInput.message;
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: input,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log("");
  console.log("Hier kommt die ChatGPT Ausgabe:");
  console.log("-------------------------------");
  console.log(completion.choices[0].message.content);

  return completion.choices[0].message.content;
}

export { callOpenAIapi };
