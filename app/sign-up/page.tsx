import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signUpUser } from "../actions/userActions";
import theme from "../themes/themes";
import { UserCreate, UserCreateSchema } from "../validation/validation";

export default function SignUp() {
  const form = useForm<UserCreate>({
    resolver: zodResolver(UserCreateSchema),
  });

  const router = useRouter();

  const handleSubmit = async (data: UserCreate) => {
    try {
      await signUpUser(data);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        sx={{
          bgcolor: "#f6f5f3",
          padding: "1rem",
          minHeight: "50vh",
          paddingTop: { xs: "97px", sm: "104px", md: "104px" },
        }}
      >
        <Box
          sx={{
            margin: "8rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            padding: "2rem",
            boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={form.handleSubmit(handleSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  {...form.register("firstname")}
                  // error={!!errors.firstName}
                  // helperText={errors.firstName && errors.firstName.message}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  {...form.register("lastname")}
                  // error={!!errors.lastName}
                  // helperText={errors.lastName && errors.lastName.message}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  {...form.register("username")}
                  // error={!!errors.email}
                  // helperText={errors.email && errors.email.message}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  {...form.register("password")}
                  // error={!!errors.password}
                  // helperText={errors.password && errors.password.message}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/sign-in"
                  // variant="body2"
                  style={{ color: "black" }}
                >
                  {" Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
