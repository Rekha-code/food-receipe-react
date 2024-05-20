import React from "react";
import all_food from "../assets/all_food";
import { createContext } from "preact";
export const FoodContext = createContext(null);

const FoodContextProvider = (props) => {
  const contextValue = { all_food };
  return (
    <FoodContext.Provider value={contextValue}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
