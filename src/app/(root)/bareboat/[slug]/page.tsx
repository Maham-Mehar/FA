import { YachtDetailPageProps } from "../types";
import HeroSection from "@/Component/YachtDetail/hero";

export default function YachtDetailPage({ params }: YachtDetailPageProps) {
  return (
    <div>
      <HeroSection slug={params.slug} />
    </div>
  );
}
