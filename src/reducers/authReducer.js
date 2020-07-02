import {
  START_SESSION,
  END_SESSION,
  AUTH_ERROR,
  RESET,
} from "../_helpers/types";

const INIT_VALUES = {};

export default (state = INIT_VALUES, action) => {
  switch (action.type) {
    case START_SESSION:
      return action.payload;
    case AUTH_ERROR:
      return action.payload;
    case RESET:
      return INIT_VALUES;
    default:
      return state;
  }
};
