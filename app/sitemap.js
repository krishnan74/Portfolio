import { profile } from "@/data/profile";

const pages = [
  { path: "/", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/experience", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap() {
  const now = new Date();
  return pages.map(({ path, priority }) => ({
    url: `${profile.site}${path === "/" ? "/" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
