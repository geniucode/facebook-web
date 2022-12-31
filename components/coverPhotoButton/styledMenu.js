import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 180,
    color: "rgb(5, 5, 5)",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px",
    "& .MuiMenu-list": {
      padding: "8px 0",
      "& .MuiMenuItem-root": {
        width: 328,
        minHeight: 36,
        padding: 8,
        margin: "0 8px",
        borderRadius: 4,
      },
    },
  },
}));

export default StyledMenu;