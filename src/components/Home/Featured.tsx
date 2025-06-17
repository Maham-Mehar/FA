// "use client";

// import React, { useState, useRef } from "react";
// import { FeaturedData } from "@/data/Home";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// interface CustomPrevArrowProps {
//     onClick?: React.MouseEventHandler<HTMLButtonElement>;
//     className?: string;
//     style?: React.CSSProperties;
// }

// const Featured = () => {

//     const [favorites, setFavorites] = useState<Record<number, Record<number, boolean>>>({});
//     const [activeSlide, setActiveSlide] = useState(0);
//     const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);

//     const toggleFavorite = (itemId: number, imgIndex: number) => {
//         setFavorites((prev) => ({
//             ...prev,
//             [itemId]: {
//                 ...(prev[itemId] || {}),
//                 [imgIndex]: !prev[itemId]?.[imgIndex] || false,
//             },
//         }));
//     };

//     const CustomPrevArrow = (props: CustomPrevArrowProps) => {
//         const { onClick } = props;
//         return (
//             <button
//                 onClick={onClick}
//                 className="absolute hidden sm:block left-[-35px] md:left-[-35px] lg:left-[-30px] xl:left-[-40px] cursor-pointer top-1/2 transform -translate-y-1/2 z-10 text-[#022252]"
//             >
//                 <IoIosArrowBack size={35} />
//             </button>
//         );
//     };

//     const CustomNextArrow = (props: CustomPrevArrowProps) => {
//         const { onClick } = props;
//         return (
//             <button
//                 onClick={onClick}
//                 className="absolute hidden sm:block right-[-35px] md:right-[-20px] lg:right-[-30px] cursor-pointer top-1/2 transform -translate-y-1/2 z-10 text-[#022252]"
//             >
//                 <IoIosArrowForward size={35} />
//             </button>
//         );
//     };

//     const sliderSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         prevArrow: <CustomPrevArrow />,
//         nextArrow: <CustomNextArrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: { slidesToShow: 2 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: { slidesToShow: 1 },
//             },
//         ],
//     };

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: false,
//         afterChange: (index: number) => setActiveSlide(index),
//     };

//     return (
//         <div className="bg-[#F4F8FB] relative">
//             <div className="px-6 py-8 sm:py-8 relative">
//                 <h3 className="font-gloss text-[24px] font-normal text-center text-[#26BFFF]">
//                     {FeaturedData[0].main}
//                 </h3>
//                 <h2 className="font-dmserif text-center text-[52px] sm:text-[72px] font-normal gradient-text leading-13">
//                     {FeaturedData[0].title}
//                 </h2>
//                 <p className="font-plusjakarta text-center text-[#1E1E1E] font-normal sm:text-[23px] leading-6 sm:leading-7 mt-2">{FeaturedData[0].desp}</p>
//                 <div className="sm:max-w-[21rem] md:max-w-[47rem] lg:max-w-[68rem] sm:mx-[8rem] md:mx-auto">
//                     <Slider {...sliderSettings} className="mt-8">
//                         {FeaturedData.slice(1).map((item, index) => (
//                             <div key={index} className="px-2">
//                                 <div className="bg-white rounded-lg shadow-md overflow-hidden h-[28.4rem] w-full sm:w-80">
//                                     <div className="relative">
//                                         <Slider ref={sliderRef} {...settings}>
//                                             {item.image?.map((imgSrc, index) => (
//                                                 <div key={index} className="relative">
//                                                     <Image
//                                                         src={imgSrc}
//                                                         alt={item.label as string}
//                                                         width={344}
//                                                         height={258}
//                                                     />
//                                                     <div className="flex flex-col gap-2 absolute right-4 top-[6rem]">
//                                                         {item.image?.map((_, idx) => (
//                                                             <button
//                                                                 key={idx}
//                                                                 className={`w-[3px] h-[24px] cursor-pointer rounded-md bg-[#B0B0B0] ${idx === activeSlide ? "bg-white" : ""}`}
//                                                                 onClick={() => sliderRef.current?.slickGoTo(idx)}
//                                                             ></button>
//                                                         ))}
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </Slider>
//                                         <div className="absolute top-2 right-2 text-[#F7F7F7]/50 text-[24px] cursor-pointer"
//                                             onClick={() => toggleFavorite(item.id, index)}>
//                                             {favorites[item.id]?.[index] ? (
//                                                 <FaHeart className="text-[#C3974C]" />
//                                             ) : (
//                                                 <FaRegHeart />
//                                             )}
//                                         </div>
//                                         <div className="absolute top-[13.5rem] left-[2rem] flex py-[9px] px-[18px] bg-white rounded-md" style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}>
//                                             {item.arrayft?.map((ft) => (
//                                                 <div
//                                                     key={ft.id}
//                                                     className="flex items-center px-2 border-r last:border-r-0 border-[#E8E8E8] py-1 rounded-md text-sm"
//                                                 >
//                                                     {ft.img && (
//                                                         <Image src={ft.img} alt={ft.label as string} width={16} height={16} />
//                                                     )}
//                                                     {ft.icon && <ft.icon className="text-[#122B3F] text-[16px]" />}
//                                                     <span className="ml-1 font-normal text-[13px] text-[#1A2C37] font-plusjakarta">{ft.label}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                     <div className="pt-7 p-4">
//                                         <div className="flex justify-between items-center">
//                                             <h3 className="font-plusjakarta font-extrabold text-[19px] text-[#0061B1]">{item.label}</h3>
//                                             <div className="flex items-center">
//                                                 <Image src={item.imgstar as string} alt="star" width={10} height={10} />
//                                                 <span className="ml-1 text-[#1E1E1E] font-plusjakarta font-normal text-[13px]">{item.per}</span>
//                                             </div>
//                                         </div>
//                                         <div className="flex flex-wrap gap-3 mt-[12px] items-center">
//                                             {item.arraysk?.map((sk) => (
//                                                 <div key={sk.id} className="flex items-center">
//                                                     <Image src={sk.img as string} alt={sk.label as string} width={12} height={12} />
//                                                     <span className="ml-1 font-plusjakarta font-normal text-[13px] text-[#6D6D6D]">{sk.label}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         <div className="flex items-center mt-[8px]">
//                                             {item.icon && <item.icon className="text-[#012A50]" />}
//                                             <span className="ml-1 text-[#012A50] font-plusjakarta font-extrabold text-[13px]">{item.location}</span>
//                                         </div>
//                                         <p className="mt-[16px] text-[#3D3D3D] font-normal text-[13px] font-plusjakarta">
//                                             {item.from}
//                                         </p>
//                                         <div className="mt-1 flex items-center justify-between">
//                                             <div>
//                                                 <span className="text-[#C3974C] font-plusjakarta font-extrabold text-[23px]">
//                                                     {item.price}
//                                                 </span>
//                                                 <span className="text-[#3D3D3D] font-plusjakarta font-normal text-[13px]">{item.day}</span>
//                                             </div>
//                                             <button className="px-[24px] py-[8px] cursor-pointer font-plusjakarta font-extrabold text-[13px] bg-[#001B48] text-white rounded-full">
//                                                 {item.btn}
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//                 <div className="flex justify-center mt-[20px] mb-[120px]">
//                     <button className="px-[24px] py-[8px] font-plusjakarta cursor-pointer rounded-full font-extrabold text-[19px] text-white bg-[#C3974C]">
//                         See All Available Yachts
//                     </button>
//                 </div>
//                 <Image src="/images/Home/feautred-null.svg" alt="footer" width={64} height={66} className="absolute bottom-7 left-0" />
//                 <Image src="/images/Home/featured-boat.svg" alt="footer" width={195} height={199} className="absolute h-[120px] sm:h-[150px] bottom-4 sm:bottom-8 md:bottom-8 lg:bottom-12 right-0" />
//             </div>
//             <Image src="/images/Home/featured-wave.svg" alt="footer" width={0} height={82} className="w-full absolute bottom-0" />
//             <Image src="/images/Home/featured-wave-one.svg" alt="footer" width={0} height={82} className="w-full absolute bottom-0" />
//         </div>
//     );
// };

// export default Featured;