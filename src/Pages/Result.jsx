import Planner from "../assets/images/newPlanner.svg";
import LastMinuteGenius from "../assets/images/newLastMinuteGenius.svg";
import StudyBuddy from "../assets/images/newStudyBuddy.svg";
import ChillMaster from "../assets/images/newChillMaster.svg";
import DownloadIcon from "../assets/images/download.svg";
import { toPng } from "html-to-image";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import whatsappIcon from "../assets/images/whatsapp.svg";

function Result() {
  // const location = useLocation();
  const { name = "Anonymous", user = "" } = useParams();
  const [fireWorks, setFireWorks] = useState(false);

  const resultData = [
    {
      user: "The Planner",
      resultImage: Planner,
      whatsappMsg: `My quiz result says I’m The Planner! Organized and unstoppable. Check my result on https://ibquiz.advaitlabs.com/result/${name}/${user}.  
  Take the quiz with Sparkl and find out! who you are at https://ibquiz.advaitlabs.com`,
    },
    {
      user: "The Last Minute Genius",
      resultImage: LastMinuteGenius,
      whatsappMsg: `I’m The Last-Minute Genius! Sharp under pressure. Check my result on https://ibquiz.advaitlabs.com/result/${name}/${user}
  Think you’re the same? Take the quiz with Sparkl to find your IB style! who you are at https://ibquiz.advaitlabs.com`,
    },
    {
      user: "The Study Buddy",
      resultImage: StudyBuddy,
      whatsappMsg: `I’m The Study Buddy! Collaborative and supportive. Check my result on https://ibquiz.advaitlabs.com/result/${name}/${user}
   What about you? Take the quiz with Sparkl to discover your IB vibe at https://ibquiz.advaitlabs.com`,
    },
    {
      user: "The Chill Master",
      resultImage: ChillMaster,
      whatsappMsg: `I’m The Chill Master! Calm and confident. Check my result on https://ibquiz.advaitlabs.com/result/${name}/${user}
  Ready to see who you are? Take the quiz with Sparkl at https://ibquiz.advaitlabs.com and share your result!
  `,
    },
  ];

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

  const shareOnWhatsapp = () => {
    let link;
    const encodedMsg = encodeURIComponent(userData.whatsappMsg);
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      link = `whatsapp://send?text=${encodedMsg}`;
    } else {
      link = `https://wa.me/?text=${encodedMsg}`;
    }

    window.open(link, "_blank");
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

      <div className="flex-horizontal flex-wrap gap-4 p-8">
        Your personalized card is ready—Download now!{" "}
        <button onClick={downloadImage}>
          <img src={DownloadIcon} alt="Download" />
        </button>{" "}
        Who’s next? Share and challenge your friends!
        <button onClick={shareOnWhatsapp}>
          <img src={whatsappIcon} alt="Download" />
        </button>
      </div>

      {/* <div className="flex-horizontal gap-4 p-8">
        <p>Download here:</p>
        <button onClick={downloadImage}>
          <img src={DownloadIcon} alt="Download" />
        </button>
      </div>
      <div className="flex-horizontal gap-4 p-8">
        <p>Share here:</p>
        <button onClick={shareOnWhatsapp}>
          <img src={whatsappIcon} alt="Download" />
        </button>
      </div> */}
    </section>
  );
}

export default Result;
