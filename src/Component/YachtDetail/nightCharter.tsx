"use client"
import { Yacht } from "../YachtDetail/hero";
import DOMPurify from 'dompurify';
type Props = {
  data: Yacht | null;
};

const NightCharter: React.FC<Props> = ({ data }) => {
    return (
        <section className="bg-white rounded-lg  space-y-6">
            {/* Day Charter Description */}
            {/* Price Table */}
            {/* <div className="overflow-x-auto">
                <table className="min-w-full table-auto border shadow-md border-gray-300 text-left">
                    <thead className="bg-zink text-white">
                        <tr>
                            <th className="px-4 py-3 font-semibold text-[16px] border border-gray-300 min-w-[180px]">
                                Hot Chilli
                            </th>
                            <th
                                colSpan={2}
                                className="px-4 py-3 font-semibold text-[16px] border border-gray-300 text-center"
                            >
                                Overnight charter <br /> (max. 14 pax)
                            </th>
                        </tr>

                    </thead>

                    {/* <tbody className="font-inter text-[16px] font-normal">
                        <tr className="text-dark text-base md:text-[18px] font-bold font-sourceSansPro">
                            <td className=" "></td>
                            <td className="px-4 py-3 border border-gray-300 text-black ">8 pax included</td>
                            <td className="px-4 py-3 border border-gray-300 text-black">Additional pax</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300 font-bold text-zink text-base md:text-[18px]">
                                Nov. – 20th Dec.
                            </td>
                            <td className="px-4 py-3 border border-gray-300 text-black">34,900 THB</td>
                            <td className="px-4 py-3 border border-gray-300 text-black">1,000 THB</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300 font-bold text-zink text-base md:text-[18px]">
                                21st Dec. – Feb.
                            </td>
                            <td className="px-4 py-3 border border-gray-300 text-black">39,900 THB</td>
                            <td className="px-4 py-3 border border-gray-300 text-black">2,000 THB</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300 font-bold text-zink text-base md:text-[18px]">
                                Mar. – Apr.
                            </td>
                            <td className="px-4 py-3 border border-gray-300 text-black">34,900 THB</td>
                            <td className="px-4 py-3 border border-gray-300 text-black">1,500 THB</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300 font-bold text-zink text-base md:text-[18px]">
                                May – Oct.
                            </td>
                            <td className="px-4 py-3 border border-gray-300 text-black">29,900 THB</td>
                            <td className="px-4 py-3 border border-gray-300 text-black">1,000 THB</td>
                        </tr>
                    </tbody> */}

                {/* </table> */}
            {/* </div>  */}

            <div className="border-b-1 border-b-gray-400 pb-6 text-zink">
                <h2 className="text-xl lg:text-2xl font-bold text-zink mb-3 font-sourceSansPro">Night Charter</h2>
                 {data?.overnightCharter ? (
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.overnightCharter) }} />
                ) : (
                    <p className="text-zink">No Night charter information available.</p>
                )}
            </div>
            {/* Destinations */}
            {/* <div className="border-b-1 border-b-gray-400 pb-6">
                <h3 className="text-lg md:text-xl font-semibold text-zink mb-2">Destinations (choose one):</h3>
                <ul className="list-disc list-inside space-y-1 text-black text-sm md:text-[16px] font-inter">
                    <li>Koh Racha Yai / Racha Noi (best to skip the crowd)</li>
                    <li>Phang Nga Bay / James Bond Island (no clear water for snorkeling in Phang Nga Bay)</li>
                    <li>
                        Phi Phi Islands (Don + Leh OR Don + Bamboo; all 3 locations 9 hour charter +3000 THB)
                    </li>
                    <li>Koh Hong Krabi + Khai (9 hour charter +3000 THB)</li>
                    <li>Phi Phi Leh + Koh Haa + Maiton (10 hours charter +6000 THB)</li>
                    <li>All other itineraries and relocation ONLY on request and eventually surcharge!!!</li>
                </ul>
            </div> */}
        </section>
    )
}
export default NightCharter