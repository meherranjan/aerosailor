// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
     {
      allMarkdownRemark (
        sort: { fields: [frontmatter___created], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              readingTime {
                text
              }
            }
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
    `)

  const posts = data.allMarkdownRemark.edges
  posts.forEach((edge, index) => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/components/layout/post.js`),
      context: {
        slug: slug,
        prev: index === 0 ? posts[posts.length - 1] : posts[index - 1],
        next: index === posts.length - 1 ? posts[0] : posts[index + 1],
      },
    })
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}