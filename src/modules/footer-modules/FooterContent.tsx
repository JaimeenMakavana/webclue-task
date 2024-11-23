import React from "react";

const FooterContent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="sora text-center text-[40px] md:text-[60px]">Be part of the future of IdentityHub</h2>
      <p className="sora text-[18px] text-[#CAD1E9] text-center">
        Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app.
      </p>
      <button className="gradient-border-mask !text-[#CAD1E9] ">Start Free Trial</button>
    </div>
  );
};

export default FooterContent;
