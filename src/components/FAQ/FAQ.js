import React from "react";
import * as CSS from "./FAQ.module.css";
// import arrow from "./assets/arrow.svg";
import { SlArrowUp } from "react-icons/sl";
import Footer from "../../components/Footer/Footer";
import websiteInfo from "../../configure.json";

const text = [
  {
    question: "How long will this take?",
    answer:
      "Deserunt magna non sint ipsum deserunt consectetur consequat amet. Incididunt laborum ipsum pariatur labore Lorem. Deserunt tempor tempor eiusmod ex velit duis enim. Dolor commodo commodo exercitation labore eiusmod magna cillum ullamco officia cillum voluptate.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Irure eiusmod labore irure Lorem sunt proident anim incididunt exercitation officia eiusmod enim consequat adipisicing. Sint in magna qui labore nisi aliqua aliquip sunt est nostrud. Commodo laborum ullamco ullamco laboris amet duis. Elit ad minim dolore occaecat eu. Sit mollit nostrud exercitation occaecat pariatur enim officia amet. Tempor id officia aliquip minim anim minim sit laboris labore. Sit aute officia voluptate commodo et ea velit sint.",
  },
  {
    question: "How do warrenties work?",
    answer:
      "Sunt dolore cillum magna sint est aliquip ex eu irure excepteur fugiat. Ex est dolore ipsum eiusmod ut minim non. Incididunt velit nostrud ipsum culpa cupidatat dolore pariatur in laborum. Ad dolore reprehenderit fugiat occaecat voluptate minim velit sunt enim. Culpa proident nostrud ex exercitation nulla eu qui enim commodo dolor in. Laboris sint officia et exercitation incididunt dolore ad voluptate eiusmod consectetur. Incididunt deserunt ullamco culpa incididunt eiusmod quis.",
  },
  {
    question: "How soon will we come out?",
    answer:
      "Dolor culpa do do et officia in cillum quis id adipisicing aute. Veniam mollit enim excepteur veniam ipsum minim sit Lorem veniam mollit aliqua fugiat nisi excepteur. Duis incididunt id eu elit esse nisi sint ex eu non occaecat nostrud pariatur sunt. Dolore sit laborum labore ut. Nulla fugiat est elit nisi. Aliqua veniam labore occaecat qui reprehenderit sit incididunt laborum. Eiusmod veniam sit eu exercitation sint occaecat mollit pariatur ex.",
  },
  {
    question: "What are the qualifactions of the business?",
    answer:
      "Tempor enim reprehenderit ut nulla sint sint cillum sunt ex laborum labore cupidatat ullamco. Occaecat occaecat veniam cupidatat reprehenderit consequat eu eiusmod nulla deserunt minim est quis. Commodo consequat cillum adipisicing qui exercitation sint consequat exercitation nostrud. Eu nisi non mollit fugiat incididunt veniam sunt.",
  },
];

export default function FAQ() {
  const handleArrow = (e) => {
    const svg = e.target.nextSibling.childNodes[1];
    svg.classList.toggle(CSS.arrowUp);
    //e.target.nextSibling.childNodes[1].classList.toggle(CSS.arrowUp)
  };

  return (
    <div>
      <h1 className={CSS.title}>Freqently Asked Questions</h1>
      <div className={CSS.menu}>
        {websiteInfo["faqs"].map((item, i) => {
          return (
            <div className={CSS.drop__down__menu} key={i}>
              <input
                type="checkbox"
                className={CSS.activate}
                id={`accordion-${i}`}
                name={`accordion-${i}`}
                onClick={(e) => {
                  handleArrow(e);
                }}
              />
              <label htmlFor={`accordion-${i}`} className={`${CSS.menu__title} ${CSS.label}`}>
                {item.question}
                <SlArrowUp className={CSS.arrow} />
                {/* <img src={arrow} className={CSS.arrow} alt="arrow" /> */}
              </label>
              <div className={CSS.drop__down}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
