import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { SmoothScrollProvider } from "../src/components/providers/SmoothScrollProvider";

const siteUrl = "https://portfolio-self-xi-73.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Anshu Nigam | SWE and AI/ML intern candidate", template: "%s | Anshu Nigam" },
  description: "Portfolio of Anshu Nigam, a third-year CSE student building ML systems, FastAPI backends, and fog-computing research.",
  keywords: ["Anshu Nigam", "SWE intern", "AI/ML intern", "FastAPI", "machine learning", "Next.js"],
  authors: [{ name: "Anshu Nigam" }],
  creator: "Anshu Nigam",
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Anshu Nigam",
    title: "Anshu Nigam | SWE and AI/ML intern candidate",
    description: "ML systems, FastAPI backends, and fog-computing research by Anshu Nigam.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Anshu Nigam | AI/ML + Backend" }],
  },
  twitter: { card: "summary_large_image", title: "Anshu Nigam | SWE and AI/ML intern candidate", description: "ML systems, FastAPI backends, and fog-computing research." },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anshu Nigam",
  url: siteUrl,
  jobTitle: "Student",
  email: "nigamanshu188@gmail.com",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Institute of Engineering and Management, Kolkata" },
  sameAs: ["https://github.com/anshunigam-trigger", "https://linkedin.com/in/anshu-nigam"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
