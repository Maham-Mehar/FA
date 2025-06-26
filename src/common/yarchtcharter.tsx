import { FiPhone } from "react-icons/fi";
interface SetSailProps {
    id?:string;
    bgImage: string;
}
const SetSail: React.FC<SetSailProps> = ({ bgImage }) => {

    return (
        <div>
            {/* HERO IMAGE SECTION */}
            <div
                className="my-14 min-h-[47vh] sm:min-h-[54vh] md:min-h-[63vh] lg:min-h-[70vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >                <div className="text-center flex flex-col justify-center items-center">
                    <p className="text-white font-extrabold font-inter font-playfair text-[21px] md:[32px] lg:text-[32px] uppercase max-w-2xl md:leading-relaxed lg:leading-tight">
                        Set Sail for Luxury and Adventure with Far Away Yacht Charters
                    </p>


                    {/* DESCRIPTION PARAGRAPH */}
                    <p className="text-center font-inter text-white font-inter text-base sm:text-lg md:2xl lg:text-3xl font-medium md:max-w-[59rem] mx-auto px-0 lg:px-8 py-6 md:py-7 lg:py-9 sm:py-12  lg:leading-tight">
                        Luxury, adventure, and unforgettable views—all aboard your private yacht. Discover hidden coves, island gems, and the beauty of Phuket.
                    </p>
                    <button className=" text-base md:text-xl font-bold font-poppins bg-mustard px-5 py-3 text-white rounded-lg flex items-center"><span className="me-2"><FiPhone /></span> Contact Us Now</button>
                </div>
            </div>
        </div>
    );
};

export default SetSail;
