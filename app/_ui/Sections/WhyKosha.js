import Image from "next/image";
import GradientSpan from "../SectionElements/GradientSpan";
import SectionH2 from "../SectionElements/SectionH2";
import SectionHeader from "../SectionElements/SectionHeader";
import SectionSmallParagraph from "../SectionElements/SectionSmallParagraph";
import SectionSubParagraph from "../SectionElements/SectionSubParagraph";

export default function WhyKosha() {
    return <section className="text-koshaBlack font-medium px-4 mt-8 flex flex-col items-center footerPhoneBreak:px-10">
        <SectionHeader styles="mb-[57px] lg:mb-[170px] text-center" id="why-kosha">
            02 WHY US
        </SectionHeader>
        <section className="lg:flex gap-[90px] items-center space-y-10 lg:space-y-0">
            <div>
                <Image
                    src="/WhyKosha.png"
                    height={508}
                    width={555}
                    alt="why-kosha"
                    />
            </div>
            <div className="max-w-[480px] space-y-6 lg:space-y-[33px]">
                <SectionH2>
                    Why <GradientSpan>Kosha</GradientSpan>
                </SectionH2>
                <SectionSubParagraph>
                    The way brands bring products to market is changing
                </SectionSubParagraph>
                <SectionSmallParagraph>
                Today’s fastets-growing brands are no longer relying solely 
                on in-house ideas.
                <br/><br/>
                They collaborate with independent creators, 
                producers, and fans to create standout products that 
                drive innovation.
                </SectionSmallParagraph>
            </div>
        </section>
    </section>;
}