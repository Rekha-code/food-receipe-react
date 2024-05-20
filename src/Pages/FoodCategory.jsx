import React, { useContext } from "react";
import "./CSS/FoodCategory.css";
import { FoodContext } from "../Context/FoodContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Items/Item";

const FoodCategory = (props) => {
  const { all_food } = useContext(FoodContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span>
          out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_food.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item key={i} id={item.id} name={item.name} image={item.image} />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default FoodCategory;
