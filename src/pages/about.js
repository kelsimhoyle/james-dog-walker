import React from "react";
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TwoCta from "../components/TwoCta";
import Card from "../components/Card";


const About = ({ data }) => {
    const mission = data.mission.data;
    const about = data.about.data;
    const why = data.why.nodes


    return (
        <>


            <div className="md:bg-green-500 md:py-10 ">
                <div className=" content mx-auto max-w-screen-lg relative mb-80 mt-10 md:mt-0 md:mb-0">
                    <div className="max-w-lg">
                        <GatsbyImage image={getImage(about.Image.localFiles[0].childImageSharp)} alt="The Doggies" />

                    </div>
                    <div className="mx-5 md:max-w-md	absolute -bottom-64 md:inset-y-1/4 md:right-20	md:mx-0	 z-10   flex flex-col justify-center items-center md:items-start space-y-2">
                        <div className="flex flex-col justify-center items-center md:items-start space-y-4 shadow-md bg-white p-10 rounded text-center	md:text-left">
                            <div>
                                {/* <FaPaw className="text-6xl text-green-500" /> */}
                            </div>
                            <h2 className=" text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">About Me</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: about.Content.childMarkdownRemark.html
                                }}
                            />
                        </div>
                        <div >
                            <TwoCta
                                one={{ text: "Testimonials", href: "/testimonials" }}
                                two={{ text: "Contact", href: "/contact" }}
                            />
                        </div>
                    </div>


                </div>
            </div>

            <div className="bg-green-100 py-14">
                <h2 className="mt-8 text-center text-5xl text-green-600 font-bold">Why choose us?</h2>

                <div className="md:flex md:justify-center md:space-x-8 md:px-14">
                    {why.map(w => (
                        <Card
                            img={getImage(w.data.Image.localFiles[0].childImageSharp)}
                            content={w.data.Content.childMarkdownRemark.html}
                            btn={false}
                        />
                    ))}



                </div>

            </div>
        </>
    );
};

export const aboutQuery = graphql`
query  {
    about: airtable( data: {Category: {eq: "About"}}) {
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
    mission: airtable(data: {Category: {eq: "Mission"}}) {
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
    why: allAirtable(filter: {data: {Category: {eq: "Why"}}, table: {eq: "About"}}) {
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
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
  }
  
  
`

export default About;