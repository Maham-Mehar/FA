import BroadBoat from "@/Component/Destinations/Broadboat";
import Cards from "@/Component/Destinations/cards";
import HeroSection from "@/Component/Destinations/hero";
import JoinUs from "@/Component/Destinations/joinus";
import Banner from "@/Component/Destinations/overNightBanner";
import PrivateYacht from "@/Component/Destinations/privateYarcht";
import ItinerarySection from "@/Component/Destinations/seasonInteraries";
import SetSail from "@/Component/Destinations/setSail";
import DayTripSlider from "@/Component/Destinations/tripInteraries";
import { Fragment } from "react"

const Destinations= () => {
    return (
     <Fragment>
        <HeroSection />
        <Cards />
        <JoinUs />
        <DayTripSlider />
        <Banner />
        <ItinerarySection />
        <PrivateYacht />
        <BroadBoat />
        <SetSail />
     </Fragment>

    )

}
export default Destinations