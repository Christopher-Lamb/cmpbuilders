import React, { useEffect, useRef, useState } from "react";
import * as CSS from "./Navbar.module.css";
import websiteInfo from "../../configure.json";
import Burger from "./Burger";
import LOGO from "../../assets/CMP_logo.svg";

export default function Navbar() {
  const [dropdownHeight, setDropdownHeight] = useState();
  const dropdownRef = useRef();

  useEffect(() => {
    setDropdownHeight(dropdownRef.current.offsetHeight);
  }, []);

  const handleDropdown = () => {
    dropdownRef.current.classList.toggle(CSS.down);
  };
  return (
    <>
      <div className="h-24 bg-[var(--primary-color)] hidden lg:block">
        <div className="flex justify-between w-4/5 min-w-[60rem] mx-auto">
          <a href="/" className="flex items-center h-24 gap-1.5">
            <img src={LOGO} alt="logo" className="w-10" />
            <h1 className="text-30 text-white">{websiteInfo["company-name"]}</h1>
          </a>
          <nav className="flex items-center gap-8 text-white text-18">
            {websiteInfo["nav-links"].map((link) => (
              <a key={link.href} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      {/* Mobile */}
      <div className="h-24 bg-[var(--primary-color)] px-4 flex items-center justify-between lg:hidden z-[9998] relative">
        <a href="/" className="flex items-center h-24 gap-1.5">
          <img src={LOGO} alt="logo" className="w-10" />
          <h1 className=" text-white text-24 sm:text-30">{websiteInfo["company-name"]}</h1>
        </a>
        <Burger onClick={handleDropdown} />
      </div>
      {/* Dropdown */}
      <div className="relative">
        <div ref={dropdownRef} className={`absolute lg:hidden w-full grid text-white z-[9997] ${CSS.dropdown}`} style={{ "--dropdownHeight": `${dropdownHeight / 16}rem` }}>
          {websiteInfo["nav-links"].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full px-4 py-3 bg-[var(--primary-color)] grayscale-[50%] brightness-[1.3] border-b border-[var(--neutral-color)] hover:brightness-[1.5] tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
