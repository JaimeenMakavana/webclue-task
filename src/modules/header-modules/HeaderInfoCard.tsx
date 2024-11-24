import Image from "next/image";
import React from "react";

export const InfoCard = ({
  info,
  isMobile,
}: {
  info: any;
  isMobile: boolean;
}) => (
  <div
    className={`${isMobile ? "lg:hidden" : "hidden lg:block"} ${
      info.className
    } w-fit border border-[#1f1e1e] bg-black/30 rounded-md p-2 ${
      isMobile ? "mb-3 min-w-[300px]" : "absolute md:min-w-[200px]"
    }`}
  >
    <div className="flex gap-2">
      <div className="size-[33px]">
        <Image
          src={info.icon}
          alt=""
          width={100}
          height={30}
          className="object-cover"
        />
      </div>
      <div className="text-[12px] *:whitespace-nowrap text-[#CAD1E9]">
        <h4>{info.name}</h4>
        <p>{info.value}</p>
      </div>
    </div>
  </div>
);
