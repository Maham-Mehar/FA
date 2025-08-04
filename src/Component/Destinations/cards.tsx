"use client";
import CardData from "../../data/destinationCards";
import Image from "next/image";
import Link from "next/link";
const Cards = () => {
  return (
    <div className="bg-white px-4 sm:px-4 xl:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gx-0 gap-3 md:gap-4 lg:gap-6 xl:gap-8 px-4">
          {CardData.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden transition-transform duration-300 border-1 rounded-tl-3xl rounded-b-lg border-gray-300 hover:shadow-2xl hover:scale-[1.03] mt-10 bg-white"
            >
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={item.image}
                  alt="card"
                  width={400}
                  height={300}
                  className="object-cover w-full h-[270px] sm:h-[300px] md:h-[270px] lg:h-[280px] xl:h-[330px] rounded-tl-3xl rounded-br-3xl"
                />
                <div className="absolute bottom-0 bg-opacity-40 w-full text-white px-4 py-2">
                  <p className="text-foreground font-playfair text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] font-extrabold transition-all duration-300">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* TEXT & BUTTON */}
              <div className="px-4 xl:px-4 py-4 flex flex-col justify-between min-h-[150px] md:min-h-[180px] lg:min-h-[200px]">
                <p className=" text-[17px] font-sourceSansPro lg:text-[17px] xl:text-[20px] text-black">{item.description}</p>
                <div className="flex justify-between items-center sm:items-center mt-4 gap-4">
                  <Link href={`/${item.id}`}>
                    <p className="text-zink font-poppins text-[18px] sm:text-[21px] font-extrabold underline cursor-pointer hover:text-[#D6AB61]">
                      Read More
                    </p>
                  </Link>
                  <button className="border font-poppins bg-white text-base lg:text-[17px] xl:text-[19px] border-mustard text-zink px-3 lg:px-4 xl:px-5 py-2 rounded-lg hover:bg-[#034250] hover:text-white transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
