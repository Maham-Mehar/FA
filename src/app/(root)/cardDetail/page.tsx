import About from "@/Component/readMore/about";
import StartAdventure from "@/Component/readMore/adventure";
import BestLands from "@/Component/readMore/bestLands";
import Attractions from "@/Component/readMore/cards";
import HeroSection from "@/Component/readMore/hero";
import YachtSlider from "@/Component/readMore/slider";
import ChartersAdventure from "@/Component/readMore/yarchtAdventure";
import { Fragment } from "react";
const CardDetail =()=>{
    return(
<Fragment>
<HeroSection />
<About />
<Attractions />
<BestLands />
<StartAdventure />
<YachtSlider />
<ChartersAdventure />
</Fragment>
    )
}
export default CardDetail 