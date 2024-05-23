"use client"
import NavigateToSignIn from "@/components/NavigateToSignIn";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ProductGrid from "../../components/ProductGrid";
import CategoryBar from "../../components/categorybar/CategoryBar";
import { showAllCategories } from "../server-actions/categories/handler";
import { showAllProducts } from "../server-actions/products/handler";

type Decimal = any; 

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  video: string;
  price: Decimal;
  isArchived: boolean;
  categories: { id: string; name: string }[]; 
};

type Category = {
  id: string;
  name: string;
};

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const { products } = await showAllProducts();
      const { categories } = await showAllCategories();
      setProducts(products); 
      setCategories(categories); 
      setFilteredProducts(products); 
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product =>
          product.categories.some(category => category.name === selectedCategory)
        )
      );
    }
  }, [selectedCategory, products]);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <Box>
      <NavigateToSignIn />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid lightgray",
        }}
      >
        <CategoryBar name="All" onClick={() => handleCategorySelect("All")} />
        {categories.map((category, index) => (
          <CategoryBar
            key={index}
            name={category.name}
            onClick={() => handleCategorySelect(category.name)}
          />
        ))}
      </Box>

      <Grid container spacing={0}>
        {filteredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProductGrid
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}