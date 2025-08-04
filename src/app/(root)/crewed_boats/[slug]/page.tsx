import { YachtDetailPageProps } from "../types";
import HeroSection from "@/Component/YachtDetail/hero";

export default function YachtDetail({ params }: YachtDetailPageProps) {
  return (
    <div>
      <HeroSection slug={params.slug} />
    </div>
  );
}
