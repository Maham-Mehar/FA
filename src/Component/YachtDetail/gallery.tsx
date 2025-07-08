"use client";
import Image from "next/image";
const Gallery = () => {
  const maxImages = 9;

  const pictures = [
    "/images/crewedadv4.png",
    "/images/crewedadv2.png",
    "/images/crewedadv3.png",
    "/images/crewedadv1.png",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img8.png",
    "/images/img9.png",
    "/images/img10.png",
  ];


  return (
    <div className="w-full py-7">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {/* Main Image */}
        <div className="lg:col-span-2 row-span-2">
          <Image
            src={pictures[0]}
            alt="main-img"
            className="rounded-xl w-full min-h-[180px] sm:min-h-[250px] md:min-h-[280px] lg:h-[320px] xl:h-[350px] object-cover"
            width={387}
            height={313}
          />
        </div>

        {/* 2 Tall Images */}
        <div className="grid grid-rows-2 gap-0 xl:gap-2">
          {pictures.slice(1, 3).map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`img-${idx}`}
              className="rounded-lg w-full h-[80px] sm:h-[120px] lg:h-[150px] xl:h-[170px] object-cover"
              width={200}
              height={210}
            />
          ))}
        </div>

        {/* 2 Tall Images */}
        <div className="grid grid-rows-2 gap-2">
          {pictures.slice(3, 5).map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`img-${idx}`}
              className="rounded-lg w-full h-[80px] sm:h-[120px] md:h-[170px] object-cover"
              width={200}
              height={210}
            />
          ))}
        </div>

        {/* 4 Small Images */}
        <div className="grid grid-rows-3 gap-2">
          {pictures.slice(5, 9).map((img, index) => (
            <div key={index} className="relative">
              <Image
                src={img}
                alt={`img-${index}`}
                className="rounded-lg w-full h-[40px] sm:h-[60px] md:h-[81px] object-cover"
                width={100}
                height={81}
              />
              {index === 3 && pictures.length > maxImages && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-sm rounded-lg">
                  +{pictures.length - maxImages}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

 
    </div>
  );
};

export default Gallery;
