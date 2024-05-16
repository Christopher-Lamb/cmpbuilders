import React from "react";
import { Form, Input, Textarea, PictureTextBody, Button, Footer, LinkBox, BragBox, HomeHeader, Navbar } from "../components";
import { CONTACT, PLUMBING, REMODELING } from "../assets";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <div className="grid gap-16">
        <HomeHeader />
        <div className="mx-auto grid grid-cols-1 max-w-[24.375rem] xs: grid-cols-2 xs:max-w-[48.75rem] md:grid-cols-3  gap-4 lg:gap-16 xl:max-w-[68.75rem]">
          <LinkBox href="/custom-building" src={REMODELING}>
            Custom Building
          </LinkBox>
          <LinkBox href="/plumbing" src={PLUMBING}>
            Plumbing
          </LinkBox>
          <LinkBox href="/contact" src={CONTACT}>
            Contact
          </LinkBox>
        </div>
        {/* <PictureTextBtn title="Our Plumbing Services" href="/plumbing" src={PLUMBINGPIC}>
          Contact the expert South Jersey plumbers at CMP Builders when you need plumbing installation. If you are looking for precise work and fair prices, look no further; we are happy to help! We
          focus mainly on water heater swaps, sewer line replacements, and plumbing in new construction.
        </PictureTextBtn> */}

        <div className="bg-gray-50 py-20">
          <PictureTextBody className="" title="Our Plumbing Services" href="/plumbing" src={"PlumbingPic.jpg"}>
            {[
              <>
                <p className="text-[17px]">
                  At CMP Builders, we understand the importance of a well-functioning plumbing system in your home. That's why our team of experienced professionals is dedicated to providing top-notch
                  plumbing services tailored to meet all your needs. From ensuring clean, safe water with whole house water filters to keeping your environment dry and comfortable, we've got you
                  covered.
                </p>
              </>,
              <>
                <div className="max-w-4xl mt-1">
                  <h2 className="mt-4 text-xl font-semibold">Our Comprehensive Plumbing Solutions include:</h2>
                  <ul className="list-disc pl-5 grid gap-1 mt-3">
                    <li>
                      <span className="font-bold text-[17px]">Whole House Water Filters:</span> Guaranteeing you and your family access to clean, purified water throughout your home.
                    </li>
                    <li>
                      <span className="font-bold text-[17px]">Water Heaters:</span> Efficient solutions for hot water, essential for your comfort and daily needs.
                    </li>
                    <li>
                      <span className="font-bold text-[17px]">Sump Pumps:</span> Protecting your basement from flooding and water damage, especially during heavy rainfall.
                    </li>
                    <li>
                      <span className="font-bold text-[17px]">Basement Waterproofing:</span> Comprehensive solutions to keep your basement dry and free from water-related issues.
                    </li>
                    <li>
                      <span className="font-bold text-[17px]">Sewer Replacements:</span> Reliable and durable sewer line replacements to ensure a smoothly functioning plumbing system.
                    </li>
                    <li>
                      <span className="font-bold text-[17px]">Sewer Camera Inspections:</span> Advanced technology to accurately diagnose and address sewer line problems.
                    </li>
                    <li>
                      <span className="font-bold text-[17px]">Frozen Pipes:</span> Rapid response services to prevent and repair damage caused by frozen pipes.
                    </li>
                    <li>
                      <span className="font-bold text-[17px]">Hose Bibs:</span> Installation and maintenance of outdoor faucets for convenient access to water outdoors.
                    </li>
                    <li>
                      <span className="font-bold text-[17px]">Fixture Installs:</span> Expert installation of a wide range of plumbing fixtures to enhance the functionality and aesthetics of your
                      home.
                    </li>
                  </ul>
                  <p className="mt-3 text-[17px]">
                    Your home's plumbing is vital, and we're here to ensure it works perfectly. With our expertise, state-of-the-art equipment, and commitment to quality, CMP Builders is your go-to
                    partner for all your plumbing needs.
                  </p>
                </div>
              </>,
            ]}
          </PictureTextBody>
        </div>
        <BragBox className="my-8" />
        <PictureTextBody className="mt-0" title="Custom Building Services" href="/custom-building" src={"KitchenRemodel.jpg"}>
          {[
            <>
              <p className="text-[17px]">
                At CMP Builders, we bring your dream home to life, dedicating our expertise to every detail of your vision. Whether it's expanding your living space, revamping your kitchen, or
                building a new construction from the ground up, our team of skilled professionals is committed to turning your vision into reality, ensuring every project reflects your personal style
                and meets your specific needs.
              </p>
            </>,
            <>
              <div className="max-w-4xl mt-1">
                <h2 className="mt-4 text-xl font-semibold">Explore Our Array of Building and Remodeling Services:</h2>
                <ul className="list-disc pl-5 grid gap-1 mt-3">
                  <li>
                    <span className="font-bold text-[17px]">Home Additions:</span> Need more space? Our expert team can seamlessly extend your living area, whether it's adding a new room, a second
                    story, or expanding existing spaces.
                  </li>
                  <li>
                    <span className="font-bold text-[17px]">Kitchen Remodeling: </span> Transform the heart of your home with our custom kitchen remodeling services. From modern updates to classic
                    redesigns, we create kitchens that are not only beautiful but also functional.
                  </li>
                  <li>
                    <span className="font-bold text-[17px]">Basement Remodeling:</span> Unlock the potential of your basement with our remodeling services. Whether it's a cozy family room, a home
                    theater, or a personal gym, we turn your basement into a valuable extension of your living space.
                  </li>
                  <li>
                    <span className="font-bold text-[17px]">Full Home Remodels:</span> Ready for a complete makeover? Our full home remodeling services cover every corner of your house, ensuring a
                    cohesive and updated look that reflects your style and meets your needs.
                  </li>
                  <li>
                    <span className="font-bold text-[17px]">New Construction:</span> Dreaming of building your home from scratch? Our new construction services offer comprehensive solutions, from
                    initial design to the final build, ensuring a process that is smooth, transparent, and tailored to your specifications.
                  </li>
                </ul>
                <p className="mt-3 text-[17px]">
                  At CMP Builders, we believe in creating spaces that reflect the personality and lifestyle of our clients. With meticulous attention to detail, craftsmanship, and a commitment to
                  quality, we ensure that each project is a perfect blend of function and aesthetics.
                </p>
                <p className="mt-3 text-[17px]">
                  <span className="font-bold text-[17px]">Let's Build Your Dream Together!</span> Contact us today to discuss your project or to schedule a consultation with our building experts.
                </p>
              </div>
            </>,
          ]}
        </PictureTextBody>
        <div className="bg-gray-50 py-20">
          <Form title="Contact Us" text="This form will be sent directly to us, and we will get back to you promptly.">
            <Input name="first" label="First Name" placeholder="John" />
            <Input name="last" label="Last Name" placeholder="Doe" />
            <Input name="email" label="Email" placeholder="john.doe@email.com" />
            <Input name="zip" label="Zip Code" placeholder="00000" />
            <Textarea name="message" label="Any Questions?" placeholder="Your message." />
            <Button className="bg-blue-400">Submit</Button>
          </Form>
        </div>
        <Footer className="mt-16" />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>CMP Builders: Trusted Experts in Custom Home Construction, Remodeling, and Plumbing</title>;
    <meta
      name="description"
      content="Discover the ultimate home improvement experience with CMP Builders. Specializing in custom construction, kitchen and bathroom remodeling, basement transformations, and whole-home renovations. Our expert team is dedicated to creating spaces that are both beautiful and functional, tailored to meet your unique needs. Based in New Jersey, we are committed to excellence in every project. Let's build your dream home together!"
    />
  </>
);
