import Image from "next/image";
import React from "react";
import Avatar from '@/static-files/avatar.svg'

interface ReviewType {
  name: string;
  role: string;
  timeAgo: string;
  review: string;
}

const TestimonialComponent = ({ review }: { review: ReviewType }) => {
  return (
    <div className="px-3 md:px-5">
      <div className="flex justify-start items-center gap-2">
        <Image src={Avatar} alt="" width={40} height={40} />
        <div className="text-start">
          <h3 className="sora font-medium">{review.name}</h3>
          <h4 className="text-gray-400 text-[12px] sora">{review.role} ({review.timeAgo})</h4>
        </div>
      </div>
      <p className="sora text-[14px] text-[#CAD1E9] text-start mt-3 ">{review.review}</p>
    </div>
  );
};

export default TestimonialComponent;
