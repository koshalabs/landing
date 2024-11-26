"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

const AnimationPlayer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/koshaArrow.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load animation:", error));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.75 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleComplete = () => {
    if (animationRef.current && animationRef.current.totalFrames) {
      animationRef.current.goToAndStop(animationRef.current.totalFrames - 1, true);
    }
  };

  return (
    <div ref={containerRef} className="min-h-[195px] min-w-[120px] lg:min-h-[134px] lg:min-w-[59px]">
      {isVisible && (
        <Lottie
          lottieRef={animationRef}
          animationData={animationData}
          loop={false}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default AnimationPlayer;