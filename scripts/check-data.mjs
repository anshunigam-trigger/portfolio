import { projects, stats, isTodo } from "../data/projects.js";

const required = ["id", "title", "status", "tagline", "problem", "built", "result", "resultMetric", "resultBaseline", "stack", "repoUrl", "demoUrl", "mediaUrl", "caseStudyUrl", "order"];
const errors = [];

for (const project of projects) {
  for (const field of required) if (!(field in project)) errors.push(`${project.id}: missing ${field}`);
  if (!["Research", "Deployed", "In progress"].includes(project.status)) errors.push(`${project.id}: invalid status`);
  if (!Number.isInteger(project.order)) errors.push(`${project.id}: order must be an integer`);
  for (const urlField of ["repoUrl", "demoUrl", "mediaUrl"]) {
    const value = project[urlField];
    if (!isTodo(value) && value !== null && !/^https?:\/\//.test(value)) errors.push(`${project.id}: ${urlField} must be an http(s) URL or TODO`);
  }
}
for (const stat of stats) if (!stat.id || !stat.label || !stat.value) errors.push(`stat ${stat.id || "unknown"}: incomplete`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Data check passed for ${projects.length} projects and ${stats.length} stats.`);
