import { QuestionNumberPropTypes } from "../dataTypes";

QuestionFour.propTypes = QuestionNumberPropTypes

export function QuestionFour({ fill, stroke, className }) {
  return (
    <svg viewBox="0 0 152 152" className={className}>
      <g opacity="1">
        <circle cx="77" cy="77" r="75" stroke={stroke} fill={fill} />
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
        d="M98.176 97.352H90.976V113H83.104V97.352H55.072V90.92C60 83.432 64.448 76.136 68.416 69.032C72.448 61.928 75.776 54.824 78.4 47.72H87.232C84.544 54.696 81.28 61.64 77.44 68.552C73.664 75.464 69.312 82.6 64.384 89.96H83.104V78.056H90.976V89.96H98.176V97.352Z"
        fill={stroke}
        stroke={stroke}
      />
    </svg>
  );
}
