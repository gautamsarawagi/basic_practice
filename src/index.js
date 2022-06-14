import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Suspense fallback={<div>Loading.....</div>}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

