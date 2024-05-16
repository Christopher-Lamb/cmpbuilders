import React from "react";

export default function LinkBox({ children = "Knowledgeable, helpful people", href = "/", src }) {
  return (
    <a href={href}>
      <div className="link-box hover:shadow-down-left hover:scale-110 ease-in duration-100 cursor-pointer bg-white pt-4">
        <div style={{ outlineTop: "2px" }} className="text-center ">
          <div className="px-8 ">
            <img src={src} alt={`${children.toLocaleLowerCase()} logo`} className="w-32 md:w-[12.5rem] " />
            {/* <div className="h-56 bg-[var(--neutral-color)]"></div> */}
          </div>
          <p className="mt-5 sm:text-18 font-semibold text-zinc-900 bg-gray-200 py-1">{children}</p>
        </div>
        <div className="link-box-bar absolute h-1 bg-[var(--secondary-color)]"></div>
      </div>
    </a>
  );
}
