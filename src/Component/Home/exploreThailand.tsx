import HeadingContent from "@/common/heading"
import Cards from "../Destinations/cards"
import SetSail from "@/common/yarchtcharter"
const ExploreThailand = () => {
    return (
        <div>
            <HeadingContent
                heading="Explore Thailand with a private Yacht"
                description="Explore Thailand’s remote islands with a private yacht, enjoy exclusive dining onboard and unwind with sunset yoga on white sandy beaches. Swim in sparkling waters and create lasting memories. Book your private yacht in Phuket." />
            <Cards />
            <div className="flex justify-center items-center">
            <button className="bg-zink font-poppins text-white font-semibold text-base px-5 py-3 rounded-lg hover:bg-[#D6AB61]">View More Destinations</button>
            </div>
            <SetSail bgImage="/images/homeimg6.png" />
        </div>
    )
}
export default ExploreThailand