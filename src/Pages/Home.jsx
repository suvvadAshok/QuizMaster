import { Link } from "react-router-dom";
import skateboard from "../assets/images/skateboard.svg";
import Ace from "../assets/images/Aces.svg";
import Balance from "../assets/images/Balance.svg";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.svg";



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
  return (
    <section className="home-page-setup px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 flex-verticle gap-4 sm:gap-8 max-sm:py-2 overflow-y-auto">
      <div className="flex-between items-start max-md:flex-wrap-reverse">
        <div className="flex flex-col md:gap-4">
          <h2 className="head-font">What kind of IB Student are you?</h2>
          <p className="para-font">
            IB is more than just a curriculum—it&rsquo;s a lifestyle! Are you
            the cool-under-pressure student, the one who aces every subject, or
            maybe the one who&rsquo;s all about balancing study and fun?
          </p>
        </div>
        <div>
          <img
            src={logo}
            className="min-w-32 min-h-10"
            alt="sparkl"
            height="80px"
            width="160px"
          />
        </div>
      </div>

      <motion.div
        className="flex gap-2 items-center overflow-x-auto w-[80%] min-h-60 rounded-xl snap-x snap-proximity"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {homePageCardsData.map((data) => (
          <motion.div
            key={data.id}
            variants={item}
            className="flex-verticle bg-white min-w-96 max-md:min-w-80 h-full overflow-y-hidden py-6  rounded-xl snap-center"
          >
            <img src={data.imgSrc} alt="" className="" />
            <p className="text-nowrap">{data.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex-between items-center max-md:hidden">
        <p className="para-font">
          Find out which type of IB student you are with this fun, interactive
          quiz! Share your results with friends and see who they are!
        </p>
        <div>
          <Link
            to="/quiz"
            className="text-white bg-[#fbbd2d] py-5 px-8 text-xl rounded-xl font-500 text-nowrap"
          >
            Let&rsquo;s start
          </Link>
        </div>
      </div>

      <p className="para-font md:hidden">
        Find out which type of IB student you are with this fun, interactive
        quiz! Share your results with friends and see who they are!
      </p>

      <div className="md:hidden sticky bottom-2 w-[100%] bg-[#fbbd2d] text-black py-3 text-center text-xl rounded-xl font-500">
        <Link to="/quiz" className="text-nowrap">
          Let&rsquo;s start
        </Link>
      </div>
    </section>
  );
};

export default HomePage;

const homePageCardsData = [
  {
    id: 1,
    imgSrc: skateboard,
    title: "Cool Under Pressure",
  },
  {
    id: 2,
    imgSrc: Ace,
    title: "Ace",
  },
  {
    id: 3,
    imgSrc: Balance,
    title: "Balances Everything",
  },
];
