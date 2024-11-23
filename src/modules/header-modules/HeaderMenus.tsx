import Logo from "@/atoms/Logo";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderMenus = () => {
  return (
    <div className="flex justify-between items-center border-[2px] border-[#1f1e1e] rounded-lg p-2 mx-auto w-full  sticky top-5 bg-black z-10">
      <Logo />
      <ul className="hidden lg:flex justify-center items-center gap-4 text-[#CAD1E9]">
        <li>Services</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Partners</li>
        <li>About Us</li>
      </ul>
      <div className="flex justify-end items-center gap-2 md:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden">
            <div className="gradient-border-mask flex justify-center items-center !p-[12px]">
              <RxHamburgerMenu />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!bg-black !border-[#1f1e1e] lg:hidden text-[#CAD1E9] ">
            <DropdownMenuItem>Services</DropdownMenuItem>
            <DropdownMenuItem>Features</DropdownMenuItem>
            <DropdownMenuItem>Pricing</DropdownMenuItem>
            <DropdownMenuItem>Partners</DropdownMenuItem>
            <DropdownMenuItem>About Us</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="gradient-border-mask !text-[#CAD1E9]">
          Start free trial
        </button>
      </div>
    </div>
  );
};

export default HeaderMenus;
