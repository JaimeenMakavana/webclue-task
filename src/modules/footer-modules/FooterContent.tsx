import Image from "next/image";
import React from "react";
import UnderlineImg from "@/static-files/underline.svg";
const FooterContent = () => {
  return (
    // <div className="flex flex-col justify-center items-center gap-3 py-32 ">
    <div className="flex flex-col justify-center items-center gap-3 py-32 relative ">
      {/* <div className="gradientBg size-[200px] bg-opacity-20 absolute inset-0">

      </div> */}
      <h2 className="sora text-center text-[40px] md:text-[50px]  max-w-3xl relative  text-[#CAD1E9]">
        Be part of the future of{" "}
        <span className="relative">
          IdentityHub
          <Image
            src={UnderlineImg}
            alt=""
            width={100}
            height={30}
            className="absolute inset-x-0 -bottom-2 w-[79%]"
          />
        </span>
      </h2>
      <p className="sora text-[18px] text-[#CAD1E9] text-center  max-w-2xl">
        Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app.
      </p>
      <button className="gradient-border-mask !text-[#CAD1E9] ">
        Start Free Trial
      </button>
    </div>
  );
};

export default FooterContent;
