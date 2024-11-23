import React from "react";

export const GlowingButtonSm = ({ title }: { title: string }) => {
  return (
    <button className="gradient-border-mask !text-[#CAD1E9]">{title}</button>
  );
};

export const GlowingButtonDark = ({ title }: { title: string }) => {
  return (
    <button className="gradient-border-mask !bg-gradient-to-r from-[#F33CC0] to-[#4349FF] rounded-xl">
      {title}
    </button>
  );
};

export const GlowingHeading = ({ title }: { title: string }) => {
  return <h3 className="gradient-heading-mask">{title}</h3>;
};
