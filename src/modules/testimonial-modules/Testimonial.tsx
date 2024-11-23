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
    <div className="relative w-full max-w-4xl mx-auto py-10 px-5 bg-gradient-to-r from-[#121212] to-[#232323] rounded-lg shadow-lg">
      {/* Carousel Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition"
      >
        ❮
      </button>

      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-500 transition"
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
            className={`w-3 h-3 rounded-full ${currentIndex === index
              ? "bg-purple-600"
              : "bg-gray-500 hover:bg-gray-400"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
