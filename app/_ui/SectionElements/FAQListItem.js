"use client";

import { useEffect, useRef, useState } from "react";

export default function FAQListItem({children, isOpen}) {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');
    
    useEffect(() => {
        if(isOpen)
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        else setMaxHeight('0px');
    }, [isOpen]);
    
    return <p dangerouslySetInnerHTML={{__html: children}} ref={contentRef} style={{maxHeight}} className={`${
        isOpen ? 'opacity-100 pointer-events-auto mb-6' : 'opacity-0 pointer-events-none mb-0'
        } transform transition-all duration-300 ease-out font-normal text-[16px] lg:text-lg px-4`}>
    </p>
}