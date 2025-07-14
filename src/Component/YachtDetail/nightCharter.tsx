const NightCharter = () => {
    return (
        <section className="bg-white p-4 md:p-6 lg:p-8 rounded-lg  space-y-6">
            {/* Day Charter Description */}
            {/* Price Table */}
            <div className="overflow-x-auto">
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

                    <tbody className="font-inter text-[16px] font-normal">
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
                    </tbody>

                </table>
            </div>

            <div className="border-b-1 border-b-gray-400 pb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-zink mb-3">Night Charter</h2>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-[16px] text-black font-inter">
                    <li>Duration: 8 hours from and to Chalong pier; shorter charters only on request</li>
                    <li>
                        Finish latest with sunset according to this website:{" "}
                        <a
                            href="https://www.timeanddate.com/sun/thailand/phuket"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" underline text-dark"
                        >
                            timeanddate.com/sun/thailand/phuket
                        </a>
                    </li>
                    <li>Additional children between 3–12 years old charged 50% of the adult rate; below 3 years free</li>
                </ul>
            </div>

            {/* Destinations */}
            <div className="border-b-1 border-b-gray-400 pb-6">
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
            </div>
        </section>
    )
}
export default NightCharter