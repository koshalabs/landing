"use client";

import { useState } from "react"

export default function ModalXSvg() {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const handleMouseEnter = () => setIsMouseEnter(true);
    const handleMouseLeave = () => setIsMouseEnter(false);
    const handleFilled = () => isMouseEnter ? "#F4F7F9" : "none";

    return <svg className="transition-all" width="40" height="40" viewBox="0 0 40 40" fill={handleFilled()} xmlns="http://www.w3.org/2000/svg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <path d="M20 38C29.9 38 38 29.9 38 20C38 10.1 29.9 2 20 2C10.1 2 2 10.1 2 20C2 29.9 10.1 38 20 38Z" stroke="#C4CAD8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 28L28 12M28 28L12 12" stroke="#C4CAD8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
}