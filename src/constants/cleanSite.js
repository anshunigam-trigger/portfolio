import { featuredProjects, stats } from "../../data/projects";

export const siteProfile = {
  name: "Anshu Nigam",
  role: "AI/ML Engineer \u00b7 Backend Builder",
  target: "3rd-year CSE student \\u00b7 Seeking SWE / AI-ML internships",
  location: "Kolkata, India",
  email: "nigamanshu188@gmail.com",
  github: "https://github.com/anshunigam-trigger",
  linkedin: "https://linkedin.com/in/anshu-nigam",
  resume: "/resume.pdf",
  headlineWords: ["AI systems", "FastAPI backends", "fog-computing RL"],
  summary: "I build ML systems with explainability, FastAPI backends, and a fog-computing RL paper under review at IJACSA.",
};

export const paperUrl = featuredProjects[0].paperUrl;

export const navItems = [
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI", href: "#ai" },
  { label: "Backend", href: "#backend" },
  { label: "Contact", href: "#contact" },
];

export { featuredProjects, stats };

export const skills = {
  Languages: ["Python", "Java", "C"],
  ML: ["scikit-learn", "XGBoost", "SHAP", "TensorFlow", "CNNs", "NLP", "Q-Learning", "Fuzzy logic"],
  Backend: ["FastAPI", "Node.js"],
  Frontend: ["Next.js", "React"],
  "Data / Infra": ["Pandas", "SQL", "Docker", "WebRTC"],
};

export const experience = [];

export const research = {
  title: "HARD-RL Fog Load Balancer",
  status: "Paper submitted to IJACSA, under review",
  summary: "A Q-learning load balancer for fog computing with fuzzy gating, adaptive rewards, and energy-aware epsilon decay.",
  chartUrl: "TODO: add the results chart URL",
  paperUrl,
};

export const problemSolving = {
  profileUrl: "TODO: add a LeetCode, Codeforces, or CodeChef profile URL",
  problemsSolved: "TODO: add problems solved",
  contestRating: "TODO: add contest rating",
};

