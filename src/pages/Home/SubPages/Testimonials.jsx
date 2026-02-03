import { Box, Paper, Typography } from "@mui/material";

const Testimonials = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
        Users Love SkillAlign
      </Typography>

      <Paper sx={{ maxWidth: 600, mx: "auto", p: 4, textAlign: "center" }}>
        <Typography fontWeight={600}>Frontend Developer</Typography>
        <Typography mt={1} color="text.secondary">
          Got exact skill gaps. Resume shortlist rate improved.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Testimonials;
