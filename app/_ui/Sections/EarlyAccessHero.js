import BoldSpan from "../SectionElements/BoldSpan";
import GetEarlyAccessButton from "../SectionElements/GetEarlyAccessButton";

export default function EarlyAccessHero() {
    return <section className="min-h-[422px] koshaHeroBreak:min-h-[467px] mx-4 rounded-3xl footerPhoneBreak:mx-10 bg-[url('/EarlyAccess-mobile.png')] md:bg-[url('/EarlyAccess.png')] bg-cover text-white px-6 koshaHeroBreak:px-20 mt-[82px] koshaHeroBreak:mt-[130px] flex flex-col justify-center gap-10">
        <h3 className="text-[32px] lg:text-[56px] font-medium">
            Get early access
        </h3>
        <div className="flex flex-col gap-10 items-start lg:items-end">
            <p className="text-[16px] lg:text-lg leading-6 lg:leading-7 max-w-[645px]">
                Be among the <BoldSpan>first</BoldSpan> to transform <BoldSpan>brand collaboration</BoldSpan> with <BoldSpan>Kosha</BoldSpan> - a platform 
                that protects <BoldSpan>ownership</BoldSpan>, ensures <BoldSpan>transparency</BoldSpan>, and drives <BoldSpan>lasting revenue</BoldSpan> for 
                all partners
            </p>
           <GetEarlyAccessButton />
        </div>
    </section>
}