import React from "react";
import ReactDOM from "react-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import '@coreui/icons/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
