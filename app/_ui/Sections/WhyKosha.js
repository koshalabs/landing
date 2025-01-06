"use client";

import Image from "next/image";
import GradientSpan from "../SectionElements/GradientSpan";
import SectionH2 from "../SectionElements/SectionH2";
import SectionHeader from "../SectionElements/SectionHeader";
import SectionSmallParagraph from "../SectionElements/SectionSmallParagraph";
import SectionSubParagraph from "../SectionElements/SectionSubParagraph";
import Modal from "../Modal/Modal";
import VideoModal from "../Modal/VideoModal";
import { useState } from "react";
import { disableScroll } from "../_actions/helpers";

export default function WhyKosha() {
    return <section className="text-koshaBlack font-medium px-4 mt-8 flex flex-col items-center footerPhoneBreak:px-10">
        <SectionHeader styles="mb-[57px] lg:mb-[170px] text-center" id="why-kosha">
            02 WHY US
        </SectionHeader>
        <section className="lg:flex gap-[90px] items-center space-y-10 lg:space-y-0">
            <div className="relative">
                <Image
                    src="/WhyKosha.png"
                    height={508}
                    width={555}
                    alt="why-kosha"
                />
                <VideoOverlay />
            </div>
            <div className="max-w-[480px] space-y-6 lg:space-y-[33px]">
                <SectionH2>
                    Why <GradientSpan>Kosha</GradientSpan>
                </SectionH2>
                <SectionSubParagraph>
                    The way brands bring products to market is changing
                </SectionSubParagraph>
                <SectionSmallParagraph>
                Today’s fastets-growing brands are no longer relying solely 
                on in-house ideas.
                <br/><br/>
                They collaborate with independent creators, 
                producers, and fans to create standout products that 
                drive innovation.
                </SectionSmallParagraph>
            </div>
        </section>
    </section>;
}

function VideoOverlay() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        disableScroll();
    }
    return <div className="absolute bg-[#00000029] z-10 left-0 right-0 bottom-0 top-0 rounded-3xl">
        <button onClick={handleOpen} className="absolute bg-koshaPink h-[72px] w-[72px] rounded-[36px] footerPhoneBreak:h-[83px] footerPhoneBreak:w-[83px] footerPhoneBreak:rounded-[42px] top-1/2 left-1/2 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.03688 12.522C1.37115 12.9456 0.5 12.4674 0.5 11.6783V1.32167C0.5 0.532583 1.37115 0.0543684 2.03688 0.478012L10.1742 5.65634C10.7917 6.04929 10.7917 6.95071 10.1742 7.34366L2.03688 12.522Z" fill="white"/>
            </svg>
        </button>
        {
            isOpen && <ModalVideo isOpen={isOpen} setIsOpen={setIsOpen} />
        }
    </div>
}

function ModalVideo({isOpen, setIsOpen}) {
    return <Modal isOpen={isOpen} setIsOpen={setIsOpen} customModal={true} isCentered={true}>
        <VideoModal />
    </Modal>
}