import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Card from "./Card";
import BottomBorder from "./BottomBorder";
import PricingCard from "./PricingCard";

const Services = () => {
  return (
    <StaticQuery
      query={graphql`
          query ServicesQuery {
            allAirtable(filter: {table: {eq: "Services"}, data: {Category: {in: "Services"}}}, sort: {fields: id}) {
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
                          gatsbyImageData(height: 525, width: 600)
                        }
                      }
                    }
                  }
                }
              }
          }
        `}
      render={data => (
        <div className="md:py-10 py-8 bg-green-100">
          <div className="container px-4 md:px-0 mx-auto">
          <h2 className="font-extrabold text-gray-900 text-4xl md:text-5xl text-green-500 text-center	">
            Services
          </h2>
          <BottomBorder />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            {data.allAirtable.nodes.map(service => (
              <Card
                img={getImage(service.data.Image.localFiles[0].childImageSharp)}
                content={service.data.Content.childMarkdownRemark.html}
                title={service.data.Name}
              />
            ))}
          </div>
          <PricingCard />
          </div>
        </div>

      )}
    />
  )
};

export default Services;