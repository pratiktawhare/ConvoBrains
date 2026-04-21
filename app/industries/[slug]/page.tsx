import { notFound } from "next/navigation";
import IndustryPageClient from "./IndustryPageClient";
import { getIndustryBySlug, slugMap } from "@/lib/explorerData";

export function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);
  if (!data) {
    return { title: "Industry | ConvoBrains" };
  }
  return {
    title: `${data.industry.name} — ConvoBrains CDP`,
    description: data.industry.tagline,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <IndustryPageClient
      industry={data.industry}
      cdp={data.cdp}
      cdpTypeKey={data.cdpTypeKey}
      currentSlug={slug}
    />
  );
}
