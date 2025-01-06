export default function VideoModal({handleCloseModal}) {
    return <div className="bg-white overflow-y-auto w-[calc(100svw-32px)] footerPhoneBreak:w-[calc(100svw-80px)] max-w-[1360px] modalShadow text-koshaBlack relative modalWindow aspect-video max-h-[calc(100dvh-100px)]">
        <iframe className="inset-0 w-[calc(100%+13px)] h-full border-0 absolute right-0 bottom-0" src="https://www.youtube.com/embed/Fez4Dwp501g?si=rkdcaxDF1yeQXAQ-&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>;
} 