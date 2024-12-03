export default function Divider({type}) {
    if(type === "vertical") return <div className="min-h-full w-[1px] bg-[#6477A4] max-h-[1px]"></div>;
    if(type === "horizontal") return <div className="min-w-full h-[1px] bg-[#6477A4] max-h-[1px]"></div>;
    if(type === "faq") return <div className="min-w-full min-h-[1px] bg-[#DFDFDF] max-h-[1px]"></div>;

    return null;
}