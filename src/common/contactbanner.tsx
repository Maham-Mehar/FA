import { FaPhoneAlt, FaWhatsapp, FaLine } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactBanner = () => {
  return (
    <div className="relative bg-[url('/images/homeimg4.png')] bg-cover bg-start bg-no-repeat min-h-[50vh] flex items-center">
      {/* Overlay (optional) */}
      <div className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-4xl mx-auto py-10">
          {/* Left Text */}
          <div className="text-white text-center md:text-left">
            <p className="text-2xl font-semibold leading-relaxed text-zink">
              Contact us now to<br />
              book your private yacht<br />
              charter in Phuket!
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <button className="flex items-center gap-2 px-6 py-3 bg-zink text-white rounded-lg shadow hover:bg-[#D6AB62] font-medium transition">              <FaPhoneAlt />
              Tel: +66 61 234 5623
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-zink text-white rounded-lg shadow hover:bg-[#D6AB62] font-medium transition">
              <FaWhatsapp />
              WhatsApp: +66 61 234 5623
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-zink text-white rounded-lg shadow hover:bg-[#D6AB62] font-medium transition">
              <MdOutlineMail />
              Mail: info@far-away.net
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-zink text-white rounded-lg shadow hover:bg-[#D6AB62] font-medium transition">
              <FaLine />
              Connect to Line App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
