import React from "react";
import ReactDom from "react-dom";

import App from "./App";

import { StateProvider } from "./ContextApi/StateProvider";
import { reducer, initialState } from "./ContextApi/reducer";

ReactDom.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
