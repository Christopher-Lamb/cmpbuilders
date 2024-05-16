import React from "react";
import * as CSS from "./BragBox.module.css";

export default function BragBox({ className }) {
  return (
    <div className={"brag-box md:h-[15.625rem] w-full bg-black " + CSS.container + " " + className}>
      <div className="mx-auto grid md:grid-cols-3 w-full h-full max-w-5xl">
        {[
          ["98%", "Customer Satisfaction Rate"],
          ["400+", "Projects Succesfully Completed"],
          ["15+", "Years of Experience"],
        ].map(([number, statement], i) => (
          <div key={`${number}-${i}`} className="flex justify-center py-10 md:pt-14 text-white">
            <div>
              <h1 className="text-64 font-bold font-black grid justify-center md:block">{number}</h1>
              <p className="text-14 pl-2 font-semibold">{statement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
