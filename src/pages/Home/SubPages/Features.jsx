import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import resumeAnalysis from "../../../images/resume-analysis.png";
import growth1 from "../../../images/growth1.png";
import missingSkills from "../../../images/missing-skills.png";
import careerReco from "../../../images/career-reco.png";

const features = [
  {
    title: "Resume Analysis",
    desc: "Get detailed insights into skills and improvements",
    img: resumeAnalysis,
  },
  {
    title: "Skill Rating & Matching",
    desc: "Score candidates based on skill compatibility",
    img: growth1,
  },
  {
    title: "Missing Skill Detection",
    desc: "Identify missing skills and areas for improvement",
    img: missingSkills,
  },
  {
    title: "Job Description Matching",
    desc: "Compare your resume with multiple job descriptions and find the best match",
    img: careerReco,
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          features.forEach((_, idx) => {
            setTimeout(() => setActiveIndex(idx), idx * 220);
          });
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Box ref={sectionRef} sx={{ py: 7, bgcolor: "#f5f7fb" }}>
      <Container maxWidth="lg">
        <Typography
          textAlign="center"
          fontWeight={900}
          sx={{ fontSize: { xs: 22, md: 32 }, color: "#0f4c81", mb: 5 }}
        >
          Powerful Features
        </Typography>

        <Grid container spacing={3} wrap="nowrap" >
          {features.map((f, idx) => {
            const shown = idx <= activeIndex;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={f.title}
                sx={{
                  minWidth: 260, // ✅ keeps cards visible in one line
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translateY(0px)" : "translateY(16px)",
                  transition: "all 550ms ease",
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    height: "100%",
                    border: "1px solid #e6eaf2",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.10)",
                    },
                    transition: "all 250ms ease",
                  }}
                >
                  <Box
                    component="img"
                    src={f.img}
                    alt={f.title}
                    sx={{
                      width: "210px",
                      height: 110,
                      objectFit: "cover",
                      mb: 1.5,
                    }}
                  />

                  <Typography
                    fontWeight={900}
                    sx={{ color: "#0f4c81", fontSize: 16, mb: 0.5 }}
                  >
                    {f.title}
                  </Typography>

                  <Typography fontSize={13.5} color="text.secondary">
                    {f.desc}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
