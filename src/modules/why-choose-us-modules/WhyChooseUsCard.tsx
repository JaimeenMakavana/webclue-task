import Image from "next/image";
import React from "react";

interface ChooseType {
  title: string;
  list: string[];
  img: string;
}

const WhyChooseUsCard = ({ choose }: { choose: ChooseType }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-2 border border-[#1f1e1e] rounded-lg p-3 md:p-5 lg:p-6 max-w-4xl">
      <div className="text-[#CAD1E9]">
        <h3 className="text-[25px] font-medium">{choose.title}</h3>
        <ul className="space-y-2 list-disc list-inside mt-3">
          {choose.list.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="w-full relative">
        <Image src={choose.img} alt="" width={500} height={500} className=" object-cover object-center" />
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
