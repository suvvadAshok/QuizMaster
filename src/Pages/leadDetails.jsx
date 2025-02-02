// import { Link } from "react-router-dom";
import { FormFilling } from "../assets/images/formFilling";
import { RightArrow } from "../assets/images/rightArrow";
import { SearchingImg } from "../assets/images/searching";
import React from "react";
import { useAtom } from "jotai";
import { userAtom } from "../atom.js";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from "../components/circle.jsx";

export function LeadDetails() {
  const [state, setState] = React.useState(true);
  const [name, setName] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [percent, setPersent] = React.useState(0);
  const [user] = useAtom(userAtom);

  const navigate = useNavigate();

  function handleName(e) {
    e.preventDefault();
    setName(e.target.name.value);
    setPersent(25);
    e.target.reset();
  }

  function handleGrade(e) {
    e.preventDefault();
    setGrade(e.target.grade.value);
    setPersent(50);
    e.target.reset();
  }

  function handlePhone(e) {
    e.preventDefault();
    setPhone(e.target.phone.value);
    setPersent(75);
    e.target.reset();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSchool(e.target.school.value);
    setPersent(100);

    console.log(school);

    try {
      const response = "";
      // await axios.post(
      //   "https://sheet.best/api/sheets/5d9d2c0a-197c-4000-9e70-614b732d7dd4",
      //   {
      //     Name: name,
      //     Phone: phone,
      //     Grade: grade,
      //     School: school,
      //   },
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
      console.log(response);
      navigate(`/result/${name}/${user}`);
    } catch (error) {
      console.error("Error:", error);
      navigate("/result");
    }
  }
  return (
    <div className="h-screen w-screen font-custome_font_2 bg-custom-gradient px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 flex flex-col gap-8 justify-center overflow-y-auto">
      {state ? (
        <>
          <div className="absolute top-[20%] w-[50%] max-md:w-[90%] flex flex-col gap-4 items-start">
            <h2 className="font-semibold text-2xl">
              Ready to unlock something awesome?
            </h2>
            <p>
              We’ve got something special lined up just for you! But first, we
              need to get to know you a little better.
            </p>

            <p>
              Don’t worry, it’ll only take a minute, and who knows — it could be
              the start of something pretty cool! 😎
            </p>
            <p className="text-xl font-semibold">
              Just 4 steps ahead to complete
            </p>
            <button
              className="flex justify-center items-center md:gap-2 gap-1 bg-black text-white px-6 py-4 rounded-lg "
              onClick={() => setState(false)}
            >
              Get Started
              <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
            </button>
          </div>
          <SearchingImg className="max-md:h-64 max-sm:h-52 max-sm:w-60 max-md:w-72 h-[600px] bottom-0 absolute right-20 max-md:right-0" />
        </>
      ) : (
        <>
          <CircularProgress percent={percent} />
          {name === "" ? (
            <div className="absolute top-[20%] w-[50%] max-md:w-[90%] flex flex-col gap-4 items-start">
              <h2 className="font-semibold text-2xl">
                Hey there! Let’s get to know each other.
              </h2>
              <p>First things first, what should I call you?</p>
              <form onSubmit={handleName} className="w-full">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg"
                >
                  Next
                  <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
                </button>
              </form>
            </div>
          ) : grade === "" ? (
            <div className="absolute top-[20%] w-[50%] max-md:w-[90%] flex flex-col gap-4 items-start">
              <h2 className="font-semibold text-2xl">
                Awesome, thanks {name}!
              </h2>
              <p>Cool Now, Which grade are you rocking?</p>
              <form onSubmit={handleGrade} className="w-full">
                <input
                  required
                  type="text"
                  name="grade"
                  placeholder="Enter Grade"
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg"
                >
                  Next
                  <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
                </button>
              </form>
            </div>
          ) : phone === "" ? (
            <div className="absolute top-[20%] w-[50%] max-md:w-[90%] flex flex-col gap-4 items-start">
              <h2 className="font-semibold text-2xl">
                Wow, That&rsquo;s Great {name}.
              </h2>
              <p>
                Great! Can I get your phone number? Don’t worry, we won’t spam
                you!
              </p>
              <form onSubmit={handlePhone} className="w-full">
                <input
                  required
                  type="text"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg"
                >
                  Next
                  <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
                </button>
              </form>
            </div>
          ) : (
            <div className="absolute top-[20%] w-[50%] max-md:w-[90%] flex flex-col gap-4 items-start">
              <h2 className="font-semibold text-2xl">
                Almost Done, Thanks a ton!
              </h2>
              <p>Finally, could you drop your school name?</p>
              <form onSubmit={handleSubmit} className="w-full">
                <input
                  required
                  type="text"
                  name="school"
                  placeholder="Enter School name"
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg text-nowrap"
                >
                  All Done
                  <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
                </button>
              </form>
            </div>
          )}

          <FormFilling className="max-md:h-56 max-sm:h-52 max-sm:w-60 max-md:w-72 h-[500px]  bottom-0 absolute right-20 max-md:right-0" />
        </>
      )}
    </div>
  );
}
