import React from "react";

const INFO_DATA = [
  {
    id: 1,
    name: "One-time passcode",
    value: "kas4536-26",
    icon: "icon1",
  },
  {
    id: 2,
    name: "Phone Number",
    value: "+91 1234567890",
    icon: "icon2",
  },
  {
    id: 3,
    name: "Credit Card",
    value: "1234-5647-2947-9747",
    icon: "icon3",
  },
  {
    id: 3,
    name: "Email Address",
    value: "abc@gmail.com",
    icon: "icon3",
  },
];

const HeaderContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button>Secure your data</button>
      <h2>Identity-hub is a better way to achieve privacy</h2>
      <p>
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
      <div className="flex justify-center items-center gap-5">
        <button>Start free trial</button>
        <button>Use it Now</button>
      </div>

      <div className="size-[200px] md:size-[300px] bg-gray-200 relative my-32">
        <div className="w-[80px] h-[40px] bg-red-50 absolute -right-[100px] -top-[80]"></div>
        <div className="w-[80px] h-[40px] bg-red-50 absolute -left-[100px] -top-[80]"></div>
        <div className="w-[80px] h-[40px] bg-red-50 absolute -left-[100px] -bottom-[80]"></div>
        <div className="w-[80px] h-[40px] bg-red-50 absolute -right-[100px] -bottom-[80]"></div>
      </div>
    </div>
  );
};

export default HeaderContent;
