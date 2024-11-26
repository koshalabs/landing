"use client";

import { useState } from "react";
import FAQListItem from "./FAQListItem";
import Divider from "./Divider";

export default function FAQListItemContainer({header, text}) {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="space-y-6 max-w-[1200px]">
        <header className="flex justify-between items-center gap-4 px-4">
            <h3 className="text-[20px] lg:text-2xl font-medium">
                {header}
            </h3>
            <button type="button" className="h-8 w-8 flex justify-center items-center" onClick={() => setIsOpen(prev => !prev)}>
                {
                    isOpen ? <OpenSvg /> : <ClosedSvg />
                }
            </button>
        </header>
        <div>
            <FAQListItem isOpen={isOpen}>
                {text}
            </FAQListItem>
            <Divider type="faq" />
        </div>
    </div>;
}

function ClosedSvg() {
    return <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.0013 1.66675V20.3334M1.66797 11.0001H20.3346" stroke="#0AABFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
}

function OpenSvg() {
    return <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.66797 2H20.3346" stroke="#0AABFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
}