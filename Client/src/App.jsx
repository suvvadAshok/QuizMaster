import { quiz } from "./assets/data.js";
import OptionSelection from "./multipleQuestion";
import React from "react";
import axios from "axios";

function App() {
  const [user, setUser] = React.useState("");
  const [qNum, setQNum] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [error, setError] = React.useState("");
  const [submit, setSubmit] = React.useState(true);
  const [quizes, setQuizes] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/generate-quiz",
          {
            topic: "personality development",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        setQuizes(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("quiz", quizes);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(false);
    setError("");

    if (Object.keys(answers).length !== quiz.length) {
      setError("Please answer all questions before submitting.");
      setSubmit(true);
      return;
    }

    const ans = Object.values(answers);
    let max = 0;
    let value = "";
    for (let i = 0; i < ans.length; i++) {
      let count = 0;
      for (let j = i + 1; j < ans.length; j++) {
        if (ans[i] === ans[j]) {
          count = count + 1;
        }
      }
      if (max < count) {
        max = count;
        value = ans[i];
      }
    }

    setUser(value);

    console.log("Submitted Answers:", answers);
    alert("Quiz submitted! Check the console for your answers.");
  };

  const handleAnswerChange = (question, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
  };

  const handleDecrease = () => {
    setError("");
    if (qNum > 0) {
      setQNum(qNum - 1);
    }
  };

  const handleIncrease = () => {
    if (qNum < quiz.length - 1) {
      setQNum(qNum + 1);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {submit && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div
            key={quiz[qNum].question}
            className="p-4 transition-all duration-300 ease-in-out"
          >
            <OptionSelection
              questionData={quiz[qNum]}
              onAnswerChange={(answer) =>
                handleAnswerChange(quiz[qNum].question, answer)
              }
              selectedAnswer={answers[quiz[qNum].question]}
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          {qNum === quiz.length - 1 && <button type="submit">Submit</button>}
        </form>
      )}

      <h1>{user}</h1>

      {submit && (
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleDecrease}
            className={`${qNum === 0 && "hidden"}`}
          >
            Previous
          </button>
          <button
            onClick={handleIncrease}
            className={`${qNum === quiz.length - 1 && "hidden"}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
