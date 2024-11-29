import Planner from "../assets/images/newPlanner.svg";
import LastMinuteGenius from "../assets/images/newLastMinuteGenius.svg";
import StudyBuddy from "../assets/images/newStudyBuddy.svg";
import ChillMaster from "../assets/images/newChillMaster.svg";
import DownloadIcon from "../assets/images/download.svg";
import { useAtom } from "jotai";
import { userAtom } from "../atom.js";
import { useLocation } from "react-router-dom";
import { toPng } from "html-to-image";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

const resultData = [
  { user: "The Planner", resultImage: Planner },
  { user: "The Last Minute Genius", resultImage: LastMinuteGenius },
  { user: "The Study Buddy", resultImage: StudyBuddy },
  { user: "The Chill Master", resultImage: ChillMaster },
];

function Result() {
  const [user] = useAtom(userAtom);
  const location = useLocation();
  const { name = "Anonymous", grade = "N/A" } = location.state || {};
  const [fireWorks, setFireWorks] = useState(false);

  useEffect(() => {
    setFireWorks(true); // Start fireworks
    const timer = setTimeout(() => setFireWorks(false), 3000); // Stop fireworks after 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  useEffect(() => {
    if (fireWorks) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const interval = setInterval(() => {
        if (Date.now() > animationEnd) {
          clearInterval(interval);
          return;
        }
        confetti({
          particleCount: 100,
          startVelocity: 30,
          spread: 360,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
        });
      }, 250);
    }
  }, [fireWorks]);

  const userData =
    resultData.find((data) => data.user.includes(user)) || resultData[0];

  const downloadImage = () => {
    const element = document.getElementById("capture");
    if (element) {
      toPng(element, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "my-image.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => console.error("Oops, something went wrong!", err));
    }
  };

  return (
    <section className="w-screen h-screen font-custome_font_1 max-sm:px-5 max-sm:w-full bg-custom-gradient flex justify-center items-center flex-col relative">
      <motion.div
        initial={{ scale: 0.25, rotateY: 0 }}
        animate={{ scale: 1, rotateY: 360 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        id="capture"
        className="bg-result-card bg-no-repeat bg-cover max-w-[500px] shadow-2xl p-8 flex flex-col items-center justify-center gap-5"
      >
        <h1 className="head-font">IB Persona Results</h1>
        <p className="para-font">{name} is</p>
        <img src={userData.resultImage} alt={userData.user} />
      </motion.div>
      <div className="flex-horizontal gap-4 p-8">
        <p>Download here:</p>
        <button onClick={downloadImage}>
          <img src={DownloadIcon} alt="Download" />
        </button>
      </div>
    </section>
  );
}

export default Result;
