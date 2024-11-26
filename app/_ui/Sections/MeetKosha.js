import InfiniteCarousel from "../Carousel/InfiniteCarousel";
import GradientSpan from "../SectionElements/GradientSpan";
import SectionH2 from "../SectionElements/SectionH2";
import SectionHeader from "../SectionElements/SectionHeader";
import SectionSmallParagraph from "../SectionElements/SectionSmallParagraph";
import SectionSubParagraph from "../SectionElements/SectionSubParagraph";

const images = new Array(17).fill(0).map((el, i) => i < 9 ? `/card 0${i + 1}.png` : `/card ${i + 1}.png`);

export default function MeetKosha() {
    return <section className="text-koshaBlack flex flex-col items-center gap-4 text-center font-medium px-4">
        <SectionHeader styles="mb-[32px] lg:mb-12" id="about">
            01 ABOUT
        </SectionHeader>
        <SectionH2>
            Meet <GradientSpan>Kosha</GradientSpan>
        </SectionH2>
        <SectionSubParagraph>
            Kosha offers brands a new way to collaborate with creative partners
        </SectionSubParagraph>
        <SectionSmallParagraph>
            Transforming concepts into revenue-generating products and lasting relationships.
        </SectionSmallParagraph>
        <InfiniteCarousel items={images} styles="mt-16 lg:mt-[104px]" />
    </section>;
}