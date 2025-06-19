import Cards from "@/app/Component/Destinations/cards"
import HeroSection from "@/app/Component/Destinations/hero"
import JoinUs from "@/app/Component/Destinations/joinus"
import { Fragment } from "react"

const Destinations= () => {
    return (
     <Fragment>
        <HeroSection />
        <Cards />
        <JoinUs />
     </Fragment>

    )

}
export default Destinations