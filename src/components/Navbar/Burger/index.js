import React, { useRef } from "react";
import * as CSS from "./Burger.module.css";

export default function Burger({ onClick, children }) {
  const burgerRef = useRef();
  const burgerToggle = () => {
    burgerRef.current.classList.toggle(CSS.change);
  };

  return (
    <div
      className={CSS.burgerGrid}
      onClick={() => {
        burgerToggle();
        onClick();
      }}
    >
      <div ref={burgerRef} className={CSS.burgerContainer}>
        <div className={CSS.burgerBar1}></div>
        <div className={CSS.burgerBar2}></div>
        <div className={CSS.burgerBar3}></div>
      </div>
      <p className={CSS.burgerText}>{children}</p>
    </div>
  );
}
