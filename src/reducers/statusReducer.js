import { LOADER, SUCCESS, ERROR, END_SESSION } from "../_helpers/types";

const INIT_VALUES = {
  status: null,
};

export default (state = INIT_VALUES, action) => {
  switch (action.type) {
    case SUCCESS:
      return { status: "success" };
    case ERROR:
      return { status: "error" };
    case LOADER:
      return { status: "Loading" };
    case END_SESSION:
      return INIT_VALUES;
    default:
      return state;
  }
};
