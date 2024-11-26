export default function SectionHeader({children, styles, id}) {
    return <header id={id} className={`text-koshaBlue font-medium text-[16px] ${styles || ""}`}>
        {children}
    </header>
}