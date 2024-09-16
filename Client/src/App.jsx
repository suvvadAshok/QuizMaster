import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import your components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Define a catch-all route for 404 pages */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;



{
  /* import { quiz } from "./assets/data.js";
import OptionSelection from "./multipleQuestion";
import React from "react";
// import axios from "axios";

import { Personality } from "./personalityPage.jsx";

function App() {
  const [user, setUser] = React.useState("");
  const [qNum, setQNum] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [error, setError] = React.useState("");
  const [submit, setSubmit] = React.useState(true);
  // const [quizes, setQuizes] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post(
  //         "http://localhost:3000/generate-quiz",
  //         {
  //           topic: "personality development",
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       console.log(response);
  //       setQuizes(response.data);
  //     } catch (error) {
  //       setError(error);
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log("quiz", quizes);

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

      {!submit && (
        <>
          <Personality personality={user} />
          {/* {user === "Planner" ? (
          <>
            <img src={planner} height="200px" width="200px"></img>
            <a
              href="https://api.whatsapp.com/send?text=Check%20out%20my%20quiz%20result:%20${https://imgur.com/a/DHwgcMV}"
              target="_blank"
            >
              <FaSquareWhatsapp />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${imageUrl}`}
              target="_blank"
            >
              Share on Facebook
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${imageUrl}&title=Quiz%20Result&summary=Check%20out%20my%20quiz%20result!`}
              target="_blank"
            >
              Linkedin
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${imageUrl}&text=Check%20out%20my%20quiz%20result!`}
              target="_blank"
            >
              Twitter
            </a>

          </>
        ) : user === "Last-Minute Genius" ? (
          <img src={lastMinuteGenius}></img>
        ) : user === "Chill Master" ? (
          <img src={chillMaster}></img>
        ) : user === "Study Buddy" ? (
          <img src={studyBuddy}></img>
        ) : (
          ""
        )} */}
        </>
      )}

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
*/
}