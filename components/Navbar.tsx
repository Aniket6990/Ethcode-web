import React, { useState } from "react";
import Image from "next/image";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import ethcode_large from "../assets/logo/logo-blue.svg";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image
            src={ethcode_large}
            alt="ethcode logo"
            className="logo-image"
          />
        </div>
        <ul
          className={!mobile ? "nav-links" : "nav-links-mobile nav-links"}
          onClick={() => {
            setMobile(false);
          }}
        >
          <li>
            <a href="https://docs.ethcode.dev" target="_blank" rel="noreferrer">
              Docs
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a
              href="https://github.com/7fny/ethcode"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <button
          className="menu-button"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {!mobile ? <CgMenuRightAlt /> : <CgClose />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
