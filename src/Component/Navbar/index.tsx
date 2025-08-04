"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Crewed Charter", href: "/yacht-charter-phuket" },
    { label: "Bareboat Charter", href: "/bareboat-charter-thailand" },
    { label: "Cabin Charter", href: "/best-of-phukets-islands-cabincharter" },
    { label: "Destinations", href: "/magical-destinations-with-private-yacht-in-phuket" },
    { label: "Contact", href: "/contact" },
];

const Drawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const pathname = usePathname();

    return (
        <>
            <div
                className={`fixed inset-0 z-20 bg-black/30 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            />
            <div
                className={`fixed inset-y-0 right-0 w-64 bg-white z-30 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4">
                    <div className="flex justify-between items-center mb-6">
                        <Link href="/" onClick={onClose}>
                            <img src="/images/logo.png" alt="logo" className="w-[105px] h-[40px]" />
                        </Link>
                        <button onClick={onClose} className="text-3xl text-gray-700 hover:text-red-500">
                            &times;
                        </button>
                    </div>
                    <ul className="space-y-4 text-[#333] font-medium">
                        {navItems.map(({ label, href }) => {
                            const isActive =
                                (href === "/" && pathname === "/") ||
                                (href !== "/" && pathname.startsWith(href)) ||
                                (label === "Crewed Charter" && pathname.startsWith("/crewed_boats"));
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        onClick={onClose}
                                        className={`relative inline-block text-sm lg:text-base transition duration-200 group ${isActive ? "text-[#034250] font-semibold" : "text-[#118A92] hover:text-[#034250]"
                                            }`}
                                    >
                                        {label}
                                        <span
                                            className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300 transform group-hover:scale-x-100 origin-left ${isActive ? "bg-[#D6AB61] scale-x-100" : "bg-[#D6AB61] scale-x-0"
                                                }`}
                                        ></span>
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <Link href="/contact" onClick={onClose}>
                                <button className="bg-[#034250] text-white text-base font-bold px-5 py-2 rounded-lg hover:bg-[#D6AB61] transition">
                                    Start Your Adventure
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto xl:px-3 lg:px-3 px-3 py-5 flex justify-between items-center">
                <Link href="/">
                    <img src="/images/logo.png" alt="logo" className="w-[105px] h-[40px]" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-4 lg:space-x-5 xl:space-x-6 text-[#333]">
                    {navItems.map(({ label, href }) => {
                        const isActive =
                            (href === "/" && pathname === "/") ||
                            (href !== "/" && pathname.startsWith(href));
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`relative inline-block text-sm lg:text-base transition duration-200 group ${isActive ? "text-[#034250] font-semibold" : "text-[#118A92] hover:text-[#034250]"
                                    }`}
                            >
                                {label}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300 transform group-hover:scale-x-100 origin-left ${isActive ? "bg-[#D6AB61] scale-x-100" : "bg-[#D6AB61] scale-x-0"
                                        }`}
                                ></span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <button className="bg-[#034250] text-white md:text-xs lg:text-base font-bold px-2 lg:px-5 py-2 rounded-lg hover:bg-[#D6AB61] transition hover:cursor-pointer">
                            Start Your Adventure
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button onClick={() => setIsOpen(true)} className="md:hidden block">
                    <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </header>
    );
};

export default Navbar