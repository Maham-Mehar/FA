import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
  return (
    <HeroContent
      heading="Yacht Charter Phuket"
      subheading="Sail Phuket in style with our all-inclusive luxury yacht rentals—complete with gourmet dining, drinks, and a pro crew. Wherever you want to go, we’ll take you there in comfort and class."
      backgroundImage="/images/crewedimg.png"
      dividerImage={PngIcons.rframe2}
    />
  );
};
export default HeroSection 