/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: { extend: { fontFamily: { display: ["Space Grotesk Variable", "Inter Variable", "sans-serif"], body: ["Inter Variable", "sans-serif"], mono: ["JetBrains Mono Variable", "monospace"] } } },
  plugins: [],
};

export default config;
