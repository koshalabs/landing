export default function PartnershipSubheader({type, children}) {
    return <h3 className={`text-[20px] ${type === "blue" ? "text-koshaBlue" : ""} font-medium`}>
        {children}
    </h3>
}