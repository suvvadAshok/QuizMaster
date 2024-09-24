//import { quiz } from "./assets/data.js";
import { quiz } from "../assets/data.jsx";
import OptionSelection from "../components/multipleQuestion.jsx";
import React from "react";
import { Personality } from "../components/personalityPage.jsx";
// import { LeadForm } from "../components/leadForm.jsx";
// import curve from "../assets/images/ontopCurve.svg";

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
    console.log("ans", ans);
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

    console.log("user", value);

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

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {/* <img src={curve} alt="" className="relative" /> */}

      {submit ? (
        <>
          <div className={`flex gap-4`}>
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                onClick={() => setQNum(i - 1)}
                className="rounded-[50%] border-2 border-black p-4"
              >
                {i}
              </button>
            ))}
          </div>
          <div
            key={quiz[qNum].question}
            className={`p-4 fade-in-bottom`}
            style={{
              animationDelay: `${qNum * 100}ms`,
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
        </>
      ) : (
        <>
          {/* <LeadForm /> */}
          <Personality personality={user} />
        </>
      )}
    </div>
  );
}

export default Quiz;
