export default function Paragraph({children, type}) {
    if(type === "white") {
        return <p className="text-white text-[16px] leading-5">
            {children}
        </p>
    }

    return null;
}