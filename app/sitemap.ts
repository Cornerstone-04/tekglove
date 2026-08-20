import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "",
  "/about",
  "/product/kradle",
  "/product/kinetix",
  "/product/kursor",
  "/waitlist",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
  }));
}
