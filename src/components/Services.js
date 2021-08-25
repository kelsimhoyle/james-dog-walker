import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "./Card";

const Services = () => {
  return (
    <StaticQuery
      query={graphql`
          query ServicesQuery {
            allAirtable(filter: {table: {eq: "Website Data"}, data: {Category: {in: "Services"}}}, sort: {fields: id}) {
                nodes {
                  data {
                    Name
                    Content {
                      childMarkdownRemark {
                        html
                      }
                    }
                    Image {
                      localFiles {
                        childImageSharp {
                          gatsbyImageData (width: 400, height: 400)
                        }
                      }
                    }
                  }
                }
              }
          }
        `}
      render={data => (
        <div className="container mx-auto my-20 px-4 sm:px-6 bg-white">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl text-green-500 text-center	">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center">
            {data.allAirtable.nodes.map(service => (
              <Card
                img={getImage(service.data.Image.localFiles[0].childImageSharp)}
                content={service.data.Content.childMarkdownRemark.html}
                title={service.data.Name}
              />
            ))}
          </div>
          <div className="mt-5 sm:mt-8 sm:flex justify-center sm:m-">
            <div className="rounded-md shadow my-8">

              <Link to="/services" className="w-full flex items-center justify-center px-8 py-3  border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                Learn More
              </Link>
            </div>
          </div>
        </div>

      )}
    />
  )
};

export default Services;