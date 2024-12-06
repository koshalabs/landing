import Link from "next/link";

export default function ModalLink({children, href}) {
    return <Link href={href || "#"} className="font-medium underline" target="_blank">
        {children}
    </Link>
}