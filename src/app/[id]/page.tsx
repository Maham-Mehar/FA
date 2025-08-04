// src/app/(root)/cardDetail/[id]/page.tsx

import { Fragment } from "react";
import StartAdventure from "@/Component/readMore/adventure";
import About from "@/Component/readMore/about";
import Attractions from "@/Component/readMore/cards";
import BestLands from "@/Component/readMore/bestLands";
import ChartersAdventure from "@/Component/readMore/yarchtAdventure";
import HeroSection from "@/Component/readMore/hero";
import { NewsDetailPageProps } from "./types";
export default async function Page({ params }: NewsDetailPageProps) {
  const { id } = await params;
  
  return (
    <Fragment>
      <HeroSection id={id} />
      <About id={id} />
      <Attractions id={id} />
      <BestLands id={id} />
      <StartAdventure id={id} />
      {/* <YachtSlider id={id} /> */}
      <ChartersAdventure id={id} />
    </Fragment>
  );
}


