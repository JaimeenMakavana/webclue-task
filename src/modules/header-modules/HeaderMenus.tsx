import Logo from "@/atoms/Logo";
import React from "react";

const HeaderMenus = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <ul className="hidden lg:flex justify-center items-center gap-4">
        <li>Services</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Partners</li>
        <li>About Us</li>
      </ul>
      <div className="flex justify-end items-center gap-4">
        <button className="lg:hidden">Menu</button>
        <button>Start free trial</button>
      </div>
    </div>
  );
};

export default HeaderMenus;
