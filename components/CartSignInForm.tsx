import {
  Button,
  FormControl,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";
import { theme } from "../app/themes/themes";
import GitHubSignInButton from "./GitHubSignInButton";

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

const CartSignInForm = () => {
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
            <Typography
              variant="h6"
              sx={{
                fontWeight: "100",
                marginTop: "2rem",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Sign in to complete order
            </Typography>
            <FormControl
              sx={{
                width: "100%",
                marginTop: "4px",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              <TextField
                label="Username"
                variant="standard"
                type="text"
                name="username"
                onChange={handleChange}
                autoComplete="username"
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
                label="Password"
                variant="standard"
                type="text"
                name="password"
                onChange={handleChange}
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
                Sign in
              </Typography>{" "}
            </Button>
            <Typography
              sx={{
                color: "black",
                fontWeight: "400",
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              Or sign in with GitHub
            </Typography>{" "}
            <GitHubSignInButton />
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

export default CartSignInForm;
