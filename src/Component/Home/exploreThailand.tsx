import HeadingContent from "@/common/heading"
import Cards from "../Destinations/cards"
import SetSail from "@/common/yarchtcharter"
const ExploreThailand = () => {
    return (
        <div>
            {/* Heading Section */}
            <HeadingContent
                heading="Explore Thailand with a private Yacht"
                description="Explore Thailand’s remote islands with a private yacht, enjoy exclusive dining onboard and unwind with sunset yoga on white sandy beaches. Swim in sparkling waters and create lasting memories. Book your private yacht in Phuket." />
            {/* Destination Cards */}
            <Cards />
            <div className="flex justify-center items-cente mt-5 md:mt-7 lg:mt-9 mb-6 md:mb-8">
                <button className="bg-zink font-poppins cursor-pointer text-white font-semibold mt-8 lg:mt-2 xl:mt-0 text-base px-5 py-3 rounded-lg hover:bg-[#D6AB61]">View More Destinations</button>
            </div>
            {/* Book Your Trip */}
            <SetSail
                bgImage="/images/homeimg6.png"
                bgColor="#034250"
                overlayOpacity={0.5}
            />
        </div>
    )
}
export default ExploreThailand