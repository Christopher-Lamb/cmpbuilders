import React from "react";
import { Image } from "..";

const PictureTextBody = ({ title, children, src, href, className }) => {
  const [pictureRow, afterPicture] = children;
  return (
    <section className={"max-w-5xl p-6 mx-auto " + className}>
      <div className="grid grid-col md:grid-cols-6 items-center md:gap-4">
        <div className="col-span-3">
          <h1 className="text-3xl mt-4 mb-2">{title}</h1>
          {pictureRow}
        </div>
        <div className="col-span-3 xs:h-[250px] flex justify-center py-4 md:py-0">
          <Image fileName={src} />
          {/* <img className="rounded-sm shadow-md max-h-[250px]" src={src} alt="Man Fixing a water pipe with a wrench" /> */}
        </div>
      </div>
      {afterPicture}

      <a href={href}>
        <button className="py-1 mt-6 px-4 lg:text-lg lg:py-2 lg:px-5 border-[3.5px] border-[var(--secondary-color)] text-[var(--primary-color)] border-l-[6px]">Learn More</button>
      </a>
    </section>
  );
};

export default PictureTextBody