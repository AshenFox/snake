import {
  SPAWN_FOOD,
  MOVE_SNAKE,
  PAUSE,
  RESET_SCORE,
  CHANGE_SCORE,
  RESET_GAME,
} from "./types";
import initialState from "../reducers/mainInitState";

// Spawn food

const spawnFood = (positions, state) => {
  let { area, segment } = state;

  let crude_x = Math.random() * (area.width - segment.width);
  let crude_y = Math.random() * (area.height - segment.height);
  let x = crude_x - (crude_x % segment.width);
  let y = crude_y - (crude_y % segment.height);

  for (let position of positions) {
    // potential problem
    if (position.x === x && position.y === y)
      return spawnFood(positions, state);
  }

  return {
    type: SPAWN_FOOD,
    payload: {
      x,
      y,
    },
  };
};

// Move snake

export const moveSnake = (newDirection) => (dispatch, getState) => {
  const { main } = getState();
  let { positions, currentScore } = main;

  let newPositions = createNewPositions(positions, newDirection, main);

  if (!checkCollision(newPositions, main)) {
    if (checkFood(newPositions, main)) {
      growSnake(positions, newPositions);
      dispatch(changeScore(currentScore));
      dispatch(spawnFood(newPositions, main));
    }

    dispatch({
      type: MOVE_SNAKE,
      payload: {
        positions: newPositions,
        direction: newDirection,
      },
    });
  } else {
    const { positions, direction } = initialState;

    saveScore(currentScore);

    dispatch(pauseGame());
    dispatch(resetScore());
    dispatch(spawnFood(positions, main));
    dispatch({
      type: MOVE_SNAKE,
      payload: {
        positions,
        direction,
      },
    });
  }
};

// Pause

export const pauseGame = () => ({ type: PAUSE });

// Change score

export const changeScore = (currentScore) => {
  currentScore += 20;

  return {
    type: CHANGE_SCORE,
    payload: {
      currentScore,
    },
  };
};

// Change score

export const resetScore = () => ({ type: RESET_SCORE });

// Reset game

export const resetGame = () => {
  const { direction, positions, food, currentScore } = initialState;
  return {
    type: RESET_GAME,
    payload: {
      direction,
      positions,
      food,
      currentScore,
    },
  };
};

// Supplemental functions ----

const growSnake = (positions, newPositions) => {
  let tail = positions[positions.length - 1];
  newPositions.push(tail);
};

const createNewPositions = (positions, newDirection, state) => {
  let { step } = state;
  let oldPosition, newPosition;

  return positions.map((position, i) => {
    if (i === 0) {
      oldPosition = { ...position };
      let { x, y } = position;

      return {
        x: x + newDirection[0] * step,
        y: y + newDirection[1] * step,
      };
    } else {
      newPosition = { ...oldPosition };
      oldPosition = { ...position };
      return newPosition;
    }
  });
};

const checkCollision = (positions, state) => {
  let { area, segment } = state;
  // With walls
  let max_x = area.width - segment.width,
    max_y = area.height - segment.height;

  let head = positions[0];

  if (!head) return false;

  if (head.x > max_x || head.x < 0 || head.y > max_y || head.y < 0) return true;
  // With itself

  for (let i = 1; i < positions.length; i++) {
    if (head.x === positions[i].x && head.y === positions[i].y) return true;
  }

  return false;
};

const checkFood = (positions, state) => {
  let { food } = state;

  let head = positions[0];

  if (!head) return false;

  if (food.x === head.x && food.y === head.y) return true;
  return false;
};

// Save score to local storage

/* let json = JSON.stringify([
  {
    date: new Date(),
    score: 650,
  },
  {
    date: new Date(),
    score: 550,
  },
  {
    date: new Date(),
    score: 500,
  },

  {
    date: new Date(),
    score: 450,
  },

  {
    date: new Date(),
    score: 400,
  },

  {
    date: new Date(),
    score: 350,
  },
]); */

const saveScore = (currentScore) => {
  if (currentScore <= 0) return;

  const newPosition = {
    date: new Date(),
    score: currentScore,
  };

  let scoreArr = JSON.parse(localStorage.getItem("score"));
  if (!scoreArr) scoreArr = [];
  console.log(scoreArr);

  let inserted = false;

  for (let i = 0; i < scoreArr.length; i++) {
    let itemScore = scoreArr[i].score;
    if (itemScore < currentScore) {
      scoreArr.splice(i, 0, newPosition);
      inserted = true;
      break;
    }
  }

  if (!inserted) scoreArr.push(newPosition);

  console.log(scoreArr);

  if (scoreArr.length > 5) scoreArr = scoreArr.slice(0, 5);

  console.log(scoreArr);

  localStorage.setItem("score", JSON.stringify(scoreArr));
};

/* 


if (i + 1 === scoreArr.length) {
      
      break;
    }
*/
