const HeroSection = () => {
  return (
    <div>
      {/* HERO IMAGE SECTION */}
      <div className="bg-[url('/images/hero.png')] bg-cover bg-center bg-no-repeat min-h-[30vh] md:min-h-[40vh] lg:min-h-[58vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col justify-center items-center">
          <p className="text-white font-extrabold font-playfair text-[18px] md:text-[24px] xl:text-[28px]">
            DESTINATIONS
          </p>
          <p className="text-white font-normal font-playfair pt-4 text-[28px] md:text-[44px] lg:text-[48px] xl:text-[56px] leading-tight">
            Our Destinations In Phuket
          </p>
        </div>
      </div>

      {/* DESCRIPTION PARAGRAPH */}
      <p className="text-center text-[#034250] font-sourceSansPro text-base sm:text-lg md:text-xl font-normal max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-12 leading-relaxed">
        Experience the epitome of luxury with Far Away Yachting’s private yacht in Phuket. Explore
        our magical destinations like Phi Phi Islands, the breathtaking Phang Nga Bay, and more in
        unparalleled style & comfort. Embark on a bareboat charter or indulge in a fully crewed
        experience, tailored to your desires.
      </p>
    </div>
  );
};

export default HeroSection;
