import React from "react";
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "../components/Card";

const Services = ({ data }) => {
    const { summary, services } = data;
    return (
        <>
            <div className="min-w-full relative">
                <GatsbyImage className="min-w-full max-h-96" objectFit="cover"
                    objectPosition="25% 25%" image={getImage(summary.data.Image.localFiles[0])} />
                <div className="absolute bottom-2 md:inset-x-1/4  md:inset-y-1/3 md:w-1/2 bg-opacity-50	bg-green-700 rounded-xl p-4 w-full p-4	">
                    <h1 className=" text-center text-2xl md:text-5xl text-white font-bold">Services</h1>

                    <div
                        className="text-center text-l	md:text-2xl mt-4	tracking-wide	text-white	"
                        dangerouslySetInnerHTML={{
                            __html: summary.data.Content.childMarkdownRemark.html
                        }}
                    />
                </div>
            </div>
            <div className="bg-green-100 py-14">
                <h2 className="mt-8 text-center text-5xl text-green-600 font-bold">How can we help you?</h2>
                <div className="md:flex md:justify-center md:space-x-8 md:px-14">

                    {services.nodes.map(service => (
                        <Card
                            img={getImage(service.data.Image.localFiles[0])}
                            content={service.data.Content.childMarkdownRemark.html}
                            btn={false}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export const servicesQuery = graphql`
query {
    summary: airtable(table: {eq: "Services"}, data: {Name: {eq: "Summary"}}) {
      data {
        Content {
          childMarkdownRemark {
            html
          }
        }
        Image {
          localFiles {
            childImageSharp {
              id
              gatsbyImageData
            }
          }
        }
        Name
      }
    }
    services: allAirtable(
      filter: {table: {eq: "Services"}, data: {Category: {in: "Services"}}}
      sort: {fields: id}
    ) {
      nodes {
        data {
          Content {
            childMarkdownRemark {
              html
            }
          }
          Image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          ID
        }
      }
    }
  }
  
`

export default Services;