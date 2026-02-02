import { Paper, TextField, Button, Typography } from "@mui/material";

const AuthCard = () => {
  return (
    <Paper sx={{ maxWidth: 420, mx: "auto", p: 4 }}>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Create Account
      </Typography>

      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />

      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Paper>
  );
};

export default AuthCard;
