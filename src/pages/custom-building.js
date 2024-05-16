import React from "react";
import { Form, Input, Textarea, Button, Header, Navbar, Footer, Image } from "../components";
import CarouselGallery from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import imageFilenames from "../assets/carousel.json";

const products = [
  {
    title: "New Construction",
    body: " Bring your dream home to life from the ground up with our new construction services. At CMP Builders, we combine innovative design with quality craftsmanship to build homes that stand the test of time. Working closely with you from the initial design phase to the final construction, we ensure every aspect of your new home meets your specific vision, delivering a personalized and unique living experience.",
  },
  {
    title: "Kitchens",
    body: "Transform the heart of your home with CMP Builders' kitchen remodeling services. We understand that your kitchen is more than just a cooking space - it's a central hub for family gatherings and entertainment. Our experts combine functionality with style, employing the latest design trends and high-quality materials to create a kitchen that is not only beautiful but also highly practical, tailored to your lifestyle and needs.",
  },
  {
    title: "Bathrooms",
    body: "Refresh and enhance your home with CMP Builders' bathroom remodeling services. Our team focuses on creating practical yet stylish bathrooms tailored to your needs. Whether updating fixtures, improving layouts, or modernizing designs, we ensure each renovation enhances both the functionality and aesthetics of your space. Trust CMP Builders to deliver a bathroom remodel that balances everyday utility with a touch of elegance.",
  },
  {
    title: "Full Home Remodels",
    body: " Embark on a complete transformation of your living space with CMP Builders' full home remodels. Our comprehensive approach covers every aspect of your house, ensuring a cohesive and updated look throughout. From modernizing living rooms to revamping bedrooms, our team manages every detail, ensuring a remodel that reflects your style and meets your evolving needs.",
  },
  {
    title: "Basement Remodeling",
    body: "Unlock the potential of your basement with CMP Builders. Our basement remodeling services turn underutilized spaces into functional and inviting areas. Whether you envision a cozy family room, a home theater, a personal gym, or an additional bedroom, we tailor the space to suit your requirements, adding both value and functionality to your home.",
  },
  {
    title: "Home Additions",
    body: "Expand your living space with our tailored home addition services at CMP Builders. We specialize in creating seamless extensions to your existing property, whether it's adding an extra room, a sunroom, or a second story. Our skilled team works closely with you to ensure that the new addition blends perfectly with your home's current layout and style, providing the extra space you need while enhancing your home's value and appeal.",
  },
];

const CustomBuildingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg|jpeg|png)/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  // Sort and extract images in one pass
  const sortedImages = imageFilenames
    .map((filename) => {
      // Find the node corresponding to the current filename
      const node = data.allFile.nodes.find((node) => node.relativePath === filename);
      console.log(node);
      // Extract the gatsbyImageData and return
      return node ? getImage(node.childImageSharp.gatsbyImageData) : null;
    })
    .filter(Boolean);

  const transformedImages = sortedImages.map((image) => ({
    src: image.images.fallback.src,
    alt: "Gallery image",
  }));
  console.log(sortedImages);
  return (
    <main>
      <Navbar />
      <Header>Custom Building</Header>
      <div className="px-4 xl:px-2 2xl:px-0">
        <div className="max-w-7xl mt-16 mx-auto ">
          <PictureText>
            <h1 className="text-3xl lg:text-4xl">What do we do?</h1>
            <div className="spacer w-14 bg-[var(--secondary-color)] h-1 my-2  " />
            <p className="xl:text-lg mt-2">
              <strong className="font-semibold">Transform Your Home with CMP Builders.</strong> Specializing in custom building, CMP Builders brings your unique vision to life, from kitchens to
              bathrooms and beyond. Our commitment is to create spaces that mirror your personal style and fulfill your functional needs, with every detail meticulously crafted to your specifications.
            </p>
            <p className="xl:text-lg mt-4">
              <strong className="font-semibold">Quality in Every Detail.</strong> Whether it’s a chic kitchen update, a serene bathroom remodel, or a functional laundry room enhancement, our team
              ensures superior craftsmanship in every project. Let CMP Builders elevate your home’s aesthetics and functionality.
            </p>
          </PictureText>
          <section className="max-w-5xl">
            {products.map((item, i) => (
              <React.Fragment key={i}>
                <h1 className="text-2xl lg:text-3xl mt-8">{item.title}</h1>
                <p className="mt-3 lg:text-lg">{item.body}</p>
              </React.Fragment>
            ))}
          </section>
        </div>
        <section className="max-w-7xl mx-auto mt-16 grid justify-center">
          <h1 className="text-4xl mb-8">Previous Projects</h1>
          <CarouselGallery shouldLazyLoad={true} canAutoPlay={false} images={transformedImages} style={{ height: "600px", maxWidth: "50rem" }} className="border" />
        </section>
        <div className="mt-32" />
      </div>
      <div className="bg-[#f7f7f7] py-small">
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

const PictureText = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-6">
      <Image fileName={"custombuilder.png"} atl="alt" className="w-4/5 sm:w-1/2 mx-auto md:w-full col-span-2 rounded" />
      <div className="col-span-3 pt-4 md:px-4">{children}</div>
    </div>
  );
};

export default CustomBuildingPage;

export const Head = () => {
  return (
    <>
      <title>CMP Builders: Custom Home Construction, Remodeling, and Renovation Experts</title>
      <meta
        name="description"
        content="Transform your home with CMP Builders. We specialize in custom home construction, kitchen and bathroom remodeling, basement finishing, home additions, and full home renovations. Trust our expert team to bring your vision to life with quality craftsmanship, from kitchens and bathrooms to entire home remodels. Serving Gloucester, Camden, and the Jersey Shore, we ensure personalized designs and functional spaces that reflect your style and needs."
      />
    </>
  );
};
