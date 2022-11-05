import React from "react";
import Snackbar from "@mui/material/Snackbar";

const FbSnackBar = ({ open, message, setOpen }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      message={message}
      onClose={() => setOpen(false)}
    />
  );
};

export { FbSnackBar };
