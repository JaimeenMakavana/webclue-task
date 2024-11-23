import React from "react";
import HeaderMenus from "./HeaderMenus";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <div className="w-full">
      <HeaderMenus />
      <HeaderContent />
    </div>
  );
};

export default Header;
