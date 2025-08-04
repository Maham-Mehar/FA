import HeroSection from "@/Component/YachtDetail/hero";

export default function YachtDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <HeroSection slug={params.slug} />
    </div>
  );
}
