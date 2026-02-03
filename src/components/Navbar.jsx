import { Link } from "react-router-dom";
import { Button, Stack, Box, Typography, Toolbar, AppBar } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ backgroundColor: "#fff", color: "#0f4c81" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo + Name */}
        <Box
          component={Link}
          to="/"
          sx={{ display: "flex", alignItems: "center", gap: 1, textDecoration: "none", color: "inherit" }}
        >
          <Box component="img" src="/LOGO.png" alt="SkillAlign" sx={{ width: 56, height: 50 }} />
          <Typography fontWeight={800} fontSize={20}>SkillAlign</Typography>
        </Box>

        {/* Nav Links */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/signup" color="inherit">
            SignUp
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
