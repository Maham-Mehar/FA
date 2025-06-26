const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden min-h-[70vh] flex items-center justify-center ">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/images/Video 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
        {/* Content on top */}
        <div className="flex items-center justify-center h-full text-center text-white px-4">
          <div className="flex flex-col justify-center">
            <p className="text-[40px] font-bold font-playfair mb-4 max-w-2xl leading-tight">
            Cabin Charter Phuket: A Luxurious Sailing Adventure
            </p>
            <img src="/images/rframe.png" alt="" className="w-[500px] flex justify-center text-center mx-auto" />
            <p className="text-[24px] font-normal uppercasefont-sourceSanspro  mt-2">
            Sail Phuket in Style – 6 Days of Island Luxury & Adventure Await!
            </p>
          </div>
        </div>
      </section>
      
    )

}
export default HeroSection;
