import HeroSection from "@/Component/YachtDetail/hero";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function YachtDetailPage({ params }: PageProps) {
  return (
    <div>
      <HeroSection slug={params.slug} />
    </div>
  );
}
