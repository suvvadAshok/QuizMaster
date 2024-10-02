//import { quiz } from "./assets/data.js";
import { quiz } from "../assets/data.jsx";
import { Link } from "react-router-dom";
import OptionSelection from "../components/multipleQuestion.jsx";
import React from "react";
// import { Personality } from "../components/personalityPage.jsx";
// import { LeadForm } from "../components/leadForm.jsx";
import { QuestionSteps } from "../components/questionSteps.jsx";
import { BottomQuestionSteps } from "../components/bottomQuestionStep.jsx";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../atom.js";
// import { answerAtom } from "../atom.js";

function Quiz() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [qNum, setQNum] = React.useState(0);
  const [answers, setAnswers] = React.useState({
    "How do you prepare for exams?": "",
    "When it comes to CAS (Creativity, Activity, Service), you...": "",
    "How do you tackle TOK (Theory of Knowledge)?": "",
    "What's your biggest IB exam tip?": "",
    "What do you do when you're stressed?": "",
  });
  const [error, setError] = React.useState("");
  // const [submit, setSubmit] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmit(false);
    setError("");

    if (Object.keys(answers).length !== quiz.length) {
      setError("Please answer all questions before submitting.");
      // setSubmit(true);
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
    navigate("/details");
  };
  const handleAnswerChange = (question, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
  };

  console.log(user);
  return (
    <div className="h-screen w-screen overflow-y-auto font-custome_font_2 overflow-x-hidden no-scrollbar  flex flex-col justify-center items-center bg-custom-gradient max-sm:p-2">
      <>
        <QuestionSteps setQNum={setQNum} qNum={qNum} answers={answers} />
        <div
          key={quiz[qNum].question}
          className="flex justify-center items-center flex-col"
        >
          <OptionSelection
            questionData={quiz[qNum]}
            onAnswerChange={(answer) =>
              handleAnswerChange(quiz[qNum].question, answer)
            }
            selectedAnswer={answers[quiz[qNum].question]}
            setQNum={setQNum}
            qNum={qNum}
          />

          {error && <p className="text-red-500">{error}</p>}

          {Object.values(answers).every((value) => value !== "") && (
            <Link>
              <button
                type="submit"
                onClick={handleSubmit}
                className="py-3 px-10 text-white bg-black rounded-xl mt-4 shadow-md hover:shadow-xl text-lg font-medium  duration-100 transition-colors hover:transform hover:scale-110"
              >
                Submit
              </button>
            </Link>
          )}

          <BottomQuestionSteps
            setQNum={setQNum}
            qNum={qNum}
            answers={answers}
          />
        </div>
      </>
    </div>
  );
}

export default Quiz;
