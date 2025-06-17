"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HIDDEN_ROUTES = ["/info"];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideLayout = HIDDEN_ROUTES.includes(pathname);

    return (
        <>
            {!hideLayout && (
                <div className="fixed top-0 z-40 w-full">
                    <Navbar />
                </div>
            )}
            <main className={`flex-1 ${!hideLayout ? "pt-[3.9rem] md:pt-[10.1rem]" : ""}`}>
                {children}
            </main>
            {!hideLayout && <Footer />}
        </>
    );
}