import React from "react";
import "animate.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";

const WorkanaApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
        <Toaster position="bottom-right" />
      </BrowserRouter>
    </Provider>
  );
};

export default WorkanaApp;
