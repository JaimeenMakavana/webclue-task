import React from "react";
import FooterContent from "./FooterContent";
import Logo from "@/atoms/Logo";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <FooterContent />
      <div className="flex justify-between items-center py-3 border-b border-[#1f1e1e] px-3">
        <Logo />
        <ul className="flex justify-start items-center gap-3 text-[#CAD1E9]">
          <li>Features</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>How to use</li>
        </ul>
      </div>

      <div className="flex justify-between items-center py-3 text-[#CAD1E9] px-3">
        <p className="text-[12px]">© identityhub 2024. All rights reserved</p>
        <div className="flex justify-start items-center gap-3">
          <IoLogoTwitter />
          <IoLogoInstagram />
          <FaTelegramPlane />
          <IoLogoFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
