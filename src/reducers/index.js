import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import inviteListReducer from "./inviteListRReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  inviteList: inviteListReducer,
  status: statusReducer,
});
