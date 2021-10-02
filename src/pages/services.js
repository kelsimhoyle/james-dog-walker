import React from "react";
import { graphql, Link } from "gatsby";
import { FaPaw } from "@react-icons/all-files/fa/FaPaw";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "../components/Card";
import PricingCard from "../components/PricingCard";
import Seo from "../components/Seo";
// import TwoCta from "../components/TwoCta";

const Services = ({ data }) => {
  const { summary, services } = data;
  return (
    <>
      <Seo title="James the Dog Walker - Services" />
      <div className="md:bg-green-500 md:py-10 ">
        <div className=" content mx-auto max-w-screen-lg relative mb-80 mt-10 md:mt-0 md:mb-0">
          <div className="max-w-lg">
            <GatsbyImage image={getImage(summary.data.Image.localFiles[0])} alt="The Doggies" />
          </div>
          <div className="mx-5 md:max-w-md	absolute -bottom-64 md:inset-y-1/4 md:right-20	md:mx-0	 z-10   flex flex-col justify-center items-center md:items-start space-y-2">
            <div className="flex flex-col justify-center items-center md:items-start space-y-4 shadow-md bg-white p-10 rounded text-center	md:text-left">
              <div>
                <FaPaw className="text-6xl text-green-500" />
              </div>
              <h2 className=" text-2xl tracking-tight font-extrabold text-gray-900 md:w-96 sm:text-4xl md:text-5xl">Services</h2>
              <div
                className="space-y-4"
                dangerouslySetInnerHTML={{
                  __html: summary.data.Content.childMarkdownRemark.html
                }}
              />
            </div>
            <pricing />

              {/* <TwoCta
                one={{ text: "Testimonials", href: "/testimonials" }}
                two={{ text: "Contact", href: "/contact" }}
              /> */}
          </div>

        </div>
      </div>

      <div className="bg-green-100 py-14">
        <h2 className="mt-8 text-center text-5xl text-green-600 font-bold">How can we help you?</h2>
        <div className="md:px-14">
          <div className="md:flex md:justify-center md:space-x-8">
          {services.nodes.map(service => (
            <Card
              key={service.data.Name}
              title={service.data.Name}
              img={getImage(service.data.Image.localFiles[0])}
              content={service.data.Content.childMarkdownRemark.html}
              services={true}
              btn={false}
            />
          ))}
          </div>
          <PricingCard />
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
          ID
        }
      }
    }
  }
  
`

export default Services;