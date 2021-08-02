import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FaPaw } from "@react-icons/all-files/fa/FaPaw";


const About = () => {



    return (
        <StaticQuery
        query={graphql`
          query AboutQuery {
            airtable(table: {eq: "Website Data"}, data: {Name: {eq: "About"}}) {
                data {
                  Image {
                    localFiles {
                      childrenImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                      }
                    }
                  }
                  Content {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
          }
        `}
        render={data => (
        <div className="grid grid-cols-2 mt-20">
           <div>
                <GatsbyImage image={getImage(data.airtable.data.Image.localFiles[0].childrenImageSharp[0])} alt="The Doggies" />

            </div>
            <div className="flex flex-col justify-center space-y-6 p-20	">
            <FaPaw className="text-6xl text-yellow-400" />
                <h2 className=" text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">About Me</h2>
               

                <div
                    dangerouslySetInnerHTML={{
                        __html: data.airtable.data.Content.childMarkdownRemark.html
                    }}
                />
            </div>
           
        </div>
      )}
      />
    );
};


export default About;