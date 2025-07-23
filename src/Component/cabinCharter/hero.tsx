const HeroSection = () => {
  return (
    <section className="relative w-full bg-[url('/images/charterimg.png')] bg-cover bg-center bg-no-repeat overflow-hidden min-h-[45vh] md:min-h-[80vh] lg:min-h-[72vh] xl:min-h-[82vh] flex items-center justify-center">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#034250]/50 z-0" />

      {/* Content */}
      <div className="flex items-center justify-center h-full w-full text-center text-white px-4 relative z-10">
        <div className="flex flex-col justify-center items-center max-w-3xl mx-auto">
          <p className="text-[28px] md:text-[36px] lg:text-[36px] xl:text-[40px] font-bold font-playfair mb-4 leading-tight md:max-w-2xl lg:max-w-2xl w-full">
            Cabin Charter Phuket: A Luxurious Sailing Adventure
          </p>
          <img
            src="/images/rframe.png"
            alt="Divider"
            className="w-[500px] mx-auto my-2"
          />
          <p className="text-[18px] md:text-[22px] font-normal uppercase font-sourceSanspro text-center mt-2 md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
            Sail Phuket in Style – 6 Days of Island Luxury & Adventure Await!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
