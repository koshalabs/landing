import Link from "next/link";
import { enableScroll } from "../_actions/helpers";

export default function ModalLink({children, href}) {
    return <Link href={href || "#"} className="font-medium underline" onClick={enableScroll}>
        {children}
    </Link>
}