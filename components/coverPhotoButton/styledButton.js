import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledButton = styled((props) => <Button {...props} />)(() => ({
  justifyContent: "space-between",
  minWidth: 16,
  width: useMediaQuery("(max-width:900px)") ? 48 : 153,
  height: 36,
  padding: useMediaQuery("(max-width:900px)") ? "0 16px" : "0 12px",
  borderRadius: 6,
  fontSize: 14,
  lineHeight: 1.3333,
  fontWeight: 600,
  fontFamily: "'Segoe UI Historic', 'Segoe UI', Helvetica, Arial, sans-serif",
  textTransform: "none",
  color: "rgb(5, 5, 5)",
  backgroundColor: "rgb(255, 255, 255)",
  "&:hover": {
    backgroundColor: "rgb(242, 242, 242)",
  },
}));

export default StyledButton;
