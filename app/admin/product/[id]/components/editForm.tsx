/* eslint-disable @next/next/no-img-element */
"use client";

import { EditProduct } from "@/app/server-actions/admin/handler";
import { ProductFormData } from "@/app/server-actions/validation/validation";
import {
  Box,
  Card,
  FormControl,
  FormHelperTextProps,
  Grid,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import theme from "../../../../themes/themes";

interface Category {
  id: string;
  name: string;
}

interface Props {
  product?: ProductFormData;
  categories: Category[];
}

export default function EditForm({ product, categories }: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      categories: product?.categories || [],
    },
  });

  const handleEditProduct = async (formData: ProductFormData) => {
    if (!formData.categories) {
      formData.categories = [];
      await EditProduct(product.id, formData);
    }

    return (
      <ThemeProvider theme={theme}>
        <Grid
          component={"form"}
          container
          justifyContent="center"
          data-cy="product-form"
          onSubmit={handleSubmit(handleEditProduct)}
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
                          {...register("name")}
                          error={Boolean(errors.name)}
                          helperText={errors.name?.message}
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
                          {...register("price")}
                          error={Boolean(errors.price)}
                          helperText={errors.price?.message}
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
                          {...register("description")}
                          error={Boolean(errors.description)}
                          helperText={errors.description?.message}
                          inputProps={{ "data-cy": "product-description" }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          label="Image"
                          {...register("image")}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            register("image").onChange(e);
                            setImagePreview(e.target.value);
                          }}
                          error={Boolean(errors.image)}
                          helperText={errors.image?.message}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          label="Video"
                          {...register("video")}
                          error={Boolean(errors.video)}
                          helperText={errors.video?.message}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <Typography>Choose categories</Typography>
                          <Controller
                            name="categories"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                              <Select {...field} multiple variant="outlined">
                                {categories.map((category) => (
                                  <MenuItem
                                    key={category.id}
                                    value={category.id}
                                  >
                                    {category.name}
                                  </MenuItem>
                                ))}
                              </Select>
                            )}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                    <button type="submit">UPPDATERA PRODUKT</button>
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
  };
}
