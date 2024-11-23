import Image from "next/image";
import React from "react";
import ProductityImg from "@/static-files/productivity.svg";
const INFO_DATA = [
  {
    id: 1,
    name: "One-time passcode",
    value: "kas4536-26",
    icon: "icon1",
    className: "-right-[50px] md:-right-[100px] -top-[80]"
  },
  {
    id: 2,
    name: "Phone Number",
    value: "+91 1234567890",
    icon: "icon2",
    className: "-left-[50px] md:-left-[100px] -top-[80]"
  },
  {
    id: 3,
    name: "Credit Card",
    value: "1234-5647-2947-9747",
    icon: "icon3",
    className: "-left-[50px] md:-left-[100px] -bottom-[80]"

  },
  {
    id: 4,
    name: "Email Address",
    value: "abc@gmail.com",
    icon: "icon3",
    className: " -right-[50px] md:-right-[100px] -bottom-[80]"
  },
];

const HeaderContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <h1 className="gradient-heading-mask mb-5">Secure your data</h1>
      <h2 className="heading text-[40px] md:text-[60px]  text-center">Identity-hub is a better way to achieve privacy</h2>
      <p className="text-[1.2rem] text-[#CAD1E9] text-center my-3">
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
      <div className="flex justify-center items-center gap-5">
        <button className="gradient-border-mask">Start free trial</button>
        <button className="gradient-border-mask">Use it Now</button>
      </div>

      <div className="size-[200px] md:size-[300px] relative my-32">
        <Image src={ProductityImg} alt="" width={500} height={500} className=" object-cover " />
        {INFO_DATA.map((info) => (
          <div key={info.id} className={`${info.className} w-fit absolute border border-[#1f1e1e] rounded-md p-2`}>
            <div className="w-full h-full flex gap-2">
              <div className="w-[20px] h-[33px] bg-gray-200 rounded-md"></div>
              <div className="text-[12px] *:whitespace-nowrap text-[#CAD1E9]">
                <h4>{info.name}</h4>
                <p>{info.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderContent;
