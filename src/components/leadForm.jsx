import axios from "axios";

export function LeadForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbyV1eNsz-XV7goztFAQPgC1Rk98dZ2lPbURSN0f2wH6eeUetI6cPCxzXeivD8FrKN49Pg/exec",
        {
          name: "ashok kumar",
          phone: "6305749515",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Response:", response.data);
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
