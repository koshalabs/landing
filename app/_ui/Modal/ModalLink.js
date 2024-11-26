import Link from "next/link";

export default function ModalLink({children, href}) {
    return <Link href={href || "#"} className="font-medium underline" rel="noopener noreferrer" target="_blank">
        {children}
    </Link>
}