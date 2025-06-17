import { DetailData } from '@/data/Detail';
import Image from 'next/image';
import { useSelector } from "react-redux";
import type { RootState } from '@/lib/store/store';
import { format } from "date-fns";

const ReservationModal = () => {

    const { yachtsdetail } = useSelector((state: RootState) => state.yachtdetail);
    const start = useSelector((state: RootState) => state.dateRange.start);
    const end = useSelector((state: RootState) => state.dateRange.end);
    const formattedStart = start ? format(start, "dd MMMM yyyy") : "";
    const formattedEnd = end ? format(end, "dd MMMM yyyy") : "";

    return (
        <div>
            {DetailData.map((item, index) => (
                <div key={index}>
                    <div className='border border-[#D1D1D1] rounded-md bg-white shadow-md'>
                        <div className='relative bg-gradient-to-r from-[#022252] to-[#013D70] rounded-tl-lg rounded-tr-lg py-[22px] font-plusjakarta font-extrabold text-[16px] text-white'>
                            <p className='px-[10px]'>{item.reservation}</p>
                            <Image src="/images/Detail/reservation.png" alt="footer" width={36} height={36} className="absolute bottom-[10px] right-[30px]" />
                            <Image src="/images/footer.svg" alt="footer" width={0} height={82} className="w-full absolute bottom-0" />
                            <Image src="/images/footer-one.svg" alt="footer" width={0} height={82} className="w-full absolute bottom-0" />
                        </div>
                        <div className='py-[14px] px-[10px]'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#0061B1] font-extrabold text-[19px] font-plusjakarta'>{yachtsdetail?.name}</p>
                                <div className='flex items-center gap-1'>
                                    <Image src={item.imgstar} alt='img' width={10} height={10} />
                                    <p className='text-[#1E1E1E] font-normal text-[13px] font-plusjakarta'>{item.per}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-1 mt-[12px]'>
                                {item.icon && <item.icon className="text-[#012A50]" />}
                                <p className="text-[#012A50] font-plusjakarta font-normal text-[13px]">{yachtsdetail?.location?.name?.textEN}</p>
                            </div>
                            <div className='flex items-center gap-1 mt-[15px]'>
                                {item.iconc && <item.iconc className="text-[#012A50]" />}
                                <p className="text-[#012A50] font-plusjakarta font-bold text-[13px]">{item.date}</p>
                            </div>
                            <div className='border border-[#D1D1D1] rounded-md mt-[16px] px-[12px] py-[12px] flex justify-between'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[#012A50] font-bold font-plusjakarta text-[13px]'>{item.from}</p>
                                    <p className="text-[#888888] font-semibold font-plusjakarta text-[13px]">{formattedStart}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <p className='text-[#012A50] font-bold font-plusjakarta text-[13px]'>{item.to}</p>
                                    <p className="text-[#888888] font-semibold font-plusjakarta text-[13px]">{formattedEnd}</p>
                                </div>
                            </div>
                            <div className='flex items-center flex-col mt-[24px]'>
                                <button className='px-[24px] py-[8px] cursor-pointer text-white rounded-full font-extrabold text-[16px] bg-[#001B48]'>{item.btn}</button>
                                <p className='mt-[8px] font-plusjakarta font-medium text-[13px] text-[#B0B0B0]'>{item.or}</p>
                                <button className='border border-[#012A50] mt-[8px] cursor-pointer rounded-full px-[24px] py-[8px] text-[#012A50] font-extrabold text-[16px] font-plusjakarta'>
                                    {item.btnb}
                                </button>
                            </div>
                            <p className='font-plusjakarta mt-[8px] font-medium text-[11px] text-[#1E1E1E] pb-[16px] border-b border-[#D1D1D1]'>{item.desp}</p>
                            <div className='flex justify-between items-center mt-[16px]'>
                                <div className='flex items-center gap-1'>
                                    <Image src={item.img} alt='img' width={12} height={8} />
                                    <p className='text-[#1E1E1E] font-normal text-[13px] font-plusjakarta'>{item.list}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    {item.iconh && <item.iconh className="text-[#0063FF]" />}
                                    <p className='text-[#0063FF] text-[13px] font-normal font-plusjakarta'>{item.wishlist}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReservationModal;