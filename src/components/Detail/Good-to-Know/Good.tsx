import { DescriptionData } from '@/data/Detail';
import Image from 'next/image';

const Good = () => {

    return (
        <div>
            {DescriptionData.map((item, index) => (
                <div key={index}>
                    <div className='flex items-center gap-1 mt-[16px]'>
                        <Image src={item.imgg} alt='img' width={24} height={24} />
                        <p className='text-[#C3974C] font-plusjakarta font-extrabold text-[19px]'>{item.good}</p>
                    </div>
                    <div className="space-y-4 mt-[16px]">
                        {item.gooda.map((category, index) => (
                            <div key={index} className="grid grid-cols-2 gap-4 last:pb-[24px]">
                                <p className="font-bold text-[#012A50]">{category.title}</p>
                                <div className="space-y-1">
                                    {(category.detail ?? []).map((detail, idx) => (
                                        <p key={idx} className="text-[#1E1E1E]">{detail}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Good;