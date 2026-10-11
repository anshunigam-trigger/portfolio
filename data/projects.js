export const TODO_PREFIX = "TODO:";

export function isTodo(value) {
  return typeof value === "string" && value.startsWith(TODO_PREFIX);
}

export const stats = [
  { id: "mnist-cnn-accuracy", label: "MNIST CNN accuracy", value: "98.93", suffix: "%", caption: "CNN benchmark result", source: "MNIST CNN" },
  { id: "fraud-auc", label: "Fraud detection AUC", value: "0.99", suffix: "", caption: "ULB credit-card dataset", source: "credit-card-fraud-detection" },
  { id: "fog-failed-allocations", label: "Fog-RL failed allocations", value: "98.29", suffix: "% reduction", caption: "Baseline comparison is pending", source: "hard-rl-fog-load-balancer" },
  { id: "cgpa", label: "Current CGPA", value: "TODO: confirm exact value from resume", caption: "Academic record", source: "education" },
];

export const projects = [
  {
    id: "hard-rl-fog-load-balancer",
    title: "HARD-RL Fog Load Balancer",
    status: "Research",
    tagline: "Paper submitted to IJACSA, under review",
    problem: "Fog nodes have limited capacity, so naive allocation drops tasks and wastes energy when load spikes.",
    built: "A Q-learning load balancer that uses fuzzy gating to filter candidate nodes, adaptive rewards that track current load, and energy-aware epsilon decay that shifts from exploring to exploiting.",
    result: "98.29% reduction in failed allocations.",
    resultMetric: "98.29% reduction",
    resultBaseline: "TODO: name the baseline compared against",
    stack: ["Python", "Q-Learning", "Fuzzy Logic"],
    repoUrl: "TODO: add the HARD-RL repository URL",
    demoUrl: "TODO: add a live demo URL or results viewer",
    mediaUrl: "TODO: add the results graph URL",
    caseStudyUrl: "/projects/hard-rl-fog-load-balancer",
    paperUrl: "TODO: add the paper or arXiv URL",
    chartUrl: "TODO: add the results chart URL",
    architectureUrl: "TODO: add an architecture diagram URL",
    tradeoffs: "TODO: document the main tradeoffs and limitations",
    next: "TODO: document what you would do next",
    order: 1,
  },
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    status: "Deployed",
    tagline: "Risk dashboard with explainable review flows",
    problem: "In the ULB dataset, about 0.17% of transactions are fraud (492 of 284,807), so accuracy is not a useful metric and analysts need to know why a transaction was flagged.",
    built: "A Random Forest classifier with SHAP explanations per prediction, served through an API behind a review flow where an analyst can inspect flagged cases.",
    result: "AUC 0.99.",
    resultMetric: "0.99 AUC",
    resultBaseline: "TODO: add precision and recall at the chosen threshold; TODO: add the imbalance handling method",
    stack: ["Python", "scikit-learn", "SHAP"],
    repoUrl: "TODO: add the fraud-detection repository URL",
    demoUrl: "TODO: add the live demo URL",
    mediaUrl: "TODO: add a SHAP explanation screenshot URL",
    caseStudyUrl: "/projects/credit-card-fraud-detection",
    paperUrl: "TODO: no paper link supplied",
    chartUrl: "TODO: no results chart supplied",
    architectureUrl: "TODO: add an architecture diagram URL",
    tradeoffs: "TODO: document the model and threshold tradeoffs",
    next: "TODO: document what you would do next",
    order: 2,
  },
  {
    id: "autobench",
    title: "AutoBench",
    status: "In progress",
    tagline: "Full-stack no-code AutoML platform",
    problem: "Comparing ML models on a new dataset means writing the same training, evaluation, and explainability code every time, which blocks people who cannot code.",
    built: "A no-code platform where users upload a dataset, train several models in parallel, compare them on a leaderboard, and inspect feature importance and SHAP explanations. FastAPI handles training and serving, and Next.js handles the interface.",
    result: "TODO: add supported task types, model count, sample dataset size, and training time.",
    resultMetric: "TODO: add a measured result",
    resultBaseline: "TODO: add the comparison baseline",
    stack: ["FastAPI", "Next.js", "scikit-learn"],
    repoUrl: "TODO: add the AutoBench repository URL",
    demoUrl: "TODO: add the live demo URL or 60-second GIF URL",
    mediaUrl: "TODO: add the architecture diagram or demo media URL",
    caseStudyUrl: "/projects/autobench",
    paperUrl: "TODO: no paper link supplied",
    chartUrl: "TODO: no results chart supplied",
    architectureUrl: "TODO: add the architecture diagram URL",
    tradeoffs: "TODO: document the training and explainability tradeoffs",
    next: "TODO: document what you would do next",
    order: 3,
  },
];

export const featuredProjects = [...projects].sort((a, b) => a.order - b.order);
