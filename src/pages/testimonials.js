import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Testimonial from "../components/Testimonial";

const Testimonials = ({ data }) => {
    const testimonials = data.allAirtable.nodes;
    console.log(data)
    return (
        <div className="bg-green-500 md:py-10">
            <h1 className=" text-center text-5xl text-white font-bold my-6">Testimonials</h1>

            {testimonials.map(test => (
                <Testimonial
                    key={test.data.Name}
                    img={getImage(test.data.Image.localFiles[0].childImageSharp)}
                    text={test.data.Testimonial}
                    name={test.data.Name}
                />
            ))}
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