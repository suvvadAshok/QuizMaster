import { motion } from "framer-motion";

const OptionSelection = (prop) => {
  const handleOptionChange = (e) => {
    prop.onAnswerChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <motion.h3
        className="font-medium"
        // animate={{ x: [100, 0] }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {prop.questionData.question}
      </motion.h3>
      {prop.questionData.options.map((i) => (
        <motion.div key={i.option} className="" animate={{ y: [100, 0] }}>
          <label>
            <input
              required
              type="radio"
              value={i.label}
              checked={prop.selectedAnswer === i.label}
              name={prop.questionData.question}
              onChange={handleOptionChange}
            />
            {i.option}
          </label>
        </motion.div>
      ))}
    </div>
  );
};

export default OptionSelection;
