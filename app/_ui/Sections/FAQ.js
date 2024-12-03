import FAQListItemContainer from "../SectionElements/FAQListItemContainer";
import SectionH2 from "../SectionElements/SectionH2";
import SectionHeader from "../SectionElements/SectionHeader";

const FAQData = [
    {
        header: "How does Kosha’s licensing model work?",
        text: "Kosha simplifies creative licensing with secure, transparent agreements powered by blockchain-backed smart contracts. For brands, this means clear terms on usage, royalties, and timelines so you can focus on your projects stress-free. Creators benefit by licensing their work to brands while retaining full intellectual property ownership.",
    },
    {
        header: "What are royalties, and how do they benefit me?",
        text: "Royalties ensure fairness in creative collaborations. For brands, they link payments to performance, aligning incentives and ensuring creators are invested in your success. For creators, royalties provide recurring income every time your licensed work generates value. Kosha’s smart contracts automate royalty tracking and payments, removing the hassle of manual management.",
    },
    {
        header: "Can my brand maintain ownership of IP on Kosha?",
        text: "Kosha’s licensing model is designed to meet the needs of both brands and creators. Brands license creative assets for specific projects or campaigns, avoiding the need for full IP ownership, which saves time and cost. Creators maintain ownership of their work while earning income through licensing agreements.",
    },
    {
        header: "How does Kosha support collaborations?",
        text: "Kosha makes collaboration seamless by connecting brands with top creative talent, handling licensing agreements, tracking royalties, and managing payments with secure smart contracts. Brands can post detailed project briefs, and creators can submit proposals, ideas, or completed work directly through the platform.<br/><br/>This ensures your projects run smoothly while delivering impactful results."
    },
    {
        header: "What sets Kosha apart from traditional freelance collaboration platforms?",
        text: "Kosha focuses on building lasting partnerships. Unlike traditional platforms that focus on one-off transactions, Kosha emphasizes transparent licensing, automated royalties, and IP ownership.  It also empowers brands to collaborate with both top creators and their fans, turning passion into impactful project and campaigns. For creators, it’s about protecting work ownership, ensuring fair pay, and creating opportunities to build relationships with brands that share your vision.",
    },
];

export default function FAQ() {
    return <section className="mt-8 flex flex-col items-center mx-4 mb-20 lg:mb-[190px]">
        <SectionHeader styles="mb-8 lg:mb-[120px]" id="faq">
            05 FAQ
        </SectionHeader>
        <section className="space-y-8 lg:space-y-[88px]">
            <SectionH2>
                Frequently asked questions
            </SectionH2>
            <div className="space-y-10">
                {
                    FAQData.map((el, i) => <FAQListItemContainer key={i} header={el.header} text={el.text} isDefaultOpen={i === 0} />)
                }
            </div>
        </section>
    </section>
}