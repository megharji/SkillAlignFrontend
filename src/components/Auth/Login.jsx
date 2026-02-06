import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/reducers/Auth/loginReducer";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { loading, isAuthenticated } = useSelector((state) => state.login);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const payload = {
        email: values.email,
        password: values.password,
      };

      dispatch(loginRequest(payload));
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      formik.resetForm();
      navigate("/"); // 🔁 login success ke baad jahan bhejna hai (e.g. /dashboard)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        background: `
          radial-gradient(circle at top left, #1e3a8a, transparent 40%),
          radial-gradient(circle at bottom right, #0f766e, transparent 40%),
          linear-gradient(135deg, #020617, #020617)
        `,
      }}
    >
      <Box
        sx={{
          width: 420,
          p: 4,
          borderRadius: 4,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
        }}
      >
        <Typography fontSize={24} fontWeight={800} textAlign="center" mb={1}>
          Login
        </Typography>

        <Typography
          fontSize={14}
          color="text.secondary"
          textAlign="center"
          mb={3}
        >
          Enter your credentials to continue.
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              required
              sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}
            />

            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((p) => !p)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiFormLabel-asterisk": { color: "red" } }}
            />

            <Button
              type="submit"
              size="large"
              disabled={loading}
              sx={{
                mt: 1,
                bgcolor: "#0f4c81",
                color: "#fff",
                fontWeight: 600,
                "&:hover": { bgcolor: "#09375f" },
                "&:disabled": { bgcolor: "#cbd5e1", color: "#64748b" },
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
