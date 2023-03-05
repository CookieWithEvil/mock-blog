import React from "react";
import ReactDOM from "react-dom/client";
import throttle from "lodash/throttle";
import "./index.css";

import "./i18n";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers";
import App from "./components/App";

import { loadState, saveState } from "./localStorage";

import reportWebVitals from "./reportWebVitals";

import { HashRouter, BrowserRouter } from "react-router-dom";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
