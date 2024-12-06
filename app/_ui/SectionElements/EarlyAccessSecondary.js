"use client";

import { useState } from "react";
import KoshaButton from "./KoshaButton";
import Modal from "../Modal/Modal";
import { disableScroll } from "../_actions/helpers";

export default function EarlyAccessSecondary() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    disableScroll();
  }

  return (
    <>
        <KoshaButton type="secondary" onClick={handleOpen}>
            Join Now
        </KoshaButton>
        {
          isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        }
    </>
  );
}