import { DescriptionData } from '@/data/Detail';
import Image from 'next/image';
import { useSelector } from "react-redux";
import type { RootState } from '@/lib/store/store';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Calendar from '../Calendar';
import Slides from '../Slides';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CustomPrevArrowProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    style?: React.CSSProperties;
}

const Availability = () => {

    const { yachtsdetail } = useSelector((state: RootState) => state.yachtdetail);

    const CustomPrevArrow = (props: CustomPrevArrowProps) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="absolute left-[-10px] shadow-lg flex items-center justify-center w-[63px] h-[51px] rounded-r-full cursor-pointer top-1/2 transform -translate-y-1/2 z-10 bg-white gradient-text"
            >
                <IoIosArrowBack size={25} />
            </button>
        );
    };

    const CustomNextArrow = (props: CustomPrevArrowProps) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="absolute right-[-10px] shadow-xl flex items-center justify-center w-[63px] h-[51px] rounded-l-full cursor-pointer top-1/2 transform -translate-y-1/2 z-10 bg-white gradient-text"
            >
                <IoIosArrowForward size={25} />
            </button>
        );
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div>
            {DescriptionData.map((item, index) => (
                <div key={index}>
                    <div className='flex items-center gap-2 mt-[16px]'>
                        <Image src={item.calendar} alt='img' width={16} height={16} />
                        <p className='text-[#001B48] font-extrabold text-[19px] font-plusjakarta'>{item.calendarl}</p>
                    </div>
                    <div className='mt-[16px] flex flex-col items-center gap-4'>
                        <Calendar />
                        <div className='flex items-center gap-4'>
                            {item.unA.map((item, index) => (
                                <div key={index} className='flex items-center gap-2'>
                                    <div className={`w-[16px] h-[16px] rounded-md ${item.label === "Unavailable" ? "bg-[#D1D1D1]" : "bg-gradient-to-r from-[#022252] to-[#013D70]"}`} />
                                    <p className='text-[#1E1E1E] font-normal text-[16px] font-plusjakarta'>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[50px]">
                        <Slider {...settings}>
                            {item.dateAvailability.map((item, index) => (
                                <div
                                    key={index}
                                    className={`text-center px-4 relative z-0 ${(index + 1) % 4 === 0 ? "" : "border-r border-[#D1D1D1]"
                                        }`}
                                >
                                    <p className="font-medium font-plusjakarta text-[14px] text-[#000000]">
                                        {item.startDate} – {item.endDate}
                                    </p>
                                    <p
                                        className={`text-[14px] font-medium font-plusjakarta mt-1 ${item.status === "Reserved" ? "text-[#FF4234]" : "text-[#00B45F]"
                                            }`}
                                    >
                                        {item.status}
                                    </p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='mt-[34px] bg-[#EEF8FF] border border-[#D1D1D1] flex justify-between rounded-md shadow-md py-[12px] px-[16px]'>
                        <div className='flex gap-2 h-[1.6rem]'>
                            <p className='text-[#001B48] font-extrabold text-[19px] font-plusjakarta border-r-2 border-[#001B48] pr-2'>{yachtsdetail?.name}</p>
                            <p className='text-[#001B48] font-extrabold text-[19px] font-plusjakarta'>{item.luxury}</p>
                        </div>
                        <div className='flex flex-col gap-3 items-end'>
                            <div className='flex items-center gap-2'>
                                <Image src={item.imgalways} alt='img' width={24} height={24} />
                                <p className='text-[#012A50] font-medium text-[13px] font-plusjakarta'>{item.always}</p>
                            </div>
                            <div className='flex items-end flex-col'>
                                <p className='text-[#3D3D3D] font-normal text-[13px] font-plusjakarta'>{item.starting}</p>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[#C3974C] font-bold text-[20px] font-plusjakarta'>€{yachtsdetail?.seasonSpecificData?.[0]?.prices?.[0]?.price}</p>
                                    <p className='text-[#3D3D3D] font-normal text-[13px] font-plusjakarta'>{yachtsdetail?.seasonSpecificData?.[0]?.prices?.[0]?.type}</p>
                                </div>
                            </div>
                            <button className='bg-[#001B48] text-white cursor-pointer font-normal text-[13px] font-plusjakarta px-[24px] py-[8px] rounded-full'>
                                {item?.check}
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-2 mt-[16px] pb-[16px] border-b border-[#B0B0B0]'>
                        <div className='flex items-center'>
                            <p className='text-[#1E1E1E] font-extrabold text-[13px] font-plusjakarta'>{item?.not}</p>
                            <p className='text-[#1E1E1E] font-medium text-[13px] font-plusjakarta'>{item?.discover}</p>
                        </div>
                        <button className='bg-[#001B48] text-white cursor-pointer font-normal text-[13px] font-plusjakarta px-[24px] py-[8px] rounded-full'>
                            {item?.request}
                        </button>
                    </div>
                    <div className='flex justify-center mt-[16px]'>
                        <button className='bg-[#001B48] text-white cursor-pointer font-normal text-[13px] font-plusjakarta px-[24px] py-[8px] rounded-full'>
                            {item?.booknow}
                        </button>
                    </div>
                    <div className='flex items-center gap-2 mt-[16px]'>
                        <Image src={item.imgpopular} alt='img' width={24} height={24} />
                        <p className='text-[#001B48] font-extrabold text-[19px] font-plusjakarta'>{item?.popular}</p>
                    </div>
                    <div className='mt-[16px'>
                        <Slides />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Availability;