import React, { useEffect, useRef } from "react";
import Food from "./Food";
import Snake from "./Snake";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { moveSnake, pauseGame, resetGame } from "../actions/mainActions";

const GameArea = ({ main, moveSnake, pauseGame, resetGame }) => {
  const { direction, positions, ratio, area, border_width, isPaused } = main;

  const animationRef = useRef();
  const startRef = useRef(false);
  const elapsedRef = useRef(0);

  const directionOldRef = useRef(direction);
  const directionNewFirstRef = useRef(direction);
  const directionNewSecondRef = useRef(false);

  useEffect(() => {
    document.body.addEventListener("keydown", onKeyDown);
    document.body.addEventListener("touchstart", onTouchStart);
    document.body.addEventListener("touchmove", onTouchMove);

    return () => {
      resetGame();
      document.body.removeEventListener("keydown", onKeyDown);
      document.body.removeEventListener("touchstart", onTouchStart);
      document.body.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  useEffect(() => {
    directionOldRef.current = direction;
    if (directionNewSecondRef.current) {
      directionNewFirstRef.current = directionNewSecondRef.current;
      directionNewSecondRef.current = false;
    } else {
      directionNewFirstRef.current = direction;
    }

    if (!isPaused) animationRef.current = requestAnimationFrame(callback);
  }, [positions, isPaused]);

  const callback = (timestamp) => {
    if (!startRef.current) startRef.current = timestamp;
    elapsedRef.current = timestamp - startRef.current;

    if (elapsedRef.current / 1000 > ratio) {
      moveSnake(directionNewFirstRef.current);

      startRef.current = timestamp;

      return;
    }

    if (!isPaused) animationRef.current = requestAnimationFrame(callback);
  };

  const checkDirEqual = (dir1, dir2) => {
    return dir1[0] === dir2[0] && dir1[1] === dir2[1];
  };

  const onKeyDown = (e) => {
    let keyCode = e.keyCode;

    if (keyCode === 32) {
      pauseGame();
      return;
    }

    let oldDirection;
    let number;

    if (checkDirEqual(directionNewFirstRef.current, directionOldRef.current)) {
      oldDirection = directionOldRef.current; // Can be refactored
      number = 1;
    } else {
      oldDirection = directionNewFirstRef.current;
      number = 2;
    }

    let newDirection;

    if (keyCode === 37) {
      newDirection = [-1, 0];
    } else if (keyCode === 38) {
      newDirection = [0, 1];
    } else if (keyCode === 39) {
      newDirection = [1, 0];
    } else if (keyCode === 40) {
      newDirection = [0, -1];
    }

    if (!newDirection || checkDirEqual(newDirection, oldDirection)) return;

    if (
      (newDirection[0] === oldDirection[0] &&
        newDirection[1] !== oldDirection[1]) ||
      (newDirection[0] !== oldDirection[0] &&
        newDirection[1] === oldDirection[1])
    )
      return;

    if (number === 1) {
      directionNewFirstRef.current = newDirection;
    } else if (number === 2) {
      directionNewSecondRef.current = newDirection;
    }
  };

  const touchPosX = useRef(false);
  const touchPosY = useRef(false);

  const onTouchStart = (e) => {
    console.log("onTouchStart");
    // console.log(e.changedTouches[0].screenX, e.changedTouches[0].screenY);
    // e.changedTouches[0].screenX, e.changedTouches[0].screenY
    touchPosX.current = e.changedTouches[0].screenX;
    touchPosY.current = e.changedTouches[0].screenY;
  };

  const onTouchMove = (e) => {
    // console.log("onTouchMove");
    let newDirection;
    let touchPosMoveX = e.changedTouches[0].screenX;
    let touchPosMoveY = e.changedTouches[0].screenY;

    let dirX = touchPosMoveX - touchPosX.current;
    let dirY = touchPosMoveY - touchPosY.current;
    let absDirX = Math.abs(dirX);
    let absDirY = Math.abs(dirY);

    if (absDirX < 10 && absDirY < 10) return;
    let ratio = absDirX / absDirY;
    if (ratio < 1) {
      dirY < 0 ? (newDirection = [0, 1]) : (newDirection = [0, -1]);
    } else {
      dirX < 0 ? (newDirection = [-1, 0]) : (newDirection = [1, 0]);
    }

    if (
      (newDirection[0] === directionOldRef.current[0] &&
        newDirection[1] !== directionOldRef.current[1]) ||
      (newDirection[0] !== directionOldRef.current[0] &&
        newDirection[1] === directionOldRef.current[1])
    )
      return;

    if (!directionNewFirstRef.current) {
      directionNewFirstRef.current = newDirection;
    } else if (!directionNewSecondRef.current) {
      directionNewSecondRef.current = newDirection;
    }
  };

  let style = {
    height: area.height + border_width * 2,
    width: area.width + border_width * 2,
    borderWidth: border_width,
  };

  return (
    <div className='game-area' style={style} onKeyDown={onKeyDown}>
      <Food />
      <Snake />
      {isPaused ? <p>Pause</p> : ""}
    </div>
  );
};

GameArea.propTypes = {
  main: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  main: state.main,
});

export default connect(mapStateToProps, { moveSnake, pauseGame, resetGame })(
  GameArea
);

/* 


export const setScreenDimensions = () => ({
  type: SET_SCREEN_DIMENSIONS,
  payload: {
    screenHeight: document.documentElement.clientHeight,
    screenWidth: document.documentElement.clientWidth,
  },
});


*/
