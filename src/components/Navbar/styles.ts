import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const ButtonStyled = styled(Button)({
  color: "white",
  borderColor: "white",
  marginRight: "8vw",
  padding: "0.5rem 1rem",
  "&:hover": {
    borderColor: "#a38358",
    color: "#a38358"
  }
});

export { ButtonStyled };
