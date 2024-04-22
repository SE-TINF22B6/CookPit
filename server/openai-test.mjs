import OpenAI from "openai";

async function callOpenAIapi(userInput, key) {
  const openai = new OpenAI({
    apiKey: key,
  });

  const input =
    "Erstelle mir ein Rezept aus den folgenden Zutaten: " +
    userInput.message +
    " Schreibe die Zutatenliste sowie die einzelnen Schritte jeweils in eine neue Zeile.";
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
