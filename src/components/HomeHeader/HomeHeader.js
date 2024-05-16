import React from "react";
import * as CSS from "./HomeHeader.module.css";
import websiteInfo from "../../configure.json";
// import COVER from "../../assets/cover.png"
import { Image } from "../";

export default class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: -250 };
  }

  componentDidMount() {
    console.log("CSS:\n\t", CSS.text); //console.log => CSS

    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    const scrollPosition = window.scrollY;

    const heroImg = document.getElementById("heroImg") || null;
    heroImg.style.transform = `translateY(${scrollPosition * 0.15}px)`;
  }

  render() {
    return (
      <div className={CSS.container}>
        <div className={"relative w-full h-0"}>
          <div id="heroImg" className={CSS.overlay}>
            <Image fileName={"hero.jpg"} className={"absolute object-center min-w-[80rem] top-[-230px] w-full left-[-20rem] sm:relative sm:left-0 "} />
          </div>
        </div>
        <div className={"relative z-[9] " + CSS.textWrapper}>
          <div className={"" + CSS.text}>
            <div className={"w-4/5 mx-auto relative top-[20%] md:top-[30%] lg:top-[35%]"}>
              <h1 className="px-2 text-[white] font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">CMP Builders</h1>
              <h2 className="px-2 text-[white] font-bold md:text-2xl mt-3 mb-5 2xl:text-3xl">{websiteInfo["tagline"]}.</h2>
              <div className="flex gap-2 flex-col xs:flex-row xs:gap-8 ">
                {[
                  ["Estimates", "bg-[var(--secondary-color)] px-6 py-2 xl:py-3 xl:px-7", "/estimate"],
                  ["Contact Us", "border-4 border-white px-5 py-1 xl:py-2 xl:px-6", "/contact"],
                ].map(([text, css, href], i) => (
                  <a key={`header-btn-${i + 1}`} href={href}>
                    <button className={" text-white font-bold max-w-[12rem] lg:text-20 font-semibold hover:scale-105 ease-in " + css}>
                      {text}
                    </button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
