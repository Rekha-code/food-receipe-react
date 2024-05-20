import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import FoodContextProvider from "./Context/FoodContext.jsx";

render(
  <FoodContextProvider>
    <App />
  </FoodContextProvider>,
  document.getElementById("app")
);
