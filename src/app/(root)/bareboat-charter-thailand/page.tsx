import BoatCards from "@/Component/bareboatCharter/about"
import Adventure from "@/Component/bareboatCharter/adventure"
import BestLand from "@/Component/bareboatCharter/bestlands"
import HeroSection from "@/Component/bareboatCharter/hero"
import YachtAdventure from "@/Component/bareboatCharter/luxuryAdventure"



import { Fragment } from "react"

const About = () => {
    return (
        <Fragment>
            <HeroSection />
            <BoatCards />
            <Adventure />
            <BestLand />
            <YachtAdventure />
        </Fragment>
    )
}
export default About