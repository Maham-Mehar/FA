"use client";

import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";
import { usePathname } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();
  //  url based Seletion
  const heading =
    pathname === "/bareboat-charter-thailand"
      ? "Bareboat Charter Thailand"
      : "Yacht Charter Phuket";

  const subHeading =
    pathname === "/bareboat-charter-thailand"
      ? "Experience a luxurious Phuket getaway with our all-inclusive yacht rentals, featuring gourmet cuisine, refreshing drinks, and a professional crew. Wherever you wish to go, we’ll take you there in style and comfort."
      : "Sail Phuket in style with our all-inclusive luxury yacht rentals—complete with gourmet dining, drinks, and a pro crew. Wherever you want to go, we’ll take you there in comfort and class.";

      const BgImage=
      pathname === "/bareboat-charter-thailand"
      ? "/images/boatimg1.png"
      : "/images/crewedimg.png";
  return (
    <HeroContent
      heading={heading}
      subheading={subHeading}
      backgroundImage={BgImage}
      dividerImage={PngIcons.rframe2}
    />
  );
};

export default HeroSection;
