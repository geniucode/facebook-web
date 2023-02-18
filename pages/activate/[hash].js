import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Zoom from "@mui/material/Zoom";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { FbSnackBar } from "../../components/snackBar";
import { useActivate } from "./useActivate";

const ActivateUser = () => {
  const { snackMsg, containerDiv, isLoading, isActivted, setSnackMsg } =
    useActivate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        gap: 8,
        fontSize: 20,
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
      ref={containerDiv}
    >
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="Facebook"
        width={180}
      ></img>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 288,
          height: 98,
          padding: 3,
          borderRadius: 2,
          backgroundColor: "white",
          boxShadow: 1,
        }}
      >
        <div>Activating account ... </div>
        {isLoading ? (
          <CircularProgress />
        ) : isActivted ? (
          <Zoom in={true}>
            <CheckIcon
              sx={{ fontSize: 35, marginRight: "3px", color: "green" }}
            />
          </Zoom>
        ) : (
          <Zoom in={true}>
            <CloseIcon
              sx={{ fontSize: 35, marginRight: "3px", color: "red" }}
            />
          </Zoom>
        )}
      </Box>
      {snackMsg && (
        <FbSnackBar
          message={snackMsg}
          open={snackMsg && true}
          setOpen={() => setSnackMsg("")}
        />
      )}
    </div>
  );
};

export default ActivateUser;
