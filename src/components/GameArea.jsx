import React, { useEffect, useRef, Fragment } from "react";
import Food from "./Food";
import Snake from "./Snake";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { moveSnake } from "../actions/mainActions";

const GameArea = ({ main, moveSnake }) => {
  const { direction, positions, ratio, area, border_width } = main;

  const animationRef = useRef();
  const startRef = useRef(false);
  const elapsedRef = useRef(0);

  const directionOldRef = useRef(direction);
  const directionNewFirstRef = useRef(direction);
  const directionNewSecondRef = useRef(false);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    directionOldRef.current = direction;
    if (directionNewSecondRef.current) {
      directionNewFirstRef.current = directionNewSecondRef.current;
      directionNewSecondRef.current = false;
    } else {
      directionNewFirstRef.current = direction;
    }
    animationRef.current = requestAnimationFrame(callback);
  }, [positions]);

  const callback = (timestamp) => {
    if (!startRef.current) startRef.current = timestamp;
    elapsedRef.current = timestamp - startRef.current;

    if (elapsedRef.current / 1000 > ratio) {
      moveSnake(directionNewFirstRef.current);

      startRef.current = timestamp;

      return;
    }

    animationRef.current = requestAnimationFrame(callback);
  };

  const checkDirEqual = (dir1, dir2) => {
    return dir1[0] === dir2[0] && dir1[1] === dir2[1];
  };

  const onKeyDown = (e) => {
    let keyCode = e.keyCode;

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

  let style = {
    height: area.height + border_width * 2,
    width: area.width + border_width * 2,
    borderWidth: border_width,
  };

  return (
    <div className='game-area' style={style}>
      <Food />
      <Snake />
    </div>
  );
};

GameArea.propTypes = {
  main: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  main: state.main,
});

export default connect(mapStateToProps, { moveSnake })(GameArea);
