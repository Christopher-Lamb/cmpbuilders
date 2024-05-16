import React from "react";
import { Form, Input, Textarea, Button, Carousel, Header, Navbar, Footer, Image } from "../components";
import websiteInfo from "../configure.json";

const products = [
  {
    title: "Water Heaters",
    body: "At CMP Builders, we understand the importance of a reliable hot water supply in your home. Our expert plumbers are adept at installing, repairing, and maintaining a wide range of water heaters. Whether you're looking for a traditional storage-tank model or an upgrade, we ensure your water heater operates efficiently and consistently, providing you with the comfort you deserve.",
  },
  {
    title: "Tankless Water Heaters",
    body: "Embrace the efficiency of modern plumbing with our tankless water heater services. These innovative systems provide hot water on demand, ensuring you never run out while also saving on energy costs. Our skilled team can help you choose the perfect tankless system for your home and handle the installation with precision and expertise.",
  },
  {
    title: "Sump Pumps",
    body: "Protect your home from water damage with our reliable sump pump solutions. Ideal for basements prone to flooding, our sump pumps effectively redirect water away from your property, safeguarding your home’s foundation and interior. Trust CMP Builders for sump pump installation, maintenance, and emergency repairs.",
  },
  {
    title: "Basement Waterproofing",
    body: "Ensure your basement remains dry and safe with our comprehensive basement waterproofing services. We tackle moisture issues from the core, using advanced methods and materials to prevent water intrusion. This service not only protects your property but also improves air quality and increases your home's value.",
  },
  ,
  {
    title: "Sewer Replacements",
    body: "Address your sewer line issues with CMP Builders’ expert sewer replacement services. Whether due to age, damage, or blockages, we provide efficient sewer line replacements using the latest techniques, minimizing disruption to your property and ensuring a long-lasting plumbing system.",
  },
  ,
  {
    title: "Sewer Camera Inspections",
    body: "Utilizing state-of-the-art sewer camera technology, we offer thorough inspections of your sewer lines. This non-invasive method allows us to accurately diagnose issues such as blockages, cracks, and tree root infiltration, leading to precise repairs and maintenance.",
  },
  ,
  {
    title: "Frozen Pipes",
    body: "Combat the challenges of cold weather with our frozen pipe services. We provide swift and effective solutions to thaw and repair frozen pipes, preventing potential bursts and water damage. Our team also offers preventive measures to protect your pipes from freezing in the future.",
  },
  ,
  {
    title: "Hose Bibs",
    body: "Enhance the convenience and functionality of your outdoor spaces with our hose bib installation and repair services. Whether you're watering your garden, washing your car, or filling a pool, our durable and easy-to-use hose bibs are a perfect addition to your home.",
  },
  ,
  {
    title: "Fixture Installs",
    body: "Revitalize your kitchen, bathroom, or laundry room with our fixture installation services. From faucets and sinks to showerheads and toilets, our skilled plumbers ensure your new fixtures are installed flawlessly, adding both style and functionality to your space.",
  },
];

const PlumbingPage = () => {
  return (
    <main>
      <Navbar />
      <Header>Plumbing</Header>
      <div className="px-4 xl:px-2 2xl:px-0">
        <div className="max-w-7xl mt-16 mx-auto">
          <PictureText>
            <h1 className="text-3xl lg:text-4xl">Our Plumbing</h1>
            <div className="spacer w-14 bg-[var(--secondary-color)] h-1 my-2  " />
            <div className="lg:pr-16">
              <p className="lg:text-lg">
                <strong className="font-semibold">Welcome to CMP Builders, Gloucester and Camden County, NJ's Go-To for Expert Plumbing Services.</strong> Our skilled New Jersey plumbers specialize in
                both new constructions and existing homes, offering reliable installations, repairs, and maintenance. We ensure that your plumbing needs are met with the utmost professionalism and
                efficiency, catering to your specific requirements with precision.
              </p>
              <p className="lg:text-lg mt-4">
                <strong className="font-semibold">Seamless Integration of Custom Building and Plumbing Expertise.</strong> At CMP Builders, we streamline your construction and plumbing projects by
                managing everything in-house. This approach simplifies the process, providing you with a hassle-free experience. Trust us to bring your vision to life with our detail-oriented and
                client-focused service.
              </p>
            </div>
          </PictureText>
          <section className="max-w-5xl">
            {products.map((item, i) => (
              <React.Fragment key={i}>
                <h1 className="text-2xl lg:text-3xl mt-8">{item.title}</h1>
                <p className="mt-3 lg:text-lg max-w-4xl">{item.body}</p>
              </React.Fragment>
            ))}
          </section>
        </div>
        {/* <section className="max-w-7xl mx-auto mt-16">
          <h1 className="text-4xl mb-8">Brands</h1>
          <Carousel height="200px" />
        </section>
        <section className="max-w-7xl mx-auto mt-16">
          <h1 className="text-4xl mb-8">Plumbing Reviews</h1>
          <Carousel height="250px" />
        </section> */}
        <div className="mt-16" />
        <div className="bg-[#f7f7f7] py-med">
          <Form title="Contact Us" text="This form will be sent directly to us, and we will get back to you promptly.">
            <Input name="first" label="First Name" placeholder="John" />
            <Input name="last" label="Last Name" placeholder="Doe" />
            <Input name="email" label="Email" placeholder="john.doe@email.com" />
            <Input name="zip" label="Zip Code" placeholder="00000" />
            <Textarea name="message" label="Any Questions?" placeholder="Your message." />
            <Button className="bg-blue-400">Submit</Button>
          </Form>
        </div>
      </div>
      <Footer className="mt-32" />
    </main>
  );
};

const PictureText = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-6">
      <Image fileName={"custombuilder.png"} atl="alt" className="w-4/5 sm:w-1/2 mx-auto md:w-full col-span-2 rounded" />
      <div className="col-span-3 pt-4 md:px-4">{children}</div>
    </div>
  );
};

export default PlumbingPage;

export const Head = () => {
  return (
    <>
      <title>CMP Builders - Expert Plumbing & Custom Building Solutions in Gloucester and Camden, NJ</title>
      <meta
        name="description"
        content="CMP Builders offers expert plumbing services and custom building solutions in Gloucester and Camden counties, NJ. From water heater installations to sump pump repairs, sewer inspections to fixture installations, we handle all your plumbing needs with professionalism and precision. Our seamless integration of plumbing and construction ensures your projects are managed in-house for a hassle-free experience. Trust CMP Builders for reliable plumbing services and custom building excellence."
      />
    </>
  );
};
