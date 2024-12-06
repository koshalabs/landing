import Link from "next/link";
import KoshaButton from "../SectionElements/KoshaButton";
import Logo from "../SectionElements/Logo";
import NavLink from "../SectionElements/NavLink";
import EarlyAccessSecondary from "../SectionElements/EarlyAccessSecondary";

export default function Header({isOtherPage}) {
    return <nav className="fixed w-full bg-white top-0 flex justify-center z-50" id="header">
        <div className="flex justify-between items-center px-4 footerPhoneBreak:px-10 py-4 text-xl w-full max-w-[1440px]">
            <NavLink isOtherPage={isOtherPage}>
                <Logo />
            </NavLink>
            <EarlyAccessSecondary />
        </div>
    </nav>
}