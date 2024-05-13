"use client";

// ProductContext.tsx
import { products as mockedProducts } from "@/data";
import { PropsWithChildren, createContext, useContext } from "react";
import { Product, useLocalStorageProducts } from "../storage/ProductStorage";

interface ContextValue {
  products: Product[];
  createProduct: (newProduct: Product) => void;
  removeProduct: (productId: string) => void;
  editProduct: (editedProduct: Product) => void;
}

const ProductsContext = createContext<ContextValue>({} as ContextValue);

export function ProductProvider(props: PropsWithChildren<{}>) {
  const { products, createProduct, removeProduct, editProduct } =
    useLocalStorageProducts(mockedProducts);

  return (
    <ProductsContext.Provider
      value={{
        products,
        removeProduct,
        createProduct,
        editProduct,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
