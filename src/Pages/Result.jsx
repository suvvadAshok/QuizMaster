import { Planner } from "../assets/images/planner";
import { LastMinuteGenius } from "../assets/images/lastMinuteGenius";
import { StudyBuddy } from "../assets/images/studyBuddy";
import { ChillMaster } from "../assets/images/chillMaster";
import plannerIcon from "../assets/images/plannerIcon.svg";
import lastMinuteGeniusIcon from "../assets/images/lastMinuteGeniusIcon.svg";
import studyBuddyIcon from "../assets/images/studyBuddyIcon.svg";
import chillMasterIcon from "../assets/images/chillMasterIcon.svg";
import { useAtom } from "jotai";
import { userAtom } from "../atom.js";

function Result() {
  const [user] = useAtom(userAtom);

  console.log(user);

  const userData = resultData.find((data) => data.user.includes(user));

  return (
    <section className="w-screen h-screen font-custome_font_1 max-sm:px-5 max-sm:w-full bg-custom-gradient flex justify-center items-center">
      {/* <div className="flex max-md:flex-col justify-center items-center h-full gap-2 "> */}
      <div className="bg-white rounded-xl p-8 max-md:w-[90%] flex flex-col md:justify-center justify-start items-center gap-4 lg:relative">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-xl font-semibold">{userData.user}</p>
            <p className="text-lg font-medium">You’re the type of student</p>
          </div>
          <div>
            <img src={userData.userIcon} alt="" className="h-10 w-10" />
          </div>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {userData.keywords.map((i) => (
            <li key={i} className="font-semibold text-nowrap max-sm:text-wrap">
              {i}
            </li>
          ))}
        </div>
        {userData.userImg}
      </div>
    </section>
  );
}

export default Result;

const resultData = [
  {
    user: "The Planner",
    userImg: (
      <Planner className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72 h-96 w-96 lg:absolute lg:-right-80 lg:-bottom-16" />
    ),
    keywords: [
      "Loves structure",
      "Ace every challange",
      "Plan Ahead",
      "Well organised",
      "Does not Miss Deadlines",
    ],
    userIcon: plannerIcon,
  },
  {
    user: "The Last Minute Genius",
    userImg: (
      <LastMinuteGenius className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72 h-96 w-96 lg:absolute lg:-right-80 lg:-bottom-16" />
    ),
    keywords: [
      "Thrives Under Pressure",
      "Pulls It All Together",
      "Has Impressive Strategies",
      "Finds Final Hour Solutions",
    ],
    userIcon: lastMinuteGeniusIcon,
  },
  {
    user: "The Study Buddy",
    userImg: (
      <StudyBuddy className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72 h-80 w-80 lg:absolute lg:-right-80 lg:-bottom-16" />
    ),
    keywords: [
      "Better With Friends",
      "Loves Group Study",
      "Stays Motivated",
      "Collaborative Learning",
    ],
    userIcon: studyBuddyIcon,
  },
  {
    user: "The Chill Master",
    userImg: (
      <ChillMaster className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72 h-80 w-80 lg:absolute lg:-right-80 lg:-bottom-16" />
    ),
    keywords: [
      "Calm and Relaxed",
      "Eventually Balances",
      "Tension Free",
      "Loves to Enjoy",
      "Schoolwork Is Easy",
    ],
    userIcon: chillMasterIcon,
  },
];
