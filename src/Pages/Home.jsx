import { Link } from "react-router-dom";
import skateboard from "../assets/images/skateboard.svg";
import Ace from "../assets/images/Aces.svg";
import Balance from "../assets/images/Balance.svg";
import architect from "../assets/images/architect.svg";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const HomePage = () => {
  const Logo = ["https://www.sparkl.me/assets/sparkllogo.png"];

  return (
    <section className="w-full h-auto max-w-screen-xl mx-auto pt-[100px] pb-[100px] relative max-sm:px-5 bg-custom-gradient">
      <div className="absolute top-25 right-20 max-sm:right-4 max-sm:top-4">
        <img
          src={Logo[0]}
          className="w-52 h-20 object-contain max-sm:w-22 max-sm:h-10"
          alt="sparkl"
        />
      </div>

      <div className="entry mb-10 w-full">
        <h2 className="text-[47px] font-medium font-['GT_Walsheim_Pro'] leading-[67.98px] max-sm:text-[36px] max-sm:leading-[36.98px] max-sm:font-bold max-sm:py-5">
          What kind of IB Student are you?
        </h2>
        <p className="font-['GT_Walsheim_Pro'] text-[18px] font-medium text-left">
          IB is more than just a curriculum—it&rsquo;s a lifestyle! Are you the
          cool-under-pressure student, <br /> the one who aces every subject, or
          maybe the one who&rsquo;s all about balancing study and fun?
        </p>
      </div>
      <motion.div
        className="cards-container relative flex gap-5 justify-start overflow-x-auto flex-nowrap max-sm:px-0"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card" variants={item}>
          <img
            src={skateboard}
            alt="Skateboard"
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-center">Cool Under Pressure</p>
        </motion.div>

        <motion.div className="card" variants={item}>
          <img src={Ace} alt="Ace" className="w-full h-auto rounded-lg" />
          <p className="mt-2 text-center">Aces Every Subject</p>
        </motion.div>

        <motion.div className="card" variants={item}>
          <img
            src={Balance}
            alt="Balance"
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-center">Balances Everything</p>
        </motion.div>

        <motion.div className="card" variants={item}>
          <img
            src={architect}
            alt="Architect"
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-center">Architecture</p>
        </motion.div>
      </motion.div>
      <div className="mt-[50px] w-full flex max-sm:flex-col justify-between items-center max-sm:items-start">
        <p className="font-['GT_Walsheim_Pro'] text-[18px] font-medium text-left w-1/2 max-sm:w-full max-sm:pb-5">
          Find out which type of IB student you are with this fun, interactive
          quiz! <br />
          Share your results with friends and see who they are!
        </p>
        <Link
          to="/quiz"
          className="text-white-500  w-1/2 flex justify-end max-sm:w-full no-underline"
        >
          <p className="px-6 pb-3 pt-3 bg-[#fbbd2d] w-32 text-right text-black font-500 rounded-xl max-sm:w-full max-sm:text-center max-sm:py-4 no-underline">
            {" "}
            Let&rsquo;s start{" "}
          </p>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
