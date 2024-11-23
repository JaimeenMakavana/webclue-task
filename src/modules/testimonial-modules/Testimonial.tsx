import React from "react";
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

const Testimonial = () => {
  return (
    <div>
      <button>Testimonials</button>
      <h2>What’s our user says about us</h2>

      <div className="my-5">
        {REVIEW_DATA.map((review) => (
          <TestimonialComponent review={review} key={review.name} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
