import React from "react";
import GameArea from "./GameArea";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { pauseGame } from "../actions/mainActions";

const Game = ({ main, pauseGame }) => {
  const { currentScore } = main;

  let scoreArr = JSON.parse(localStorage.getItem("score"));
  let currentTopScore;

  if (!scoreArr || scoreArr.length === 0) {
    currentTopScore = 0;
  } else {
    currentTopScore = scoreArr[0].score;
  }

  return (
    <>
      <div className='score'>
        <p className='score__top'>
          Top score:{" "}
          <span>
            {currentScore > currentTopScore ? currentScore : currentTopScore}
          </span>
        </p>
        <p className='score__current'>
          Score: <span>{currentScore}</span>
        </p>
      </div>

      <GameArea />
      <div className='controls'>
        <a className='btn' onClick={pauseGame}>
          Pause
        </a>
        <Link to='/' className='btn'>
          Return
        </Link>
      </div>
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

export default connect(mapStateToProps, { pauseGame })(Game);
