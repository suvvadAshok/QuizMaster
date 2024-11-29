import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { qNumAtom } from "../atom.js";
import { PropTypes } from "prop-types";
import { Answer } from "../assets/images/answer.jsx";
import { NoAnswer } from "../assets/images/noAnswer.jsx";

const OptionSelection = ({ questionData, onAnswerChange, selectedAnswer }) => {
  const [qNum, setQNum] = useAtom(qNumAtom);
  const handleOptionChange = (option) => {
    onAnswerChange(option);
    if (qNum < 4) {
      setTimeout(() => {
        setQNum(qNum + 1);
      }, 700);
    }
  };

  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 150,
        damping: 10,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="flex w-full flex-row-reverse max-lg:flex-col sm:justify-between max-md:max-w-[90%]">
        <div className="flex justify-center items-center">
          {questionData.relImg}
        </div>
        <div className="flex items-end mb-8 max-sm:mb-2">
          <h3 className="font-semibold text-2xl max-sm:text-base">
            {questionData.question}
          </h3>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-sm:max-w-[90%]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {questionData.options.map((option) => (
          <motion.div
            key={option.label}
            className={`p-2 sm:p-4 rounded-lg sm:rounded-xl bg-white/90 border-2 shadow-md hover:shadow-xl transition-all duration-300 flex items-center  ${
              selectedAnswer === option.label
                ? "border-[#3f80fd]"
                : "border-transparent"
            }`}
            variants={item}
            onClick={() => handleOptionChange(option.label)}
          >
            {selectedAnswer === option.label ? (
              <Answer stroke={"#3f80fd"} />
            ) : (
              <NoAnswer />
            )}
            <label>
              <p className="p-1">{option.option}</p>
            </label>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default OptionSelection;

OptionSelection.propTypes = {
  questionData: PropTypes.shape({
    question: PropTypes.string.isRequired,
    relImg: PropTypes.node.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        option: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onAnswerChange: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string,
};
