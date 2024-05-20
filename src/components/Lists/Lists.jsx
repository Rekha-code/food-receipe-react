import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Lists.css";

const Lists = () => {
  const [menu, setMenu] = useState("cake");

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("cake");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Cake
          </Link>
          {menu === "cake" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("drink");
          }}
        >
          <Link>Drink</Link>
          {menu === "drink" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("egg");
          }}
        >
          <Link>Egg</Link>
          {menu === "egg" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pasta");
          }}
        >
          <Link>Pasta</Link>
          {menu === "pasta" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("pizza");
          }}
        >
          <Link>Pizza</Link>
          {menu === "pizza" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("salad");
          }}
        >
          <Link>Salad</Link>
          {menu === "salad" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Lists;
