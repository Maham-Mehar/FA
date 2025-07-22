"use client";
import { islandsById } from "@/data/bestlandData";
import PngIcons from "@/icons/pngIcon";

interface BestLandsProps {
  id: string;
}

const BestLands: React.FC<BestLandsProps> = ({ id }) => {
  const islands = islandsById[id];

  if (!islands || islands.length === 0) return null;

  return (
    <section className="relative py-16 px-4 xl:px-0 max-w-7xl mx-auto bg-gradient-to-br from-[#FCFCFC] via-white to-[#F8F9FA] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-0 z-0 hidden lg:block opacity-60">
        <img src="/images/seashell.png" alt="" className="animate-pulse" />
      </div>
      <div className="absolute right-0 md:top-35 lg:top-49 xl:top-65 z-0 opacity-40">
        <img src={PngIcons.frame1} alt="" className="w-auto h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 z-0 opacity-30">
        <img src={PngIcons.line2} alt="" />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-10 animate-pulse"></div>

      {/* Title Section */}
      <div className="text-center mb-16 relative z-10">
        <div className="inline-block mb-4">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full">
            Discover Paradise
          </span>
        </div>
        <h2 className="text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-playfair text-zink font-extrabold mb-6 leading-tight">
          Best Islands Around Phi Phi
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore the most breathtaking islands that make Phi Phi a world-renowned destination
        </p>
      </div>

      {/* Islands Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto z-10">
        {islands.map((isle, idx) => (
          <div
            key={`${isle.id}-${idx}`}
            className={`group relative ${
              idx === 1
                ? "mt-0 md:mt-16 lg:mt-20"
                : idx === 2
                ? "mt-0 md:-mt-16 lg:-mt-20"
                : ""
            }`}
          >
            {/* Card Container */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              {/* Image Container */}
              <div className="relative overflow-hidden h-[280px] md:h-[320px] lg:h-[360px]">
                <img
                  src={isle.image}
                  alt={isle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Island Name Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <h3 className="text-[24px] md:text-[26px] lg:text-[28px] font-extrabold font-playfair text-zink">
                      {isle.title}
                    </h3>
                  </div>
                </div>

                {/* Floating Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="text-sm font-semibold text-zink">4.8</span>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  {/* Subtitle */}
                  <h4 className="font-sourceSanspro text-mustard text-xl md:text-[22px] lg:text-[24px] font-bold leading-tight">
                    {isle.subtitle}
                  </h4>
                  
                  {/* Description */}
                  <div className="space-y-3">
                    {isle.description.map((line, i) => (
                      <p
                        key={i}
                        className="text-zink font-normal font-inter text-base lg:text-[17px] leading-relaxed text-gray-700"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <span>Explore More</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-16 relative z-10">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Explore These Islands?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Book your dream yacht charter and experience these paradise destinations
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Your Adventure
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestLands;
