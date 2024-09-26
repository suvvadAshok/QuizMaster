import { motion } from "framer-motion";
import PropTypes from "prop-types";

OnTopCurve.propTypes = {
  qNum: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export function OnTopCurve({ qNum, className }) {
  let path = 0;
  if (qNum === 0) {
    path = 0.1;
  } else if (qNum === 1) {
    path = 0.3;
  } else if (qNum === 2) {
    path = 0.58;
  } else if (qNum === 3) {
    path = 0.75;
  } else if (qNum === 4) {
    path = 1;
  }
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "#FFA500",
    },
    visible: {
      pathLength: path,
      // fill: "#FFA500",
    },
  };
  return (
    <svg width="100vw" viewBox="0 0 1728 191" fill="none" className={className}>
      <motion.path
        variants={icon}
        initial="visible"
        animate="visible"
        d="M-51.8859 166.775C-32.5255 106.446 63.1891 -5.05071 291.164 31.5995C576.134 77.4123 602.095 229.71 802.961 176.522C1003.83 123.333 1040.58 0.272525 1268.59 3.16927C1496.6 6.06601 1534.75 179.562 1727.38 140.351"
        stroke="#FBC02D"
        strokeOpacity="1"
        strokeWidth="10"
      />
      <path
        d="M-51.8859 166.775C-32.5255 106.446 63.1891 -5.05071 291.164 31.5995C576.134 77.4123 602.095 229.71 802.961 176.522C1003.83 123.333 1040.58 0.272525 1268.59 3.16927C1496.6 6.06601 1534.75 179.562 1727.38 140.351"
        stroke="black"
        opacity={1}
        strokeOpacity="0.1"
        strokeWidth="4"
      />
    </svg>
  );
}
