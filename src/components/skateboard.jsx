import skateboard from "../assets/images/skateboard.svg"; // Adjust the path based on your folder structure

const YourComponent = () => {
  return (
    <div>
      <h1>Check out this skateboard!</h1>
      <img src={skateboard} alt="Skateboard" className="w-52 h-20" />
    </div>
  );
};

export default YourComponent;
