"use client";

// RHF - Hantera tillståndet och uppbyggnaden av dataobjektet som formuläret skapar
// MUI - Skapa grafik med hjälp av komponenter (presentation)
// Zod - Validera att användaren skrivit in giltig information

// const isEdit = Boolean(props.product);

import {
  Box,
  Button,
  FormControl,
  FormHelperTextProps,
  Grid, 
  TextField,
  ThemeProvider,
  Typography,
  Card
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useProducts } from "../context/ProductContext";
import { Product } from "../storage/ProductStorage";
import theme from "../themes/themes";
import React, { useState } from 'react';

const productSchema = z.object({
  id: z.string(),
  image: z.string().url().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  slug: z.string().optional(),
});

interface Props {
  product?: Product;
}

export default function ProductForm({ product }: Props) {
  const isEdit = Boolean(product);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const form = useForm<Product>({
    defaultValues: product || { id: Date.now().toString() },
  });
  const router = useRouter();
  const { createProduct, editProduct } = useProducts();

  const save = async (formData: Product) => {
    try {
      formData.price = Number(formData.price);
      const validatedData = productSchema.parse(formData);

      if (formData.price <= 0) {
        throw new Error("Price must be a positive number.");
      }

      console.log("SAVE");

      if (isEdit) {
        // If in edit mode, call editProduct instead of createProduct
        editProduct(validatedData);
      } else {
        createProduct(validatedData);
      }

      router.push("/admin");
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          const field = err.path.join(".");
          form.setError(field as keyof Product, {
            type: "manual",
            message: err.message,
          });
        });
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Grid
      component={"form"}
      container
      // direction="column"
      // alignItems="center"
      justifyContent="center"
      data-cy="product-form"
    >
      <Card sx={{ width: "60%", padding: "5%" }}> 
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center',    alignItems: 'center' }}>
      <Grid item xs={12} sm={6}>
      <Box sx={{ width: "100%" }}>
        <FormControl>
        <Grid container spacing={2}>
        <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Title"
                {...form.register("title")}
                error={Boolean(form.formState.errors.title)}
                helperText={form.formState.errors.title?.message}
                inputProps={{ "data-cy": "product-title" }}
                FormHelperTextProps={
                  { "data-cy": "product-title-error" } as FormHelperTextProps
                }
              />
            </Grid>

            <Grid item xs={12}>
            <TextField
                variant="outlined"
                label="Price"
                {...form.register("price")}
                error={Boolean(form.formState.errors.price)}
                helperText={form.formState.errors.price?.message}
                inputProps={{ "data-cy": "product-price" }}
                FormHelperTextProps={
                  { "data-cy": "product-price-error" } as FormHelperTextProps
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Description"
                {...form.register("description")}
                error={Boolean(form.formState.errors.description)}
                helperText={form.formState.errors.description?.message}
                inputProps={{ "data-cy": "product-description" }}
                FormHelperTextProps={
                  {
                    "data-cy": "product-description-error",
                  } as FormHelperTextProps
                }
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                label="Image"
                {...form.register("image")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  form.register("image").onChange(e);
                  setImagePreview(e.target.value);
                }}
                inputProps={{ "data-cy": "product-image" }}
                error={Boolean(form.formState.errors.image)}
                helperText={form.formState.errors.image?.message}
                FormHelperTextProps={
                  {
                    "data-cy": "product-image-error",
                  } as FormHelperTextProps
                }
              />
            </Grid>

            <Grid item xs={12}>
            <TextField
                variant="outlined"
                label="Slug"
                {...form.register("slug")}
                error={Boolean(form.formState.errors.slug)}
                helperText={form.formState.errors.slug?.message}
                inputProps={{ "data-cy": "product-slug" }}
              />
            </Grid>
          </Grid>
          <Grid container>
          <Button
          data-cy="product-form"
          type="submit"
          onClick={form.handleSubmit(save)}
          color="secondary"
          variant="outlined"
          sx={{
            bgcolor: "#000",
            borderColor: "#000",
            marginTop: "2rem",
            "&:hover": {
              bgcolor: "#333",
              borderColor: "#000",
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "400",
            }}
          >
            {isEdit ? "Update" : "Submit"}
          </Typography>
        </Button>
        </Grid>
        </FormControl>
      </Box>
    </Grid>
    <Grid item xs={12} sm={6}>
    {imagePreview && <img src={imagePreview} alt="Image preview" style={{ width: '250px', height: '250px'}} />}
  </Grid>
  </Grid>
    </Card>
    </Grid>
        </ThemeProvider>

  );
}