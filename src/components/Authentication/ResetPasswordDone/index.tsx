"use client";

import React, { FormEvent } from "react";
import Image from "next/image";
import Button from "@/common/Button";

interface ResetPasswordDoneFormProps {
    onNext: () => void;
}

const ResetPasswordDoneForm: React.FC<ResetPasswordDoneFormProps> = ({ onNext }) => {

    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleForm} className="flex flex-col justify-between h-[37.8rem]">
            <div className="px-10 xl:px-12 space-y-4 pt-14">
                <h2 className="text-[#012A50] font-extrabold text-[40px] font-plusjakarta">SailAway Charters</h2>
                <h2 className="text-[#1E1E1E] text-[19px] font-bold font-plusjakarta">Anchor Your Dreams</h2>
                <div className="flex justify-center">
                    <Image src="/images/Auth/done.svg" alt="img" width={120} height={115} />
                </div>
                <h2 className="text-[#012A50] text-[24px] font-bold font-plusjakarta">
                    Congratulations! Password Reset.
                </h2>
                <p className="text-[14px] font-medium text-[#888888] font-plusjakarta">
                    Your password has been successfully reset! You&apos;re all set to continue your journey.
                </p>
                <Button type="submit">Back to Login</Button>
            </div>
            <div className="flex justify-center">
                <button
                    className="text-[#3D3D3D] underline text-[14px] font-semibold font-plusjakarta cursor-pointer"
                >
                    Terms & Conditions
                </button>
            </div>
        </form>
    );
};

export default ResetPasswordDoneForm;