import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./containers/App/App";

import "./global.css";

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById("root")
);

console.log("sds");

// Hot Module Replacement
if (module.hot) {
  module.hot.accept("./containers/App/App", () => {
    const NextApp = require("./containers/App/App");
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
