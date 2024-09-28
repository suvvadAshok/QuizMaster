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
    <>
      <div className="flex w-full flex-row-reverse max-lg:flex-col sm:justify-between max-md:max-w-[90%]">
        <div className="flex justify-center items-center">
          {prop.questionData.relImg}
        </div>
        <div className="flex items-end mb-8 max-sm:mb-2">
          <h3 className="font-semibold text-2xl max-sm:text-base">
            {prop.questionData.question}
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-sm:max-w-[90%]">
        {prop.questionData.options.map((option) => (
          <motion.div
            key={option.label}
            className={`p-2 sm:p-4 rounded-lg sm:rounded-xl bg-white/90 border-2 shadow-md hover:shadow-xl transition-all duration-300 ${
              prop.selectedAnswer === option.label
                ? "border-[#3f80fd]"
                : "border-transparent"
            }`}
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleOptionChange(option.label)}
          >
            <label>
              <p>{option.option}</p>
            </label>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default OptionSelection;
