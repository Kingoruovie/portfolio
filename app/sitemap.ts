import { getAllPosts } from "@/app/logs/utils";

export const baseURL = "https://kingoruovie.is-a.dev";

export default async function sitemap() {
  const logs = getAllPosts().map((log) => ({
    url: `${baseURL}/logs/${log.slug}`,
    lastModified: new Date(log.frontmatter.date).toISOString().split("T")[0],
  }));

  const routes = ["", "/builds", "/about", "/logs"].map((route) => ({
    url: `${baseURL}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...logs];
}
