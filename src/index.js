import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Toaster } from "sonner";
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: appReducer,
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster richColors position="top-center" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
