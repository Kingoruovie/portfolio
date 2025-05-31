import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug, logTag } from "@/app/logs/utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CSSProperties, ComponentProps } from "react";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { baseURL } from "@/app/sitemap";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const log = getPostBySlug(slug);
  if (!log) {
    return null;
  }

  const {
    title,
    date: publishedAt,
    description,
    socialImage: image,
  } = log.frontmatter;
  const ogImage = image
    ? image
    : `${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `${baseURL}/logs/${log.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold font-mono mb-4">
        {post.frontmatter.title}
      </h1>

      <span className={logTag[post.frontmatter.tag]}>
        {post.frontmatter.tag}
      </span>
      <span>
        {" "}| {" "}
      </span>
      <span className="text-gray-500 mb-8">
        {new Date(post.frontmatter.date).toDateString()}
      </span>
      <span>
        {" "}| {" "}
      </span>
      <span className="text-gray-500 mb-8 italic">
        {post.frontmatter.description}
      </span>
      <div className="">
        <Markdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h1(props) {
              return (
                <h1
                  className="text-4xl font-bold text-foreground font-mono my-3"
                  {...props}
                />
              );
            },
            h2(props) {
              return (
                <h2
                  className="text-3xl font-bold text-foreground font-mono my-3"
                  {...props}
                />
              );
            },
            h3(props) {
              return (
                <h3
                  className="text-2xl font-bold text-foreground font-mono my-3"
                  {...props}
                />
              );
            },
            h4(props) {
              return (
                <h4
                  className="text-xl` font-bold text-foreground font-mono my-3"
                  {...props}
                />
              );
            },
            h5(props) {
              return (
                <h5
                  className="text-lg font-bold text-foreground font-mono my-3"
                  {...props}
                />
              );
            },
            h6(props) {
              return (
                <h6
                  className="text-base font-bold text-foreground font-mono my-3"
                  {...props}
                />
              );
            },
            p(props) {
              return (
                <p className="text-base text-foreground my-3" {...props} />
              );
            },
            table: ({ ...props }) => (
              <table
                className="min-w-full border-collapse border border-gray-300/30 my-5"
                {...props}
              />
            ),
            thead: ({ ...props }) => (
              <thead className="bg-primary/30" {...props} />
            ),
            th: ({ ...props }) => (
              <th
                className="border border-gray-300/30 px-4 py-2 text-left font-semibold text-foreground"
                {...props}
              />
            ),
            td: ({ ...props }) => (
              <td
                className="border border-gray-300/30 px-4 py-2 text-foreground bg-gray-300/10"
                {...props}
              />
            ),
            hr: ({ ...props }) => (
              <hr className="border-t-1  border-gray-300/40 my-6" {...props} />
            ),
            ul: ({ ...props }) => (
              <ul className="list-disc list-outside pl-6 my-2" {...props} />
            ),
            ol: ({ ...props }) => (
              <ol className="list-decimal list-outside pl-6 my-2" {...props} />
            ),
            li: ({ ...props }) => (
              <li className="text-foreground/70" {...props} />
            ),
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...(rest as ComponentProps<typeof SyntaxHighlighter>)}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={vscDarkPlus}
                  showLineNumbers={true}
                  showInlineLineNumbers={true}
                  wrapLines={true}
                  lineProps={{
                    style: {
                      wordBreak: "break-all",
                      whiteSpace: "pre-wrap",
                    } as CSSProperties,
                  }}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
            a: ({ href, children, ...props }) => {
              const isInternalRoute =
                href!.startsWith("/") && !href!.startsWith("//");
              if (isInternalRoute) {
                return (
                  <Link
                    href={href!}
                    className="text-primary hover:text-primary/70 underline hover:no-underline transition-colors duration-200"
                    {...props}
                  >
                    {children}
                  </Link>
                );
              }
              return (
                <a
                  href={href}
                  className="text-primary hover:text-primary/70
                  underline hover:no-underline transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                  <span className="ml-1 inline-block">↗</span>
                </a>
              );
            },
            input: ({ type, checked, ...props }) => {
              if (type === "checkbox") {
                return (
                  <span
                    className={`inline-block w-5 h-5 mr-2 border-2 rounded ${
                      checked
                        ? "bg-blue-600 border-blue-600"
                        : "bg-white border-gray-300"
                    } flex items-center justify-center`}
                  >
                    {checked && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                );
              }
              return <input type={type} {...props} />;
            },
          }}
        >
          {post.content}
        </Markdown>
      </div>
    </div>
  );
}
