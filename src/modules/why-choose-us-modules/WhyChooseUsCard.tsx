import Image from "next/image";
import React from "react";
import ArrowDown from "@/static-files/arrow-down-double.svg";
interface ChooseType {
  title: string;
  list: string[];
  img: string;
  color: string;
  tick: string;
}

const WhyChooseUsCard = ({ choose }: { choose: ChooseType }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 border border-[#1f1e1e] bg-[black]/40 rounded-lg p-3 md:p-5 lg:p-6 max-w-4xl">
      <div className="text-[#CAD1E9] relative">
        {/* <div className="absolute top-[35px] left-4 bottom-0 w-[5px] bg-gradient-to-b from-violet-500 to-white">
        </div> */}

        <div className="flex justify-start items-center gap-2">
          <div
            className="rounded-full p-1 w-fit"
            style={{ background: choose.color }}
          >
            <Image src={ArrowDown} alt="" width={27} height={27} />
          </div>
          <h3 className="text-[25px] font-medium">{choose.title}</h3>
        </div>
        <ul className="space-y-2  list-inside mt-3 ml-10">
          {choose.list.map((item: string) => (
            <li key={item} className="flex justify-start items-start gap-2">
              <Image src={choose.tick} alt="" width={27} height={27} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[90%] relative h-full flex items-center justify-center">
        <Image
          src={choose.img}
          alt=""
          width={500}
          height={500}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
