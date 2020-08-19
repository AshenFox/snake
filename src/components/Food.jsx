import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Food = ({ main }) => {
  let {
    food: { x, y },
    segment: { height, width },
  } = main;

  let style = {
    left: x + "px",
    bottom: y + "px",
    height: height + "px",
    width: width + "px",
  };

  return <div className='food' style={style}></div>;
};

Food.propTypes = {
  main: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  main: state.main,
});

export default connect(mapStateToProps)(Food);
