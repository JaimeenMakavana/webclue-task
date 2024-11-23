import React from "react";

const TestimonialComponent = ({ review }: { review: any }) => {
  return (
    <div>
      <h3>{review.name}</h3>
      <h4>{review.role}</h4>
      <p>{review.timeAgo}</p>
      <p>{review.review}</p>
    </div>
  );
};

export default TestimonialComponent;
