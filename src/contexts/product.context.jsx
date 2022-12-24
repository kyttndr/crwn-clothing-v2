import React, { useState, createContext } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
