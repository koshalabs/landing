import KoshaButton from "../SectionElements/KoshaButton";
import Logo from "../SectionElements/Logo";
import NavLink from "../SectionElements/NavLink";

export default function Header() {
    return <nav id="header" className="fixed w-full bg-white top-0 flex justify-between items-center px-4 sm:px-10 py-4 text-xl z-50">
        <NavLink>
            <Logo />
        </NavLink>
        <KoshaButton type="secondary">
            Join Now
        </KoshaButton>
    </nav>
}