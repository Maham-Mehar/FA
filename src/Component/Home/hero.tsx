import HeroContent from "@/common/hero";
import PngIcons from "@/icons/pngIcon";

const HeroSection = () => {
  return (
    <HeroContent
      heading="Phuket Yacht Charter"
      subheading="Experience luxury and adventure with the best Phuket Yacht Charter Operator. Sail the stunning waters & best Islands of Phuket in style and make unforgettable memories."
      backgroundImage="/images/homeimg1.png"
      dividerImage={PngIcons.rframe2}
    />
  );
};
export default HeroSection 