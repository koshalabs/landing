export default function Paragraph({children, type}) {
    if(type === "white") {
        return <p className="text-white text-sm leading-5">
            {children}
        </p>
    }

    return null;
}