const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.slug
    actions.createPage({
      path: '/articles/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/article_details.js'),
      context: {slug},
    })
  })

}