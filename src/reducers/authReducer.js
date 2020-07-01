import { START_SESSION, END_SESSION } from "../_helpers/types";

const INIT_VALUES = {};

export default (state = INIT_VALUES, action) => {
  switch (action.type) {
    case START_SESSION:
      return action.payload;
    default:
      return state;
  }
};
