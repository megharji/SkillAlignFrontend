import { Box, Container, Typography, Paper, Avatar } from "@mui/material";

const LOGO = "/LOGO.png";

/**
 * ✅ Put avatars here (optional)
 * public/testimonials/u1.jpg ... u8.jpg
 */
const cards = [
  {
    id: 1,
    name: "Seema Sharma",
    role: "HR Manager • Indore",
    text: "Candidates shortlist karna ab 10x fast ho gaya. JD match score accurate hai.",
    rating: 5,
    avatar: "/testimonials/u1.jpg",
    style: { left: "2%", top: "10%", width: 320 },
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Talent Acquisition • Pune",
    text: "Multiple resumes upload + ranking feature best. Missing skills clear dikhte hain.",
    rating: 5,
    avatar: "/testimonials/u2.jpg",
    style: { left: "8%", top: "44%", width: 300 },
  },
  {
    id: 3,
    name: "Aditi Kulkarni",
    role: "Job Seeker • Mumbai",
    text: "Resume vs multiple JDs compare karke best match mil gaya. Resume improve ho gaya!",
    rating: 5,
    avatar: "/testimonials/u3.jpg",
    style: { left: "37%", top: "6%", width: 360 },
    tag: "EXCELLENT JOB!",
  },
  {
    id: 4,
    name: "Nikhil Gupta",
    role: "Recruiter • Delhi",
    text: "Skill gap summary ka UI clean hai. Hiring decisions easy ho gaye.",
    rating: 4,
    avatar: "/testimonials/u4.jpg",
    style: { right: "3%", top: "12%", width: 320 },
  },
  {
    id: 5,
    name: "Priya Nair",
    role: "Job Seeker • Bengaluru",
    text: "Present skills + missing skills list ne resume perfect kar diya. Super helpful!",
    rating: 5,
    avatar: "/testimonials/u5.jpg",
    style: { right: "6%", top: "44%", width: 300 },
  },
  {
    id: 6,
    name: "Mohit Jain",
    role: "HR Lead • Jaipur",
    text: "Top-notch. Score + rank + summary ek hi jagah milta hai. Superb!",
    rating: 5,
    avatar: "/testimonials/u6.jpg",
    style: { left: "22%", top: "68%", width: 320 },
  },

  {
    id: 7,
    name: "Arjun Singh",
    role: "Founder • Hiring Studio",
    text: "Workflow simple + powerful. Teams ko recommend karunga.",
    rating: 5,
    avatar: "/testimonials/u8.jpg",
    style: { right: "18%", top: "70%", width: 320 },
  },
];

const stars = (n = 5) => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);

export default function Testimonials() {
  return (
    <Box sx={{ py: 10, bgcolor: "#f5f7fb", position: "relative", overflow: "hidden" }}>
      {/* subtle blobs like your website */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 12% 20%, rgba(30,58,138,0.08), transparent 38%), radial-gradient(circle at 88% 30%, rgba(15,118,110,0.08), transparent 40%), radial-gradient(circle at 45% 85%, rgba(99,102,241,0.06), transparent 42%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          textAlign="center"
          fontWeight={900}
          sx={{ fontSize: { xs: 26, md: 38 }, color: "#0f4c81", mb: 1 }}
        >
          Testimonials
        </Typography>
     

        {/* ✅ Desktop: spaced collage (NO OVERLAP) */}
        <Box
          sx={{
            position: "relative",
            height: 560,
            display: { xs: "none", md: "block" },
          }}
        >
          {cards.map((c) => (
            <CardItem key={c.id} c={c} />
          ))}
        </Box>

        {/* ✅ Mobile: stack */}
        <Box sx={{ display: { xs: "grid", md: "none" }, gap: 2.2 }}>
          {cards.map((c) => (
            <CardItem key={c.id} c={{ ...c, style: { width: "100%" } }} isMobile />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function CardItem({ c, isMobile = false }) {
  return (
    <Paper
      elevation={0}
      sx={{
        position: isMobile ? "relative" : "absolute",
        ...c.style,
        borderRadius: 4,
        bgcolor: "#fff",
        border: "1px solid #e6eaf2",
        boxShadow: "0 16px 48px rgba(2, 6, 23, 0.10)",
        p: 2.3,
        transition: "0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 24px 65px rgba(2, 6, 23, 0.14)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.1 }}>
        <Avatar
          src={c.avatar}
          sx={{ width: 42, height: 42, bgcolor: "#eaf2ff", border: "2px solid #e6eaf2" }}
        >
          {c.name?.[0]}
        </Avatar>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontWeight: 900, color: "#0f172a", lineHeight: 1.1 }}>
            {c.name}
          </Typography>
          <Typography sx={{ fontSize: 12.5, color: "#64748b" }}>{c.role}</Typography>
        </Box>

        <Box
          component="img"
          src={LOGO}
          alt="SkillAlign"
          sx={{ width: 30, height: 30, objectFit: "contain", opacity: 0.95 }}
        />
      </Box>

      {c.tag ? (
        <Typography sx={{ fontWeight: 900, color: "#0f4c81", mb: 0.5, fontSize: 13 }}>
          {c.tag}
        </Typography>
      ) : null}

      <Typography sx={{ color: "#334155", fontSize: 13.6, lineHeight: 1.7, mb: 1.2 }}>
        “{c.text}”
      </Typography>

      <Typography sx={{ color: "#f59e0b", fontSize: 14, letterSpacing: 1 }}>
        {stars(c.rating)}
      </Typography>
    </Paper>
  );
}
