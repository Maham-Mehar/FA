import { DescriptionData } from '@/data/Detail';
import Image from 'next/image';

const Amenities = () => {

    return (
        <div>
            {DescriptionData.map((item, index) => (
                <div key={index}>
                    <div className='flex items-center gap-2 mt-[16px]'>
                        <Image src={item.imgA} alt='img' width={21} height={23} />
                        <p className='text-[#001B48] font-extrabold text-[19px] font-plusjakarta'>{item.amenities}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[12px]">
                        {item.amen?.map((category, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Image src={category.img as string} alt="icon" width={19} height={19} />
                                    <h3 className="text-[19px] font-plusjakarta font-semibold text-[#005292]">{category.title}</h3>
                                </div>
                                <div className="space-y-3">
                                    {category.items?.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center gap-2">
                                            <Image src={item.img as string} alt="icon" width={12} height={12} />
                                            <span className="text-[13px] font-normal font-plusjakarta text-[#1E1E1E]">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='mb-[16px] px-[16px] py-[8px] mt-[16px] cursor-pointer text-[#012A50] font-extrabold text-[13px] font-plusjakarta border border-[#012A50] rounded-full'>
                        {item.btn}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Amenities;