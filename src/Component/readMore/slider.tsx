// "use client";
// import Slider, { CustomArrowProps } from "react-slick";
// import { yachts, Yacht } from "@/data/sliderData2";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import YachtCards from "@/common/yachtCards";

// const PrevArrow = ({ onClick }: CustomArrowProps) => (
//   <button
//     onClick={onClick}
//     className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-2 hidden group-hover:block"
//   >
//     <FiChevronLeft size={24} />
//   </button>
// );

// const NextArrow = ({ onClick }: CustomArrowProps) => (
//   <button
//     onClick={onClick}
//     className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black text-white p-2 hidden group-hover:block"
//   >
//     <FiChevronRight size={24} />
//   </button>
// );

// const YachtCard = ({ boat }: { boat: Yacht }) => (
//   <div className="">
//     {/* <div className="bg-white mb-3 py-5 rounded-xl me-7 transition">
//       <div className="overflow-hidden">
//         <img
//           src={boat.image}
//           alt={boat.name}
//           className="w-full h-70 object-cover rounded-tl-3xl rounded-br-3xl"
//         />
//       </div>
//       <div className="mt-3 space-y-1 px-3">
//         <p className="text-[20px] font-poppins text-red-500 font-semibold">
//           from {boat.priceFrom.toLocaleString()} EUR
//         </p>
//         <h3 className="md:text-[24px] lg:text-[26px] xl:text-[30px] font-playfair text-zink">{boat.name}</h3>
//         <p className="text-[22px] font-sourceSanspro text-gray-600">
//           Day &amp; Overnight Charter
//         </p>
//       </div>
//       <div className="mt-4 px-2 pt-3 flex justify-between border-t border-gray-300 text-gray-700 text-sm">
//         <div className="flex items-center space-x-1">
//           <img src="/images/icon1.png" alt="" /> <span>{boat.lengthFt} ft</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <img src="/images/icon2.png" alt="" /> <span>{boat.guests}</span>
//         </div>
//         <div className="flex items-center space-x-1 pe-8">
//           <img src="/images/icon3.png" alt="" /> <span>{boat.cabins}</span>
//         </div>
//       </div>
//     </div> */}
//     <YachtCards columns={1} />
//   </div>
// );

// interface YachtSliderProps {
//   id: string;
// }

// const YachtSlider = ({ id }: YachtSliderProps) => {
//   // Only show slider for first three pages (ids: 1, 2, 3)
//   const shouldShowSlider = ['phi-phi-island', 'phang-nga-bay', 'racha-islands'].includes(id);

//   if (!shouldShowSlider) {
//     return null;
//   }

//   const settings = {
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         // below 1024px (md)
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         // below 768px (sm)
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };


//   return (
//     <section className="relative py-5 md:py-9 lg:py-12 xl:py-16 px-4 lg:px-5 xl:px-0">
//       <div className="flex flex-col justify-center items-center mb-5 md:mb-7 lg:mb-10 xl:mb-14">
//         <h2 className="text-center text-3xl lg:text-4xl font-playfair text-zink mb-2  ">
//           Luxury Yacht charter in Phuket
//         </h2>
//         <img src="/images/frame3.png" alt="" />
//       </div>
//       <div className="bg-[#FCFCFC]">
//         <div className="group relative max-w-7xl mx-auto py-12">
//           <Slider {...settings}>
//             {yachts.map((boat) => (
//               <YachtCard key={boat.id} boat={boat} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default YachtSlider;
