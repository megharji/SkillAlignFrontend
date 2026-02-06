import { useState, useEffect } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../../redux/reducers/Auth/signupReducer"; 
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const validationSchema = Yup.object({
  username: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const [role, setRole] = useState("HR");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { loading,success } = useSelector((state) => state.signup);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const payload = {
        username: values.username,
        email: values.email,
        role,
        password: values.password,
      };

      try {
        dispatch(signupRequest(payload)); 
        resetForm(); 

        setTimeout(() => {
          navigate("/login");
        }, 300);
      } catch (err) {
        console.log("SIGNUP ERROR ❌", err);
      }
    },
  });

  useEffect(() => {
    if (success) {
      formik.resetForm(); 
      navigate("/login"); 
    }
  }, [success]);

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
          Create your account
        </Typography>

        <Typography
          fontSize={14}
          color="text.secondary"
          textAlign="center"
          mb={3}
        >
          {role === "HR"
            ? "Post jobs, screen resumes, and hire faster."
            : "Find jobs that actually match your skills."}
        </Typography>

        <Tabs
          value={role}
          onChange={(e, val) => setRole(val)}
          variant="fullWidth"
          sx={{
            mb: 3,
            bgcolor: "#f1f3f7",
            borderRadius: 2,
            p: 0.5,
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
            },
            "& .Mui-selected": {
              bgcolor: "#0f4c81",
              color: "#fff !important",
            },
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <Tab label="Company / HR" value="HR" />
          <Tab label="Job Seeker" value="Seeker" />
        </Tabs>

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label={role === "HR" ? "Company / HR Name" : "Full Name"}
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              fullWidth
              required
              sx={{
                "& .MuiFormLabel-asterisk": {
                  color: "red",
                },
              }}
            />

            <TextField
              label="Email "
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              required
              sx={{
                "& .MuiFormLabel-asterisk": {
                  color: "red",
                },
              }}
            />

            <TextField
              label="Password "
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
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiFormLabel-asterisk": { color: "red" },
              }}
            />

            <Button
              type="submit"
              size="large"
              sx={{
                mt: 1,
                bgcolor: "#0f4c81",
                color: "#fff",
                fontWeight: 600,
                "&:hover": { bgcolor: "#09375f" },
                "&:disabled": { bgcolor: "#cbd5e1", color: "#64748b" },
              }}
            >
              {loading
                ? "Signing up..."
                : `Sign Up as ${role === "HR" ? "Company" : "Job Seeker"}`}
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
