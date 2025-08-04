import HeroSection from "@/Component/YachtDetail/hero";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function YachtDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <div>
      <HeroSection slug={slug} />
    </div>
  );
}
