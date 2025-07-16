"use client";

import { useState } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Yacht } from "../YachtDetail/hero";

type Props = {
  data: Yacht | null;
};
type SliderItem = {
  image: string;
  alt?: string;
};

const Gallery: React.FC<Props> = ({ data }) => {

  if (!data) return null;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + data.galleryImages.length - 1) % data.galleryImages.length);
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.galleryImages.length);
  };

  const maxImages = 9;

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
              src={data.galleryImages[currentIndex] || ""}
              alt={data.galleryImages[currentIndex] ?? `Slide ${currentIndex + 1}`}
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
              {currentIndex + 1} / {data.galleryImages.length}
            </div>
          </div>
        )}

        {data?.galleryImages?.[0] && (
          <div className="col-span-2 row-span-2">
            <Image
              src={data.galleryImages[0]}
              alt="Yacht Image"
              className="rounded-xl w-full min-h-[185px] sm:min-h-[250px] md:min-h-[267px] lg:h-[308px] xl:h-[350px] object-cover"
              width={387}
              height={313}
              onClick={() => openLightbox(0)}
            />
          </div>
        )}


        {/* 2 Tall Images */}
        <div className="hidden lg:grid grid-rows-2 gap-2">
          {data?.galleryImages.slice(1, 3).map((img, idx) => (
            <Image
              key={idx + 1}
              src={img}
              alt="Yacht Image"
              className="rounded-lg w-full h-[80px] sm:h-[120px] md:h-[130px] lg:h-[148px] xl:h-[170px] object-cover"
              width={200}
              height={210}
              onClick={() => openLightbox(idx + 1)}
            />
          ))}
        </div>

        {/* 2 Tall Images */}
        <div className="grid grid-rows-2 gap-2">
          {data?.galleryImages.slice(3, 5).map((img, idx) => (
            <Image
              key={idx + 3}
              src={img}
              alt="Yacht Image"
              className="rounded-lg w-full h-[90px] sm:h-[120px] md:h-[130px] lg:h-[148px] xl:h-[170px] object-cover"
              width={200}
              height={210}
              onClick={() => openLightbox(idx + 3)}
            />
          ))}
        </div>

        {/* 4 Small Images */}
        <div className="grid grid-rows-3 gap-2">
          {data?.galleryImages.slice(5, 9).map((img, index) => (
            <div key={index + 5} className="relative">
              <Image
                src={img}
                alt="Yacht Image"
                className="rounded-lg w-full h-[40px] sm:h-[60px] lg:h-[70px] xl:h-[81px] object-cover"
                width={100}
                height={81}
                onClick={() => openLightbox(index + 5)}
              />
              {index === 3 && data.galleryImages.length > maxImages && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-sm rounded-lg">
                  +{data.galleryImages.length - maxImages}
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