"use client";

import { createPortal } from "react-dom";
import { useDetectOutsideClick } from "../_hooks/useDetectOutsideClick";
import MainModal from "./MainModal";
import { enableScroll } from "../_actions/helpers";

export default function Modal({isOpen, setIsOpen, styles}) {
  const handleClose = () => {
    setIsOpen(false);
    enableScroll();
  }

  const modalRef = useDetectOutsideClick(handleClose);
  
  if(!isOpen) return null;

  return createPortal(
    <div id="overlay" className="fixed top-0 left-0 w-svw h-dvh bg-[#1A223E66] z-[1000] transition-all">
      <div id="modalDiv" ref={modalRef} style={{ animation: isOpen ? 'fadeIn 300ms forwards' : '' }}
          className={`fixed ${styles ? styles : ""} w-auto transition-all top-[83.2px] left-[max(calc((100svw-724px)/2),16px)] rounded-[24px] bg-white max-h-[calc(100dvh-100px)] overflow-y-scroll no-scroll`}>
        <div>
          <MainModal handleCloseModal={handleClose} />
        </div>
      </div>
    </div>,
    document.body,
  );
}