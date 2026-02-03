import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#cbd5e1",
          },
          "&:hover fieldset": {
            borderColor: "#94a3b8",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#0f4c81",
            borderWidth: 2,
          },
        },
      },
    },
  },
});


export default theme;
