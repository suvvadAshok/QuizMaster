import planner from "./assets/images/planner.jpeg";
import lastMinuteGenius from "./assets/images/lastMinuteGenius.jpeg";
import chillMaster from "./assets/images/chillMaster.jpeg";
import studyBuddy from "./assets/images/studyBuddy.jpeg";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const Personality = (personality) => {
  const plannerURL = "https://imgur.com/a/DHwgcMV";
  const lastMinuteGeniusURL = "https://imgur.com/a/zzGFt5L";
  const chillMasterURL = "https://imgur.com/a/QzBe72C";
  const studyBuddyURL = "https://imgur.com/a/kdSQjlH";
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

  return (
    <>
      <img src={imageSrc} height="200px" width="200px"></img>
      <a
        href={`https://api.whatsapp.com/send?text=Check%20out%20my%20quiz%20result:%20${imageUrl}`}
        target="_blank"
      >
        <FaSquareWhatsapp />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${imageUrl}`}
        target="_blank"
      >
        Share on Facebook
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${imageUrl}&title=Quiz%20Result&summary=Check%20out%20my%20quiz%20result!`}
        target="_blank"
      >
        Linkedin
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${imageUrl}&text=Check%20out%20my%20quiz%20result!`}
        target="_blank"
      >
        Twitter
      </a>
    </>
  );
};
