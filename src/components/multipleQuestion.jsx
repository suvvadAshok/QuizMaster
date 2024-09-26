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
    <div className="w-full">
      <div className="flex w-full flex-row-reverse max-sm:flex-col sm:justify-between">
        <div className="">{prop.questionData.relImg}</div>
        <div className="flex items-end mb-8 max-sm:mb-4">
          <h3 className="font-semibold text-2xl max-sm:text-xl">
            {prop.questionData.question}
          </h3>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1">
        {prop.questionData.options.map((i) => (
          <motion.div
            key={i.option}
            className={`rounded-xl bg-[#FFFFFFA8] p-5 max-sm:p-2 max-sm:rounded-lg border-[1px] border-[#FFFFFFA8]  ${
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
