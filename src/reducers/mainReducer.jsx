import { SPAWN_FOOD, MOVE_SNAKE } from "../actions/types";
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

    default:
      return state;
  }
};
