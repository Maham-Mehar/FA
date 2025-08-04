const Banner = () => {
  return (
    <div className="relative">
      {/* HERO IMAGE SECTION */}
      <div className="bg-[url('/images/BANNER.png')] bg-cover bg-center bg-no-repeat min-h-[63vh] md:min-h-[58vh] lg:min-h-[48vh] xl:min-h-[60vh] flex items-center relative mb-3 md:mb-4 lg:mb-6 mt-9 md:mt-12 lg:mt-15">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#034250]/47 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 py-10">
            {/* LEFT SIDE - Heading & Subheading */}
            <div className="max-w-xl text-center lg:text-left">
              <p className="text-white font-extrabold font-playfair text-[24px] md:text-[36px] xl:text-[40px] leading-snug">
                Overnight Itineraries
              </p>
              <p className="text-white font-normal font-inter pt-4 text-[18px] md:text-[20px] leading-relaxed">
                Whether you're dreaming of hidden coves, vibrant coral reefs, or quiet beach nights — we'll make it happen. Enjoy sunset sails, star-lit dinners, and waking up to paradise.
              </p>
            </div>

            {/* RIGHT SIDE - Description + Button */}
            <div className="max-w-sm text-center">
              <p className="text-white font-inter text-[18px] font-normal mb-4">
                Want something unique? We customize every trip to fit your style, pace, and preferences.
              </p>
              <button className="font-poppins font-semibold text-[18px] text-black bg-white border border-[#034250] px-6 py-2 rounded hover:bg-[#034250] hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
