import { DescriptionData } from '@/data/Detail';
import Image from 'next/image';
import { useSelector } from "react-redux";
import type { RootState } from '@/lib/store/store';

const Description = () => {

    const { yachtsdetail } = useSelector((state: RootState) => state.yachtdetail);

    return (
        <div>
            {DescriptionData.map((item, index) => (
                <div key={index} className='mt-[25px]'>
                    <div className='flex items-center gap-1'>
                        <Image
                            src={item.img}
                            alt="icon"
                            width={20}
                            height={22}
                        />
                        <p className="font-plusjakarta font-extrabold text-[19px] text-[#C3974C]">
                            {item.label}
                        </p>
                    </div>
                    <p className="font-plusjakarta font-normal text-[#1E1E1E] text-[16px] mt-[12px]">
                        {item.desp.split("{label}")[0]}
                        <span className="font-bold">
                            {yachtsdetail?.name}
                        </span>
                        {item.desp.split("{label}")[1]}
                        <span className="font-bold">
                            {item.boldText}
                        </span>
                    </p>
                    <p className="font-plusjakarta font-normal text-[#1E1E1E] text-[16px] mt-[12px]">
                        {item.despt?.split("{label}")[0]}
                        <span className="font-bold">
                            {yachtsdetail?.name}
                        </span>
                        {item.despt?.split("{label}")[1]}
                    </p>
                    <p className="font-plusjakarta font-bold text-[#1E1E1E] text-[16px] mt-[12px] pb-[16px]">
                        {item.ready}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Description;