import { Box, Typography, Button, Stack } from "@mui/material";
import heroImg from "../../../images/hero.png";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 39%",
        px: { xs: 3, md: 10 },
      }}
    >
      <Box maxWidth="600px">
        <Typography
          variant="h2"
          fontWeight={800}
          color="white"
          lineHeight={1.2}
        >
          Align Your Skills <br />
          with the <span style={{ color: "#90caf9" }}>Perfect Career</span>
        </Typography>

        <Typography mt={2} color="#e3f2fd">
          Optimize your resume and discover your ideal job matches with
          AI-powered skill alignment.
        </Typography>

        <Stack direction="row" spacing={2} mt={4}>
          <Button size="large" variant="contained" sx={{ bgcolor: "#ff9800" }}>
            Get Started
          </Button>

        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
