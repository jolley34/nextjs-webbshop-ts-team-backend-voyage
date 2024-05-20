import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import GitHubSignInButton from "../components/GitHubSignInButton";
import theme from "../themes/themes";

export default function SignIn() {
  // const form = useForm<UserSignIn>({
  //   resolver: zodResolver(UserSignInSchema),
  // });
  // const router = useRouter();

  // const handleSubmit = async (data: UserSignIn) => {
  //   try {
  //     await signInUser(data);
  //     router.push("/");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={form.handleSubmit(handleSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              // {...form.register("username")}
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              // {...form.register("password")}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Divider>Or</Divider>
            <GitHubSignInButton />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/sign-up"
                  // variant="body2"
                  style={{ color: "black" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
