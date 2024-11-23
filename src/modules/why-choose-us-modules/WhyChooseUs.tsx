import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { CHOOSE_DATA } from "@/lib/StaticData";

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
