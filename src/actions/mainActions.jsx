import { SPAWN_FOOD, MOVE_SNAKE } from "./types";
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
  console.log("fire!");
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
  let { positions } = main;

  let newPositions = createNewPositions(positions, newDirection, main);

  if (!checkCollision(newPositions, main)) {
    if (checkFood(newPositions, main)) {
      growSnake(positions, newPositions);
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
