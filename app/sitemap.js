import { featuredProjects } from "../src/constants/cleanSite";

export default function sitemap() {
  const baseUrl = "https://portfolio-self-xi-73.vercel.app";
  const routes = ["", "/about", "/projects", ...featuredProjects.map((project) => `/projects/${project.id}`)];
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route ? "monthly" : "weekly", priority: route ? 0.75 : 1 }));
}
