import PropTypes from "prop-types";

export const QuestionImagePropTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};

export const QuestionNumberPropTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  className: PropTypes.string,
};

export const UserCharPropTypes = {
  className: PropTypes.string,
};

export const QuestionStepsPropTypes = {
    setQNum: PropTypes.func.isRequired,
    qNum: PropTypes.number.isRequired,
    answers: PropTypes.object.isRequired,
  };