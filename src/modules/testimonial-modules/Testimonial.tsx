"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import TestimonialComponent from "./TestimonialComponent";
import { REVIEW_DATA } from "@/lib/StaticData";
import { GlowingHeading } from "@/atoms/GlowingButton";
import { CarouselDots } from "./CarouselDots";
import { CarouselNavigationButton } from "./CarouselNavigationButton";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewRef = useRef(null);

  const animateSlide = useCallback(
    (direction: string) => {
      const isNext = direction === "next";
      const animationOut = { opacity: 0, x: isNext ? -50 : 50, duration: 0.5 };
      const animationIn = { opacity: 1, x: 0, duration: 0.5 };

      gsap.to(reviewRef.current, {
        ...animationOut,
        onComplete: () => {
          setCurrentIndex((prevIndex) =>
            isNext
              ? (prevIndex + 1) % REVIEW_DATA.length
              : (prevIndex - 1 + REVIEW_DATA.length) % REVIEW_DATA.length
          );
          gsap.fromTo(reviewRef.current, animationOut, animationIn);
        },
      });
    },
    [currentIndex]
  );

  const handleDotClick = (index: number) => {
    gsap.to(reviewRef.current, {
      opacity: 0,
      x: currentIndex < index ? -50 : 50,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex(index);
        gsap.fromTo(
          reviewRef.current,
          { opacity: 0, x: currentIndex < index ? 50 : -50 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      },
    });
  };

  useEffect(() => {
    gsap.fromTo(
      reviewRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
      <GlowingHeading title="Testimonials" />
      <h2 className="text-[40px] md:text-[60px] text-center leading-10 my-3 md:leading-tight max-w-2xl">
        What’s our user <span className="heading">says</span> about us
      </h2>

      <div className="relative w-[85%] sm:w-[90%] max-w-4xl mx-auto py-10 px-5 bg-opacity-30 bg-gradient-to-r from-[#121212] to-[#232323] rounded-lg shadow-lg">
        <CarouselNavigationButton
          onClick={() => animateSlide("prev")}
          direction="prev"
        />
        <CarouselNavigationButton
          onClick={() => animateSlide("next")}
          direction="next"
        />

        <div className="text-white text-center" ref={reviewRef}>
          <TestimonialComponent review={REVIEW_DATA[currentIndex]} />
        </div>

        <CarouselDots
          dataLength={REVIEW_DATA.length}
          currentIndex={currentIndex}
          onDotClick={handleDotClick}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
