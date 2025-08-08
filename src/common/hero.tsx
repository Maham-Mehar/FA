import PngIcons from "@/icons/pngIcon";

type HeroSectionProps = {
  heading: string;
  subheading?: string;
  subheading2?: string;
  backgroundImage: string;
  dividerImage?: string;
  button?: string;
};

const HeroContent: React.FC<HeroSectionProps> = ({
  heading,
  subheading,
  subheading2,
  backgroundImage,
  dividerImage = PngIcons.rframe2,
  button,
}) => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden min-h-[45vh] md:min-h-[80vh] lg:min-h-[72vh] xl:min-h-[82vh] flex items-center justify-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#034250]/60 z-0" />

      {/* Content */}
      <div className="flex items-center justify-center h-full text-center text-white px-4 relative z-10">
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-[28px] md:text-[36px] lg:text-[36px] xl:text-[40px] font-bold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full">
            {heading}
          </h1>

          {/* Divider Image */}
          {dividerImage && (
            <img
              src={dividerImage}
              alt="Divider"
              className="w-[150px] md:w-[300px] lg:w-[450px] xl:w-[500px] mx-auto"
            />
          )}

          {/* Subheading */}
          {subheading && (
            <p className="text-[18px] md:text-[22px] font-normal font-sourceSanspro text-center mt-2 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
              {subheading}
            </p>
          )}

          {/* Breadcrumb-like Subheading2 */}
          {subheading2 && (
            <p className="text-base md:text-xl lg:text-[22px] font-normal font-sourceSanspro text-center mt-2 md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
              <span className="text-red-600">Home</span> – <span className="text-white">{subheading2}</span>
            </p>
          )}

          {/* Button */}
          {button && (
            <button className="mt-4 bg-transparent border border-white px-4 py-2 text-white text-base font-medium hover:bg-[#D6AB61] transition-all duration-200">
              {button}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
