// Import the OpenAI client
const { OpenAI } = require("openai");

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateQuiz(topic) {
  const prompt = `
  Generate a quiz on the topic of ${topic}. The quiz should contain exactly 5 questions with multiple-choice options.
  Each question should have four options, and each option should be associated with a label indicating a type of personality or approach.
  each option is associated with any one of label 1,label 2, label 3, label 4. label 1,label 2, label 3, label 4 are labels indicating type of personality. don't use different label.
  Format the quiz in the following structure:
  [
    {
      question: "Question text",
      options: [
        {
          option: "Option 1",
          label: "Label 1",
        },
        {
          option: "Option 2",
          label: "Label 2",
        },
        {
          option: "Option 3",
          label: "Label 3",
        },
        {
          option: "Option 4",
          label: "Label 4",
        },
      ],
    },
    // Add more questions as needed
  ];
  Provide exactly 5 questions.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      max_tokens: 800,
      temperature: 0.7,
    });

    const quiz = response.choices[0].message.content.trim();
    console.log("Generated Quiz:", quiz);
    return quiz;
  } catch (error) {
    console.error("Error generating quiz:", error);
  }
}

module.exports = generateQuiz;
