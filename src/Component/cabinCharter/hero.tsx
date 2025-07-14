const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[50vh] md:min-h-[60vh] xl:min-h-[70vh] flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://res.cloudinary.com/dx8l5b0pj/video/upload/v1752486010/Video_2_vwnwb1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top */}
      <div className="flex items-center justify-center h-full w-full text-center text-white px-4">
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
