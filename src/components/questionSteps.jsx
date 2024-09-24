import PropTypes from "prop-types";
import { OnTopCurve } from "../assets/images/ontopCurve";
import one from "../assets/images/number_1.svg";
import two from "../assets/images/number_2.svg";
import three from "../assets/images/number_3.svg";
import four from "../assets/images/number_4.svg";
import five from "../assets/images/number_5.svg";
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
        <OnTopCurve />
        <div>
          <button
            disabled={able[0] === "notAble"}
            onClick={() => setQNum(0)}
            className="absolute top-[1%] left-[2%]"
          >
            <img
              src={one}
              alt=""
              // className={`${able[0] === "able" && "bg-green-400"}`}
            />
          </button>
          <button
            disabled={able[1] === "notAble"}
            onClick={() => setQNum(1)}
            className="absolute top-[20%] left-[25%] "
          >
            <img src={two} alt="" />
          </button>
          <button
            disabled={able[2] === "notAble"}
            onClick={() => setQNum(2)}
            className="absolute top-[40%] left-[50%] "
          >
            <img src={three} alt="" />
          </button>
          <button
            disabled={able[3] === "notAble"}
            onClick={() => setQNum(3)}
            className="absolute bottom-[70%] right-[25%] "
          >
            <img src={four} alt="" />
          </button>
          <button
            disabled={able[4] === "notAble"}
            onClick={() => setQNum(4)}
            className="absolute top-[16%] right-[8%] "
          >
            <img src={five} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
