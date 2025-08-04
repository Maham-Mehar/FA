import HeroSection from "@/Component/YachtDetail/hero";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function YachtDetail({ params }: PageProps) {
  return <HeroSection slug={params.slug} />;
}
