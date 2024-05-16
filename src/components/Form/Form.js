import React from "react";

export default function Form({ children, title, text, className, titleClass, containerClass }) {
  const getPageName = () => {
    if (typeof window !== "undefined") {
      let pathname = window.location.pathname;
      if (pathname === "/") return "Home";
      pathname = pathname.replaceAll("/", "");
      pathname = pathname
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return pathname;
    }
  };

  return (
    <div className={"antialiased text-gray-900  px-4 lg:px-0 " + containerClass}>
      <div className={`max-w-xl mx-auto py-4 md:px-6 md:max-w-3xl ${className}`}>
        {title && <h2 className={"text-2xl font-semibold my-2 " + titleClass}>{title}</h2>}
        {text && <p className="my-2 text-lg text-gray-500">{text}</p>}
        <form
          method="POST"
          // action={window.location.hostname === "localhost" ? "http://localhost:3001/form" : "https://krispywebsites.com/form"}
          action={"https://krispywebsites.com/form"}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start"
        >
          {/* <input type="hidden" name="recipient" value="" /> */}
          <input type="hidden" name="recipient" value="chris@cmpbuilders.com" />
          {typeof window !== "undefined" && (
            <>
              <input type="hidden" name="redirect_url" defaultValue={window.location.href} />
              <input type="hidden" name="page" defaultValue={getPageName() + " Page"} />
            </>
          )}
          {children}
        </form>
      </div>
    </div>
  );
}

export const Input = (props) => {
  const { className, ...other } = props;
  return (
    <div className={"grid grid-cols-1 gap-6 " + className}>
      <label className="block">
        <p className="">
          {props.label} {props.required && <span className="text-red-600">*</span>}
        </p>
        <input type="text" className="form-input  mt-1 block w-full" {...other} />
      </label>
    </div>
  );
};

export const Textarea = (props) => {
  const { className, textClass, ...other } = props;
  return (
    <label className="block md:col-span-2 mt-2">
      <p className={" " + textClass}>
        {props.label} {props.required && <span className="text-red-600">*</span>}
      </p>
      <textarea className="form-textarea mt-1 block w-full h-48" {...other}></textarea>
    </label>
  );
};
export const BtnGroup = (props) => {
  const { className, ...other } = props;
  return (
    <section className="block grid md:grid-cols-2 md:col-span-2 my-2 gap-y-2">
      <p className=" md:col-span-2 text-xl">{props.label}</p>
      {props.children}
    </section>
  );
};

export const CheckBox = (props) => {
  const { className, ...other } = props;
  return (
    <span className="inline flex items-center gap-2">
      <input type="checkbox" {...other} className="cursor-pointer" />
      <span className="">{props.label}</span>
    </span>
  );
};

export const Button = (props) => {
  const { className, ...other } = props;
  return (
    <button type="submit" className={`w-full md:col-p-1 py-5 px-10 bg-black text-white text-lg ${className}`} {...other}>
      {props.children}
    </button>
  );
};

// return <form className="bg-black w-full min-h-10"></form>;
