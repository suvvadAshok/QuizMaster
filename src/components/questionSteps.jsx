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
    setAble(Object.values(answers).map((i) => (i ? "able" : "notAble")));
  }, [qNum]);

  return (
    <div className="relative max-md:hidden">
      <OnTopCurve qNum={qNum} className={"w-full"} />
      <div>
        <button
          disabled={able[0] === "notAble"}
          onClick={() => setQNum(0)}
          className="absolute top-[1%] max-lg:top-[-5%] left-[2%]"
        >
          <QuestionOne
            className={"h-20 w-20 max-lg:h-16 max-lg:w-16"}
            fill={able[0] === "notAble" ? "#fff" : "#FBC02D"}
            stroke={able[0] === "notAble" ? "#00000036" : "#fff"}
          />
        </button>
        <button
          disabled={able[1] === "notAble"}
          onClick={() => setQNum(1)}
          className="absolute top-[20%] left-[25%] "
        >
          <QuestionTwo
            className={"h-20 w-20 max-lg:h-16 max-lg:w-16"}
            fill={able[1] === "notAble" ? "#fff" : "#FBC02D"}
            stroke={able[1] === "notAble" ? "#00000036" : "#fff"}
          />
        </button>
        <button
          disabled={able[2] === "notAble"}
          onClick={() => setQNum(2)}
          className="absolute top-[40%] left-[54%] max-lg:top-[12%] max-lg:left-[50%] max-xl:top-[20%] max-xl:left-[50%]"
        >
          <QuestionThree
            className={"h-20 w-20 max-lg:h-16 max-lg:w-16"}
            fill={able[2] === "notAble" ? "#fff" : "#FBC02D"}
            stroke={able[2] === "notAble" ? "#00000036" : "#fff"}
          />
        </button>
        <button
          disabled={able[3] === "notAble"}
          onClick={() => setQNum(3)}
          className="absolute bottom-[76%] right-[25%] max-lg:top-[-26%] "
        >
          <QuestionFour
            className={"h-20 w-20 max-lg:h-16 max-lg:w-16"}
            fill={able[3] === "notAble" ? "#fff" : "#FBC02D"}
            stroke={able[3] === "notAble" ? "#00000036" : "#fff"}
          />
        </button>
        <button
          disabled={able[4] === "notAble"}
          onClick={() => setQNum(4)}
          className="absolute top-[40%] right-[8%] max-lg:top-[20%] max-xl:top-[20%]"
        >
          <QuestionFive
            className={"h-20 w-20 max-lg:h-16 max-lg:w-16"}
            fill={able[4] === "notAble" ? "#fff" : "#FBC02D"}
            stroke={able[4] === "notAble" ? "#00000036" : "#fff"}
          />
        </button>
      </div>
    </div>
  );
}
