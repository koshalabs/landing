import GradientSpan from "../SectionElements/GradientSpan";
import ModalForm from "./ModalForm";
import ModalXSvg from "./ModalXSvg";

export default function MainModal({handleCloseModal}) {
    return <div className="bg-white overflow-y-auto w-[calc(100svw-32px)] max-w-[724px] modalShadow text-koshaBlack relative modalWindow">
        <div className="pt-16 pb-8 px-6 lg:p-16 space-y-6">
            <h2 className="text-[32px] leading-[35px] lg:text-[56px] lg:leading-[65px] font-medium">
                Get early access<br/>to <GradientSpan>Kosha</GradientSpan>
            </h2>
            <p className="text-[20px] font-medium leading-[23px]">
                Join Kosha’s beta program to help shape the future of brand collaboration. Be the first to access new features, provide feedback, and earn Kosha tokens as you build with us
            </p>
            <ModalForm handleCloseModal={handleCloseModal} />
            <p className="text-koshaBlue text-[16px]">
                By joining our beta program, you agree to our Terms & Conditions
            </p>
        </div>
        <button type="button" className="absolute h-9 w-9 top-6 right-6" onClick={handleCloseModal}>
            <ModalXSvg />
        </button>
    </div>;
} 