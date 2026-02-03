import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import resumeImg from "../../../assets/resume.png";
import targetImg from "../../../assets/target.png";
import growthImg from "../../../assets/growth.png";

const data = [
  {
    title: "Analyze Your Resume",
    desc: "Upload your resume and let our AI analyze your skills, highlighting strengths.",
    step: "Step 1",
    color: "#22c55e",
    img: resumeImg,
  },
  {
    title: "Get Matched with Best Jobs",
    desc: "Discover top job matches tailored to your skills and experience.",
    step: "Step 2",
    color: "#f59e0b",
    img: targetImg,
  },
  {
    title: "Boost Your Career",
    desc: "Receive actionable insights to improve your resume and get hired.",
    step: "Step 3",
    color: "#22c55e",
    img: growthImg,
  },
];

const HowItWorks = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={6}>
        How It Works
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {data.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 14px 40px rgba(0,0,0,0.08)",
                backgroundColor: "#fff",
                maxWidth: 390,
                mx: "auto",
              }}
            >
              {/* Illustration Section */}
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, #eaf2ff 0%, #ffffff 100%)",
                  // p: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 130,
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    height: 110,
                  }}
                />
              </Box>

              {/* Content Section */}
              <Box sx={{ p: 4 }}>
                <Typography fontSize={22} fontWeight={700} mb={1}>
                  {item.title}
                </Typography>

                <Typography fontSize={14} color="text.secondary" mb={3}>
                  {item.desc}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  {/* Step Badge */}
                  <Box
                    sx={{
                      px: 2.5,
                      py: 0.7,
                      borderRadius: 20,
                      backgroundColor: item.color,
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.step}
                  </Box>

                  {/* Colored Line */}
                  <Box
                    sx={{
                      height: 2,
                      width: 400,
                      backgroundColor: item.color,
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorks;
