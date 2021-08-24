import React from "react";
import { graphql } from "gatsby";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";


const Contact = ({ data }) => {
    const { phone, location, email, instagram } = data;

    return (
        <div className="relative flex items-top justify-center min-h-screen bg-green-300 dark:bg-gray-900 p-2 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto p-2 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 shadow-md">
                        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                            <ContactInfo 
                                phone={phone.data.Content.childMarkdownRemark.excerpt}
                                location={location.data.Content.childMarkdownRemark.excerpt}
                                email={email.data.Content.childMarkdownRemark.excerpt}
                                instagram={instagram.data.Content.childMarkdownRemark.excerpt}
                            />
                        </div>
                            <ContactForm />
                    </div>
                </div>
            </div>
        </div>

    )
};

export const contactQuery = graphql`
query {
    phone: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Number"}}) {
      data {
        Content {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
    location: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Location"}}) {
      data {
        Content {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
    email: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Email"}}) {
      data {
        Content {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
    instagram: airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Instagram"}}) {
      data {
        Content {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`

export default Contact;