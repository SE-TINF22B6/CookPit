import OpenAI from "openai";

//Nutzung der api kostet Geld!!
//ausführen bisland durch node openai-test.js
const openai = new OpenAI({ apiKey: 'api key here' });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();