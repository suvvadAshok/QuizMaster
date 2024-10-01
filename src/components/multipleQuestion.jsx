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
          {prop.questionData.relImg}
        </div>
        <div className="flex items-end mb-8 max-sm:mb-2">
          <h3 className="font-semibold text-2xl max-sm:text-base">
            {prop.questionData.question}
          </h3>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-sm:max-w-[90%]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {prop.questionData.options.map((option) => (
          <motion.div
            key={option.label}
            className={`p-2 sm:p-4 rounded-lg sm:rounded-xl bg-white/90 border-2 shadow-md hover:shadow-xl transition-all duration-300 ${
              prop.selectedAnswer === option.label
                ? "border-[#3f80fd]"
                : "border-transparent"
            }`}
            variants={item}
            onClick={() => handleOptionChange(option.label)}
          >
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
