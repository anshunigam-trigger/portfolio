export default function robots() {
  const baseUrl = "https://portfolio-self-xi-73.vercel.app";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${baseUrl}/sitemap.xml` };
}
