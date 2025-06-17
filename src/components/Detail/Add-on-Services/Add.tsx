import { DescriptionData } from '@/data/Detail';
import Image from 'next/image';
import { useSelector } from "react-redux";
import type { RootState } from '@/lib/store/store';

const Add = () => {

    const { yachtsdetail } = useSelector((state: RootState) => state.yachtdetail);

    return (
        <div>
            {DescriptionData.map((item, index) => (
                <div key={index}>
                    <div className='flex items-center gap-2 my-[16px]'>
                        <Image src={item.imgAdd} alt="" width={18} height={18} />
                        <p className='text-[#001B48] font-extrabold text-[19px] font-plusjakarta'>{item.add}</p>
                    </div>
                    <div className='space-y-3'>
                        {item.jacuzzi.map((category, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <Image src={category.img as string} alt='img' width={10} height={10} />
                                <p className='text-[#1E1E1E] font-normal text-[13px] font-plusjakarta'>{category.label}</p>
                            </div>
                        ))
                        }
                    </div>
                    <button className='mb-[16px]  px-[16px] py-[8px] mt-[16px] cursor-pointer text-[#012A50] font-extrabold text-[13px] font-plusjakarta border border-[#012A50] rounded-full'>
                        {item.btnv}
                    </button>
                    <div className="grid grid-cols-2 gap-4 mt-[16px]">
                        {item.watch.map((category, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <Image src={category.img as string} alt="img" width={20} height={20} />
                                    <p className="text-[#1E1E1E] font-bold font-plusjakarta text-[16px]">
                                        {category.label}
                                    </p>
                                </div>
                                {category.title && (
                                    <p className="font-plusjakarta font-normal text-[#1E1E1E] text-[16px] pl-[30px]">
                                        {category.title.split("{label}")[0]}{" "}
                                        <span className="font-bold">{yachtsdetail?.name}</span>
                                        {category.title.split("{label}")[1]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Add;