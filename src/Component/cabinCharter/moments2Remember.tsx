"use client";
import Image from "next/image";
import React from "react";

const Moments2Remember: React.FC = () => {
  return (
    <section className="bg-white py-4 md:py-9 lg:py-12 xl:py-16 px-4 xl:px-0">
      {/* Heading */}
      <div className="text-center mb-[40px] flex flex-col items-center">
        <p className="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-playfair text-zink text-green font-extrabold">
          Sailing Moments to Remember
        </p>

        {/* Gold underline decoration */}
        <img
          src="/images/rframe.png"
          alt="Divider"
          className="w-[500px] flex justify-center text-center my-3 mx-auto"
        />

        <p className="text-base md:text-lg lg:text-xl text-zink font-sourceSansPro text-center max-w-[420px]">
          A collection of memories from guests who turned dreams into voyages
        </p>
      </div>


      {/* Collage */}
      <div className="max-w-[78.2rem] mx-auto flex flex-col gap-2 md:gap-2 lg:gap-3 xl:gap-4 items-center mt-8">
        {/* Row 1 */}
        <div className="flex flex-row gap-1 md:gap-2 lg:gap-4">
          <div className="">
            <img src="/images/img1.png" alt="" className="rounded-xl" />
          </div>
          <div className="md:-mt-7 lg:-mt-9">
            <img src="/images/img2.png" alt="" className="rounded-xl" />
          </div>
          <div className="mt-5 lg:mt-7">
            <img src="/images/img4.png" alt="" className="rounded-xl" />
          </div>
          <div className="">
            <img src="/images/img6.png" alt="" className="rounded-xl" />
          </div>
          <div className="-mt-[55px] md:-mt-[65px] lg:-mt-[75px] xl:-mt-[90px] hidden md:block">
            <img src="/images/img8.png" alt="" className="rounded-xl" />
          </div>
          <div className="mt-5 md:mt-7 lg:mt-10 xl:mt-13">
            <img src="/images/img10.png" alt="" className="rounded-xl" />
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-row gap-1 md:gap-2 lg:gap-4 ms-[52px] md:ms-[80px] lg:ms-[105px] xl:ms-[140px]">
          <div className="-mt-[22px] md:-mt-[59px] lg:-mt-[75px] xl:-mt-[90px]">
            <img src="/images/img3.png" alt="" className="rounded-xl" />
          </div>
          <div className="-mt-[0px] md:-mt-[9px] lg:-mt-[11px] xl:-mt-[25px]">
            <img src="/images/img5.png" alt="" className="rounded-xl" />
          </div>
          <div className="hidden md:block">
            <img src="/images/img7.png" alt="" className="rounded-xl" />
          </div>
          <div className="">
            <img src="/images/img9.png" alt="" className="rounded-xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Moments2Remember;

