import Link from "next/link";

export default function KoshaLink({children, href = "#"}) {
    return <Link href={href} className="text-koshaLink underline text-[16px]" target="_blank">
        {children}
    </Link>
}