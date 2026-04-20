import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Explore the ConvoBrains platform — Customer Data Platform, Conversion Optimization, Marketing Automation, and Agentic AI powered by conversation intelligence.",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
