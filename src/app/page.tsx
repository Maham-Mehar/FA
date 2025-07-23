
import About from "@/Component/Home/about";
import Destinations_Section from "@/Component/Home/destination";
import ExploreThailand from "@/Component/Home/exploreThailand";
import HeroSection from "@/Component/Home/hero";
import PrivateYacht_Tour from "@/Component/Home/privateTour";
import TodaysAdventure from "@/Component/Home/todaysAdventure";
import PrivateYachts from "@/Component/Home/yachtCards";
import Sailingyacht_Phuket from "@/Component/Home/yachtinPhuket";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <About />
      <PrivateYachts />
      <TodaysAdventure />
      <PrivateYacht_Tour />
      <Sailingyacht_Phuket />
      <ExploreThailand />
      <Destinations_Section />
    </Fragment>
  );
}
