
import Adventure from "@/Component/Charter/adventure";
import BestLands from "@/Component/Charter/bestLands";
import HeroSection from "@/Component/Charter/hero";
import YachtMatchmaker from "@/Component/Charter/matchMark";
import YachtAdventure from "@/Component/Charter/yachtAdventure";
import { Fragment } from "react";

export default function bareBoat_Charter() {
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
