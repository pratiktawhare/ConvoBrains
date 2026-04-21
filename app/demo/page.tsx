import type { Metadata } from "next";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "Book a Demo — ConvoBrains",
  description:
    "See ConvoBrains in action. Book a 30-minute live demo and we'll walk you through how our CDP works for your industry.",
};

export default function DemoPage() {
  return <DemoClient />;
}
