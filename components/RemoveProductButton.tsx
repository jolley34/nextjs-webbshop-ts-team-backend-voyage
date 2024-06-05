import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";

import theme from "../app/themes/themes";

interface Props {
  productId: string;
}

function RemoveProductButton({ productId }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleClick}
          data-cy="admin-remove-product"
          sx={{
            bgcolor: "#000",
            borderColor: "#000",

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
            Radera
          </Typography>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            sx={{ fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif" }}
          >
            {"Bekräfta borttagning"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{
                fontFamily: "'Futura', 'Trebuchet MS', 'Arial', sans-serif",
              }}
            >
              Är du säker på att du vill ta bort denna produkt? Det går inte att
              ångra denna åtgärd.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              sx={{
                bgcolor: "#000",
                borderColor: "#000",

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
                Avbryt
              </Typography>
            </Button>
            <Button
              data-cy="confirm-delete-button"
              onClick={handleConfirm}
              color="secondary"
              sx={{
                bgcolor: "#000",
                borderColor: "#000",

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
                Bekräfta borttagning
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default RemoveProductButton;
