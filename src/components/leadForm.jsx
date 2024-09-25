import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LeadForm() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/5d9d2c0a-197c-4000-9e70-614b732d7dd4",
        {
          Name: e.target.name.value,
          Phone: e.target.phone.value,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response:", response.data);
      navigate("/result");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="phone">Phone Number</label>
      <input type="text" name="phone" id="phone" />
      <button type="submit">Submit</button>
    </form>
  );
}
