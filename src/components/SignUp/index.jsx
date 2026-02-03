import { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const SignUp = () => {
  const [role, setRole] = useState("HR");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const payload = {
      ...form,
      role,
    };
    console.log("SIGNUP PAYLOAD 👉", payload);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f4f6fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: 420,
          bgcolor: "#fff",
          p: 4,
          borderRadius: 4,
          boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
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
          Choose how you want to use SkillAlign
        </Typography>

        {/* 🔥 Premium Tabs */}
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
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="Company / HR" value="HR" />
          <Tab label="Job Seeker" value="JOB_SEEKER" />
        </Tabs>

        {/* Context Text */}
        <Typography fontSize={14} mb={2} color="text.secondary">
          {role === "HR"
            ? "Post jobs, screen resumes, and hire faster."
            : "Find jobs that actually match your skills."}
        </Typography>

        {/* Form */}
        <Stack spacing={2}>
          <TextField
            label={role === "HR" ? "Company / HR Name" : "Full Name"}
            name="username"
            value={form.username}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
          />

          <Button
            size="large"
            onClick={handleSubmit}
            sx={{
              mt: 1,
              bgcolor: "#0f4c81",
              color: "#fff",
              fontWeight: 600,
              "&:hover": { bgcolor: "#09375f" },
            }}
          >
            Sign Up as {role === "HR" ? "Company" : "Job Seeker"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUp;
