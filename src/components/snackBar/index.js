import React from "react";
import Snackbar from "@mui/material/Snackbar";

const FbSnackBar = () => {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      message="Email has been sent!"
    />
  );
};

export { FbSnackBar };
