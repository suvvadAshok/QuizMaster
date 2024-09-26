import planner from "../assets/images/planner.jpeg";
import lastMinuteGenius from "../assets/images/lastMinuteGenius.jpeg";
import chillMaster from "../assets/images/chillMaster.jpeg";
import studyBuddy from "../assets/images/studyBuddy.jpeg";
import { ImFolderDownload } from "react-icons/im";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

Personality.propTypes = {
  user: PropTypes.string,
};

export function Personality({ user }) {
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

  console.log(user);

  if (user === "Planner") {
    imageSrc = planner;
    imageUrl = plannerURL;
  } else if (user === "Last-Minute Genius") {
    imageSrc = lastMinuteGenius;
    imageUrl = lastMinuteGeniusURL;
  } else if (user === "Chill Master") {
    imageSrc = chillMaster;
    imageUrl = chillMasterURL;
  } else if (user === "Study Buddy") {
    imageSrc = studyBuddy;
    imageUrl = studyBuddyURL;
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded_image.jpg";
    link.click();
  };

  return (
    <div>
      <img src={imageSrc} height="200px" width="200px"></img>
      <div className="flex">
        <FacebookShareButton url={imageUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={imageUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={imageUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TwitterShareButton url={imageUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <button onClick={handleDownload}>
          <ImFolderDownload className="text-4xl" />
        </button>
      </div>
    </div>
  );
}
