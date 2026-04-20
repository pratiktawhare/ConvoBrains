import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Follow a single customer interaction through the ConvoBrains platform — from the first ring to the final conversion.",
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
