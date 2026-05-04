import type { Metadata } from "next";
import "./globals.css";
import { SiteScripts } from "@/components/site/site-scripts";

export const metadata: Metadata = {
  title: "Proxiant — AI Consulting, Labs, and Training",
  description:
    "Proxiant is an AI-exclusive consultancy. We design, ship, and operate the AI systems that have to hold up under load, audit, and change.",
  metadataBase: new URL("https://proxiant.ai"),
  openGraph: {
    title: "Proxiant — AI Consulting, Labs, and Training",
    description: "An AI-exclusive consultancy. Three practices: consulting, labs, training.",
    url: "https://proxiant.ai",
    type: "website",
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
