import React from "react";
import { graphql } from "gatsby";
import FaqComponent from "../components/FaqComponent";
import TwoCta from "../components/TwoCta";
import BottomBorder from "../components/BottomBorder";

const Faq = ({ data }) => {

  return (
    <div className="px-4 py-10 md:py-16  ">
      <h1 className="text-4xl tracking-tight font-extrabold text-green-500  pt-10 text-center">
        Frequently Asked Questions
      </h1>
      <BottomBorder />
      <div className="max-w-lg p-4 mx-auto shadow-lg hover:shadow-2xl bg-white rounded-2xl m-4">
        {data.allAirtable.nodes.map(q => (
          <FaqComponent
            key={q.Question}
            question={q.data.Question}
            answer={q.data.Answer.childMarkdownRemark.html}
          />
        ))}
      </div>
      <div className="max-w-md m-auto">
        <TwoCta
          one={{ text: "Learn More", href: "/about" }}
          two={{ text: "Contact", href: "/contact" }}
        />
      </div>
    </div>
  );
};

export const faqQuery = graphql`
query {
    allAirtable(
      filter: {table: {eq: "FAQ"}, data: {Status: {eq: "Post"}}}
      sort: {fields: id}
    ) {
      nodes {
        data {
          Question
          Answer {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default Faq;
