import planner from "../assets/images/planner.jpeg";
import lastMinuteGenius from "../assets/images/lastMinuteGenius.jpeg";
import chillMaster from "../assets/images/chillMaster.jpeg";
import studyBuddy from "../assets/images/studyBuddy.jpeg";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { ImFolderDownload } from "react-icons/im";
import { saveAs } from "file-saver";


export const Personality = (personality) => {
  const plannerURL =
    "https://blog.luxhospitals.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-16-at-17.49.22_bd596d11.jpg";
  const lastMinuteGeniusURL =
    "https://blog.luxhospitals.com/wp-content/uploads/2024/09/The-Last-Minute-Genius.jpg";
  const chillMasterURL =
    "https://blog.luxhospitals.com/wp-content/uploads/2024/09/the-chill-master.jpg";
  const studyBuddyURL =
    "https://blog.luxhospitals.com/wp-content/uploads/2024/09/The-Study-Buddy.jpg";
  let imageUrl = "";
  let imageSrc = "";

  console.log(personality.personality);

  if (personality.personality === "Planner") {
    imageSrc = planner;
    imageUrl = plannerURL;
  } else if (personality.personality === "Last-Minute Genius") {
    imageSrc = lastMinuteGenius;
    imageUrl = lastMinuteGeniusURL;
  } else if (personality.personality === "Chill Master") {
    imageSrc = chillMaster;
    imageUrl = chillMasterURL;
  } else if (personality.personality === "Study Buddy") {
    imageSrc = studyBuddy;
    imageUrl = studyBuddyURL;
  }

  const downloadImage = () => {
    saveAs(imageUrl, "image.jpg");
  };

  return (
    <div>
      
      <img src={imageSrc} height="200px" width="200px"></img>
      <div className="flex justify-between">
        <a
          href={`https://api.whatsapp.com/send?text=Check%20out%20my%20quiz%20result:%20${imageUrl}`}
          target="_blank"
        >
          <FaSquareWhatsapp className="text-4xl" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${imageUrl}`}
          target="_blank"
        >
          <FaSquareFacebook className="text-4xl" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${imageUrl}&title=Quiz%20Result&summary=Check%20out%20my%20quiz%20result!`}
          target="_blank"
        >
          <ImLinkedin className="text-4xl" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${imageUrl}&text=Check%20out%20my%20quiz%20result!`}
          target="_blank"
        >
          <FaTwitterSquare className="text-4xl" />
        </a>
        <button onClick={downloadImage}>
          <ImFolderDownload className="text-4xl" />
        </button>
      </div>
    </div>
  );
};
