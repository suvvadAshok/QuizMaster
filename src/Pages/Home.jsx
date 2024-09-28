import { Link } from "react-router-dom";
import skateboard from "../assets/images/skateboard.svg";
import Ace from "../assets/images/Aces.svg";
import Balance from "../assets/images/Balance.svg";
import architect from "../assets/images/architect.svg";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.svg";

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
  return (
    <section className="w-screen h-screen bg-custom-gradient px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 flex flex-col gap-8 items-center justify-center overflow-y-auto">
      <div className="flex flex-nowrap w-full justify-between max-md:flex-wrap-reverse mt-20 max-lg:mt-52 max-md:mt-96 max-sm:mt-96">
        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-5xl max-sm:text-2xl">
            What kind of IB Student are you?
          </h2>
          <p className="text-xl font-medium md:w-[75%] max-sm:text-lg">
            IB is more than just a curriculum—it&rsquo;s a lifestyle! Are you
            the cool-under-pressure student, the one who aces every subject, or
            maybe the one who&rsquo;s all about balancing study and fun?
          </p>
        </div>
        <div className="">
          <img
            src={logo}
            className="w-52 h-20"
            alt="sparkl"
            height="80px"
            width="160px"
          />
        </div>
      </div>

      <motion.div
        className="flex gap-5 justify-start overflow-x-auto w-[80%] max-md:w-full min-h-[400px] flex-nowrap max-sm:px-0  no-scrollbar rounded-2xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {homePageCardsData.map((data) => (
          <motion.div
            key={data.id}
            className="card rounded-2xl bg-white flex justify-center items-center flex-col"
            variants={item}
          >
            <img src={data.imgSrc} alt="Skateboard" className="" />
            <p className=" text-center">{data.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex w-full justify-between items-center max-md:flex-col max-sm:text-lg">
        <p className="text-xl font-medium md:w-[75%]">
          Find out which type of IB student you are with this fun, interactive
          quiz! Share your results with friends and see who they are!
        </p>
        <div className="max-md:hidden">
          <Link
            to="/quiz"
            className="text-white bg-[#fbbd2d] py-5 px-8 text-xl rounded-xl font-500 text-nowrap"
          >
            Let&rsquo;s start
          </Link>
        </div>
      </div>
      <div className="md:hidden max-md:sticky max-md:bottom-0 max-md:w-[100%] max-md:bg-[#fbbd2d] py-5 px-8 text-center text-xl rounded-xl font-500">
        <Link to="/quiz" className="text-white   text-nowrap">
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
  {
    id: 4,
    imgSrc: architect,
    title: "Architecture",
  },
];
