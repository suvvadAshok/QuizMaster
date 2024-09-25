import PropTypes from "prop-types";
import { OnTopCurve } from "../assets/images/ontopCurve";
import { QuestionOne } from "../assets/images/number_1.jsx";
import { QuestionTwo } from "../assets/images/number_2.jsx";
import { QuestionThree } from "../assets/images/number_3.jsx";
import { QuestionFour } from "../assets/images/number_4.jsx";
import { QuestionFive } from "../assets/images/number_5.jsx";
import React from "react";

QuestionSteps.propTypes = {
  setQNum: PropTypes.func.isRequired,
  qNum: PropTypes.number.isRequired,
  answers: PropTypes.object.isRequired,
};

export function QuestionSteps({ setQNum, qNum, answers }) {
  const [able, setAble] = React.useState([]);

  React.useEffect(() => {
    console.log(able);
    setAble(Object.values(answers).map((i) => (i ? "able" : "notAble")));
  }, [qNum]);
  console.log(qNum);

  return (
    <>
      <div className="relative ">
        <OnTopCurve qNum={qNum} />
        <div>
          <button
            disabled={able[0] === "notAble"}
            onClick={() => setQNum(0)}
            className="absolute top-[1%] left-[2%]"
          >
            <QuestionOne
              fill={able[0] === "notAble" ? "#fff" : "#FBC02D"}
              stroke={able[0] === "notAble" ? "#FBC02D" : "#fff"}
            />
          </button>
          <button
            disabled={able[1] === "notAble"}
            onClick={() => setQNum(1)}
            className="absolute top-[20%] left-[25%] "
          >
            <QuestionTwo
              fill={able[1] === "notAble" ? "#fff" : "#FBC02D"}
              stroke={able[1] === "notAble" ? "#FBC02D" : "#fff"}
            />
          </button>
          <button
            disabled={able[2] === "notAble"}
            onClick={() => setQNum(2)}
            className="absolute top-[40%] left-[54%] "
          >
            <QuestionThree
              fill={able[2] === "notAble" ? "#fff" : "#FBC02D"}
              stroke={able[2] === "notAble" ? "#FBC02D" : "#fff"}
            />
          </button>
          <button
            disabled={able[3] === "notAble"}
            onClick={() => setQNum(3)}
            className="absolute bottom-[76%] right-[25%] "
          >
            <QuestionFour
              fill={able[2] === "notAble" ? "#fff" : "#FBC02D"}
              stroke={able[2] === "notAble" ? "#FBC02D" : "#fff"}
            />
          </button>
          <button
            disabled={able[4] === "notAble"}
            onClick={() => setQNum(4)}
            className="absolute top-[40%] right-[8%] "
          >
            <QuestionFive
              fill={able[2] === "notAble" ? "#fff" : "#FBC02D"}
              stroke={able[2] === "notAble" ? "#FBC02D" : "#fff"}
            />
          </button>
        </div>
      </div>
    </>
  );
}
