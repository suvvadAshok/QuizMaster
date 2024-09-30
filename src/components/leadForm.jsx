import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

LeadForm.propTypes = {
  user: PropTypes.string,
};

export function LeadForm({ user }) {
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/5d9d2c0a-197c-4000-9e70-614b732d7dd4",
        {
          Name: name,
          Phone: e.target.phone.value,
          Grade: e.target.grade.value,
          School: e.target.school.value,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response:", response.data);
      navigate("/result", { state: { user } });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(user, "user in form");
  return (
    <form
      onSubmit={handleSubmit}
      className="font-GT_Walsheim_Pro text-lg flex flex-col gap-4 "
    >
      <div className="flex flex-col w-96 gap-[0.5]">
        <label htmlFor="name" className="text-2xl">
          Name
        </label>
        <input
          required
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border-[0.5px] border-gray-400 p-3 outline-none focus:border-gray-600 focus:border-2  duration-100 delay-75 ease-in-out"
        />
      </div>
      {formData.map((field) => (
        <div className="flex flex-col w-96 gap-[0.5]" key={field.id}>
          <label htmlFor={field.id} className="text-2xl">
            {field.label}
          </label>
          <input
            required={field.required}
            type={field.type}
            name={field.id}
            id={field.id}
            className="w-full rounded-xl border-[0.5px] border-gray-400 p-3 outline-none focus:border-gray-600 focus:border-2  duration-100 delay-75 ease-in-out"
          />
        </div>
      ))}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-black text-white rounded-lg py-4 px-6 text-xl hover:scale-110 delay-75 ease-out duration-150"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

const formData = [
  { label: "Phone Number", required: true, type: "text", id: "phone" },
  { label: "Grade", required: true, type: "text", id: "grade" },
  { label: "School Name", required: true, type: "text", id: "school" },
];
