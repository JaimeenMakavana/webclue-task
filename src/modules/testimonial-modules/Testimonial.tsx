"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import TestimonialComponent from "./TestimonialComponent";
import { REVIEW_DATA } from "@/lib/StaticData";
import { GlowingHeading } from "@/atoms/GlowingButton";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewRef = useRef(null);

  const handleNext = () => {
    gsap.to(reviewRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === REVIEW_DATA.length - 1 ? 0 : prevIndex + 1
        );
        gsap.fromTo(
          reviewRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      },
    });
  };

  const handlePrev = () => {
    gsap.to(reviewRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? REVIEW_DATA.length - 1 : prevIndex - 1
        );
        gsap.fromTo(
          reviewRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.5 }
        );
      },
    });
  };

  useEffect(() => {
    // Initial animation when the component loads
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
        {/* Carousel Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#F33CC0] to-[#4349FF] text-white px-3 py-[5px] rounded-full shadow-lg hover:bg-purple-500 transition"
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#F33CC0] to-[#4349FF] text-white px-3 py-[5px] rounded-full shadow-lg hover:bg-purple-500 transition"
        >
          ❯
        </button>

        {/* Review Card */}
        <div
          className="text-white text-center"
          ref={reviewRef} // Ref for GSAP animation
        >
          <TestimonialComponent review={REVIEW_DATA[currentIndex]} />
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-2 mt-5">
          {REVIEW_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-[6px] rounded-full ${currentIndex === index
                ? "bg-purple-600"
                : "bg-gray-500 hover:bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
