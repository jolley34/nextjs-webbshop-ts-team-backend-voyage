import {
  Button,
  FormControl,
  FormHelperTextProps,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";
import { theme } from "../app/themes/themes";

const formSchema = z.object({
  name: z.string().nonempty(),
  address: z.string().nonempty(),
  phoneNumber: z.string().nonempty().min(5),
  email: z.string().email().min(5).nonempty(),
  zipCode: z.string().regex(/^\d{5}$/i, { message: "Invalid zip code" }),
  city: z.string().nonempty(),
});

interface FormErrors {
  name?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  zipCode?: string;
  city?: string;
}

const CustomerForm = () => {
  const [formData, setFormData] = useState<FormErrors>({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    zipCode: "",
    city: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();
  const [allowNavigation, setAllowNavigation] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setAllowNavigation(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await formSchema.parseAsync(formData);
      console.log("Formulärdata:", formData);
      router.push("/confirmation");
      localStorage.setItem("formData", JSON.stringify(formData));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(
          error.errors.reduce((acc: Record<string, string>, err) => {
            acc[err.path[0]] = err.message;
            return acc;
          }, {})
        );
        setAllowNavigation(false);
      }
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          component={"form"}
          container
          onSubmit={handleSubmit}
          data-cy="customer-form"
          spacing={0}
        >
          <Grid item xs={12}>
            <FormControl
              sx={{
                width: "100%",
                marginTop: "4px",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              <TextField
                inputProps={{
                  "data-cy": "customer-name",
                }}
                label="Namn"
                variant="standard"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                helperText={errors.name}
                FormHelperTextProps={
                  { "data-cy": "customer-name-error" } as FormHelperTextProps
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              sx={{
                width: "100%",
                marginTop: "4px",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              <TextField
                inputProps={{
                  "data-cy": "customer-address",
                }}
                label="Adress"
                variant="standard"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                autoComplete="street-address"
                helperText={errors.address}
                FormHelperTextProps={
                  { "data-cy": "customer-address-error" } as FormHelperTextProps
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              sx={{
                width: "100%",
                marginTop: "4px",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              <TextField
                inputProps={{
                  "data-cy": "customer-zipcode",
                }}
                label="Postnummer"
                variant="standard"
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                autoComplete="postal-code"
                helperText={errors.zipCode}
                FormHelperTextProps={
                  { "data-cy": "customer-zipcode-error" } as FormHelperTextProps
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              sx={{
                width: "100%",
                marginTop: "4px",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              <TextField
                inputProps={{
                  "data-cy": "customer-city",
                }}
                label="Stad"
                variant="standard"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                autoComplete="address-level2"
                helperText={errors.city}
                FormHelperTextProps={
                  { "data-cy": "customer-city-error" } as FormHelperTextProps
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              sx={{
                width: "100%",
                marginTop: "4px",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              <TextField
                inputProps={{
                  "data-cy": "customer-email",
                }}
                label="E-post"
                variant="standard"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                helperText={errors.email}
                FormHelperTextProps={
                  { "data-cy": "customer-email-error" } as FormHelperTextProps
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl
              sx={{
                width: "100%",
                marginTop: "4px",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              <TextField
                inputProps={{
                  "data-cy": "customer-phone",
                }}
                label="Telefonnummer"
                variant="standard"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                autoComplete="tel"
                helperText={errors.phoneNumber}
                FormHelperTextProps={
                  { "data-cy": "customer-phone-error" } as FormHelperTextProps
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              color="secondary"
              variant="outlined"
              size="large"
              fullWidth
              sx={{
                bgcolor: "#000",
                borderColor: "#000",
                marginTop: "3rem",
                marginBottom: "3rem",
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
                  fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                }}
              >
                Beställ
              </Typography>{" "}
            </Button>
            {!allowNavigation && (
              <Typography
                sx={{
                  fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                }}
              >
                Vänligen korrigera alla fel innan du fortsätter.
              </Typography>
            )}
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default CustomerForm;
