import React from "react";
import websiteInfo from "../../configure.json";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import LOGO from "../../assets/CMP_logo.svg";

export default function Footer({ className }) {
  return (
    <footer className={"w-full bg-[var(--primary-color)] min-h-[29.5rem] " + className}>
      <div className="flex items-end border-b border-stone-200 w-4/5 pt-16 mx-auto mb-5">
        <span className="flex items-center h-24 gap-1.5">
          <img src={LOGO} alt="logo" className="w-[3.5rem]" />
          <h1 className="text-4xl text-white">{websiteInfo["company-name"]}</h1>
        </span>
        {/* <img href={websiteInfo["logo"]} alt="logo" className="h-16 w-16"/> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-8 w-4/5 mx-auto gap-2">
        <FooterGroup label="About">
          <p className="text-white">
            We lead the home remodeling industry with a team of expert plumbers, carpenters, and remodelers. With 12 years of construction experience, we expanded our services to customers in 2016,
            marking a new chapter in delivering excellence.
          </p>
        </FooterGroup>
        <FooterGroup label="Links">
          <ul>
            <Link href="/" name="Home" />
            <LinkArray array={websiteInfo["nav-links"]} />
          </ul>
        </FooterGroup>
        <FooterGroup label="Contact">
          <p className="text-gray-200">Owner: {websiteInfo["owner"]}</p>
          <p className="text-gray-200">
            Phone:{" "}
            <a className="underline" href={websiteInfo["phone-href"]}>
              {websiteInfo["phone"]}
            </a>
          </p>
          <p className="text-gray-200">Email: {websiteInfo["email"]}</p>
        </FooterGroup>
        <FooterGroup label="Socials">
          <div className="flex gap-4 mb-4 text-gray-300">
            <a>
              <FaFacebook className="w-8 h-8" />
            </a>
            <a>
              <FaInstagram className="w-8 h-8" />
            </a>
          </div>
        </FooterGroup>
      </div>
      <div className="w-4/5 mx-auto pb-10 text-gray-300">
        <p>
          Copyright © {new Date().getFullYear()} {websiteInfo["company-name"]}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Link(props) {
  return (
    <li>
      <a href={props.href} className="text-gray-200 hover:text-gray-300">
        {props.name}
      </a>
    </li>
  );
}
function LinkArray(props) {
  return (
    <>
      {props.array.map((link) => (
        <Link key={link.name} {...link} />
      ))}
    </>
  );
}

function FooterGroup(props) {
  return (
    <div className={`${props.className} flex flex-col lg:items-center`}>
      <div>
        <label className="text-stone-300 text-2xl border-b-2 border-stone-300">{props.label}</label>
        <div className="mt-2">{props.children}</div>
      </div>
    </div>
  );
}
