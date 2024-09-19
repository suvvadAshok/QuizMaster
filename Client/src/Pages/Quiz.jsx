//import { quiz } from "./assets/data.js";
import { quiz } from "../assets/data.js";
import OptionSelection from "../multipleQuestion.jsx";
import React from "react";
import {Personality} from "../personalityPage.jsx"

function Quiz() {
  const [user, setUser] = React.useState("");
  const [qNum, setQNum] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [error, setError] = React.useState("");
  const [submit, setSubmit] = React.useState(true);

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

  console.log(qNum)
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {submit ? (
        <>
          <div
            key={quiz[qNum].question}
            className={`p-4 fade-in-bottom`}
            style={{
              animationDelay: `${qNum * 100}ms`, // Dynamic delay based on question number
            }}
          >
            <OptionSelection
              questionData={quiz[qNum]}
              onAnswerChange={(answer) =>
                handleAnswerChange(quiz[qNum].question, answer)
              }
              selectedAnswer={answers[quiz[qNum].question]}
            />

            {error && <p className="text-red-500">{error}</p>}

            {qNum === quiz.length - 1 && (
              <button type="submit" id="submit-here" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>

          <div className="flex gap-4 mt-4 w-full prev-nex">
            <button
              onClick={handleDecrease}
              className={`${qNum === 0 ? "hidden" : "flex justify-center item-center prev"}`} 
            >
              <span className="material-symbols-outlined" >
                arrow_back
              </span>
              Previous
            </button>

            <button
              onClick={handleIncrease}
              className={`${qNum === quiz.length - 1 ? "hidden" : "nex"}`}
            >
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
              Next
            </button>
          </div>
        </>
      ) : (
        <Personality personality={user} />
      )}
    </div>
  );
}

export default Quiz;
