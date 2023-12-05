require('dotenv').config();
const cors = require('cors');

const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));
app.use(bodyParser.json());

app.post('/recipe-maker', async (req, res) => {
  const userMessage = req.body.message;
  const gptPrefabMessage = 'Please create me a real recipe ONLY containing the following ingredient: ' + {userMessage};
  
  try {
    const result = await callOpenAIAPI(gptPrefabMessage);
    console.log(res.json({ result }));
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//openai api call
async function callOpenAIAPI(message) {
  const apiKey = process.env.OPENAI_API_KEY;
  var userPrompt="";

  await fetch(
    `https://api.openai.com/v1/completions`),
    {
        body: JSON.stringify({model: "gpt-3.5-turbo",
        "messages": [
            {
              role: "system",
              content: userPrompt,            
            },
            {
              role: "user",
              content: message,            
            },
          ],
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " +  apiKey,
        },
          }
      ).then((response) => {
          if (response.ok) {
              response.json().then((json) => {
                  terminal.echo(json);
                  console.log(json['choices'][0]['message']['content']);
              });
          }
      })
  }}