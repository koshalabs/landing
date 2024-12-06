"use client";

import Link from "next/link"


export default function NavLink({href = "", children, isOtherPage}) {
    return <Link href={isOtherPage ? "/" : `#${href}`} className="hover:text-koshaPink transition-colors whitespace-nowrap" onClick={(e) => {
        if(!isOtherPage) {
          e.preventDefault();
        } else {
          return;
        }

        const targetElement = document.getElementById(`${href}`);
        if (targetElement) {
          const offset = 100; // HEADER HEIGHT + 15
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Element's position relative to the document
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }}>
        {children}
    </Link>
}