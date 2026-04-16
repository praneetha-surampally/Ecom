import { createContext, useContext } from 'react';
import { products } from '../data/products.js';

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
}

export function useProducts() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProducts must be used inside ProductProvider');
  }

  return context;
}
