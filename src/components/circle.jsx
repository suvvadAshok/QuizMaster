import { ProgressPercentage } from "../assets/dataTypes";

const CircularProgress = ({ percent }) => {
  const radius = 45;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (Number(percent) / 100) * circumference;

  console.log(typeof percent);
  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      //   style={{ transform: "rotate(0deg)" }} // Rotate to start progress from top
    >
      <circle
        stroke="#eee"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#007bff"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        style={{
          transform: `rotate(-90deg)`, // Rotate to start progress from the top
          transformOrigin: "center", // Set rotation origin to center
          transition: "stroke-dashoffset 0.5s ease-in-out",
        }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16px"
        fill="#333"
      >
        {percent}%
      </text>
    </svg>
  );
};

CircularProgress.propTypes = ProgressPercentage;

export default CircularProgress;
