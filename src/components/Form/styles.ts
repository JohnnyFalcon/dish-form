import { styled } from "@mui/material/styles";
import { TextField, FormControl, Button } from "@mui/material";

const TextFieldStyled = styled(TextField)({
  "& .MuiInputLabel-shrink": {
    color: "#755e42",
    fontSize: "1.2rem"
  },

  "& legend": {
    width: "5.5rem"
  },

  "& label.Mui-focused": {
    color: "#755e42",
    fontSize: "1.2rem"
  },
  "& .MuiInput-underline:after": {
    borderColor: "white"
  },
  "& .MuiOutlinedInput-input": {
    width: "15rem",
    paddingLeft: "10px",
    paddingRight: "10px"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8f8f8f"
    },
    "&:hover fieldset": {
      borderColor: "black"
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #a38358"
    }
  },
  "& .MuiTextField-root": {
    fontSize: "1rem",
    color: "#424242",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 300,
    width: "15rem",
    height: "3.5rem",
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: "1px solid #a38358",
    padding: "0 0.5rem"
  },

  "& .MuiTextField-root:focus": {
    borderColor: "#a38358"
  }
});

const FormControlSt = styled(FormControl)({
  marginBottom: "2rem"
});
const ButtonStyled = styled(Button)({
  color: "white",
  backgroundColor: "#755e42",
  "&:hover": { backgroundColor: "#424242" }
});

export { TextFieldStyled, FormControlSt, ButtonStyled };
