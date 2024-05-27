/* eslint-disable @next/next/no-img-element */
"use client";

import { AddNewProductAdmin } from "@/app/server-actions/admin/handler";
import { ProductFormData } from "@/app/server-actions/validation/validation";
import {
  Box,
  Card,
  FormControl,
  FormHelperTextProps,
  Grid,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import theme from "../../../../themes/themes";

interface Props {
  product?: ProductFormData;
}

export default function ProductForm({ product }: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const form = useForm<ProductFormData>();

  const handleCreateProduct = () => {
    const formData = form.getValues();
    AddNewProductAdmin(formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        component={"form"}
        container
        justifyContent="center"
        data-cy="product-form"
      >
        <Card sx={{ width: "60%", padding: "5%" }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={6}>
              <Box sx={{ width: "100%" }}>
                <FormControl>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label="Name"
                        {...form.register("name")}
                        error={Boolean(form.formState.errors.name)}
                        helperText={form.formState.errors.name?.message}
                        inputProps={{ "data-cy": "product-title" }}
                        FormHelperTextProps={
                          {
                            "data-cy": "product-title-error",
                          } as FormHelperTextProps
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
                          {
                            "data-cy": "product-price-error",
                          } as FormHelperTextProps
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
                        error={Boolean(form.formState.errors.image)}
                        helperText={form.formState.errors.image?.message}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label="Video"
                        {...form.register("video")}
                        error={Boolean(form.formState.errors.video)}
                        helperText={form.formState.errors.video?.message}
                      />
                    </Grid>
                  </Grid>

                  <button onClick={handleCreateProduct}>SPARA PRODUKT</button>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Image preview"
                  style={{ width: "250px", height: "250px" }}
                />
              )}
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </ThemeProvider>
  );
}
