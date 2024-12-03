"use client";

import { useState } from "react";
import KoshaButton from "./KoshaButton";
import Modal from "../Modal/Modal";
import { disableScroll } from "../_actions/helpers";

export default function GetEarlyAccessButton({type = "big"}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    disableScroll();
  }

  return (
    <>
        <KoshaButton type={type === "big" ? "primary" : "primarySmall"} onClick={handleOpen}>
            Get Early Access
        </KoshaButton>
        {
          isOpen && <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        }
    </>
  );
}

