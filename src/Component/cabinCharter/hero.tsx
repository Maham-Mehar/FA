import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
  return (
    <HeroContent
      heading="Cabin Charter Phuket A Luxurious Sailing Adventure"
      subheading="Sail Phuket in Style – 6 Days of Island Luxury & Adventure Await!"
      backgroundImage="/images/charterimg.png"
      dividerImage={PngIcons.rframe2}
    />
  );
};
export default HeroSection 