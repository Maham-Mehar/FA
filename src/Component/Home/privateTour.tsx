import HeadingContent from "@/common/heading"
const PrivateYacht_Tour = () => {
    return (
        <div className="my-10 md:my-14 lg:my-16 xl:my-18">
            <HeadingContent
                heading="Private Yacht tour with local experts"
                description="Experience the best of Phuket’s stunning coastline and hidden gems on a private yacht tour with local experts. With a dedicated crew and captain at your disposal, you can customize your itinerary to explore the islands, beaches and coves that interest you most around the Phuket."
            />
            {/* Video Section */}
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center max-w-5xl mx-auto mt-6">
                    <div className="relative w-full h-[320px] md:h-[410px] lg:h-[440px] xl:h-[450px] overflow-hidden shadow-lg ">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/6g9jfeUr_oE?start=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PrivateYacht_Tour