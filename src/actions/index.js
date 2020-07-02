import _ from "lodash";
import testapi from "../apis/testApi";
import history from "../_helpers/history";
import {
  START_SESSION,
  AUTH_ERROR,
  ADD_ITEM,
  REMOVE_ITEM,
  RESET,
  LOADER,
  SUCCESS,
  ERROR,
  END_SESSION,
} from "../_helpers/types";

//{username:"testuser1",password:"Kruntummy$1"}
//action to authenticate user
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

//action creator to reset user
export const reset = () => {
  return {
    type: RESET,
    payload: {},
  };
};

//action creator to add an item
export const addItem = (formValues) => {
  return {
    type: ADD_ITEM,
    payload: formValues,
  };
};

//action creator to remove an item
export const removeItem = (key) => {
  return {
    type: REMOVE_ITEM,
    payload: key,
  };
};

//action creator to set loader
export const setLoader = () => {
  return {
    type: LOADER,
    payload: {},
  };
};

//action creator to end session
export const endSession = () => {
  history.push("/");
  return {
    type: END_SESSION,
    payload: {},
  };
};

//action creator to send item
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
    const response = await testapi({
      method: "post",
      url: "/accounts/send_invitation/",
      headers: {
        Authorization: `${getState().auth.access}`,
      },
    });
    dispatch({
      type: SUCCESS,
      payload: {},
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: {},
    });
  }
};
