import { SPAWN_FOOD, MOVE_SNAKE } from "../types";
console.log(action.type);
export default (state, action) => {
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
