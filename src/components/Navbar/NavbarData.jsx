import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarData.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [menu, setMenu] = useState("cake");
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("food");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Food
            </Link>{" "}
            {menu === "food" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("cake");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/cake">
              Cake
            </Link>{" "}
            {menu === "cake" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("drink");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/drink">
              Drink
            </Link>{" "}
            {menu === "drink" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("egg");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/egg">
              Egg
            </Link>
            {menu === "egg" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("pasta");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/pasta">
              Pasta
            </Link>{" "}
            {menu === "pasta" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("pizza");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/pizza">
              Pizza
            </Link>{" "}
            {menu === "pizza" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("salad");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/salad">
              Salad
            </Link>{" "}
            {menu === "salad" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
