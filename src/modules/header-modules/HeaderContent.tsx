import Image from "next/image";
import React from "react";
import ProductityImg from "@/static-files/productivity.svg";
import UnderlineImg from "@/static-files/underline.svg";
import { INFO_DATA } from "@/lib/StaticData";
import {
  GlowingButtonDark,
  GlowingButtonSm,
  GlowingHeading,
} from "@/atoms/GlowingButton";

const HeaderContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-16 pb-10">
      <GlowingHeading title="Secure your data" />

      <h2 className="heading text-[40px] mt-5 md:text-[60px]  text-center max-w-2xl mb-4">
        Identity-hub is a better way to achieve{" "}
        <span className="relative heading">
          {" "}
          <Image
            src={UnderlineImg}
            alt=""
            width={100}
            height={30}
            className="absolute inset-x-0 -bottom-2 w-[79%]"
          />
          privacy
        </span>{" "}
      </h2>
      <p className="page-info">
        Make your data invisible by generating unlimited identities. The
        next-level in privacy protection for online and travel.
      </p>
      <div className="flex justify-center items-center gap-5">
        <GlowingButtonSm title="Start free trial" />
        <GlowingButtonDark title="Use it Now" />
      </div>

      <div className="size-[300px] lg:size-[300px] relative my-10 lg:my-32">
        <Image
          src={ProductityImg}
          alt=""
          width={500}
          height={500}
          className=" object-cover "
        />
        {INFO_DATA.map((info) => (
          <div
            key={info.id}
            className={`hidden lg:block ${info.className} w-fit absolute border border-[#1f1e1e] rounded-md p-2 md:min-w-[200px]`}
          >
            <div className="flex gap-2 ">
              <div className="size-[33px]">
                <Image
                  src={info.icon}
                  alt=""
                  width={100}
                  height={30}
                  className=" object-cover "
                />
              </div>
              <div className="text-[12px] *:whitespace-nowrap text-[#CAD1E9]">
                <h4>{info.name}</h4>
                <p>{info.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {INFO_DATA.map((info) => (
        <div
          key={info.id}
          className={` lg:hidden ${info.className} w-fit  border border-[#1f1e1e] rounded-md p-2 mb-3 min-w-[300px]`}
        >
          <div className="flex gap-2 ">
            <div className="size-[33px]">
              <Image
                src={info.icon}
                alt=""
                width={100}
                height={30}
                className=" object-cover "
              />
            </div>
            <div className="text-[12px] *:whitespace-nowrap text-[#CAD1E9]">
              <h4>{info.name}</h4>
              <p>{info.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderContent;
