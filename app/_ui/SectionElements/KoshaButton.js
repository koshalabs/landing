const styles = {
    primary: "text-white px-8 py-4 bg-koshaPink hover:bg-koshaButtonHover active:bg-koshaButtonActive",
    primarySmall: "text-white px-6 py-3 bg-koshaPink hover:bg-koshaButtonHover active:bg-koshaButtonActive",
    secondary: "border-2 border-koshaPink text-koshaPink bg-white px-7 py-3 hover:bg-koshaSecondaryButtonHover active:bg-koshaSecondaryButtonActive",
};

export default function KoshaButton({children, type, onClick, disabled}) {
    return <button disabled={disabled} className={`${styles[type]} rounded-[100px] font-bold leading-6 text-[20px] transition-all disabled:cursor-not-allowed`} onClick={onClick}>
        {children}
    </button>
}