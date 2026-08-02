const username = "anshunigam-trigger";

export async function getGitHubSnapshot() {
  try {
    const headers = { Accept: "application/vnd.github+json", "User-Agent": "anshu-nigam-portfolio" };
    const [profileResponse, repoResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers, next: { revalidate: 3600 } }),
    ]);
    if (!profileResponse.ok || !repoResponse.ok) return null;
    const [profile, repositories] = await Promise.all([profileResponse.json(), repoResponse.json()]);
    return {
      name: profile.name || username,
      public_repos: profile.public_repos || 0,
      followers: profile.followers || 0,
      stars: repositories.reduce((total, repository) => total + (repository.stargazers_count || 0), 0),
      updatedAt: profile.updated_at || null,
      repos: repositories.slice(0, 4).map((repository) => ({ name: repository.name, language: repository.language, stars: repository.stargazers_count || 0 })),
    };
  } catch {
    return null;
  }
}
