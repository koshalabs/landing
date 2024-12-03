import BoldSpan from "../SectionElements/BoldSpan";
import GetEarlyAccessButton from "../SectionElements/GetEarlyAccessButton";

export default function KoshaHero() {
    return <section className="min-h-[598px] koshaHeroBreak:min-h-[531px] mx-4 rounded-3xl footerPhoneBreak:mx-10 bg-[url('/KoshaHero-mobile.png')] md:bg-[url('/KoshaHero.png')] bg-cover text-white px-6 koshaHeroBreak:px-20 mt-[83.2px] koshaHeroBreak:mt-[130px] flex flex-col gap-10 justify-center">
        <h3 className="leading-[37.5px] text-[32px] lg:text-[56px] font-medium lg:leading-[65.6px]">
            Brands need a smarter, more sustainable way to work with creators
        </h3>
        <div className="flex flex-col gap-10 items-start lg:items-end">
            <p className="text-[16px] lg:text-lg leading-6 lg:leading-7 max-w-[645px]">
                <BoldSpan>Kosha</BoldSpan> reimagines how brands collaborate, by shifting from <BoldSpan>fixes fees</BoldSpan> to <BoldSpan>ongoing royalties</BoldSpan> and <BoldSpan>co-ownership</BoldSpan>, so everyone involved continues to earn as the product grows - building stronger relationships and building more value.
            </p>
            <GetEarlyAccessButton />
        </div>
    </section>
}