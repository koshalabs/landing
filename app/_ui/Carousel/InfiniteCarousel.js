"use client";

import Image from "next/image";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const InfiniteCarousel = ({ items, styles }) => {
  const [duration, setDuration] = useState(25);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -((180 * (items.length)) + (16 * items.length));

    if(width < 835) {
      finalPosition = -((104 * (items.length)) + (8 * items.length));
    }

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <div className={`relative w-full h-[163px] footerPhoneBreak:h-[282px] overflow-hidden ${styles || ""}`}>
      <div className="absolute top-0 left-0 z-10 h-full w-[55px] footerPhoneBreak:w-[262px] bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 z-10 h-full w-[55px] footerPhoneBreak:w-[262px] bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <motion.div
        className="flex h-full gap-2 footerPhoneBreak:gap-4 scroll-smooth"
        style={{ x: xTranslation }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(40);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(25);
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[104px] footerPhoneBreak:w-[180px] h-full"
          >
            <Image
              src={item}
              height={282}
              width={180}
              alt={`Carousel-pic-${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;