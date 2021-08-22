import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Landing from "../components/Landing";
import About from "../components/About";
import Services from "../components/Services";

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = ({ data }) => {
  const main = getImage(data.main.data.Image.localFiles[0].childrenImageSharp[0]);
  const logo = getImage(data.logo.data.Image.localFiles[0].childrenImageSharp[0]);

  return (
    <>
      <Landing bg={main} logo={logo} />

      <About />
      <Services />
    </>
  )
};

export const indexQuery = graphql`
query {
  main: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Main Image"}}) {
    data {
      Image {
        localFiles {
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
  logo: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Logo"}}) {
    data {
      Image {
        localFiles {
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}
`

export default IndexPage
