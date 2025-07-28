import ContactBanner from "@/common/contactbanner";
import HeadingContent from "@/common/heading"

const About = () => {
    return (
        <div className="xl:my-14 lg:my-10 md:my-8 my-7 pb-5 lg:pb-7">
            {/* The Heading Section fetch from Common file */}
            <HeadingContent
                heading="Book Your Private Yacht In Phuket"
                description="Book your private yacht in Phuket for a luxurious and unforgettable sailing experience! Explore the stunning islands, crystal-clear waters and hidden gems of this tropical paradise in style. Book Now!" />
            <div className="mt-7">
                {/* Contact Detail section */}
                <ContactBanner />
            </div>
        </div>
    )
}
export default About