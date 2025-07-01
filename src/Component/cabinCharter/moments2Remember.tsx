"use client";
import Image from "next/image";
import React from "react";

const Moments2Remember: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
    <div className="text-center mb-[40px] flex flex-col items-center">
  <h2 className="text-[32px] sm:text-[40px] font-playfair text-green font-extrabold">
    Sailing Moments to Remember
  </h2>

  {/* Gold underline decoration */}
     <img
            src="/images/rframe.png"
            alt="Divider"
            className="w-[500px] flex justify-center text-center my-3 mx-auto"
          />

  <p className="text-[16px] sm:text-[20px] text-zink font-sourceSansPro text-center max-w-[420px]">
    A collection of memories from guests who turned dreams into voyages
  </p>
</div>


      {/* Collage */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center mt-8">
        {/* Row 1 */}
        <div className="flex flex-row gap-4">
          <div className="">
            <img src="/images/img1.png" alt="" className="rounded-xl" />
          </div>
          <div className="-mt-9">
             <img src="/images/img2.png" alt="" className="rounded-xl" />
          </div>
          <div className="mt-7">
            <img src="/images/img4.png" alt="" className="rounded-xl" />
          </div>
          <div className="">
            <img src="/images/img6.png" alt="" className="rounded-xl" />
          </div>
          <div className="-mt-[90px]">
            <img src="/images/img8.png" alt="" className="rounded-xl" />
          </div>
          <div className="mt-13">
            <img src="/images/img10.png" alt="" className="rounded-xl" />
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-row gap-4 ms-[140px]">
          <div className="-mt-[90px]">
            <img src="/images/img3.png" alt="" className="rounded-xl" />
          </div>
          <div className="-mt-[25px]">
            <img src="/images/img5.png" alt="" className="rounded-xl" />
          </div>
          <div className="">
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

