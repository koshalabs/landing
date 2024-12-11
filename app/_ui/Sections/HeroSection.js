import GetEarlyAccessButton from "../SectionElements/GetEarlyAccessButton";

export default function HeroSection() {
    return <section className="h-[568px] lg:h-[654px] mx-4 rounded-3xl footerPhoneBreak:mx-10 mb-10 bg-[url('/Hero-mobile.png')] md:bg-[url('/Hero.png')] bg-cover text-white flex flex-col justify-center pl-6 koshaHeroBreak:pl-20 mt-[85px] pr-6 koshaHeroBreak:pr-0">
        <div>
            <h1 className="text-[40px] leading-[43px] lg:text-[88px] lg:leading-[95px] font-bold mb-8">
                The future of<br/>
                creative collaboration
            </h1>
            <h2 className="text-[20px] lg:text-[30px] mb-16">
                Grow your brand with trusted partnerships
            </h2>
            <GetEarlyAccessButton />
        </div>
    </section>
}