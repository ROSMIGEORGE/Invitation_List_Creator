import _ from "lodash";
import { ADD_ITEM, REMOVE_ITEM } from "../_helpers/types";

const INIT_VALUES = {};

export default (state = INIT_VALUES, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, [action.payload.email]: action.payload };
    case REMOVE_ITEM:
      const newState = _.omit(state, action.payload);
      return newState;
    default:
      return state;
  }
};