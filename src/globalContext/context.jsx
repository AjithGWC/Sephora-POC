// src/Global Context/context.js
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [data, setData] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        state: {
          brand,
          category,
          product,
          data,
          activeIndex
        },
        setState: {
          setBrand,
          setCategory,
          setProduct,
          setData,
          setActiveIndex
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
