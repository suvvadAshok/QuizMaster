import { motion } from "framer-motion";

const OptionSelection = (prop) => {
  const handleOptionChange = (option) => {
    prop.onAnswerChange(option);
    if (prop.qNum < 4) {
      setTimeout(() => {
        prop.setQNum(prop.qNum + 1);
      }, 700);
    }
  };

  return (
    <div className="">
      <div className="flex items-baseline justify-between w-[100vh]">
        <h3 className="font-semibold text-2xl">{prop.questionData.question}</h3>
        <div className="">{prop.questionData.relImg}</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {prop.questionData.options.map((i) => (
          <motion.div
            key={i.option}
            className={`option-card rounded-xl bg-[#FFFFFFA8] p-5 border-[1px] border-[#FFFFFFA8]  ${
              prop.selectedAnswer === i.label ? "selected" : ""
            }`}
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleOptionChange(i.label)}
          >
            <label className="text-xl">
              <p>{i.option}</p>
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OptionSelection;
