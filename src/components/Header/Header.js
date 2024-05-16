import React from "react";

export default function Header({ children, className }) {
  return (
    <div
      style={{ background: "linear-gradient(34deg, rgba(31,50,93,1) 0%, rgba(52,96,163,1) 51%, rgba(57,113,193,1) 63%, rgba(65,90,149,1) 100%)" }}
      className={`text-5xl py-6 md:text-6xl md:py-8 xl:text-7xl lg:py-16 text-white ${className}`}
    >
      <span className="block mx-auto max-w-7xl pl-16 xl:pl-4">{children}</span>
    </div>
  );
}
