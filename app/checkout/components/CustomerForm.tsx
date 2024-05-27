"use client";

import {
  AddressCreate,
  AddressCreateSchema,
} from "@/app/server-actions/validation/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCart } from "../../context/CartContext";
import { saveOrder } from "../../server-actions/orders/handler";

export default function CustomerForm() {
  const form = useForm<AddressCreate>({
    resolver: zodResolver(AddressCreateSchema),
  });
  const { cart, clearLocalStorage } = useCart();

  const {
    formState: { errors },
  } = form;

  const handleSubmit = async (data: AddressCreate) => {
    await saveOrder(data, cart);
    form.reset();
    clearLocalStorage();
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      {" "}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "100",
          marginTop: "1.5rem",
          fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Leveransuppgifter
      </Typography>
      <FormControl fullWidth>
        <TextField
          {...form.register("firstName")}
          label="Förnamn"
          variant="standard"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />

        <TextField
          {...form.register("lastName")}
          label="Efternamn"
          variant="standard"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />

        <TextField
          {...form.register("city")}
          label="Stad"
          variant="standard"
          error={!!errors.city}
          helperText={errors.city?.message}
        />

        <TextField
          {...form.register("zipcode")}
          label="Postnummer"
          variant="standard"
          error={!!errors.zipcode}
          helperText={errors.zipcode?.message}
        />

        <TextField
          {...form.register("street")}
          label="Adress"
          variant="standard"
          error={!!errors.street}
          helperText={errors.street?.message}
        />

        <TextField
          {...form.register("phoneNumber")}
          label="Telefonnummer"
          variant="standard"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />
      </FormControl>
      <Button
        onSubmit={form.handleSubmit(handleSubmit)}
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "#0072e4",
          borderRadius: "10px",
          "&:hover": { bgcolor: "#0264C5" },
        }}
      >
        Lägg Order
      </Button>
    </Box>
  );
}
