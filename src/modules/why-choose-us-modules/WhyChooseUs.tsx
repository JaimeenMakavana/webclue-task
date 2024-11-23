import React from "react";
import ChooseImg1 from "@/static-files/choose1.svg";
import ChooseImg2 from "@/static-files/choose2.svg";
import ChooseImg3 from "@/static-files/choose3.svg";
import WhyChooseUsCard from "./WhyChooseUsCard";

const CHOOSE_DATA = [
  {
    id: 1,
    title: "Protect Personal information",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    img: ChooseImg1,
  },
  {
    id: 2,
    title: "Detailed Reporting",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    img: ChooseImg2,
  },
  {
    id: 3,
    title: "Secure All Data",
    list: [
      "The first step involves identifying all places where your personal information might be present.",
      "Once you've identified where your information is held, the next step is to contact the administrators of this platform",
      "Removing personal information is not a one-time task but requires ongoing vigilance.",
      "There are professional services and tools available that specialise in personal information removal.",
    ],
    img: ChooseImg3,
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <button>Features</button>
      <h2>Why choose us</h2>
      <p>
        We are the only service that provides all 3 services as a packaged
        service
      </p>

      <div className="my-5">
        {CHOOSE_DATA.map((choose) => (
          <WhyChooseUsCard choose={choose} key={choose.id} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
