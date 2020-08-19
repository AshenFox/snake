import React, { useReducer } from "react";
import MainContext from "./mainContext";
import MainReducer from "./mainReducer";
import { SPAWN_FOOD, MOVE_SNAKE } from "../types";

const MainState = (props) => {
  const initialState = {
    step: 20,
    ratio: 0.1,
    direction: [0, -1],
    positions: [
      {
        x: 400,
        y: 400,
      },
      {
        x: 400,
        y: 420,
      },
      {
        x: 400,
        y: 440,
      },
      {
        x: 400,
        y: 460,
      },
      {
        x: 400,
        y: 480,
      },
    ],
    food: {
      x: 100,
      y: 100,
    },
    area: {
      height: 500,
      width: 500,
    },
    border_width: 5,
    segment: {
      height: 20,
      width: 20,
    },
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  // Spawn food

  const spawnFood = (positions) => {
    let crude_x = Math.random() * (area.width - segment.width);
    let crude_y = Math.random() * (area.height - segment.height);
    let x = crude_x - (crude_x % segment.width);
    let y = crude_y - (crude_y % segment.height);

    for (let position of positions) {
      // potential problem
      if (position.x === x && position.y === y) return spawnFood(positions);
    }

    dispatch({
      type: SPAWN_FOOD,
      payload: {
        x,
        y,
      },
    });
  };

  // Move snake

  const moveSnake = (newDirection) => {
    let newPositions = createNewPositions(positions, newDirection);

    if (!checkCollision(newPositions)) {
      if (checkFood(newPositions)) {
        growSnake(positions, newPositions);
        spawnFood(newPositions);
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

      spawnFood(positions);
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

  const createNewPositions = (positions, newDirection) => {
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

  const checkCollision = (positions) => {
    // With walls
    let max_x = area.width - segment.width,
      max_y = area.height - segment.height;

    let head = positions[0];

    if (!head) return false;

    if (head.x > max_x || head.x < 0 || head.y > max_y || head.y < 0)
      return true;
    // With itself

    for (let i = 1; i < positions.length; i++) {
      if (head.x === positions[i].x && head.y === positions[i].y) return true;
    }

    return false;
  };

  const checkFood = (positions) => {
    let head = positions[0];

    if (!head) return false;

    if (food.x === head.x && food.y === head.y) return true;
    return false;
  };

  const {
    step,
    ratio,
    direction,
    positions,
    food,
    area,
    border_width,
    segment,
  } = state;

  return (
    <MainContext.Provider
      value={{
        step,
        ratio,
        direction,
        positions,
        food,
        area,
        border_width,
        segment,
        spawnFood,
        moveSnake,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
