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
import { Prisma } from "@prisma/client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import theme from "../../../../themes/themes";

interface Category {
  id: string;
  name: string;
}

interface Props {
  productId: string;
  product?: ProductFormData;
  categories: Category[];
  name: string;
  price: Prisma.Decimal;
  description: string;
  image: string;
  video: string;
  stock: number;
}

export default function EditForm({
  categories,
  name,
  price,
  description,
  image,
  video,
  stock,
  productId,
}: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>();

  const handleEditProduct = async (formData: ProductFormData) => {
    await EditProduct(productId, formData);
  };

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
                        label={name}
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
                        label={price.toString()}
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
                        label={description}
                        {...register("description")}
                        error={Boolean(errors.description)}
                        helperText={errors.description?.message}
                        inputProps={{ "data-cy": "product-description" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label={image}
                        {...register("image")}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                        label={video}
                        {...register("video")}
                        error={Boolean(errors.video)}
                        helperText={errors.video?.message}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        label="Stock"
                        {...register("stock", { valueAsNumber: true })}
                        defaultValue={stock}
                        error={Boolean(errors.stock)}
                        helperText={errors.stock?.message}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <Typography>Choose new category</Typography>

                        <Controller
                          name="categories"
                          control={control}
                          defaultValue={[]}
                          render={({ field }) => (
                            <Select {...field} multiple variant="outlined">
                              {categories.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                  {category.name}
                                </MenuItem>
                              ))}
                            </Select>
                          )}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <button
                    type="submit"
                    style={{
                      background: "#0072e4",
                      border: "none",
                      padding: "0.5rem",
                      borderRadius: "20px",
                      color: "white",
                      cursor: "pointer",
                      width: "100%",
                      marginTop: "1rem",
                    }}
                  >
                    UPDATE
                  </button>
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
