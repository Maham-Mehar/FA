import HeroSection from "@/Component/YachtDetail/hero";

// ✅ Must NOT include "use client" here

export default function YachtDetailPage({ params }: { params: { slug: string } }) {
  return <HeroSection slug={params.slug} />;
}
