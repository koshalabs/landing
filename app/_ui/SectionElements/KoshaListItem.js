import KoshaListItemHeader from "./KoshaListItemHeader";
import KoshaListItemParagraph from "./KoshaListItemParagraph";

export default function KoshaListItem({item}) {
    return <div className="text-koshaBlack border-b border-koshaBorder pb-6 space-y-5 koshaListGrid:max-w-[475px] koshaListBreak:max-w-[595px]">
        <div className="flex gap-5 lg:gap-7 items-center">
            {item?.svg}
            <KoshaListItemHeader>
                {item?.header}
            </KoshaListItemHeader>
        </div>
        <KoshaListItemParagraph>
            {item?.paragraph}
        </KoshaListItemParagraph>
    </div>
}