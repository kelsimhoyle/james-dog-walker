import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import Header from "../components/header"
import Footer from "../components/Footer";
// import './layout.css'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
    query SiteTitleQuery {
      site: site {
        siteMetadata {
          title
          pages {
            name
            href
          }
        }
      }
      header: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Header Logo"}}) {
        data {
          Image {
            localFiles {
              childImageSharp {
                gatsbyImageData(height: 125, width: 300)
              }
            }
          }
        }
      }
      mobileHeader: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Logo"}}) {
        data {
          Image {
            localFiles {
              childImageSharp {
                gatsbyImageData(width: 100)
              }
            }
          }
        }
      }
    }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header
          siteTitle={data.site.siteMetadata.title}
          pages={data.site.siteMetadata.pages}
          headerImg={getImage(data.header.data.Image.localFiles[0].childImageSharp)}
          mobileImg={getImage(data.mobileHeader.data.Image.localFiles[0].childImageSharp)}
        />
        {children}
        <Footer pages={data.site.siteMetadata.pages} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
