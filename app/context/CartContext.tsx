"use client";

import { CartItem, Product } from "@/data";
import { PropsWithChildren, createContext, useContext } from "react";
import { useLocalStorageCart } from "../storage/CartLocalStorage";

interface ContextValue {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  changeQuantity: (productId: string, newQuantity: number) => void;
  clearLocalStorage: () => void;
}

const CartContext = createContext<ContextValue>({} as ContextValue);

export function CartProvider(props: PropsWithChildren<{}>) {
  const { cart, addToCart, removeFromCart, changeQuantity, clearLocalStorage } =
    useLocalStorageCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeQuantity,
        clearLocalStorage,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
