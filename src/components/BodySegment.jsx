import React from "react";
import PropTypes from "prop-types";

const BodySegment = (props) => {
  let {
    position: { x, y },
    segment: { height, width },
    delay,
    animated,
  } = props;

  let style = {
    bottom: y + "px",
    left: x + "px",
    height: height + "px",
    width: width + "px",
    animationDelay: `${delay}s`,
  };

  return (
    <div
      className={`snake__body-segment snake__body-segment--1 ${
        animated ? "puls" : ""
      }`}
      style={style}
    ></div>
  );
};

BodySegment.propTypes = {
  position: PropTypes.object.isRequired,
  segment: PropTypes.object.isRequired,
};

export default BodySegment;
