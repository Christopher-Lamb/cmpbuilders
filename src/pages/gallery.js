import React from "react";
import { Form, Input, Textarea, Button, Header, Navbar, Footer } from "../components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import imageFilenames from "../assets/carousel.json";
import Gallery from "react-photo-gallery";

const GalleryPage = () => {
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

  const transformedImages = sortedImages.map((image, i) => {
    return {
      src: image.images.fallback.src,
      width: 12,
      height: 8,
    };
  });

  return (
    <main>
      <Navbar />
      <Gallery photos={transformedImages} />
    </main>
  );
};

export default GalleryPage;

export const Head = () => {
  return (
    <>
      <title>Gallery</title>
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
};
