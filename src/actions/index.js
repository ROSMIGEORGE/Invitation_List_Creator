import _ from "lodash";
import testapi from "../apis/testApi";
import history from "../_helpers/history";
import {
  START_SESSION,
  AUTH_ERROR,
  ADD_ITEM,
  REMOVE_ITEM,
  RESET,
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

export const reset = () => {
  return {
    type: RESET,
    payload: {},
  };
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

export const sendItems = () => async (dispatch, getState) => {
  let index = 0;
  try {
    const data = _.map(getState().inviteList, (value) => {
      index++;
      return {
        index: index,
        email: value.email,
        mobile: value.mobile,
      };
    });
    const response = testapi({
      method: "post",
      url: "/accounts/send_invitation/",
      headers: {
        Authorization: `${getState().auth.access}`,
      },
    });
    console.log(response);
  } catch (error) {}
};
