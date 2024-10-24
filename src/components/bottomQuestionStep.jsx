import { QuestionOne } from "../assets/images/number_1.jsx";
import { QuestionTwo } from "../assets/images/number_2.jsx";
import { QuestionThree } from "../assets/images/number_3.jsx";
import { QuestionFour } from "../assets/images/number_4.jsx";
import { QuestionFive } from "../assets/images/number_5.jsx";
import { useAtom } from "jotai";
import { qNumAtom } from "../atom.js";
import { answerAtom } from "../atom.js";

export function BottomQuestionSteps() {
  const [qNum, setQNum] = useAtom(qNumAtom);
  const [answers] = useAtom(answerAtom);

  const able = Object.values(answers).map((i) => (i ? "able" : "notAble"));

  const questionNums = [
    QuestionOne,
    QuestionTwo,
    QuestionThree,
    QuestionFour,
    QuestionFive,
  ];

  return (
    <div className="mt-4 flex gap-1 md:hidden">
      {questionNums.map((Btn, i) => (
        <button
          disabled={able[i] === "notAble"}
          onClick={() => setQNum(i)}
          key={i}
        >
          <Btn
            className={"h-12 w-12"}
            fill={able[i] === "notAble" ? "#fff" : "#FBC02D"}
            stroke={able[i] === "notAble" ? "#00000036" : "#fff"}
          />
        </button>
      ))}
    </div>
  );
}
