import React, { Fragment, useRef, useEffect } from "react";
import BodySegment from "./BodySegment";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Snake = ({ main }) => {
  let { positions, segment } = main;

  let segmentsNumber = useRef(positions.length);
  let animated = useRef(true);

  if (segmentsNumber.current !== positions.length) {
    segmentsNumber.current = positions.length;
    animated.current = false;
  }

  useEffect(() => {
    if (!animated.current) {
      setTimeout(() => {
        animated.current = true;
      });
    }
  });

  return (
    <Fragment>
      {positions.map((position, i) => (
        <BodySegment
          key={i}
          position={position}
          segment={segment}
          delay={i * 0.1}
          animated={animated.current}
        />
      ))}
    </Fragment>
  );
};

Snake.propTypes = {
  main: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  main: state.main,
});

export default connect(mapStateToProps)(Snake);
