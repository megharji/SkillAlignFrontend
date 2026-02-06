import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import resumeImg from "../../../images/resume.png";
import targetImg from "../../../images/target.png";
import growthImg from "../../../images/growth.png";

/* ---------------- DATA ---------------- */

const companySteps = [
  {
    title: "Upload Multiple Resumes",
    desc: "Upload multiple candidate resumes in one go and organize them for screening.",
    color: "#22c55e",
    img: resumeImg,
  },
  {
    title: "Add Job Description (JD)",
    desc: "Paste or upload the job description. AI extracts skills & requirements from JD.",
    color: "#f59e0b",
    img: targetImg,
  },
  {
    title: "Get Match Scores & Ranking",
    desc: "Get JD match score, rank candidates",
    color: "#3b82f6",
    img: growthImg,
  },
];

const seekerSteps = [
  {
    title: "Upload Your Resume",
    desc: "Upload resume and extract present skills + experience summary.",
    color: "#22c55e",
    img: resumeImg,
  },
  {
    title: "Add Multiple Job Descriptions",
    desc: "Paste multiple JDs. Compare each JD with your resume to find best match.",
    color: "#f59e0b",
    img: targetImg,
  },
  {
    title: "Compare, Score & Improve",
    desc: "See JD-wise score, present skills, missing skills summary & improve resume for best match.",
    color: "#3b82f6",
    img: growthImg,
  },
];

/* ---------------- PAGE ---------------- */

export default function HowItWorks() {
  return (
    <Box sx={{ py: 10, bgcolor: "#fff" }}>
      <Container maxWidth="xl">
        <Typography
          textAlign="center"
          fontWeight={900}
          sx={{ fontSize: { xs: 28, md: 40 }, mb: 5, color: "#0f172a" }}
        >
          How It Works
        </Typography>

        {/* ✅ Side-by-side layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 6, md: 6 },
            alignItems: "start",
          }}
        >
          <TimelineColumn
            heading="For Employers (HR / Company)"
            sub="Upload resumes + JD and get ranking & scores."
            steps={companySteps}
            accent="#0f4c81"
          />

          <TimelineColumn
            heading="For Job Seekers"
            sub="Upload resume + multiple JDs, compare & improve."
            steps={seekerSteps}
            accent="#f97316"
          />
        </Box>
      </Container>
    </Box>
  );
}

/* ---------------- COLUMN ---------------- */

function TimelineColumn({ heading, sub, steps, accent }) {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          steps.forEach((_, idx) => {
            setTimeout(() => setActive(idx), idx * 260);
          });
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [steps]);

  return (
    <Box
      ref={wrapRef}
      sx={{
        border: "1px solid #e6eaf2",
        borderRadius: 4,
        p: { xs: 2.5, md: 3 },
        boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
        bgcolor: "#fff",
      }}
    >
      <Typography
        fontWeight={900}
        sx={{ fontSize: { xs: 18, md: 22 }, color: accent, mb: 0.5 }}
      >
        {heading}
      </Typography>
      <Typography sx={{ color: "#64748b", fontSize: 13.5, mb: 3 }}>
        {sub}
      </Typography>

      {/* Timeline area */}
      <Box sx={{ position: "relative" }}>
        {/* Center vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 3,
            transform: "translateX(-50%)",
            bgcolor: "#e6eaf2",
            borderRadius: 999,
          }}
        />

        {steps.map((item, i) => {
          const shown = i <= active;
          const leftImg = i % 2 === 0;

          return (
            <Box
              key={i}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 90px 1fr",
                alignItems: "center",
                mb: 4.5,

                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(16px)",
                transition: "all 600ms ease",
              }}
            >
              {/* LEFT (near center) */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", pr: 2 }}>
                {leftImg ? (
                  <CircleImage img={item.img} color={item.color} size={88} />
                ) : (
                  <TextBlock title={item.title} desc={item.desc} align="right" />
                )}
              </Box>

              {/* CENTER NODE */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  minHeight: 90,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: "#0b1220",
                    border: `4px solid ${item.color}`,
                    boxShadow: "0 10px 26px rgba(0,0,0,0.18)",
                    display: "grid",
                    placeItems: "center",
                    zIndex: 2,
                  }}
                >
                  <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: 14 }}>
                    {String(i + 1).padStart(2, "0")}
                  </Typography>
                </Box>

                {/* connector lines */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    height: 3,
                    transform: "translateY(-50%)",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      width: "50%",
                      height: 3,
                      bgcolor: leftImg ? item.color : "#e6eaf2",
                      borderRadius: 999,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      right: 0,
                      width: "50%",
                      height: 3,
                      bgcolor: !leftImg ? item.color : "#e6eaf2",
                      borderRadius: 999,
                    }}
                  />
                </Box>
              </Box>

              {/* RIGHT (near center) */}
              <Box sx={{ display: "flex", justifyContent: "flex-start", pl: 2 }}>
                {!leftImg ? (
                  <CircleImage img={item.img} color={item.color} size={88} />
                ) : (
                  <TextBlock title={item.title} desc={item.desc} align="left" />
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

/* ---------------- HELPERS ---------------- */

function CircleImage({ img, color, size = 110 }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        overflow: "hidden",
        bgcolor: "#fff",
        border: "1px solid #e6eaf2",
        boxShadow: "0 12px 35px rgba(0,0,0,0.10)",
        outline: `6px solid ${color}22`,
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        component="img"
        src={img}
        alt="step"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </Box>
  );
}

function TextBlock({ title, desc, align }) {
  return (
    <Box sx={{ textAlign: align, maxWidth: 240 }}>
      <Typography sx={{ fontWeight: 900, fontSize: 16, color: "#0f172a", mb: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#64748b", fontSize: 12.8, lineHeight: 1.6 }}>
        {desc}
      </Typography>
    </Box>
  );
}
