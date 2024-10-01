// import { Link } from "react-router-dom";
import { FormFilling } from "../assets/images/formFilling";
import { RightArrow } from "../assets/images/rightArrow";
import { SearchingImg } from "../assets/images/searching";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LeadDetails() {
  const [state, setState] = React.useState(true);
  const [name, setName] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [school, setSchool] = React.useState("");

  const navigate = useNavigate();

  function handleName(e) {
    e.preventDefault();
    setName(e.target.name.value);
    e.target.reset();
  }

  function handleGrade(e) {
    e.preventDefault();
    setGrade(e.target.grade.value);
    e.target.reset();
  }

  function handlePhone(e) {
    e.preventDefault();
    setPhone(e.target.phone.value);
    e.target.reset();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSchool(e.target.school.value);

    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/5d9d2c0a-197c-4000-9e70-614b732d7dd4",
        {
          Name: name,
          Phone: phone,
          Grade: grade,
          School: school,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      navigate("/result");
    } catch (error) {
      console.error("Error:", error);
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
            <div
              className="flex justify-center items-center md:gap-2 gap-1 bg-black text-white px-6 py-4 rounded-lg "
              onClick={() => setState(false)}
            >
              <button>Get Started</button>
              <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
            </div>
          </div>
          <SearchingImg className="max-md:h-56 max-sm:h-52 max-sm:w-60 max-md:w-72 h-80 w-80 bottom-0 absolute right-20 max-md:right-0" />
        </>
      ) : (
        <>
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
                <div className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg">
                  <button type="submit">Next</button>
                  <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
                </div>
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
                <div className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg">
                  <button type="submit">Next</button>
                  <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
                </div>
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
                <div className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg">
                  <button type="submit">Next</button>
                  <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
                </div>
              </form>
            </div>
          ) : (
            <div className="absolute top-[20%] w-[50%] max-md:w-[90%] flex flex-col gap-4 items-start">
              <h2 className="font-semibold text-2xl">
                Almost Done, Thanks a ton!
              </h2>
              <p>
                Finally, could you drop your email so we can keep you in the
                loop?
              </p>
              <form onSubmit={handleSubmit} className="w-full">
                <input
                  required
                  type="text"
                  name="school"
                  placeholder="Enter School name"
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />
                <div className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg">
                  <button type="submit" className="text-nowrap">
                    All Done
                  </button>
                  <RightArrow className="h-6 w-8 max-md:h-4 max-md:w-4" />
                </div>
              </form>
            </div>
          )}

          <FormFilling className="max-md:h-56 max-sm:h-52 max-sm:w-60 max-md:w-72 h-80 w-80 bottom-0 absolute right-20 max-md:right-0" />
        </>
      )}
    </div>
  );
}
