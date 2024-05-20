import NavbarData from "./components/Navbar/NavbarData";
import "./app.css";
import Food from "./Pages/Food";
import FoodCategory from "./Pages/FoodCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import c1_img from "./assets/c1.jpg";
import d1_img from "./assets/d1.jpg";
import egg_img from "./assets/egg1.jpg";
import p1_img from "./assets/p1.jpg";
import pz1_img from "./assets/pz1.jpg";
import s1_img from "./assets/s1.jpg";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarData />
        <Routes>
          <Route path="/" element={<Food />} />
          <Route
            path="/cake"
            element={<FoodCategory banner={c1_img} category="cake" />}
          />
          <Route
            path="/drink"
            element={<FoodCategory banner={d1_img} category="drink" />}
          />
          <Route
            path="/egg"
            element={<FoodCategory banner={egg_img} category="egg" />}
          />
          <Route
            path="/pasta"
            element={<FoodCategory banner={p1_img} category="pasta" />}
          />
          <Route
            path="/pizza"
            element={<FoodCategory banner={pz1_img} category="pizza" />}
          />
          <Route
            path="/salad"
            element={<FoodCategory banner={s1_img} category="salad" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
