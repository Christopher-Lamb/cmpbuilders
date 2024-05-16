import React from "react";
import websiteInfo from "../configure.json";
import { Form, Input, Textarea, Button, Header, Navbar, Footer } from "../components";

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <Header>Contact</Header>
      <div className="grid gap-4 mt-14">
        <div className="w-full grid grid-cols-4 max-w-5xl mx-auto">
          <Form
            title="Contact Form"
            text={`Fill out this form or call ${websiteInfo["phone"]}, and we will get back to you in a timely manner`}
            className="mx-0"
            containerClass="col-span-4 lg:col-span-3"
          >
            <Input name="first" label="First Name" placeholder="John" required />
            <Input name="last" label="Last Name" placeholder="Doe" required />
            <Input name="email" label="Email" placeholder="john.doe@email.com" required className="md:col-span-2" />
            <Input name="phone" label="Phone Number" placeholder="(555) 555-5555" required />
            <Input name="zip" label="Zip Code" placeholder="00000" required />
            <Textarea name="message" label="What can we help you with?" className="mt-4" required />
            <Button>Submit</Button>
          </Form>
          <section className="mt-8 mb-8 lg:mt-16 px-4 col-span-4 lg:col-span-1">
            <h1 className="text-2xl w-full md:text-3xl xl:4x border-b ">Contact Details: </h1>
            <div>
              <h1 className="font-semibold text-2xl tracking-wide mt-3">{websiteInfo["company-name"]}</h1>
              {[
                ["Owner:", websiteInfo["owner"]],
                ["Office:", websiteInfo["address"]],
              ].map(([label, text]) => (
                <div className="mt-2" key={label}>
                  <label className="font-bold text-lg tracking-wide">{label} </label>
                  <p className="text-xl">{text}</p>
                </div>
              ))}
              <div className="mt-2">
                <label className="font-bold text-lg tracking-wide">Phone Number: </label>
                <a href={websiteInfo["phone-href"]}>
                  <p className="text-xl underline text-blue-600">{websiteInfo["phone"]}</p>
                </a>
              </div>
            </div>
          </section>
        </div>

        <iframe
          width="600"
          height="450"
          style={{ border: 0 }}
          className="w-full mt-24"
          loading="lazy"
          allowFullScreen
          referrerPolicy="origin"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB0bJo1hiqqXkcyQAzPrKPGvypdOD0MYZA
    &q=${websiteInfo["address"]}`}
        ></iframe>
        {/* <div className="info-box w-full border-t-4 border-[var(--primary-color)] h-56 bg-stone-300 mt-16">
          <p className="max-w-xl mx-auto md:max-w-5xl mt-5 md:mt-14 text-stone-800 text-center">
            Cillum cupidatat dolore exercitation mollit cupidatat do fugiat dolor ex irure irure ea enim. Excepteur qui eu quis mollit magna aliquip fugiat duis. Nostrud et cillum fugiat adipisicing
            veniam consequat nulla nisi amet aliqua aliquip magna ut. Ea cupidatat occaecat eu veniam officia officia eu do consequat dolor nostrud qui mollit magna. Eiusmod incididunt consequat
            cupidatat quis mollit irure.
          </p>
        </div> */}
        <Footer className="mt-32" />
      </div>
    </main>
  );
};

export default ContactPage;

export const Head = () => {
  return (
    <>
      <title>Contact</title>
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
};
