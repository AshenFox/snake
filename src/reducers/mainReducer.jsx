import {
  SPAWN_FOOD,
  MOVE_SNAKE,
  PAUSE,
  CHANGE_SCORE,
  RESET_SCORE,
  RESET_GAME,
} from "../actions/types";
import initialState from "./mainInitState";

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SPAWN_FOOD:
      return {
        ...state,
        food: payload,
      };

    case MOVE_SNAKE:
      return {
        ...state,
        direction: payload.direction,
        positions: payload.positions,
      };

    case PAUSE:
      return {
        ...state,
        isPaused: !state.isPaused,
      };

    case CHANGE_SCORE:
      return {
        ...state,
        currentScore: payload.currentScore,
      };

    case RESET_SCORE:
      return {
        ...state,
        currentScore: 0,
      };

    case RESET_GAME:
      const { direction, positions, food, currentScore } = payload;
      return {
        ...state,
        direction,
        positions,
        food,
        currentScore,
      };

    default:
      return state;
  }
};
