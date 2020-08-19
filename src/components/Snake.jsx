import React, { Fragment } from "react";
import BodySegment from "./BodySegment";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Snake = ({ main }) => {
  let { positions, segment } = main;

  return (
    <Fragment>
      {positions.map((position, i) => (
        <BodySegment key={i} position={position} segment={segment} />
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
