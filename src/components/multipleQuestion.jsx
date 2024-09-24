import { motion } from "framer-motion";

const OptionSelection = (prop) => {
  const handleOptionChange = (option) => {
    prop.onAnswerChange(option);
  };

  prop.questionData.options.map((i) => console.log(i.label));
  console.log(prop.questionData.options);

  return (
    <div>
      {/* <div className="h-20 w-20">{prop.questionData.relImg}</div> */}
      <div className="flex flex-col gap-4">
        <motion.h3
          className="font-medium ml-2.5"
          initial={{ opacity: 0, scale: 0.5, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {prop.questionData.question}
        </motion.h3>

        {prop.questionData.options.map((i) => (
          <motion.div
            key={i.option}
            className={`option-card ${
              prop.selectedAnswer === i.option ? "selected" : ""
            }`}
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleOptionChange(i.label)}
          >
            <label className="flex items-start justify-items-start gap-4">
              <p>{i.option}</p>
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OptionSelection;
