import React from "react";
import HeaderMenus from "./HeaderMenus";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    // <div className="w-full p-3 md:p-5 bg-[url('/Header.svg')] bg-center bg-contain ">
    <div className="w-full p-3 md:p-5 ">
      <HeaderMenus />
      <HeaderContent />
    </div>
  );
};

export default Header;
