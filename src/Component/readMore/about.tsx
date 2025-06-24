import PngIcons from "@/icons/pngIcon";
import { FiPhone } from "react-icons/fi";

const About = () => {
  return (
    <div>
          {/* <div className="absolute top-0 left-0 z-0">
        <img src={PngIcons.line1} alt="" />
      </div> */}
    <div className="relative max-w-7xl mx-auto w-full px-4 xl:px-0 py-5 md:py-0 relative">
      {/* Absolute image at top-left */}
    

      {/* Main content (on top of absolute image) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Column 1 */}
        <div className="space-y-3 md:space-y-1 lg:space-y-2 xl:space-y-5 text-center md:text-left py-0 md:py-2 lg:py-0">
          <p className="font-sourceSanspro text-[16px] lg:text-[18px] xl:text-[20px] font-normal text-gray-500 uppercase">
            YACHT DESTINATION
          </p>
          <h2 className="text-[30px] sm:text-[36px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-semibold font-playfair text-zink uppercase leading-tight">
            PARADISE UNVEILED
          </h2>
          <p className="font-semibold font-sourceSanspro text-[18px] sm:text-[19px] lg:text-[24px] text-mustard uppercase">
            A NAUTICAL HAVEN IN THE ANDAMAN SEA
          </p>
          <p className="text-sm sm:text-[15px] lg:text-lg font-normal font-inter text-zink max-w-xl">
            The Phi Phi Islands are situated in the Andaman Sea and are famous for natural beauty and rich marine life.
            This is a group of islands located in Krabi Province in southern Thailand and is the ideal tourist destination
            for marine activities, exploration, and relaxation.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="text-sm sm:text-base md:text-lg font-bold font-poppins bg-mustard px-3 py-2 lg:px-5 lg:py-3 text-white rounded-lg mt-4 lg:mt-6 flex items-center gap-2 hover:bg-opacity-90 transition">
              <FiPhone />
              Contact Us
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full flex justify-end">
          <img
            src={PngIcons.card1}
            alt="Yacht Destination"
            className="hidden md:block w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-xl h-auto object-contain"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
