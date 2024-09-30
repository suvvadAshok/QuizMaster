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

  const navigate = useNavigate();

  function handleName(e) {
    e.preventDefault();
    setName(e.target.name.value);
  }

  function handlegrade(e) {
    e.preventDefault();
    setGrade(e.target.grade.value);
  }

  function handlePhone(e) {
    e.preventDefault();
    setPhone(e.target.phone.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/5d9d2c0a-197c-4000-9e70-614b732d7dd4",
        {
          Name: name,
          Phone: phone,
          Grade: grade,
          School: e.target.school.value,
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
    <div className="h-screen w-screen bg-custom-gradient px-16 max-lg:px-12 max-md:px-8 max-sm:px-4 flex flex-col gap-8 justify-center overflow-y-auto">
      {state ? (
        <>
          <div className="absolute top-[20%] w-[50%] flex flex-col gap-4 items-start">
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
              className="flex justify-center items-center bg-black text-white px-6 py-4 rounded-lg "
              onClick={() => setState(false)}
            >
              <button>Get Started</button>
              <RightArrow />
            </div>
          </div>
          <SearchingImg className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72 h-80 w-80 bottom-0 absolute right-20" />
        </>
      ) : (
        <>
          {name === "" ? (
            <div className="absolute top-[20%] w-[50%] flex flex-col gap-4 items-start">
              <h2 className="font-semibold text-2xl">
                Hey there! Let’s get to know each other.
              </h2>
              <p>First things first, what should I call you?</p>
              <form onSubmit={handleName} className="w-full">
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />

                <div className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg">
                  <button type="Submit">Next</button>
                  <RightArrow />
                </div>
              </form>
            </div>
          ) : grade === "" ? (
            <div className="absolute top-[20%] w-[50%] flex flex-col gap-4 items-start">
              <h2 className="font-semibold text-2xl">
                Awesome, thanks {name}!
              </h2>
              <p>Cool Now, Which grade are you rocking?</p>
              <form onSubmit={handlegrade} className="w-full">
                <input
                  required
                  type="text"
                  name="grade"
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />

                <div className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg">
                  <button type="Submit">Next</button>
                  <RightArrow />
                </div>
              </form>
            </div>
          ) : phone === "" ? (
            <div className="absolute top-[20%] w-[50%] flex flex-col gap-4 items-start">
              <h2 className="font-semibold text-2xl">
                Wow, Thats Great {name}.
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
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />

                <div className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg">
                  <button type="Submit">Next</button>
                  <RightArrow />
                </div>
              </form>
            </div>
          ) : (
            <div className="absolute top-[20%] w-[50%] flex flex-col gap-4 items-start">
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
                  className="w-full outline-none bg-transparent border-b-2 border-b-[#FBC02D]"
                />

                <div className="inline-flex justify-center items-center gap-4 bg-black text-white px-8 py-4 mt-4 rounded-lg">
                  <button type="Submit">All Done</button>
                  <RightArrow />
                </div>
              </form>
            </div>
          )}

          <FormFilling className="max-md:h-40 max-sm:h-32 max-sm:w-60 max-md:w-72 h-80 w-80 bottom-20 absolute right-20" />
        </>
      )}
    </div>
  );
}
