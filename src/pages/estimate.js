import React from "react";
import { Form, Input, Textarea, Button, Header, Navbar, Footer, CheckBox, BtnGroup } from "../components";
import websiteInfo from "../configure.json";

const EstimatePage = () => {
  return (
    <main>
      <Navbar />
      <Header>Estimate</Header>
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-3xl mt-8 px-4 lg:px-0 font-semibold">Looking for an Estimate?</h2>
        <div className="spacer" />
        <p className="mt-1.5 text-lg px-4 lg:px-0">
          We offer a variety of services and look forward to working with you. You've come to the right place. We pride ourselves on our fair pricing and quality work. We would never charge you for
          something unnecessary. Please fill out the form below, and a team member will contact you within 24 hours or the next business day to finalize your request details. We will accommodate your
          requested day and time the best we can. For emergencies and immediate assistance, please call {websiteInfo["phone"]}.
        </p>
      </div>
      <div className="bg-[#f7f7f7]">
        <Form title="Estimate Form" titleClass="font-normal" className="mt-16 py-med">
          <Input name="first" label="First Name" placeholder="John" required />
          <Input name="last" label="Last Name" placeholder="Doe" required />
          <Input name="email" label="Email" placeholder="john.doe@email.com" className="md:col-span-2" required />
          <Input name="address" label="Address" placeholder="123 Your St." className="md:col-span-2" required />
          <Input name="address-2" label="Address 2" placeholder="123 Your St." className="md:col-span-2" />
          <Input name="phone" label="Phone" placeholder="111-222-4444" required />
          <Input name="city" label="City" placeholder="City" required />
          <Input name="state" label="State" placeholder="NJ" required />
          <Input name="zip" label="Zip Code" placeholder="00000" required />
          <BtnGroup label="Estimate Item">
            <CheckBox label="Water Heater Install" />
            <CheckBox label="Sewer Replacement" />
            <CheckBox label="New Installs" />
            <CheckBox label="New Construction" />
            <CheckBox label="Kitchen Remodel" />
            <CheckBox label="Bathroom Remodel" />
            <CheckBox label="Additions" />
          </BtnGroup>
          <Textarea name="message" label="Description of what you're seeking." placeholder="Your message." textClass="text-xl" required />
          <Button className="bg-blue-400">Submit</Button>
        </Form>
      </div>
      <Footer className="mt-32" />
    </main>
  );
};

export default EstimatePage;

export const Head = () => {
  return (
    <>
      <title>Estimate</title>
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
};
