'use client'
import React, { useState } from "react";
import TestimonialComponent from "./TestimonialComponent";

const REVIEW_DATA = [
  {
    name: "David J. Karem",
    role: "Businessman",
    timeAgo: "1 day ago",
    review:
      "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email addresses. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers, and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
  },
  {
    name: "Sophia Martinez",
    role: "Marketing Expert",
    timeAgo: "2 days ago",
    review:
      "Temp Mail has been a lifesaver for signing up on websites that I don’t trust with my personal email. It’s quick, easy to use, and ensures that my inbox stays clean and secure.",
  },
  {
    name: "Liam O'Connor",
    role: "Software Developer",
    timeAgo: "3 days ago",
    review:
      "As someone who frequently tests online services, Temp Mail is indispensable. It gives me the freedom to try out tools without worrying about spam or unwanted emails. Highly recommend it!",
  },
  {
    name: "Emily Zhang",
    role: "Freelancer",
    timeAgo: "4 days ago",
    review:
      "I love how Temp Mail protects my privacy. The interface is user-friendly, and I never have to worry about my data being exposed. A must-have for anyone dealing with sensitive tasks online!",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === REVIEW_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? REVIEW_DATA.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
      <button className="gradient-heading-mask">Testimonials</button>
      <h2 className="text-[40px] md:text-[60px] text-center leading-10 my-3 md:leading-tight max-w-2xl">What’s our user <span className="heading">says</span>  about us </h2>
      <div className="relative w-[85%] sm:w-[90%] max-w-4xl mx-auto py-10 px-5 bg-gradient-to-r from-[#121212] to-[#232323] rounded-lg shadow-lg">

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
        <div className="text-white text-center">
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
