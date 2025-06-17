import Image from "next/image";
import Link from "next/link";
import { FooterData } from "@/data/Home";

const Footer = () => {

    return (
        <footer className="bg-gradient-to-b from-[#022252] to-[#013D70] pt-[60px] text-white relative">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6">
                {FooterData.filter(item => item.type === 'logo').map((section) => (
                    <div key={section.id} className="w-full flex flex-col items-center md:items-start md:w-[50%]">
                        <div className="bg-[#D9D9D9] text-black px-[79px] py-[18px] text-[32px] font-normal inline-block">
                            {section.title}
                        </div>
                        <p className="font-plusjakarta font-normal text-[16px] text-white mt-[26px] text-center md:text-start sm:max-w-[32rem] md:max-w-[21rem]">
                            {section.description}
                        </p>
                        <div className="flex space-x-4 mt-[24px] md:mt-[39px]">
                            {section.icon?.map((Icon, index) => (
                                <div key={index} className="w-[35px] h-[35px] bg-white cursor-pointer rounded-full flex justify-center items-center">
                                    <Icon className="text-[#022252] text-[15px]" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="w-full md:w-[50%] flex flex-wrap md:flex-nowrap gap-10 md:gap-6">
                    {FooterData.filter(item => item.type === 'links').map((section) => (
                        <div key={section.id} className="w-1/3">
                            <h3 className="font-plusjakarta text-[16px] font-extrabold mb-4">{section.title}</h3>
                            <div className="space-y-2">
                                {section.links?.map((link, index) => (
                                    <Link href={link.href} key={index} className="font-plusjakarta font-normal text-[16px] hover:underline cursor-pointer block mb-3 last:mb-0">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white w-full h-0.5 mt-10" />
            <div className="max-w-7xl mx-auto px-6 my-9 flex flex-col items-center md:flex-row justify-between z-10 relative">
                <p className="font-plusjakarta">©2025 Sailaway Charters All rights reserved</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    {FooterData.find(item => item.type === 'legal')?.links?.map((link, index) => (
                        <Link
                            href={link.href}
                            key={index}
                            className="font-plusjakarta font-normal text-[16px] hover:underline cursor-pointer block"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <Image src="/images/footer-boat.svg" alt="footer" width={195} height={199} className="absolute w-[100px] h-[100px] sm:w-auto sm:h-auto bottom-0 sm:bottom-4 lg:bottom-10 right-0" />
            </div>
            <Image src="/images/footer.svg" alt="footer" width={0} height={82} className="w-full absolute bottom-0" />
            <Image src="/images/footer-one.svg" alt="footer" width={0} height={82} className="w-full absolute bottom-0" />
        </footer >
    );
};

export default Footer;