export const siteProfile = {
  name: "Anshu Nigam",
  role: "AI/ML Engineer · Backend Builder · Product-minded Developer",
  location: "India",
  email: "nigamanshu188@gmail.com",
  github: "https://github.com/anshunigam-trigger",
  linkedin: "https://linkedin.com/in/anshu-nigam",
  resume: "/resume.pdf",
  headlineWords: ["AI systems", "backend platforms", "data products", "ML workflows"],
  summary:
    "B.Tech CSE (IoT) student building deployable AI/ML products, real-time systems, and research-backed interfaces with production-grade polish.",
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "AI", href: "#ai" },
  { label: "Backend", href: "#backend" },
  { label: "Data", href: "#data" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { label: "MNIST CNN accuracy", value: "98.93", suffix: "%" },
  { label: "Fraud detection AUC", value: "0.9900", suffix: "" },
  { label: "Fog-RL failed allocations", value: "98.29", suffix: "%↓" },
  { label: "Current CGPA", value: "8.52", suffix: "" },
];

export const projects = [
  {
    id: "EXP-01",
    slug: "autobench",
    name: "AutoBench",
    eyebrow: "No-code AutoML platform",
    blurb: "Upload a dataset, train multiple models, compare leaderboards, and inspect explainability without writing ML code.",
    metric: "Full-stack ML platform",
    stack: ["FastAPI", "Next.js", "scikit-learn", "XGBoost", "SHAP"],
    status: "In build",
    accent: "#66E3FF",
    links: { github: "https://github.com/anshunigam-trigger" },
    architecture: ["Dataset ingestion", "Feature profiling", "Model trainer", "Leaderboard", "Explainability layer", "Dashboard"],
    caseStudy: {
      problem: "Most ML prototypes stop at notebooks. AutoBench converts experimentation into a repeatable product flow.",
      research: "Compared tabular model baselines, validation strategies, and feature-importance methods for trustworthy model selection.",
      frontend: "Next.js interface with dataset state, leaderboard surfaces, metric explanations, and progressive disclosure.",
      backend: "FastAPI orchestration for uploads, preprocessing, model training, artifact persistence, and result APIs.",
      ai: "Classification/regression model routing, XGBoost baselines, SHAP explanations, and metric-aware ranking.",
      lessons: "A useful ML tool is mostly about constraints, feedback, and interpretability around the model."
    }
  },
  {
    id: "EXP-02",
    slug: "fraud-detection",
    name: "Credit Card Fraud Detection",
    eyebrow: "Risk intelligence dashboard",
    blurb: "Random Forest classifier on the ULB dataset with SHAP explainability and API-backed review flows.",
    metric: "AUC 0.9900",
    stack: ["Python", "scikit-learn", "SHAP", "FastAPI", "Pandas"],
    status: "Deployed",
    accent: "#8B5CFF",
    links: { github: "https://github.com/anshunigam-trigger" },
    architecture: ["Transaction input", "Feature scaling", "Random Forest", "Risk scoring", "SHAP reasons", "Review UI"],
    caseStudy: {
      problem: "Fraud systems need high recall without becoming opaque black boxes.",
      research: "Studied class imbalance, precision/recall tradeoffs, and model explanation patterns for anomaly review.",
      frontend: "Dashboard-first surface with risk cards, score explanations, and audit-ready labels.",
      backend: "FastAPI inference endpoint wrapping preprocessing and model prediction artifacts.",
      ai: "Random Forest classification with SHAP-based local explanations for analyst trust.",
      lessons: "Accuracy is not enough; trust comes from giving users a reason they can challenge."
    }
  },
  {
    id: "EXP-03",
    slug: "fog-load-balancer",
    name: "HARD-RL Fog Load Balancer",
    eyebrow: "Reinforcement learning research",
    blurb: "Q-Learning load balancer for fog computing with fuzzy gating, adaptive rewards, and energy-aware epsilon decay.",
    metric: "-98.29% failed allocations",
    stack: ["Python", "Q-Learning", "Fuzzy Logic", "Simulation"],
    status: "Research",
    accent: "#00F5D4",
    links: { github: "https://github.com/anshunigam-trigger" },
    architecture: ["Task stream", "Fog nodes", "Fuzzy gate", "Q-table update", "Reward shaping", "Allocation policy"],
    caseStudy: {
      problem: "Fog systems need routing decisions that balance latency, resource use, and failure risk.",
      research: "Modeled adaptive reward shaping and epsilon decay across simulated allocation pressure.",
      frontend: "Research visualization showing routing decisions, node pressure, and failure deltas.",
      backend: "Python simulation loop for state transitions, reward computation, and policy updates.",
      ai: "Q-Learning policy refined by fuzzy logic gates and energy-aware exploration control.",
      lessons: "Good RL systems depend heavily on state design and reward clarity, not just the learning algorithm."
    }
  },
  {
    id: "EXP-04",
    slug: "mnist-recognizer",
    name: "MNIST Digit Recognizer",
    eyebrow: "Vision model demo",
    blurb: "ANN and CNN digit classifier trained from scratch and deployed as a live interactive model demo.",
    metric: "98.93% accuracy",
    stack: ["Python", "TensorFlow", "CNN", "Gradio"],
    status: "Live",
    accent: "#FFFFFF",
    links: { github: "https://github.com/anshunigam-trigger" },
    architecture: ["Canvas input", "Image normalization", "CNN inference", "Confidence map", "Prediction UI"],
    caseStudy: {
      problem: "Turn a classic vision benchmark into a clear, interactive learning artifact.",
      research: "Compared ANN and CNN behavior under simple preprocessing and validation flows.",
      frontend: "Interactive prediction surface emphasizing confidence and quick feedback.",
      backend: "Served model inference with compact preprocessing and deterministic outputs.",
      ai: "Convolutional neural network trained for high-accuracy digit classification.",
      lessons: "Even simple models feel stronger when the interaction loop is immediate."
    }
  },
  {
    id: "EXP-05",
    slug: "telecom-churn",
    name: "Telecom Churn Prediction",
    eyebrow: "Customer intelligence model",
    blurb: "Customer churn prediction with Logistic Regression, Random Forest, and XGBoost, balanced with SMOTE.",
    metric: "3 models compared",
    stack: ["Python", "XGBoost", "SMOTE", "scikit-learn"],
    status: "Complete",
    accent: "#6EA8FF",
    links: { github: "https://github.com/anshunigam-trigger" },
    architecture: ["Customer data", "EDA", "SMOTE", "Model comparison", "Feature importance", "Retention insight"],
    caseStudy: {
      problem: "Churn work must produce both predictions and business-readable retention signals.",
      research: "Explored imbalance handling, feature importance, and model comparison across classical ML baselines.",
      frontend: "Insight cards and comparison visuals for model outputs and retention factors.",
      backend: "Reusable training/evaluation scripts with consistent metric reporting.",
      ai: "Logistic Regression, Random Forest, and XGBoost with SMOTE-based balancing.",
      lessons: "Business value comes from connecting prediction confidence to explainable actions."
    }
  },
  {
    id: "EXP-06",
    slug: "meetflow",
    name: "MeetFlow",
    eyebrow: "Realtime collaboration app",
    blurb: "Video conferencing app shaped around low-latency communication and clean meeting flows.",
    metric: "Real-time WebRTC",
    stack: ["React", "Node.js", "WebRTC", "Sockets"],
    status: "Complete",
    accent: "#9B8CFF",
    links: { github: "https://github.com/anshunigam-trigger" },
    architecture: ["Room creation", "Signaling", "Peer connection", "Media stream", "Controls", "Session state"],
    caseStudy: {
      problem: "Realtime apps fail when technical complexity leaks into basic user flows.",
      research: "Mapped signaling and peer-connection states into predictable meeting interactions.",
      frontend: "Clean room flow, controls, connection feedback, and responsive layouts.",
      backend: "Node signaling layer coordinating room state and peer negotiation.",
      ai: "Designed as infrastructure for future AI meeting summaries and transcript intelligence.",
      lessons: "Realtime UX is state design: users need to know what is happening before they need to debug it."
    }
  },
];

export const skills = [
  { name: "Python", group: "Language", weight: 98 },
  { name: "FastAPI", group: "Backend", weight: 92 },
  { name: "Next.js", group: "Frontend", weight: 90 },
  { name: "React", group: "Frontend", weight: 92 },
  { name: "TensorFlow", group: "AI", weight: 84 },
  { name: "scikit-learn", group: "AI", weight: 94 },
  { name: "XGBoost", group: "AI", weight: 88 },
  { name: "SHAP", group: "AI", weight: 82 },
  { name: "Node.js", group: "Backend", weight: 84 },
  { name: "Docker", group: "Infra", weight: 78 },
  { name: "Pandas", group: "Data", weight: 91 },
  { name: "SQL", group: "Data", weight: 82 },
];

export const timeline = [
  { year: "2024", title: "B.Tech CSE (IoT)", detail: "Started engineering foundation at IEM Kolkata with a focus on systems, data, and product execution." },
  { year: "2025", title: "ML systems track", detail: "Built applied ML projects across fraud detection, churn prediction, and digit recognition." },
  { year: "2026", title: "Research + product layer", detail: "Expanded into fog-computing RL research, backend APIs, and polished product experiences." },
  { year: "2027", title: "Placement-ready engineer", detail: "Positioning for AI/ML, backend, and full-stack roles with production-grade portfolio artifacts." },
];

export const aiPipeline = ["Raw data", "Cleaning", "Embeddings", "Vector store", "Model inference", "Evaluation", "Product loop"];
export const backendFlow = ["Client", "API Gateway", "Auth", "FastAPI services", "Queue", "Database", "Observability", "Deploy"];
export const dataWorkflow = ["EDA", "Feature design", "Training", "Validation", "Explainability", "Monitoring"];
export const certificates = [
  { title: "AI/ML Systems", issuer: "Project-backed specialization", detail: "Modeling, evaluation, explainability, and deployment practice." },
  { title: "Backend Engineering", issuer: "Production APIs", detail: "FastAPI, Node.js, data contracts, and service architecture." },
  { title: "Product Interfaces", issuer: "Portfolio Labs", detail: "Interaction design, motion, accessibility, and performance." },
];

export const githubStats = [
  { label: "Primary language", value: "Python" },
  { label: "Build focus", value: "AI + Backend" },
  { label: "Repo style", value: "Experiments → Products" },
];

export const leetcodeStats = [
  { label: "Problem-solving", value: "DSA track" },
  { label: "Focus", value: "Patterns" },
  { label: "Mode", value: "Consistent practice" },
];
