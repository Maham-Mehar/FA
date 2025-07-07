import HeroSection from "@/Component/cabinCharter/hero"
// import ContactSection from "@/Component/Contact"
import About from "@/Component/cabinCharter/about"
import { Fragment } from "react"
import SeaSide_Sixdays from "@/Component/cabinCharter/seaside_bliss"
import SeaEscape from "@/Component/cabinCharter/seaEscape"
import Thailand_BestLands from "@/Component/cabinCharter/thailandbs"
import Sailing_Itinerary from "@/Component/cabinCharter/sailing_Itineraries"
import SailingDetails from "@/Component/cabinCharter/oursailsDetail"
import PricingSection from "@/Component/cabinCharter/pricing"
import Price_Details from "@/Component/cabinCharter/pricingDetail"
import CruiseDates from "@/Component/cabinCharter/cruiseDates"
import FounderNote from "@/Component/cabinCharter/ourFounder"
import SealifeFAQ from "@/Component/cabinCharter/curiousSealife"
import FunMoments from "@/Component/cabinCharter/moments"
import ContactUs from "@/Component/cabinCharter/contactUs"
import ComparisonChart from "@/Component/cabinCharter/moments2Remember"
const CabinCharter = () => {
    return (
        <Fragment>
            <HeroSection />
             <About />
             <SeaSide_Sixdays />
            <SeaEscape />
        <Thailand_BestLands />
               <Sailing_Itinerary />
             <SailingDetails />
            { /*<PricingSection />
            <Price_Details />
            <CruiseDates />
            <FunMoments />
            <ComparisonChart />
            <FounderNote />
            <SealifeFAQ />
            <ContactUs /> */}
        
        </Fragment>
    )
}
export default CabinCharter