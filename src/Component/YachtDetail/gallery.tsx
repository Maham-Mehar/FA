"use client";

import { useState } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Yacht } from "../YachtDetail/hero"; // Make sure this interface includes galleryImages: string[]

type SliderItem = {
  image: string;
  alt?: string;
};

type Props = {
  data: Yacht | null;
};

const Gallery: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const pictures: SliderItem[] =
    data?.galleryImages?.map((img) => ({
      image: img,
      alt: data?.title || "Yacht Image",
    })) || [];

  if (pictures.length === 0 && data?.primaryImage) {
    pictures.push({ image: data.primaryImage, alt: "Primary image" });
  } else if (pictures.length === 0) {
    pictures.push({ image: "/images/fallback.jpg", alt: "Fallback image" });
  }

  const maxImages = 9;

  const openLightbox = (idx: number) => { 
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + pictures.length - 1) % pictures.length);
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="w-full pb-7">
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {/* Lightbox */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl p-2"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <IoMdClose />
            </button>

            <button
              className="absolute left-4 text-white text-4xl p-2"
              onClick={showPrev}
            >
              <MdOutlineKeyboardArrowLeft size={40} />
            </button>

            <img
              src={pictures[currentIndex].image}
              alt={pictures[currentIndex].alt ?? `Slide ${currentIndex + 1}`}
              className="max-h-[70vh] max-w-[50rem] w-full"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 text-white text-4xl p-2"
              onClick={showNext}
            >
              <MdOutlineKeyboardArrowRight size={40} />
            </button>

            <div className="absolute bottom-4 right-4 text-white text-sm">
              {currentIndex + 1} / {pictures.length}
            </div>
          </div>
        )}

        {/* Main Image */}
        <div className="col-span-2 row-span-2">
          <Image
            src={pictures[0].image}
            alt={pictures[0].alt ?? "Main Image"}
            className="rounded-xl w-full min-h-[185px] sm:min-h-[250px] md:min-h-[267px] lg:h-[308px] xl:h-[350px] object-cover"
            width={387}
            height={313}
            onClick={() => openLightbox(0)}
          />
        </div>

        {/* 2 Tall Images */}
        <div className="hidden lg:grid grid-rows-2 gap-2">
          {pictures.slice(1, 3).map((img, idx) => (
            <Image
              key={idx + 1}
              src={img.image}
              alt={img.alt ?? `img-${idx + 1}`}
              className="rounded-lg w-full h-[80px] sm:h-[120px] md:h-[130px] lg:h-[148px] xl:h-[170px] object-cover"
              width={200}
              height={210}
              onClick={() => openLightbox(idx + 1)}
            />
          ))}
        </div>

        {/* 2 More Tall Images */}
        <div className="grid grid-rows-2 gap-2">
          {pictures.slice(3, 5).map((img, idx) => (
            <Image
              key={idx + 3}
              src={img.image}
              alt={img.alt ?? `img-${idx + 3}`}
              className="rounded-lg w-full h-[90px] sm:h-[120px] md:h-[130px] lg:h-[148px] xl:h-[170px] object-cover"
              width={200}
              height={210}
              onClick={() => openLightbox(idx + 3)}
            />
          ))}
        </div>

        {/* 4 Small Images */}
        <div className="grid grid-rows-3 gap-2">
          {pictures.slice(5, 9).map((img, index) => (
            <div key={index + 5} className="relative">
              <Image
                src={img.image}
                alt={img.alt ?? `img-${index + 5}`}
                className="rounded-lg w-full h-[40px] sm:h-[60px] lg:h-[70px] xl:h-[81px] object-cover"
                width={100}
                height={81}
                onClick={() => openLightbox(index + 5)}
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
