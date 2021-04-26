import React from "react";
import ReactDOM from "react-dom";

import Homepage from "./Homepage";
import Resultpage from "./Resultpage";
import Menuresult from "./Menuresult";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
