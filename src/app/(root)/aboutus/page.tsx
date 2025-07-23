import AboutSection from "@/Component/About/about"
import AboutSection_FAQs from "@/Component/About/FAQS"
import HeroSection from "@/Component/About/hero"
import { Fragment } from "react"

const About = () =>{
    return(
<Fragment>
    <HeroSection />
    <AboutSection />
    <AboutSection_FAQs />
</Fragment>
    )
}
export default About