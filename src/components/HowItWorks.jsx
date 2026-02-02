import { Box, Grid, Paper, Typography } from "@mui/material";

const data = [
  { title: "Upload Resume", desc: "AI reads and scores your resume" },
  { title: "Match with JD", desc: "Exact skill vs JD comparison" },
  { title: "Fix Gaps", desc: "Clear improvement suggestions" },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography textAlign="center" variant="h4" fontWeight={700} mb={4}>
        How It Works
      </Typography>

      <Grid container spacing={3}>
        {data.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper sx={{ p: 4, textAlign: "center" }}>
              <Typography fontWeight={600}>{item.title}</Typography>
              <Typography mt={1} color="text.secondary">
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
