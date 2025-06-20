import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLine,
} from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { RiMap2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const quickLinks = [
  "Crewed Yachts",
  "Bareboat Yachts",
  "Day Trip Yachts",
  "Luxury Yachts",
  "Overnight Itineraries",
];

const usefulLinks = [
  "About Us",
  "Mission Statement",
  "FAQ",
  "Privacy policy",
  "Blog",
];

const iconClass = "text-[#D6AB61]";
const textclass = "text-[16px] font-[400]";
const heading = "text-[22px] lg:text-[24px] xl:text-[28px] font-[600] mb-4";

const Footer = () => {
  const renderLinks = (links) =>
    links.map((link, index) => (
      <li
        key={index}
        className="flex items-center gap-2 text-[16px] font-normal"
      >
        <IoIosArrowForward className={iconClass} />
        {link}
      </li>
    ));

  return (
    <footer className="bg-[#004D5C] text-white pt-10">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-0 lg:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-8 mb-14">
        {/* Column 1 */}
        <div className="lg:col-span-3 xl:col-span-4">
          <h3 className={heading}>Faraway Yachting Co. Ltd.</h3>
          <div className="flex items-start gap-3 mb-2">
            <FaPhoneAlt className={`mt-1 ${iconClass}`} />
            <span className={textclass}>+66 61 234 5623</span>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <FaRegEnvelope className={`mt-1 ${iconClass}`} />
            <span className={textclass}>info@far-away.net</span>
          </div>
          <div className="flex items-start gap-3">
            <RiMap2Line size={20} className={`mt-1 ${iconClass}`} />
            <span className="text-[16px] font-normal max-w-xs">
              40/1 Chaofa Road, Moo 9 Tambon Chalong, Amphoe Mueang Phuket,
              Chang Wat Phuket 83130
            </span>
          </div>

          <div className="flex gap-3 mt-6 flex-wrap">
            {[FaFacebookF, FaInstagram, FaWhatsapp, FaLine].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="border border-white p-3 hover:bg-[#37ABC0] text-white rounded-full"
              >
                <Icon className={iconClass} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="lg:col-span-3 xl:col-span-2">
          <h3 className={heading}>Quick Links</h3>
          <ul className="space-y-3">{renderLinks(quickLinks)}</ul>
        </div>

        {/* Column 3 */}
        <div className="lg:col-span-3 xl:col-span-2">
          <h3 className={heading}>Useful Links</h3>
          <ul className="space-y-3">{renderLinks(usefulLinks)}</ul>
        </div>

        {/* Column 4 */}
        <div className="lg:col-span-3 xl:col-span-4">
          <h3 className={heading}>Subscribe</h3>
          <p className="text-[16px] font-normal mb-4">
            Subscribe to our newsletter to stay up-to-date with the latest
            news, promotions, and insider tips on Phuket yacht charters!
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-white text-black placeholder:text-gray-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-white text-black placeholder:text-gray-600"
            />
            <button
              type="submit"
              className="w-full p-2 rounded bg-[#D6AB61] hover:bg-yellow-600 text-black font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#333333] text-[14px] sm:text-[16px] text-center textclass py-4">
        <p>© 2025 Copyright Faraway Yachting Co. Ltd.</p>
        <div className="flex justify-center flex-wrap gap-1 mt-2">
          {["Impressum", "|", "Sitemap"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="underline text-white hover:text-[#D6AB61] mx-1"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
