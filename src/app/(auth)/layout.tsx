"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
// import SailAwayCard from "@/components/SailAwayCard";
import { usePathname } from "next/navigation";

interface Props {
    children: ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {

    const pathname = usePathname();
    const CENTERED_ROUTES = ["/otpVerification", "/resetPassword", "/resetPasswordDone"];
    const isCentered = CENTERED_ROUTES.includes(pathname);
    const isResetPasswordDone = pathname === "/resetPasswordDone";
    const isForgetPassword = pathname === "/forgetPassword";
    const isSignup = pathname === "/signup";

    return (
        <div className="max-w-7xl py-10 2xl:py-8 mx-auto flex items-center gap-20 sm:px-4 h-screen">
            <div className={`w-full sm:w-[500px] sm:mx-auto xl:w-full px-4 space-y-10`}>
                <div
                    className={`bg-white w-full py-7 px-6 sm:px-12 xl:px-20 space-y-4 ${isSignup ? "sm:py-0" : "sm:py-10"} ${isCentered ? "mt-8" : ""} ${isResetPasswordDone ? "mt-28" : ""} ${isForgetPassword ? "mt-9" : ""}`}>
                    <h2 className="text-[#012A50] font-extrabold text-[40px] font-plusjakarta">SailAway Charters</h2>
                    {children}
                </div>
                {!isCentered ? (
                    <div className="flex justify-between items-center">
                        <p className="font-plusjakarta text-[14px] font-semibold text-[#1E1E1E]">
                            Are you new?{" "}
                            <Link
                                href="/signup"
                                className="text-[#1E1E1E] underline text-[16px] font-plusjakarta"
                            >
                                Create An Account
                            </Link>{" "}
                        </p>
                        <div>
                            <Link
                                href=""
                                className="text-[#454545] underline text-[14px] font-semibold font-plusjakarta"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <Link
                            href="/terms"
                            className="text-[#3D3D3D] underline text-[14px] font-semibold font-plusjakarta"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                )}
            </div>
            <div className="hidden xl:block w-full">
                {/* <SailAwayCard /> */}
            </div>
        </div>
    );
};

export default AuthLayout;