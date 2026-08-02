export const metrics = [
  { label: "MNIST CNN accuracy", value: "98.93%" },
  { label: "Fraud detection AUC", value: "0.9900" },
  { label: "Fog-RL failed allocations", value: "-98.29%" },
  { label: "CGPA", value: "8.52" },
];

export const projects = [
  {
    id: "EXP-01",
    name: "AutoBench",
    blurb:
      "No-code AutoML platform: upload a dataset, get trained models, leaderboards, and explainability without writing ML code.",
    metric: "Full-stack ML platform",
    stack: ["FastAPI", "Next.js 14", "scikit-learn", "XGBoost"],
    status: "progress",
    accent: "#FFB84D",
    links: { github: "https://github.com/anshunigam-trigger" },
  },
  {
    id: "EXP-02",
    name: "Credit Card Fraud Detection",
    blurb:
      "Random Forest classifier on the ULB dataset with SHAP explainability, served through a FastAPI backend with a live dashboard.",
    metric: "AUC 0.9900",
    stack: ["Python", "scikit-learn", "SHAP", "FastAPI"],
    status: "done",
    accent: "#4FFFD3",
    links: { github: "https://github.com/anshunigam-trigger" },
  },
  {
    id: "EXP-03",
    name: "HARD-RL Fog Load Balancer",
    blurb:
      "Q-Learning load balancer for fog computing with fuzzy gating, adaptive rewards, and energy-aware epsilon decay.",
    metric: "-98.29% failed allocations",
    stack: ["Python", "Q-Learning", "Fuzzy Logic"],
    status: "research",
    accent: "#FF6B6B",
    links: { github: "https://github.com/anshunigam-trigger" },
  },
  {
    id: "EXP-04",
    name: "MNIST Digit Recognizer",
    blurb:
      "ANN and CNN digit classifier trained from scratch and deployed as a live interactive demo.",
    metric: "98.93% accuracy",
    stack: ["Python", "TensorFlow", "Gradio"],
    status: "live",
    accent: "#A7F3D0",
    links: { github: "https://github.com/anshunigam-trigger" },
  },
  {
    id: "EXP-05",
    name: "Telecom Churn Prediction",
    blurb:
      "Customer churn prediction with Logistic Regression, Random Forest, and XGBoost, balanced with SMOTE for class imbalance.",
    metric: "3 models compared",
    stack: ["Python", "XGBoost", "SMOTE"],
    status: "done",
    accent: "#A78BFA",
    links: { github: "https://github.com/anshunigam-trigger" },
  },
  {
    id: "EXP-06",
    name: "MeetFlow",
    blurb:
      "Real-time video conferencing app shaped around low-latency communication and clean meeting flows.",
    metric: "Real-time WebRTC",
    stack: ["React", "Node.js", "WebRTC"],
    status: "done",
    accent: "#4FFFD3",
    links: { github: "https://github.com/anshunigam-trigger" },
  },
];

export const otherWork = [
  { name: "Blockchain Ticket Booking", stack: "Stellar Soroban / Rust" },
  { name: "AI Resume Parser", stack: "Python / NLP" },
  { name: "Aayushmann Ayurveda", stack: "Django REST / React" },
];

export const stackLayers = [
  { label: "Languages", items: ["Python", "JavaScript", "C", "C++"] },
  { label: "ML & Data", items: ["scikit-learn", "XGBoost", "TensorFlow", "SHAP", "Pandas"] },
  { label: "Web & Systems", items: ["React", "Next.js", "Node.js", "Express", "FastAPI"] },
  { label: "Tools", items: ["Git", "Docker-ready", "Hugging Face Spaces", "Vercel"] },
];
