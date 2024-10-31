import { useContext, createContext, useState } from "react";

export const ShoppingContext = createContext();

export const useShoppingContext = () => useContext(ShoppingContext);

export const ShoppingProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  return (
    <ShoppingContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
