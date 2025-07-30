import { FiPhone } from "react-icons/fi";

interface SetSailProps {
    id?: string;
    bgImage: string;
    bgColor?: string;
    overlayOpacity?: number;
}

const SetSail: React.FC<SetSailProps> = ({
    bgImage,
    bgColor = "#034250",
    overlayOpacity = 0.6,
}) => {
    const overlayRGBA = `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(
        bgColor.slice(3, 5),
        16
    )}, ${parseInt(bgColor.slice(5, 7), 16)}, ${overlayOpacity})`;

    return (
        <section className="relative mb-8 overflow-hidden min-h-[60vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center">
            {/* Background Image */}
            <img
                src={bgImage}
                alt="Set Sail"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: overlayRGBA }}
            />

            {/* Content */}
            <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-screen-xl">
                <p className="text-white text-base md:text-lg font-semibold mb-4 lg:mb-5 font-inter">
                    Set Sail With Us
                </p>
                <h2 className="text-white uppercase font-extrabold text-[20px] md:text-[28px] lg:text-[32px] font-playfair max-w-2xl mx-auto leading-tight">
                    Set Sail for Luxury and Adventure with Far Away Yacht Charters
                </h2>
                <p className="text-white text-base md:text-lg lg:text-xl font-normal font-inter max-w-3xl px-4 py-3 lg:py-5 leading-relaxed lg:leading-tight">
                    Luxury, adventure, and unforgettable views—all aboard your private yacht. Discover hidden coves, island gems, and the beauty of Phuket.
                </p>
                <button className="bg-mustard cursor-pointer text-white text-base md:text-xl font-bold font-poppins px-5 py-2 md:py-3 rounded-lg flex items-center mx-auto mt-5 lg:mt-6 hover:bg-[#034250]">
                    <FiPhone className="mr-2" />
                    Contact Us Now
                </button>
            </div>
        </section>
    );
};

export default SetSail;
