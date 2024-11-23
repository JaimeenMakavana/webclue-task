import React from "react";
import HeaderMenus from "./HeaderMenus";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <div className="w-full p-3 md:p-5">
      <HeaderMenus />
      <HeaderContent />
    </div>
  );
};

export default Header;
