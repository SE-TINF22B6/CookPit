const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const KEY = process.env.OPENAI_API_KEY;
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/recipe-maker", async (req, res) => {
console.log("Empfangene Daten:", req.body);
  try {
    const importedModule = await import("./openai-test.mjs");
    const { callOpenAIapi } = importedModule;
    const result = await callOpenAIapi(req.body, KEY);
    res.json({ result });
  } catch (error) {
    console.error("Fehler beim Importieren:", error);
    res.status(500).send("Interner Serverfehler");
  }
});

// Port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const database = require ('./database.cjs')
database(app);

