"use client";
import { CartItem, Product } from "@/data";
import { useEffect, useState } from "react";

export function useLocalStorageCart(initialValue: CartItem[]) {
  const [cart, setCart] = useState<CartItem[]>(initialValue);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const saveCartToLocalStorage = (updatedCart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("cart");
  };

  const removeFromCart = (productId: string, size: string) => {
    const updatedCart = cart.filter(
      (item) => !(item.id === productId && item.size === size)
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const changeQuantity = (
    productId: string,
    newQuantity: number,
    size: string
  ) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.size === size
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const addToCart = (product: Product, size: string) => {
    const existingCartItem = cart.find(
      (item) => item.id === product.id && item.size === size
    );

    if (existingCartItem) {
      changeQuantity(product.id, existingCartItem.quantity + 1, size);
    } else {
      const newCartItem: CartItem = { ...product, quantity: 1, size };
      const updatedCart = [...cart, newCartItem];
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
  };

  return { cart, addToCart, removeFromCart, changeQuantity, clearLocalStorage };
}
