import { DescriptionData } from '@/data/Detail';
import Image from 'next/image';
import { useSelector } from "react-redux";
import type { RootState } from '@/lib/store/store';

const Review = () => {

    const { yachtsdetail } = useSelector((state: RootState) => state.yachtdetail);

    return (
        <div>
            {DescriptionData.map((item, index) => (
                <div key={index}>
                    <div className='mt-[16px] flex justify-end items-center gap-1'>
                        <p className='text-[#888888] font-medium text-[14px] font-plusjakarta'>{item.missing}</p>
                        <p className='text-[#0063FF] font-extrabold text-[19px] font-plusjakarta'>{item.yes}</p>
                    </div>
                    <div className='mt-[16px] flex items-center gap-2'>
                        <Image src={item.imgreview} alt='img' width={16} height={18} />
                        <p className="font-plusjakarta font-extrabold text-[#001B48] text-[19px]">
                            {item.review.split("{label}")[0]}
                            <span className="font-bold">
                                {yachtsdetail?.name}
                            </span>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-[16px] pb-[16px]">
                        <div className="flex items-start gap-2">
                            <div className="px-[8px] py-[4px] rounded-lg text-white bg-gradient-to-r from-[#022252] to-[#013D70]">
                                {item.reviewA[0]?.number}
                            </div>
                            <p className="text-[#012A50] font-extrabold text-[19px] font-plusjakarta">{item.reviewA[0]?.excellent}</p>
                            <p className="text-[#005292] font-normal text-[19px] font-plusjakarta">{item.reviewA[0]?.ex}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                            {item.reviewA[1]?.quality?.map((q, qIndex) => (
                                <div key={qIndex} className="flex flex-col">
                                    <p className="text-[#1E1E1E] font-plusjakarta font-normal text-[14px]">
                                        {q.label}
                                    </p>
                                    <div className='flex items-center gap-2'>
                                        <div className="h-2 bg-[#012A50] rounded-full w-full"></div>
                                        <p className="text-[#1E1E1E] font-plusjakarta font-normal text-[14px]">{q.number}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Review;