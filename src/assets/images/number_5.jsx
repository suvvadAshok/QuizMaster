import PropTypes from "prop-types";

QuestionFive.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export function QuestionFive({ fill, stroke, className }) {
  return (
    <svg viewBox="0 0 152 152" className={className}>
      <g opacity="1">
        <circle cx="77" cy="77" r="75" stroke={stroke} fill={fill} />
        <circle
          cx="77"
          cy="77"
          r="70"
          stroke={stroke}
          fill={fill}
          strokeWidth="10"
        />
      </g>
      <path
        d="M58.528 79.016L60.448 47.72H92.896V55.4H67.84L66.688 74.12C69.504 73.16 72.544 72.68 75.808 72.68C81.824 72.68 86.624 74.28 90.208 77.48C93.792 80.68 95.584 85.416 95.584 91.688V94.568C95.584 100.264 93.92 104.936 90.592 108.584C87.264 112.168 81.92 113.96 74.56 113.96C71.68 113.96 68.672 113.64 65.536 113C62.464 112.296 59.264 111.208 55.936 109.736L58.528 102.824C61.664 104.168 64.512 105.128 67.072 105.704C69.632 106.216 72.096 106.472 74.464 106.472C78.432 106.472 81.536 105.576 83.776 103.784C86.016 101.928 87.136 98.856 87.136 94.568V91.688C87.136 88.168 86.112 85.352 84.064 83.24C82.08 81.128 79.04 80.072 74.944 80.072C73.024 80.072 71.136 80.328 69.28 80.84C67.424 81.288 65.472 81.96 63.424 82.856L58.528 79.016Z"
        fill={stroke}
        stroke={stroke}
      />
    </svg>
  );
}
