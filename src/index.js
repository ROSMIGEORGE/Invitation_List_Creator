import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { throttle } from "lodash";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { loadState, saveState } from "./_helpers/localStorage.js";
import App from "./components/App";

//load state from session if exist and creates store
const persistedState = loadState();
const store = createStore(reducers, persistedState, applyMiddleware(thunk));

//subscribe changes store and updating in session storage
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
