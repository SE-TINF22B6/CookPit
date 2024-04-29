import OpenAI from "openai";

async function callOpenAIapi(userInput, key) {
  const openai = new OpenAI({
    apiKey: key,
  });

  const input =
    "Erstelle ein Rezept mit den Zutaten: " +
    userInput.message +
    `. Schreibe einen Namen für das Rezept, die Zutatenliste mit Mengenangaben und die Schritte jeweils in einer neuen Zeile. 
      Nicht-Lebensmittel aus Zutaten und Namen entfernen.`;
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: input,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

export { callOpenAIapi };
