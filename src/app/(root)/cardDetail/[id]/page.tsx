// src/app/(root)/cardDetail/[id]/page.tsx
import StartAdventure from "@/Component/readMore/adventure";
import About from "@/Component/readMore/about";
import Attractions from "@/Component/readMore/cards";
import BestLands from "@/Component/readMore/bestLands";
import YachtSlider from "@/Component/readMore/slider";
import ChartersAdventure from "@/Component/readMore/yarchtAdventure";
import { Fragment } from "react";
import HeroSection from "@/Component/readMore/hero";

interface CardDetailPageProps {
  params: { id: string };
}

export default function CardDetail({ params }: CardDetailPageProps) {
  const { id } = params;

  return (
    <Fragment>
      <HeroSection id={params.id} />
      <About id={id} />
      <Attractions id={id} />
      <BestLands id={id} />
      <StartAdventure id={id} />
      <YachtSlider />
      <ChartersAdventure id={id} />
    </Fragment>
  );
}
