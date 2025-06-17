import { DetailData } from '@/data/Detail';
import Image from 'next/image';
import { useSelector } from "react-redux";
import type { RootState } from '@/lib/store/store';
import { CiCalendar } from "react-icons/ci";


const Gallery = () => {

    const { yachtsdetail } = useSelector((state: RootState) => state.yachtdetail);

    const maxImages = 9;
    const pictures = yachtsdetail?.picturesURL || [];
    const visiblePictures = pictures.slice(0, maxImages);

    const arrayft = [
        {
            id: 1,
            img: "/images/Home/featured-ft.svg",
            label: "75 ft.",
        },
        {
            id: 2,
            img: "/images/Home/featured-guest.svg",
            label: yachtsdetail?.maxPersons ? `${yachtsdetail.maxPersons} guests` : null,
        },
        {
            id: 3,
            icon: CiCalendar,
            label: yachtsdetail?.launchedYear ?? null,
        },
    ];

    const arraysk = [
        {
            id: 1,
            img: "/images/Detail/skipper.svg",
            label: yachtsdetail?.crewedCharterType ? `${yachtsdetail.crewedCharterType}` : null,
        },
        {
            id: 2,
            img: "/images/Detail/cabin.svg",
            label: yachtsdetail?.cabins ? `${yachtsdetail.cabins} Cabins` : null,
        },
        {
            id: 3,
            img: "/images/Detail/berth.svg",
            label: yachtsdetail?.berthsCabin ? `${yachtsdetail.berthsCabin} Berths` : null,
        },
        {
            id: 4,
            img: "/images/Detail/wifi.svg",
            label: yachtsdetail?.standardYachtEquipment?.[0]?.equipment?.name?.textEN
                ? `${yachtsdetail.standardYachtEquipment[0]?.equipment?.name.textEN}`
                : null,
        },
        {
            id: 5,
            img: "/images/Detail/fans.svg",
            label: yachtsdetail?.standardYachtEquipment?.[1]?.equipment?.name?.textEN
                ? `${yachtsdetail.standardYachtEquipment[1]?.equipment?.name.textEN}`
                : null,
        },
        {
            id: 6,
            img: "/images/Detail/gps.svg",
            label: yachtsdetail?.standardYachtEquipment?.[2]?.equipment?.name?.textEN
                ? yachtsdetail.standardYachtEquipment[2].equipment.name.textEN.split(",")?.[1]?.trim()
                : null,
        },
        {
            id: 7,
            img: "/images/Detail/stove.svg",
            label: yachtsdetail?.standardYachtEquipment?.[3]?.equipment?.name?.textEN
                ? `${yachtsdetail.standardYachtEquipment[3]?.equipment?.name.textEN}`
                : null,
        },
        {
            id: 8,
            img: "/images/Detail/depth.svg",
            label: yachtsdetail?.standardYachtEquipment?.[4]?.equipment?.name?.textEN
                ? `${yachtsdetail.standardYachtEquipment[4]?.equipment?.name.textEN}`
                : null,
        },
        {
            id: 9,
            img: "/images/Detail/gps.svg",
            label: yachtsdetail?.standardYachtEquipment?.[5]?.equipment?.name?.textEN
                ? `${yachtsdetail.standardYachtEquipment[5]?.equipment?.name.textEN}`
                : null,
        },
    ];

    return (
        <div>
            {DetailData.map((item, index) => (
                <div key={index}>
                    <div className='flex flex-col justify-between h-[29.7rem]'>
                        <div className={`grid ${pictures.length <= 4 ? 'grid-cols-4' : 'grid-cols-5'} gap-2`}>
                            {/* First ID takes up 2 columns */}
                            {visiblePictures.slice(0, 1).map((arrayItem, index) => (
                                <div key={index} className="col-span-2 row-span-2 h-[350px]">
                                    <Image
                                        src={arrayItem}
                                        alt="main-img"
                                        className="rounded-xl h-[350px] w-full cursor-pointer"
                                        width={387}
                                        height={313}
                                    />
                                </div>
                            ))}

                            {/* Second & Third ID share column 3 */}
                            <div className="col-span-1 grid grid-rows-2 gap-2">
                                {visiblePictures.slice(1, 3).map((arrayItem, index) => (
                                    <div key={index} className="row-span-1">
                                        <Image
                                            src={arrayItem}
                                            alt={`img-${index}`}
                                            className="rounded-lg w-full h-[170px] cursor-pointer"
                                            width={200}
                                            height={210}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Fourth & Fifth ID share column 4 */}
                            <div className="col-span-1 grid grid-rows-2 gap-2">
                                {visiblePictures.slice(3, 5).map((arrayItem, index) => (
                                    <div key={index} className="row-span-1">
                                        <Image
                                            src={arrayItem}
                                            alt={`img-${index}`}
                                            className="rounded-lg w-full h-[170px] cursor-pointer"
                                            width={200}
                                            height={210}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Remaining IDs use column 5 */}
                            <div className="col-span-1 grid grid-rows-3 gap-2">
                                {visiblePictures.slice(5, 9).map((arrayItem, index) => {
                                    const actualIndex = index + 5; // since slice starts at 5
                                    const isLastVisible = actualIndex === maxImages - 1 && pictures.length > maxImages;
                                    return (
                                        <div key={index} className="relative row-span-1">
                                            <Image
                                                src={arrayItem}
                                                alt={`img-${actualIndex}`}
                                                className="rounded-lg h-[81px] w-full cursor-pointer"
                                                width={100}
                                                height={81}

                                            />
                                            {isLastVisible && (
                                                <div className="absolute inset-0 font-plusjakarta cursor-pointer flex items-center justify-center text-white bg-gradient-to-b from-[#022252]/80 to-[#013D70]/80 font-bold text-sm rounded-lg">
                                                    +{pictures.length - maxImages}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#007ADB] font-extrabold text-[19px] font-plusjakarta'>{item.luxury}</p>
                                <div className='flex items-center gap-1'>
                                    {item.icon && <item.icon className="text-[#012A50]" />}
                                    <p className="text-[#012A50] font-plusjakarta font-extrabold text-[16px]">{yachtsdetail?.location?.name?.textEN}</p>
                                </div>
                            </div>
                            <div className='mt-[12px] flex justify-between items-start'>
                                <div className="flex items-center gap-2">
                                    {arrayft.map((ft) => (
                                        <div
                                            key={ft.id}
                                            className="flex items-center border border-[#E8E8E8] bg-white py-[10px] px-[16px] rounded-md"
                                            style={{ boxShadow: "0px 4px 24px 0px #B5B5B540" }}
                                        >
                                            {ft.img && (
                                                <Image src={ft.img} alt="feature icon" width={16} height={16} />
                                            )}
                                            {ft.icon && <ft.icon className="text-[#122B3F] text-[16px]" />}
                                            <span className="ml-1 font-normal text-[12px] text-[#1A2C37] font-plusjakarta">{ft.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className='flex items-center gap-1'>
                                        {item.arraystar.map((star, index) => (
                                            <Image key={index} src={star.img} alt="img" width={10} height={10} />
                                        ))}
                                    </div>
                                    <p className='text-[#1E1E1E] font-normal text-[13px] font-plusjakarta'>{item.per}</p>
                                    <p className='text-[#888888] font-plusjakarta font-normal text-[11px]'>{item.review}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-[12px]">
                                {arraysk.map((ft) => (
                                    <div
                                        key={ft.id}
                                        className="flex items-center gap-1 border border-[#E8E8E8] bg-white py-[5px] px-[8px] rounded-md"
                                    >
                                        <Image src={ft.img} alt={ft.label as string} width={10} height={12} />
                                        <p className="font-medium text-[10px] text-[#6D6D6D] font-plusjakarta">{ft.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Gallery;