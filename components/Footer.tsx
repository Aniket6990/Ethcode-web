import Image from "next/image";
import React from "react";
import ethcode_large from "../assets/ethcode_footer.svg";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <Image src={ethcode_large} alt="ethcode logo" id="footer-image" />
        <ul id="links">
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
        <span id="copyright">© Copyright 2020 by Ethential</span>
      </div>
    </>
  );
};

export default Footer;
