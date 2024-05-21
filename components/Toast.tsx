"use client";

import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

interface ToastProps {
  open: boolean;
  onClose: () => void;
}

const SlideTransition = (props: any) => {
  return <Slide {...props} direction="up" />;
};

const Toast: React.FC<ToastProps> = ({ open, onClose }) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    ></IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      message={"Snyggt! Produkten har lagts till."}
      action={action}
      key={SlideTransition.name}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      data-cy="added-to-cart-toast"
    />
  );
};

export default Toast;
