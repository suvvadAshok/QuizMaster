import { QuestionOne } from "../assets/images/number_1.jsx";
import { QuestionTwo } from "../assets/images/number_2.jsx";
import { QuestionThree } from "../assets/images/number_3.jsx";
import { QuestionFour } from "../assets/images/number_4.jsx";
import { QuestionFive } from "../assets/images/number_5.jsx";
import React from "react";
import { QuestionStepsPropTypes } from "../assets/dataTypes.js";

BottomQuestionSteps.propTypes = QuestionStepsPropTypes

export function BottomQuestionSteps({ setQNum, qNum, answers }) {
  const [able, setAble] = React.useState([]);

  React.useEffect(() => {
    setAble(Object.values(answers).map((i) => (i ? "able" : "notAble")));
  }, [qNum]);

  return (
    <div className="mt-4 flex gap-1 md:hidden">
      <button disabled={able[0] === "notAble"} onClick={() => setQNum(0)}>
        <QuestionOne
          className={"h-12 w-12"}
          fill={able[0] === "notAble" ? "#fff" : "#FBC02D"}
          stroke={able[0] === "notAble" ? "#00000036" : "#fff"}
        />
      </button>
      <button disabled={able[1] === "notAble"} onClick={() => setQNum(1)}>
        <QuestionTwo
          className={"h-12 w-12"}
          fill={able[1] === "notAble" ? "#fff" : "#FBC02D"}
          stroke={able[1] === "notAble" ? "#00000036" : "#fff"}
        />
      </button>
      <button disabled={able[2] === "notAble"} onClick={() => setQNum(2)}>
        <QuestionThree
          className={"h-12 w-12"}
          fill={able[2] === "notAble" ? "#fff" : "#FBC02D"}
          stroke={able[2] === "notAble" ? "#00000036" : "#fff"}
        />
      </button>
      <button disabled={able[3] === "notAble"} onClick={() => setQNum(3)}>
        <QuestionFour
          className={"h-12 w-12"}
          fill={able[3] === "notAble" ? "#fff" : "#FBC02D"}
          stroke={able[3] === "notAble" ? "#00000036" : "#fff"}
        />
      </button>
      <button disabled={able[4] === "notAble"} onClick={() => setQNum(4)}>
        <QuestionFive
          className={"h-12 w-12"}
          fill={able[4] === "notAble" ? "#fff" : "#FBC02D"}
          stroke={able[4] === "notAble" ? "#00000036" : "#fff"}
        />
      </button>
    </div>
  );
}
