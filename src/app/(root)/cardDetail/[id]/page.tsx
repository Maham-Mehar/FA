// src/app/(root)/cardDetail/[id]/page.tsx

import { Fragment } from "react";
import StartAdventure from "@/Component/readMore/adventure";
import About from "@/Component/readMore/about";
import Attractions from "@/Component/readMore/cards";
import BestLands from "@/Component/readMore/bestLands";
import YachtSlider from "@/Component/readMore/slider";
import ChartersAdventure from "@/Component/readMore/yarchtAdventure";
import HeroSection from "@/Component/readMore/hero";
import { NewsDetailPageProps } from "./types";



// ✅ Default exported function must be named anything (commonly `Page`) and accept { params }
export default function Page({ params }: NewsDetailPageProps) {
  const { id } = params; // ✅ no await needed
  
  return (
    <Fragment>
      <HeroSection id={id} />
      <About id={id} />
      <Attractions id={id} />
      <BestLands id={id} />
      <StartAdventure id={id} />
      <YachtSlider />
      <ChartersAdventure id={id} />
    </Fragment>
  );
}


