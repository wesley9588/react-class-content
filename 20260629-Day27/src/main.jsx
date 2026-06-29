import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UseStateRouter2 from "./test/UseStateRouter2";
import Kiosk from "./Kiosk";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Kiosk />
  </StrictMode>,
);
