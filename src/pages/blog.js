import React from "react";
import { graphql } from "gatsby";
import BlogPost from "../components/BlogPost";

const Blog = ({ data }) => {
  const posts = data.posts.edges;
  console.log(posts)


  return (
    <div className="container  w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t px-4 md:px-0 max-w-6xl mx-auto mt-4">
      <h1 className="text-2xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pt-10">
        Blog
      </h1>
      {posts.length > 0 ?
        (posts.map(post => (
          <BlogPost
            name={post.node.data.Name}
            image={post.node.data.Images.localFiles[0]}
            excerpt={post.node.data.Post.childMarkdownRemark.excerpt}
            href={`/blog/${post.node.data.Name.trim().toLowerCase().split(" ").join("-")}`}
          />
        ))
        ) :
        (
          <BlogPost 
            name="Blog Coming Soon"
            image={data.image.data.Image.localFiles[0]}
            excerpt="I am working on blog posts of my adventures with my doggos!"
          />
        )
      }

    </div>
  )
}

export const BlogQuery = graphql`
    query BlogQuery {
        posts: allAirtable(filter: {table: {eq: "Blog"}, data: {Status: {eq: "Done"}}}) {
            edges {
              node {
                data {
                  Name
                  Keywords
                  Post {
                    childMarkdownRemark {
                      excerpt(truncate: true)
                    }
                  }
                  Images {
                    localFiles {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
          }
          image:  airtable(table: {eq: "Website Data"}, data: {Name: {eq: "Main Image"}}) {
            data {
              Image {
                localFiles {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
  }
                    `

export default Blog;