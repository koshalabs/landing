import Image from "next/image";

export default function Logo({type = "black"}) {
    return <Image
    src={type === "black" ? "/LogoLarge.png" : "/LogoLargeWhite.png"}
    width={138}
    height={31}
    alt="logo"
/>;
}