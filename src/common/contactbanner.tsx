import { FaPhoneAlt, FaWhatsapp, FaLine } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const buttonClass = "flex items-center gap-2 lg:px-6 px-3 md:px-4 py-3 bg-zink text-white rounded-lg shadow hover:bg-[#D6AB62] font-medium transition";
const ContactBanner = () => {
  return (
    <div className="mx-4">
      <div className="relative bg-gray-100 flex items-center max-w-[78.2rem] mx-auto">
        {/* Overlay (optional) */}
        <div className="absolute inset-0 z-0" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 lg:px-8 xl:px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 max-w-4xl mx-auto py-8 md:py-10">
            {/* Left Text */}
            <div className="text-white text-center md:text-left">
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-zink">
                Contact us now to<br />
                book your private yacht<br />
                charter in Phuket!
              </p>
            </div>
            {/* Right Buttons */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <button className={buttonClass}><FaPhoneAlt /> Tel: +66 61 234 5623</button>
              <button className={buttonClass}><FaWhatsapp /> WhatsApp: +66 61 234 5623</button>
              <button className={buttonClass}><MdOutlineMail /> Mail: info@far-away.net</button>
              <button className={buttonClass}><FaLine />Connect to Line App</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
