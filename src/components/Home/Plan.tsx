import { PlanData } from "@/data/Home";
import Image from "next/image";

const Plan = () => {


    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-[50px]">
                <h2 className="font-plusjakarta text-center text-[40px] sm:text-[48px] leading-11 sm:leading-13 font-extrabold text-[#2E8BC0]">
                    {PlanData[0].title}
                </h2>
                <p className="font-plusjakarta text-center text-[#1E1E1E] font-normal sm:text-[19px]">
                    {PlanData[0].desp}
                </p>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mt-[30px]">
                    <div className="space-y-2 flex flex-col items-center lg:items-start">
                        {PlanData[1].array?.map((step) => (
                            <div key={step.id}>
                                <div>
                                    <div
                                        className={`flex h-[40px] w-[67px] items-center justify-center rounded-full text-white ${step.id === 1
                                            ? "bg-[#001B48]"
                                            : step.id === 2
                                                ? "bg-[#0096FF]"
                                                : "bg-[#0096FF]"
                                            }`}
                                    >
                                        {step.id.toString().padStart(2, "0")}
                                    </div>
                                    <h3 className="font-plusjakarta text-[23px] font-extrabold mt-[12px] text-[#1E1E1E]">
                                        {step.label}
                                    </h3>
                                    <p className="mt-[8px] font-plusjakarta text-[19px] text-[#454545] max-w-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        {PlanData[2].image && (
                            <Image
                                src={PlanData[2].image}
                                alt="Yacht planning illustration"
                                width={615}
                                height={619}
                                className="h-auto lg:h-[490px] w-full"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;
