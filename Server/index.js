const express = require("express");
const cors = require("cors");
const generateQuiz = require("./generateQuiz");

const app = express();

app.use(express.json());
app.use(cors());
const port = 3000;

app.post("/generate-quiz", async (req, res) => {
  const topic = req.body.topic || "personality development";
  const quiz = await generateQuiz(topic);
  res.send(quiz);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
