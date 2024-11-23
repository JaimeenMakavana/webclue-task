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
      <div className="flex justify-between items-center">
        <Logo />
        <ul className="flex justify-start items-center gap-3">
          <li>Features</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>How to use</li>
        </ul>
      </div>

      <div className="flex justify-between items-center">
        <p>© identityhub 2024. All rights reserved</p>
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
