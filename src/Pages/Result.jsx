import { Link, useLocation } from "react-router-dom";
import { Personality } from "../components/personalityPage";
// import { Planner } from "../assets/images/planner";
// import { LastMinuteGenius } from "../assets/images/lastMinuteGenius";
// import plannerIcon from "../assets/images/plannerIcon.svg";

function Result() {
  const location = useLocation();
  const { user } = location.state || {};

  const person = ["The Planner"];
  const persons = [
    "Loves structure",
    "Ace every challange",
    "Plan Ahead",
    "Well organised",
    "Does not Miss Deadlines",
  ];

  console.log(user, "user in result page");
  return (
    <section className="w-screen h-screen max-sm:px-5 max-sm:w-full bg-custom-gradient flex justify-center items-center max-md:flex-col">
      <div className="result-card">
        <div className="grid grid-cols-1 gap-y-3">
          <h4 className="text-2xl font-bold"> {person} </h4>
          <p>You’re the type of student</p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 max-sm:grid-cols-1">
          {persons.map((person, index) => (
            <li key={index} className=" font-bold">
              {person}
            </li>
          ))}
        </div>
        <Link
          to="/"
          className="text-white-500 w-1/2 flex justify-start max-sm:w-full no-underline"
        >
          <p className="px-6 pb-3 pt-3 bg-[#fbbd2d] w-50 text-left text-black font-500 rounded-xl max-sm:w-full max-sm:text-center max-sm:py-4 no-underline">
            What next ?
          </p>
        </Link>
      </div>
      <div className="result-profile-card">
        <Personality user={user} />
      </div>
    </section>
  );
}

export default Result;

// const reasultData = [
//   {
//     user: "The Planner",
//     userImg: <Planner />,
//     keywords: [
//       "Loves structure",
//       "Ace every challange",
//       "Plan Ahead",
//       "Well organised",
//       "Does not Miss Deadlines",
//     ],
//     userIcon: plannerIcon,
//   },
//   {
//     user: "The Last Minute Genius",
//     userImg: <LastMinuteGenius />,
//     keywords: [
//       "Loves structure",
//       "Ace every challange",
//       "Plan Ahead",
//       "Well organised",
//       "Does not Miss Deadlines",
//     ],
//     userIcon: plannerIcon,
//   },
// ];
