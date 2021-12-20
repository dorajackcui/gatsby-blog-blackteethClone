const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const mdArticles = await graphql(`
    query Articles{
      allMarkdownRemark (
        filter: {frontmatter: {stack: {eq: "traduction"}}}
      ){
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  mdArticles.data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.slug
    actions.createPage({
      path: '/traductions/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/article_details.js'),
      context: {slug},
    })
  })

  const postArticles = await graphql(`
    query Posts {
      allMarkdownRemark (
        filter: {frontmatter: {stack: {eq: "cuicuizone"}}}
      ){
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  postArticles.data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.slug
    actions.createPage({
      path: '/douban/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/douban_article.js'),
      context: {slug},
    })
  })
    


}

