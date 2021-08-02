import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Services = () => {
  return (
    <StaticQuery
      query={graphql`
          query ServicesQuery {
            allAirtable(filter: {data: {Category: {in: "Services"}}}, sort: {fields: id}) {
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
        <div className="container mx-auto my-20">
          <div className="grid grid-cols-2 gap-3 place-items-center">
            {data.allAirtable.nodes.map(service => (
              <div>
                <GatsbyImage image={getImage(service.data.Image.localFiles[0].childImageSharp)} alt={service.data.Name} style={{
                  borderRadius: "50%"
                }} />
                <h4 className=" tracking-tight text-gray-900">{service.data.Name}</h4>

                <div
                  dangerouslySetInnerHTML={{
                    __html: service.data.Content.childMarkdownRemark.html
                  }}
                />
              </div>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Learn More
          </button>
        </div>

      )}
    />
  )
};

export default Services;