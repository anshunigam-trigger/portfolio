import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata = {
  title: { default: "Anshu Nigam — AI systems, made useful", template: "%s — Anshu Nigam" },
  description: "Selected AI/ML, backend, data, and product engineering work by Anshu Nigam.",
  keywords: ["Anshu Nigam", "AI engineer", "machine learning", "FastAPI", "backend engineer", "data science", "Next.js"],
  authors: [{ name: "Anshu Nigam" }],
  creator: "Anshu Nigam",
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Anshu Nigam — AI systems, made useful", description: "AI/ML, backend, data, and product engineering work." },
  twitter: { card: "summary_large_image", title: "Anshu Nigam — AI systems, made useful", description: "AI/ML, backend, data, and product engineering work." },
};
const schema = { "@context": "https://schema.org", "@type": "Person", name: "Anshu Nigam", jobTitle: "AI/ML Engineer and Backend Developer", email: "nigamanshu188@gmail.com", sameAs: ["https://github.com/anshunigam-trigger", "https://linkedin.com/in/anshu-nigam"] };
export default function RootLayout({ children }) { return <html lang="en" suppressHydrationWarning><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>; }
