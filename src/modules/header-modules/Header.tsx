import React from "react";
import HeaderMenus from "./HeaderMenus";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <>
      <HeaderMenus />
      <div className="w-full p-3 md:p-5 ">
        <HeaderContent />
      </div>
    </>
  );
};

export default Header;
