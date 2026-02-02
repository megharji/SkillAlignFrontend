import { Box, Grid, Typography } from "@mui/material";

const features = [
  "Resume Score %",
  "JD Skill Match %",
  "Missing Skills Detection",
  "HR Friendly Reports",
];

const Features = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#fafafa" }}>
      <Typography textAlign="center" variant="h4" fontWeight={700} mb={4}>
        Why SkillAlign?
      </Typography>

      <Grid container spacing={3}>
        {features.map((f, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Typography textAlign="center" fontWeight={600}>
              {f}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
