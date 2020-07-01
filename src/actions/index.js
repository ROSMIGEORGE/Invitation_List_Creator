import _ from "lodash";
import testapi from "../apis/testApi";
import history from "../_helpers/history";
import {
  START_SESSION,
  AUTH_ERROR,
  ADD_ITEM,
  REMOVE_ITEM,
} from "../_helpers/types";

//{username:"testuser1",password:"Kruntummy$1"}
export const authenticate = (formValues) => async (dispatch) => {
  try {
    const response = await testapi.post("/login/", formValues);
    dispatch({
      type: START_SESSION,
      payload: { ...formValues, ...response.data, error: "" },
    });
    history.push("/details");
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: { error: "invalid username or password" },
    });
  }
};

export const addItem = (formValues) => {
  return {
    type: ADD_ITEM,
    payload: formValues,
  };
};

export const removeItem = (key) => {
  return {
    type: REMOVE_ITEM,
    payload: key,
  };
};

export const sendItem = () => async (dispatch, getState) => {
  let index = 0;
  try {
    const data = _.map(getState(), (value, key) => {
      index++;
      return {
        index: index,
        email: value.emailId,
        mobile: value.mobileNumber,
      };
    });
    console.log(data);
  } catch (error) {}
};
