import fs from "fs";
import path from "path";
import matter from "gray-matter";

type frontmatter = {
  title: string;
  date: Date;
  description: string;
  socialImage: string;
  tag: string
}

interface logInterface {
  slug: string;
  frontmatter: frontmatter,
  content: string
}

const logsDirectory = path.join(process.cwd(), "logs");

// Get all blog posts
export function getAllPosts(): logInterface {
  const files = fs.readdirSync(logsDirectory);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const filePath = path.join(logsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

// Get single post by slug
export function getPostBySlug(slug: string) {
  const filePath = path.join(logsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);

  return {
    slug,
    frontmatter,
    content,
  };
}

export const logTag = {
  INFO: "bg-blue-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center",
  DEBUG: "bg-indigo-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center",
  WARN: "bg-yellow-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center",
  ERROR: "bg-red-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center",
  TRACE:  "bg-teal-500 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center",
  FATAL: "bg-blue-700 p-1 rounded-sm text-[12px] font-bold min-w-[50px] text-center"
}
