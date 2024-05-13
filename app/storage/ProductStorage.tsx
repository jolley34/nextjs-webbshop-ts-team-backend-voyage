"use client";

// ProductStorage.tsx
import { useEffect, useState } from "react";

export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  slug?: string;
}

export function useLocalStorageProducts(initialProductValue: Product[]) {
  const [products, setProducts] = useState<Product[]>(initialProductValue);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const createProduct = async (newProduct: Product) => {
    // Prepend the new product to the existing list
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const editProduct = (editedProduct: Product) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const removeProduct = (productId: string) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return {
    products,
    createProduct,
    removeProduct,
    editProduct,
  };
}
