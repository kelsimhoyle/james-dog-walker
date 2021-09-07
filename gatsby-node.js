const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  const result = await graphql(`
    query {
      allAirtable(filter: {table: {eq: "Blog"}, data: {Status: {eq: "Done"}}}) {
        edges {
          node {
            data {
              Name
              Keywords
              Post {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  `)
  result.data.allAirtable.edges.forEach(edge => {
    let slug = edge.node.data.Name.trim().toLowerCase();
    slug = slug.split(" ").join("-");
    createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.data.Name,
        post: edge.node.data.Post,
        keywords: edge.node.data.keywords
      },
    })
  })
}