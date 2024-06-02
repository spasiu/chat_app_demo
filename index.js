const express = require('express');

const OPEN_AI_TOKEN = 'YOUR_OPEN_AI_API_TOKEN';

express()
  .use(express.static('public'))
  .use(express.json())
  .post('/messages', (req, res) => {
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + OPEN_AI_TOKEN,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: req.body.messages,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        res.json({ response: data.choices[0].message })
      })
      .catch((error) => res.json({ error: error }));
  })
  .listen(3434, () => console.log('Web app running on http://localhost:3434/'));
