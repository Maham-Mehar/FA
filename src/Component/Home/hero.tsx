import PngIcons from "@/icons/pngIcon";

const HeroContent = () => {
  return (
    <section className="relative w-full bg-[url('/images/homeimg1.png')] bg-cover bg-end bg-no-repeat overflow-hidden min-h-[45vh] md:min-h-[80vh] lg:min-h-[72vh] xl:min-h-[82vh] flex justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/50 z-0" />

      {/* Batch Image Top-Left inside container */}
      <div className="relative max-w-6xl mx-auto w-full ">
        <img
          src="/images/batch1.png"
          alt="Batch"
          className="absolute top-6 w-[150px] h-auto z-10"
        />

        {/* Content on top */}
        <div className="flex items-center justify-center h-full text-center text-white px-4 relative z-10">
          <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
            <p className="text-[28px] md:text-[36px] lg:text-[36px] xl:text-[40px] font-bold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full">
              Phuket Yacht Charter
            </p>
            <img
              src={PngIcons.rframe2}
              alt="Divider"
              className="w-[150px] md:w-[300px] lg:w-[450px] xl:w-[500px] flex justify-center text-center mx-auto"
            />
            <p className="text-[18px] md:text-[22px] font-normal font-sourceSanspro text-center my-5 md:max-w-2xl lg:max-w-4xl xl:max-w-4xl">
              Experience luxury and adventure with the best Phuket Yacht Charter Operator. Sail the stunning waters & best Islands of Phuket in style and make unforgettable memories.
            </p>
            <button className="mt-4 bg-transparent border border-white px-8 py-2 text-white text-lg font-medium hover:bg-[#D6AB61]">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
