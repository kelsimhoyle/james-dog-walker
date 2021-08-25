import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Testimonial from "../components/Testimonial";

const Testimonials = ({ data }) => {
  const testimonials = data.allAirtable.nodes;
  return (
    <div className="container m-auto py-8">
      <h1 className=" text-center text-green-500 text-5xl font-bold my-6">Testimonials</h1>
      <div class="-mx-3 md:flex items-start">
          {testimonials.map(test => (
            <Testimonial
              key={test.data.Name}
              img={getImage(test.data.Image.localFiles[0].childImageSharp)}
              text={test.data.Testimonial}
              name={test.data.Name}
            />
          ))}
      </div>
    </div>
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
                gatsbyImageData (width: 300)
              }
            }
          }
        }
      }
    }
  }
  `


export default Testimonials;