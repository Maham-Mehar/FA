"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { MenuItems, NavbarData, MenusItems, LanData, CurData } from "@/data/Navbar";
import Filter from "./Filter";
import { IoSearch } from "react-icons/io5";
import SigninForm from "../Authentication/SigninForm";
import ForgetPasswordForm from "../Authentication/ForgetPasswordForm";
import OtpVerificationForm from "../Authentication/OtpVerificationForm";
import ResetPasswordForm from "../Authentication/ResetPasswordForm";
import ResetPasswordDoneForm from "../Authentication/ResetPasswordDone";
import SignupForm from "../Authentication/SignupForm";
import SailAwayCard from "../SailAwayCard";
import { IoClose } from "react-icons/io5";
import { useTranslation } from 'next-i18next';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [authState, setAuthState] = useState<{
        view: "signin" | "signup" | "forget" | "otp" | "reset" | "resetdone";
        context?: "signup" | "forget";
    }>({ view: "signin" });
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [showFilterContent, setShowFilterContent] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedLang, setSelectedLang] = useState("ENG");
    const [selectedCur, setSelectedCur] = useState("$USD");
    const [showLangOptions, setShowLangOptions] = useState(false);
    const [showCurOptions, setShowCurOptions] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);
    const curRef = useRef<HTMLDivElement>(null);
    const {i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n?.changeLanguage(lng); 
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                langRef.current &&
                !langRef.current.contains(event.target as Node) &&
                curRef.current &&
                !curRef.current.contains(event.target as Node)
            ) {
                setShowLangOptions(false);
                setShowCurOptions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
                setShowFilterContent(false);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const handleMenuClick = (label: string) => {
        if (label === "Logout") {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setIsAuthenticated(false);
        }
        if (label === "Sign in") {
            setAuthState({ view: "signin" });
            setIsModalOpen(true);
        } else if (label === "Sign up") {
            setAuthState({ view: "signup" });
            setIsModalOpen(true);
        }
        setIsOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isModalOpen]);


    return (
        <div
            className={`w-full transition-colors duration-500 bg-white border-b border-b-[#C3C3C3] boxshadow-navbar`}
        >
            <div className={`hidden md:block max-w-7xl mx-auto bg-white px-6 pb-4 sm:pb-4 
            ${showFilterContent
                    ? "h-[10.2rem]"
                    : scrolled
                        ? "h-[5.2rem]"
                        : "h-[10.2rem]"
                }`}
            >
                <div className="flex justify-between items-center pt-2 z-10 relative">
                    <Link href="/" className="hidden md:block">
                      <img src="/images/Home/logo.png" alt="" className="w-[200px] h-[70px]" />
                    </Link>
                    <h2
                        className={`hidden md:block font-normal md:text-[20px] lg:text-[22px] font-gloss gradient-text lg:ml-[2rem] xl:ml-[6.5rem] transition-all duration-500 ease-in-out
                        ${showFilterContent
                                ? "opacity-100 translate-y-0"
                                : scrolled
                                    ? "opacity-0 -translate-y-5"
                                    : "opacity-100 translate-y-0 pt-2"
                            }`}
                    >
                        The sea calls, luxury answers.
                    </h2>
                    <div
                        className={`hidden md:flex bg-white border border-[#D6D6D6] rounded-full fixed py-2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out
                        ${showFilterContent ? "opacity-0 pointer-events-none" : scrolled ? "top-5 opacity-100" : "top-16 opacity-0"}`}>
                        {NavbarData.map((item, index) => (
                            <button key={item.id} className={`cursor-pointer flex items-center gap-2 outline-none first:pl-[15px] pl-[10px] z-10 ${index !== NavbarData.length - 1 ? "border-r border-[#888888]" : ""} ${index === NavbarData.length - 1 ? "pr-[10px]" : "pr-[10px]"
                                }`}
                                onClick={() => {
                                    setShowFilterContent(true)
                                }}>
                                <div className="pt-0.5 hidden lg:block">
                                    {item.icon && typeof item.icon === "function" && <item.icon className="text-[16px] text-[#012A50]" />}
                                    {item.ico && typeof item.ico === "string" && (
                                        <Image src={item.ico} alt='img' width={15} height={15} />
                                    )}
                                </div>
                                <h2 className="font-plusjakarta font-semibold md:text-[13px] lg:text-[14px] text-start text-[#122B3F]">
                                    {item.label}
                                </h2>
                                {index === NavbarData.length - 1 && (
                                    <div className="hidden ml-[10px] w-[30px] h-[30px] rounded-full bg-[#C3974C] lg:flex justify-center items-center"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {item.serchicon && typeof item.serchicon === "function" && <item.serchicon className="text-[16px] text-white" />}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <h3 className="hidden xl:block font-plusjakarta font-extrabold text-[16px] text-blue-accent">
                            List Your Yacht
                        </h3>
                        <div className="relative">
                            <div className="flex items-center bg-white boxshadow-btn gap-2 font-medium cursor-pointer min-w-[112px] h-[26px] border border-[#E4E4E4] text-button rounded-full font-plusjakarta text-[13px] overflow-visible">
                                <div
                                    ref={langRef}
                                    onClick={() => {
                                        setShowLangOptions(!showLangOptions);
                                        setShowCurOptions(false);
                                    }}
                                    className="flex items-center pl-[0.4rem] pr-1.5 gap-1 border-r border-[#888888] relative"
                                >
                                    <Image src="/images/world.svg" alt="world" width={13} height={13} />
                                    <span className="w-[29px]">{selectedLang}</span>
                                    {showLangOptions && (
                                        <div className="absolute top-[24px] left-0 bg-white shadow-lg border rounded-md w-[80px] z-50">
                                            {LanData.map((lang) => (
                                                <div
                                                    key={lang.id}
                                                    className="px-3 py-2 bg-white hover:text-white rounded-md hover:font-bold font-medium text-[#454545] text-start hover:bg-[#001B48]"
                                                    onClick={() => {
                                                        setSelectedLang(lang.label);
                                                        changeLanguage(lang.value);
                                                        setShowLangOptions(false);
                                                    }}
                                                >
                                                    {lang.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div
                                    ref={curRef}
                                    onClick={() => {
                                        setShowCurOptions(!showCurOptions);
                                        setShowLangOptions(false);
                                    }}
                                    className="relative"
                                >
                                    <span>{selectedCur}</span>
                                    {showCurOptions && (
                                        <div className="absolute top-[24px] -right-3 bg-white shadow-lg border rounded-md w-[80px] z-50">
                                            {CurData.map((cur) => (
                                                <div
                                                    key={cur.id}
                                                    className="px-3 py-2 bg-white hover:text-white rounded-md hover:font-bold font-medium text-[#454545] text-start hover:bg-[#001B48]"
                                                    onClick={() => {
                                                        setSelectedCur(cur.label);
                                                        setShowCurOptions(false);
                                                    }}
                                                >
                                                    {cur.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button
                            className="relative flex items-center z-10 gap-3 border border-[#D4D4D4] rounded-full px-3 py-2 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <HiOutlineMenu className="text-[#7B7B7B] cursor-pointer" />
                            {isAuthenticated ? (
                                <Image src="/images/avator.svg" alt="avatar" width={28} height={28} />
                            ) : (
                                <Image src="/images/avator-one.svg" alt="avatar" width={28} height={28} />
                            )}
                            {isOpen && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute boxshadow-btn-one right-0 top-12 py-[5px] px-[4px] w-[162px] border border-[#E7E7E7] bg-white shadow-lg rounded-lg overflow-hidden"
                                >
                                    {(isAuthenticated ? MenusItems : MenuItems).map((item) => (
                                        <Link
                                            key={item.id}
                                            href=""
                                            onClick={() => handleMenuClick(item.label)}
                                            className="block px-3 py-2 bg-white hover:text-white rounded-lg hover:font-bold font-medium text-[#454545] text-start hover:bg-[#001B48]"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`hidden md:flex justify-center pt-[20px] transition-all duration-500 ease-in-out transform-gpuwill-change-[opacity,transform]
                    ${showFilterContent
                        ? "opacity-100 translate-y-0"
                        : scrolled
                            ? "opacity-0 -translate-y-20"
                            : "opacity-100 translate-y-0"
                    }
                    `}
                >
                    <Filter />
                </div>
                <div className={`flex sm:flex md:hidden justify-center pt-[20px] transition-all duration-500 ease-in-out transform-gpuwill-change-[opacity,transform]
                    ${showFilterContent
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-20"
                    }
                    `}
                >
                    <Filter />
                </div>
            </div>
            <div className={`md:hidden max-w-7xl mx-auto bg-white px-6 ${showFilterContent ? "h-[10.2rem]" : "h-auto"}`}>
                <div className="pt-[20px]">
                    <div className="bg-white rounded-full shadow-lg flex sm:flex md:hidden gap-1 items-center justify-center h-[40px]"
                        onClick={() => { setShowFilterContent(true) }}>
                        <IoSearch className="text-[16px] text-black" />
                        <h3 className="font-plusjakarta font-extrabold text-[16px] text-blue-accent cursor-pointer">
                            Start Your Search
                        </h3>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#A7A7A7]/50 bg-opacity-50">
                    <div className="bg-white rounded-xl w-[500px] sm:w-[500px] xl:w-[1100px] flex gap-6 p-6 relative shadow-xl animate-fadeIn">
                        <div className="w-[770px]">
                            {authState.view === "signin" && (
                                <SigninForm
                                    onForget={() => setAuthState({ view: "forget" })}
                                    onSignup={() => setAuthState({ view: "signup" })}
                                    onSuccess={() => {
                                        setIsModalOpen(false);
                                        setIsAuthenticated(true);
                                    }}
                                />
                            )}

                            {authState.view === "forget" && (
                                <ForgetPasswordForm
                                    onNext={() => setAuthState({ view: "otp", context: "forget" })}
                                    onSignup={() => setAuthState({ view: "signup" })}
                                />
                            )}

                            {authState.view === "otp" && (
                                <OtpVerificationForm
                                    context={authState.context ?? "signup"}
                                    onNext={() =>
                                        setAuthState({
                                            view: authState.context === "signup" ? "signin" : "reset",
                                        })
                                    }
                                />
                            )}
                            {authState.view === "reset" && (
                                <ResetPasswordForm
                                    onNext={() => setAuthState({ view: "resetdone" })}
                                />
                            )}

                            {authState.view === "resetdone" && (
                                <ResetPasswordDoneForm
                                    onNext={() => setAuthState({ view: "signin" })}
                                />
                            )}

                            {authState.view === "signup" && (
                                <SignupForm
                                    onSignin={() => setAuthState({ view: "otp", context: "signup" })}
                                    onNext={() => setAuthState({ view: "signin" })}
                                />
                            )}
                            <IoClose className="text-[#1C274C] text-[24px] cursor-pointer absolute right-5 top-4 block xl:hidden" onClick={() => setIsModalOpen(false)} />
                        </div>
                        <div className="hidden xl:block">
                            <SailAwayCard onClose={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;