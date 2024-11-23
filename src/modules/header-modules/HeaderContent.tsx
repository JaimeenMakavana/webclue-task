import Image from "next/image";
import React from "react";
import ProductityImg from "@/static-files/productivity.svg";
import Icon1 from '@/static-files/header(1).svg';
import Icon2 from '@/static-files/header(2).svg';
import Icon3 from '@/static-files/header(3).svg';
import Icon4 from '@/static-files/header(4).svg';
const INFO_DATA = [
  {
    id: 1,
    name: "One-time passcode",
    value: "kas4536-26",
    icon: Icon1,
    className: "-right-[70px] md:-right-[100px] -top-[80]"
  },
  {
    id: 2,
    name: "Phone Number",
    value: "+91 1234567890",
    icon: Icon2,
    className: "-left-[70px] md:-left-[100px] -top-[80]"
  },
  {
    id: 3,
    name: "Credit Card",
    value: "1234-5647-2947-9747",
    icon: Icon3,
    className: "-left-[70px] md:-left-[100px] -bottom-[80]"

  },
  {
    id: 4,
    name: "Email Address",
    value: "abc@gmail.com",
    icon: Icon4,
    className: " -right-[70px] md:-right-[100px] -bottom-[80]"
  },
];

const HeaderContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-16 pb-10">
      <h1 className="gradient-heading-mask mb-5">Secure your data</h1>
      <h2 className="heading text-[40px] md:text-[60px]  text-center">Identity-hub is a better way to achieve privacy</h2>
      <p className="text-[1.2rem] text-[#CAD1E9] text-center my-3">
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
      <div className="flex justify-center items-center gap-5">
        <button className="gradient-border-mask">Start free trial</button>
        <button className="gradient-border-mask !bg-gradient-to-r from-[#F33CC0] to-[#4349FF] rounded-xl">Use it Now</button>
      </div>

      <div className="size-[200px] md:size-[300px] relative my-32">
        <Image src={ProductityImg} alt="" width={500} height={500} className=" object-cover " />
        {INFO_DATA.map((info) => (
          <div key={info.id} className={`${info.className} w-fit absolute border border-[#1f1e1e] rounded-md p-2 md:min-w-[200px]`}>
            <div className="flex gap-2 ">
              <div className="size-[33px]">
                <Image src={info.icon} alt="" width={100} height={30} className=" object-cover " />
              </div>
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
