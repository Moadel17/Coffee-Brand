import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
import WindowWidth from "./Context/windowWidth.jsx";
import { Favouite } from "./Context/fav.jsx";
import { AddCart } from "./Context/cart.jsx";

createRoot(document.getElementById("root")).render(
  <AddCart>
    <Favouite>
      <WindowWidth>
        <StrictMode>
          <Router>
            <App />
          </Router>
        </StrictMode>
      </WindowWidth>
    </Favouite>
  </AddCart>,
);
