import React from "react";
import ChooseImg1 from "@/static-files/choose1.svg";
import ChooseImg2 from "@/static-files/choose2.svg";
import ChooseImg3 from "@/static-files/choose3.svg";
import WhyChooseUsCard from "./WhyChooseUsCard";
import Tickmark1 from '@/static-files/checkmark-circle-01.svg'
import Tickmark2 from '@/static-files/checkmark-circle-01 (1).svg'
import Tickmark3 from '@/static-files/checkmark-circle-01 (2).svg'
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
    color: "#1E21E9",
    tick: Tickmark1
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
    color: "#7950FF",
    tick: Tickmark2
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
    color: "#098709",
    tick: Tickmark3
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
      <button className="gradient-heading-mask">Features</button>
      <h2 className="text-[40px] md:text-[60px] text-center leading-10 my-3  max-w-2xl ">Why  <span className="heading">choose</span> us</h2>
      <p className="text-[1.2rem] text-[#CAD1E9] text-center mb-3  max-w-2xl ">
        We are the only service that provides all 3 services as a packaged
        service
      </p>
      <div className="my-5 m-3 space-y-5">
        {CHOOSE_DATA.map((choose) => (
          <WhyChooseUsCard choose={choose} key={choose.id} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
