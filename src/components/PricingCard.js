import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const PricingCard = () => {
    return (
        <StaticQuery 
        query={graphql`
        query PricingQuery {
            pricing: allAirtable(
                filter: {table: {eq: "Services"}, data: {Category: {in: "Pricing"}}}
                sort: {fields: id}
              ) {
                nodes {
                  data {
                    Name
                    Content {
                      childMarkdownRemark {
                        excerpt
                      }
                    }
                  }
                }
              }
        }
        `}
        render={data => (
            <div className="mt-4 md:mt-10 md:px-14 p-8 bg-white w-full bg-white rounded-xl shadow-lg hover:shadow-xl transform  transition duration-500 mx-auto md:mx-0 md:space-x-8 md:px-14">
            <h3 className="text-4xl font-bold mt-4 text-green-600 text-center">Pricing</h3>
            <p className="text-gray-600 py-4 md:py-14 md:mx-2 text-lg text-center">This is the general baseline pricing for my services. If you have other needs or multiple dogs, we can discuss your custom pricing.</p>
        <div className="flex flex-col md:flex-row justify-between">
            {data.pricing.nodes.map(node => (
                        <div className="flex  justify-items-center content-center items-center text-gray-600 space-x-2 mx-auto">
                        <p className="text-center text-2xl md:text-3xl text-green-500 font-bold">{node.data.Content.childMarkdownRemark.excerpt}</p>
                         <p className="text-center text-3xl md:text-4xl text-green-600 font-bold">/</p> 
                         <p className="text-center text-xl md:text-2xl slef-center">{node.data.Name}</p>
                         </div>
            ))}
        </div>
        <div className="mt-5 sm:mt-8 sm:flex justify-center sm:m-">
        <div className="rounded-md shadow my-8">

          <Link to="/contact" className="w-full flex items-center justify-center px-8 py-3  border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10">
            Schedule First Visit
          </Link>
        </div>
      </div>
    </div>
        )}
        />

    );
};

export default PricingCard;