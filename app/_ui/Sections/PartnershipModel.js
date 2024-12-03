import Image from "next/image";
import AnimationPlayer from "../Animations/AnimationPlayer";
import GradientSpan from "../SectionElements/GradientSpan";
import SectionH2 from "../SectionElements/SectionH2";
import SectionHeader from "../SectionElements/SectionHeader";
import SectionSubParagraph from "../SectionElements/SectionSubParagraph";
import PartnershipSubheader from "../SectionElements/PartnershipSubheader";
import SectionSmallParagraph from "../SectionElements/SectionSmallParagraph";
import GetEarlyAccessButton from "../SectionElements/GetEarlyAccessButton";

export default function PartnershipModel() {
    return <section className="mt-14 flex flex-col items-center text-koshaBlack lg:mx-8">
        <SectionHeader styles="mb-12 lg:mb-[140px] text-center" id="partnership">
            04 PARTNERSHIP MODEL
        </SectionHeader>
        <section className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <div className="max-w-[645px] space-y-8 px-4 lg:px-0">
                <SectionH2>
                A new model for <GradientSpan>creative partnerships</GradientSpan>
                </SectionH2>
                <div className="relative max-w-[359px] lg:max-w-[555px]">
                    <SectionSubParagraph>
                        Kosha is redefining how brands, creators, and producers partner, ensuring every contributor benefits from the work they help create
                    </SectionSubParagraph>
                    <div className="absolute top-[110px] right-0 partnershipArrowBreak:right-16 lg:top-1/2 lg:right-4">
                        <AnimationPlayer />
                    </div>
                </div>
                <div className="space-y-7 lg:space-y-0 lg:flex gap-16 lg:pt-[21px]">
                    <div className="shrink-0 space-y-2">
                        <PartnershipSubheader>
                            Traditional Models
                        </PartnershipSubheader>
                        <SectionSmallParagraph>
                            One-time fixed fees
                        </SectionSmallParagraph>
                    </div>
                    <div className="space-y-2 max-w-[333px]">
                        <PartnershipSubheader type="blue">
                            The Kosha Model
                        </PartnershipSubheader>
                        <SectionSmallParagraph>
                            Secure licensing, co-ownership, ongoing royalties, and shared success
                        </SectionSmallParagraph>
                    </div>
                </div>
                <div className="pt-4 lg:pt-[21px]">
                    <GetEarlyAccessButton />
                </div>
            </div>
            <div>
                <Image
                    src="/KoshaPartnerships.png"
                    alt="partnership-logo"
                    width={555}
                    height={534}
                    className="object-center"
                />
            </div>
        </section>
    </section>
}