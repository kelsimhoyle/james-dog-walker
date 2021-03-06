import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaPaw } from '@react-icons/all-files/fa/FaPaw'

import { Spring, animated } from 'react-spring'

import TwoCta from '../components/TwoCta'
import Card from '../components/Card'
import BottomBorder from '../components/BottomBorder'
import Seo from '../components/Seo'
import PricingCard from '../components/PricingCard'
import OpacitySpring from '../components/OpacitySpring'

const PawAnimation = ({ children, delay }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={delay}>
      {(styles) => <animated.div style={styles}>{children}</animated.div>}
    </Spring>
  )
}

const About = ({ data }) => {
  const about = data.about.data
  const why = data.why.nodes

  return (
    <>
      <Seo title="James the Dog Walker - About" />
      <div className="md:flex bg-white md:overflow-hidden relative">
        <h1 className="absolute -bottom-4 sm:min-w-max p-2 md:p-10	md:bg-transparent sm:bg-green-200 left-0 md:left-1/3 md:inset-y-3/4 z-10 text-4xl md:text-5xl tracking-tight font-extrabold text-grey-900  md:text-6xl  font-serif italic drop-shadow-sm">
          Meet James
        </h1>
        <div className="absolute -bottom-20 right-0 md:inset-1/4 md:-top-10 z-10 x transform rotate-45 h-auto text-green-600">
          <PawAnimation delay={2000}>
            <FaPaw className="w-16 md:w-56 h-auto md:ml-56 " />
          </PawAnimation>
          <PawAnimation delay={1500}>
            <FaPaw className="w-16 ml-16 md:w-56 h-auto md:-mr-56" />
          </PawAnimation>
          <PawAnimation delay={1000}>
            <FaPaw className="invisible md:visible md:w-56 h-auto md:ml-56" />
          </PawAnimation>
          <PawAnimation delay={500}>
            <FaPaw className="invisible md:visible md:w-56 h-auto md:-mr-56	" />
          </PawAnimation>
        </div>
        <div className=" md:flex-1 px-4 invisible	md:visible"></div>
        <div className="md:flex-1">
          <GatsbyImage
            image={getImage(about.Image.localFiles[0].childImageSharp)}
            alt="The Doggies"
            imgClassName="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          />
        </div>
      </div>
      <div className="text-center w-2/3 mx-auto my-10">
        <div
          className="mt-3 text-gray-900 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl  my-10 "
          dangerouslySetInnerHTML={{
            __html: about.Content.childMarkdownRemark.html,
          }}
        />
        <TwoCta
          one={{
            href: '/services',
            text: 'View Services',
          }}
          two={{
            href: '/contact',
            text: 'Contact',
          }}
        />
      </div>

      <div className="bg-green-200 py-14">
        <h2 className="mt-8 text-center text-5xl text-green-600 font-bold">
          Why choose me?
        </h2>
        <BottomBorder />
        <div className="mx-4 md:mx-14">

        <div className=" md:flex md:justify-center md:space-x-8">
          {why.map((w) => (
            <Card
              key={w.data.ID}
              img={getImage(w.data.Image.localFiles[0].childImageSharp)}
              content={w.data.Content.childMarkdownRemark.html}
              btn={false}
            />
          ))}
        </div>
        <OpacitySpring>
          <PricingCard />
        </OpacitySpring>
        </div>
      </div>
    </>
  )
}

export const aboutQuery = graphql`
  query {
    about: airtable(data: { Category: { eq: "About" } }) {
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
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    why: allAirtable(
      filter: { data: { Category: { eq: "Why" } }, table: { eq: "About" } }
      sort: { order: DESC, fields: id }
    ) {
      nodes {
        data {
          ID
          Content {
            childMarkdownRemark {
              html
            }
          }
          Image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default About
