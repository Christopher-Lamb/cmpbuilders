import React from "react";
import websiteInfo from "../configure.json";
import { Header, Form, Textarea, Input, Button, Footer, Navbar, Image } from "../components";

const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <Header>About Us</Header>
      <div className="container max-w-xl md:max-w-5xl mx-auto grid gap-14">
        <div />
        <div className="grid gap-16">
          <PictureText heading="Who are we?" src={"shakingHands.jpg"}>
            We stand at the forefront of the home remodeling industry, embodying a team of high-level plumbers, expert carpenters, and seasoned home remodelers. With 12 years of robust experience in
            construction, our team has honed a profound understanding of home construction and remodeling. This expertise led us to extend our services to customers in 2016, marking a new chapter in
            delivering excellence.
          </PictureText>
          <PictureText heading="How are we different?" src={"measuring-wood.jpg"} reverse>
            Our approach sets us apart, as we treat each project with the same care and attention as if it were our own home. At CMP, we pride ourselves on our meticulous attention to detail and
            unwavering professionalism. Our unique model combines the personalized service of a small business with the extensive resources of a larger company. As experts in both plumbing and
            construction, we efficiently manage all aspects of your home project under one roof, ensuring seamless coordination and comprehensive service
          </PictureText>
          <PictureText heading="Our service" src={"cover.png"}>
            At CMP, we skillfully adapt to the diverse seasonal demands of our climate, ensuring top-tier service throughout the year. Dedicated to simplifying complex projects, our strategic location
            in Deptford, New Jersey, with convenient access to main highways, enables us to serve our customers efficiently. We are committed to delivering swift, seamless services to residents of
            Gloucester and Camden counties, as well as the Jersey Shore points, and eagerly anticipate the opportunity to collaborate with you.
          </PictureText>
          <div>
            <div className="md:col-span-2 col-span-4 px-2">
              <p className="mt-2 md:text-lg">
                At CMP Builders, we streamline your new construction process by expertly handling both the build and plumbing aspects under one roof. Our comprehensive approach in crafting bathrooms
                and kitchens eliminates the complexity of coordinating with multiple companies, ensuring a smoother and more cost-effective experience for you. We understand that embarking on a home
                project involves significant decisions, and we're here to make your journey easier. Choose simplicity and quality with CMP Builders. For a hassle-free consultation or to start your
                project, reach out to us at{" "}
                <a className="underline text-blue-600" href={websiteInfo["phone-href"]}>
                  {websiteInfo["phone"]}
                </a>
                , or use the form below to get in touch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] my-16 py-small">
        <Form title="Contact Us" text="This form will be sent directly to us, and we will get back to you promptly.">
          <Input name="first" label="First Name" placeholder="John" />
          <Input name="last" label="Last Name" placeholder="Doe" />
          <Input name="email" label="Email" placeholder="john.doe@email.com" />
          <Input name="zip" label="Zip Code" placeholder="00000" />
          <Textarea name="message" label="Any Questions?" placeholder="Your message." />
          <Button className="bg-blue-400">Submit</Button>
        </Form>
      </div>
      <Footer className="mt-32" />
    </main>
  );
};

export default AboutPage;

const PictureText = ({ children, heading, src = "https://149362210.v2.pressablecdn.com/wp-content/uploads/2018/04/img-placeholder-rectangle.jpg", reverse }) => {
  const textEl = (
    <div className="md:col-span-2 col-span-4 px-2">
      <h2 className="text-2xl md:text-3xl mt-4">{heading}</h2>
      <p className="mt-2 md:text-lg">{children}</p>
    </div>
  );
  const imgEl = (
    <div className="hidden md:block md:col-span-2">
      <Image className="border shadow-material" fileName={src} alt="img" />
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-8">
      {reverse ? (
        <>
          {imgEl} {textEl}
        </>
      ) : (
        <>
          {textEl} {imgEl}
        </>
      )}
    </div>
  );
};

export const Head = () => {
  return (
    <>
      <title>CMP Builders: Your Trusted Partner in Home Remodeling</title>
      <meta
        name="description"
        content="CMP Builders provides expert home remodeling services with 12 years of construction experience. Offering personalized and professional plumbing and construction solutions, we serve customers in Gloucester, Camden, and the Jersey Shore points from our strategic location in Deptford, NJ."
      />
    </>
  );
};
