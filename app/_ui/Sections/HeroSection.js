import DiscoverSvgArrow from "../SectionElements/DiscoverSvgArrow";
import GetEarlyAccessButton from "../SectionElements/GetEarlyAccessButton";

export default function HeroSection() {
    return <section className="h-[642px] lg:h-[728px] mx-4 rounded-3xl footerPhoneBreak:mx-10 mb-10 bg-[url('/Hero-mobile.png')] md:bg-[url('/Hero.png')] bg-cover text-white pt-[147px] lg:pt-[156px] pl-6 lg:pl-20 mt-[85px] pr-6 lg:pr-0">
        <h1 className="text-[40px] leading-[43px] lg:text-[88px] lg:leading-[95px] font-bold mb-8 mr-2">
            The future of<br/>
            creative collaboration
        </h1>
        <h2 className="text-[20px] lg:text-[30px] mb-16">
            Grow your brand with trusted partnerships
        </h2>
        <GetEarlyAccessButton />
        <p className="mt-[96px] lg:mt-[123px] pb-11 flex gap-3 items-center justify-end lg:ml-[687px] lg:justify-start">
            <DiscoverSvgArrow />
            <span className="font-medium text-[20px] underline italic">
                Discover more
            </span>
        </p>
    </section>
}