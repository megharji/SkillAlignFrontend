import { Link, useNavigate } from "react-router-dom";
import { Button, Stack, Box, Typography, Toolbar, AppBar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/Auth/loginReducer"; 

const Navbar = () => {
  const { role, isAuthenticated } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{ backgroundColor: "#fff", color: "#0f4c81" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
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

        <Stack direction="row" spacing={3} alignItems="center">

          {!isAuthenticated && (
            <>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/signup" color="inherit">
                SignUp
              </Button>
            </>
          )}

          {isAuthenticated && (
            <>
              <Typography fontWeight={600}>
                {role === "HR" ? "HR Dashboard" : "Job Seeker"}
              </Typography>

              <Button
                onClick={handleLogout}
                sx={{
                  bgcolor: "#0f4c81",
                  color: "#fff",
                  "&:hover": { bgcolor: "#09375f" },
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
