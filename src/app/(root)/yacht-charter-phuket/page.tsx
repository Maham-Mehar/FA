
import Adventure from "@/Component/crewed_Charter/adventure";
import BestLands from "@/Component/crewed_Charter/bestLands";
import HeroSection from "@/Component/crewed_Charter/hero";
import YachtMatchmaker from "@/Component/crewed_Charter/matchMark";
import YachtAdventure from "@/Component/crewed_Charter/yachtAdventure";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <YachtMatchmaker />
      <Adventure />
      <BestLands />
      <YachtAdventure />
    </Fragment>
  );
}
