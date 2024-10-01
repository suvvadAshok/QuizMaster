import PropTypes from "prop-types";

QuestionOne.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export function QuestionOne({ fill, stroke, className }) {
  return (
    <svg viewBox="0 0 152 152" className={className}>
      <g opacity="1">
        <circle
          cx="77"
          cy="77"
          r="75"
          fill={fill}
          stroke={stroke}
          className="transition-all"
        />
        {/* <circle
          cx="77"
          cy="77"
          r="70"
          stroke={stroke}
          fill={fill}
          strokeWidth="10"
        /> */}
      </g>
      <path
        d="M60.824 56.744L76.376 47.72H83.96V113H75.8V56.552L64.472 63.08L60.824 56.744Z"
        fill={stroke}
        stroke={stroke}
      />
    </svg>
  );
}
