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
        <div className="container mx-auto my-20 px-4 sm:px-6">
          <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl text-green-500 text-center	">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center">
            {data.allAirtable.nodes.map(service => (
              <div class=" bg-gray-100 mt-4">
                <div class=" bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200 max-w-sm">
                  <GatsbyImage image={getImage(service.data.Image.localFiles[0].childImageSharp)} alt={service.data.Name} className="rounded-t-lg" />
                  <div class="py-4 px-8">
                    <h4 class="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">{service.data.Name}</h4>
                    <div dangerouslySetInnerHTML={{
                      __html: service.data.Content.childMarkdownRemark.html
                    }}
                      className="my-2"

                    />
                    {/* <p class="hover:cursor-pointer py-3 text-gray-600 leading-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora neque eum autem repellat iure perferendis, possimus blanditiis temporibus doloribus corrupti.</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 sm:mt-8 sm:flex justify-center sm:m-">
            <div className="rounded-md shadow">

              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>

      )}
    />
  )
};

export default Services;