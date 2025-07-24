import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
  return (
    <HeroContent
      heading="Bareboat Charter Phuket"
      subheading="Experience a luxurious Phuket getaway with our all-inclusive yacht rentals, featuring gourmet cuisine, refreshing drinks, and a professional crew. Wherever you wish to go, we’ll take you there in style and comfort."
      backgroundImage="/images/boatmg1.png"
      dividerImage={PngIcons.rframe2}
    />
  );
};
export default HeroSection 