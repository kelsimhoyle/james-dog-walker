import React from 'react'
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image";
import Landing from "../components/Landing";
import About from "../components/About";
import Services from "../components/Services";
import Seo from '../components/Seo';

import Amplify from 'aws-amplify'
import config from '../aws-exports'
// import Testimonial from '../components/Testimonial';
Amplify.configure(config)

const IndexPage = ({ data }) => {
  const main = getImage(data.mainImg.data.Image.localFiles[0].childrenImageSharp[0]);
  const logo = getImage(data.logo.data.Image.localFiles[0].childrenImageSharp[0]);

  const { title, subtitle, paragraph } = data;

  return (
    <>
      <Seo />
      <Landing
        bg={main}
        logo={logo}
        title={title.data.Content.childMarkdownRemark.excerpt}
        subtitle={subtitle.data.Content.childMarkdownRemark.excerpt}
        title={title.data.Content.childMarkdownRemark.excerpt}
        paragraph={paragraph.data.Content.childMarkdownRemark.excerpt}
      />
      <About />
      <Services />
      {/* <div className="bg-green-600 mx-auto px-4 pb-10 md:py-6 sm:px-6 bg-white">
        <h2 className="text-2xl py-8 tracking-tight font-extrabold  sm:text-4xl md:text-5xl text-white text-center	">
          Pawsitive Reviews
        </h2>
        <div className="md:py-10">
          {data.testimonials.nodes.map(test => (
            <Testimonial
              key={test.data.Name}
              img={getImage(test.data.Image.localFiles[0].childImageSharp)}
              text={test.data.Testimonial}
              name={test.data.Name}
            />
          ))}
        </div>
      </div> */}
    </>
  )
};

export const indexQuery = graphql`
query {
  mainImg: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Main Image"}}) {
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
  title: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Home Title"}}) {
    data {
      Content {
        childMarkdownRemark {
          excerpt
        }
      }
    }
  }
  subtitle: airtable(
    table: {eq: "Website Data"}
    data: {Name: {eq: "Home Subtitle"}}
  ) {
    data {
      Content {
        childMarkdownRemark {
          excerpt
        }
      }
    }
  }
  paragraph: airtable(
    table: {eq: "Website Data"}
    data: {Name: {eq: "Home Paragraph"}}
  ) {
    data {
      Content {
        childMarkdownRemark {
          excerpt
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
  testimonials: allAirtable(
    filter: {table: {eq: "Testimonials"}, data: {Status: {eq: "Post"}}}
  ) {
    nodes {
      data {
        Name
        Testimonial
        Image {
          localFiles {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
        }
      }
    }
  }
}

`

export default IndexPage
