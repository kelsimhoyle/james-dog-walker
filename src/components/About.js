import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaPaw } from '@react-icons/all-files/fa/FaPaw'
import { Spring, animated } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          airtable(
            table: { eq: "Website Data" }
            data: { Name: { eq: "About" } }
          ) {
            data {
              Image {
                localFiles {
                  childrenImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
              Content {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="md:bg-green-500 md:py-10">
          <div className=" content mx-auto max-w-screen-lg relative mb-80 mt-10 md:mt-0 md:mb-0">
            <div className="max-w-lg">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    opacity={isVisible ? 1 : 0}
                    from={{ x: -1000 }}
                    to={{ x: 0 }}
                    delay={1200}
                    config={{ mass: 5, tension: 600, friction: 250 }}
                  >
                    {(styles) => (
                      <animated.div style={styles}>
                        <GatsbyImage
                          image={getImage(
                            data.airtable.data.Image.localFiles[0]
                              .childrenImageSharp[0]
                          )}
                          alt="About James the Dog Walker"
                        />
                      </animated.div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
            </div>
            <div className="mx-5 md:max-w-md	absolute -bottom-64 md:inset-y-1/4 md:right-20	md:mx-0	 z-10  ">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring
                    opacity={isVisible ? 1 : 0}
                    from={{ x: 2000 }}
                    to={{ x: 0 }}
                    delay={1200}
                    config={{ mass: 5, tension: 600, friction: 250 }}
                  >
                    {(styles) => (
                      <animated.div style={styles}>
                        <div className="flex flex-col justify-center items-center md:items-start space-y-4 shadow-md bg-white p-10 rounded text-center	md:text-left">
                          <div>
                            <FaPaw className="text-6xl text-green-500" />
                          </div>

                          <h2 className=" text-3xl tracking-tight font-extrabold text-gray-900 md:text-5xl">
                            About Me
                          </h2>

                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                data.airtable.data.Content.childMarkdownRemark
                                  .html,
                            }}
                          />
                        </div>
                      </animated.div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default About
