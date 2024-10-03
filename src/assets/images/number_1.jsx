import { QuestionNumberPropTypes } from "../dataTypes";

QuestionOne.propTypes = QuestionNumberPropTypes

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
      </g>
      <path
        d="M60.824 56.744L76.376 47.72H83.96V113H75.8V56.552L64.472 63.08L60.824 56.744Z"
        fill={stroke}
        stroke={stroke}
      />
    </svg>
  );
}
