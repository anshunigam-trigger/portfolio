import { PortfolioExperience } from "../src/components/PortfolioExperience";
import { getGitHubSnapshot } from "../src/lib/github";

export default async function HomePage() {
  const github = await getGitHubSnapshot();
  return <PortfolioExperience github={github} />;
}
