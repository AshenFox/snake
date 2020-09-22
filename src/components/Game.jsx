import React from "react";
import GameArea from "./GameArea";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Game = ({ main }) => {
  const { currentScore } = main;

  return (
    <>
      <div className='score'>
        <p className='score__top'>
          Top score: <span>650</span>
        </p>
        <p className='score__current'>
          Score: <span>{currentScore}</span>
        </p>
      </div>

      <GameArea />
      <Link to='/' className='btn'>
        Return
      </Link>
    </>
  );
};

// export default Game;

Game.propTypes = {
  main: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  main: state.main,
});

export default connect(mapStateToProps)(Game);
