import "normalize.css";
import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
// import "./components/index.css";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
