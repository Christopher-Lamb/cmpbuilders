import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const Image = ({ className, fileName }) => {
  // const image = getImage(imageData);
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  const imageNode = data.allFile.nodes.find((node) => {
    return node.relativePath === fileName;
  });
  const image = imageNode ? getImage(imageNode.childImageSharp.gatsbyImageData) : null;
  return image ? (
    <GatsbyImage image={image} alt={`Image for ${fileName}`} className={"h-fulls " + className} />
  ) : (
    <StaticImage src={"../images/placeholder.jpeg"} alt={`Placeholder`} className={"h-fulls " + className} />
  );
  // <div className={`w-full h-[${height}px] lg:h-full overflow-hidden flex justify-center`}>{image ? <GatsbyImage image={image} alt={`Image for ${fileName}`} /> : <div>No image found</div>}</div>
};

//Put an image element for the props for the picture text then add the className on after maybe or just put the full component inside the props of the picture text
export default Image;
