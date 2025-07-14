import Image from "next/image";
import PngIcons from "@/icons/pngIcon";

const Licence = () => {
  const certificates = [
    PngIcons.Certificate2,
    PngIcons.Certificate3,
    PngIcons.Certificate4,
    PngIcons.Certificate5,
    PngIcons.Certificate6,
    PngIcons.Certificate7,
  ];

  return (
    <div className="bg-white pt-7">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center mb-6 px-4">
        <p className="text-[21px] font-bold mb-2 underline text-[#034250] xl:text-[24px] uppercase">
          Booking terms and conditions
        </p>
        <Image
          src={PngIcons.Certificate1}
          height={100}
          width={150}
          alt="Certificate 1"
          className="mt-5 xl:mt-12"
        />
        <p className="mt-3 text-lg font-normal text-black">
          Tourism Authority Thailand OTD Licence #34/02546
        </p>
      </div>

      {/* Certificates Flex Row */}
      <div className="bg-[#F6F6F6] w-full py-5 px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-3 lg:gap-8 max-w-6xl mx-auto">
          {certificates.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`Certificate ${index + 2}`}
              height={70}
              width={110}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Licence;
