// src/Global Context/context.js
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState([]);
  const [data, setData] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        state: {
          brand,
          category,
          product,
          data,
        },
        setState: {
          setBrand,
          setCategory,
          setProduct,
          setData,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
