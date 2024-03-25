import type { Repository } from "../models/Repository";

export const getRepositories = async (
  username: string
): Promise<Array<Repository>> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const data = await response.json();

  return data.map((repository: any) => ({
    name: repository["full_name"],
    description: repository["description"],
    stars: repository["stargazers_count"],
    imageUrl: "this-should-come-from-the-api",
  }));
};
