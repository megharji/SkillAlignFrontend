import { AppBar, Toolbar, Button, Typography, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

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
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            component="img"
            src="/LOGO.png"
            alt="SkillAlign"
            sx={{ width: 56, height: 50 }}
          />
          <Typography fontWeight={800} fontSize={20}>
            SkillAlign
          </Typography>
        </Box>

        {/* Nav Links */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">FAQs</Button>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 3,
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
