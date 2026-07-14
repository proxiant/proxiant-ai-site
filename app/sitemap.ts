import type { MetadataRoute } from "next";

const BASE = "https://proxiant.ai";

const ROUTES = [
  "",
  "/solutions",
  "/labs",
  "/training",
  "/about",
  "/contact",
  "/industries",
  "/industries/financial-services",
  "/industries/healthcare",
  "/industries/insurance",
  "/industries/manufacturing",
  "/industries/energy",
  "/industries/retail",
  "/industries/telecom",
  "/industries/transportation",
  "/insights",
  "/insights/generative-ai-enterprise",
  "/insights/scaling-ai-teams",
  "/insights/trustworthy-ai",
  "/case-studies/fortune500-bank",
  "/proxitrades",
  "/aide",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}/`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
