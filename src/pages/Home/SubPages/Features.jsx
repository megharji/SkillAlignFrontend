import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle, Checklist, Report, Person } from "@mui/icons-material";

const features = [
  { title: "Resume Score %", icon: <CheckCircle fontSize="large" /> },
  { title: "JD Skill Match %", icon: <Checklist fontSize="large" /> },
  { title: "Missing Skills Detection", icon: <Report fontSize="large" /> },
  { title: "HR Friendly Reports", icon: <Person fontSize="large" /> },
];

const Features = () => {
  return (
    <Box sx={{ py: 12, bgcolor: "#f0f4f8" }}>
      <Typography textAlign="center" variant="h4" fontWeight={700} mb={10}>
        Why SkillAlign?
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={8}
        justifyContent="center"
        alignItems="center"
      >
        {features.map((f, i) => (
          <Stack key={i} spacing={2} alignItems="center" sx={{ position: "relative" }}>
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                bgcolor: "#00bcd4",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
              }}
            >
              {f.icon}
            </Box>
            <Typography fontWeight={600} fontSize={18} textAlign="center">
              {f.title}
            </Typography>
            {/* Connecting line for row */}
            {i !== features.length - 1 && (
              <Box
                sx={{
                  position: "absolute",
                  top: "35px",
                  left: "50%",
                  width: "150%",
                  height: 3,
                  bgcolor: "#cfd8dc",
                  zIndex: -1,
                  display: { xs: "none", md: "block" },
                }}
              />
            )}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Features;
