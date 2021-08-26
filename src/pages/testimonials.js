import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Testimonial from "../components/Testimonial";
// import Seo from "../components/Seo";

const Testimonials = ({ data }) => {
  const testimonials = data.allAirtable.nodes;

  return (
    <>
      {/* <Seo title="James the Dog Walker - Testimonials" /> */}
      <div className="py-10">
        <h1 className=" text-center text-green-500 text-5xl font-bold my-6">Testimonials</h1>

        {testimonials.map(test => (
          <Testimonial
            key={test.data.Name}
            img={getImage(test.data.Image.localFiles[0].childImageSharp)}
            text={test.data.Testimonial}
            name={test.data.Name}
          />
        ))}
      </div>
    </>
  );
};

export const testimonialQuery = graphql`
query {
 allAirtable(
      filter: {table: {eq: "Testimonials"}, data: {Status: {eq: "Post"}}}
    ) {
      nodes {
        data {
          Name
          Testimonial
          Image {
            localFiles {
              childImageSharp {
                gatsbyImageData (width: 500)
              }
            }
          }
        }
      }
    }
  }
  `


export default Testimonials;