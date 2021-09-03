const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const mdArticles = await graphql(`
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

  mdArticles.data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.slug
    actions.createPage({
      path: '/articles/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/article_details.js'),
      context: {slug},
    })
  })
    
  const doubanArticle = await graphql(`
    query DoubanArticles {
      allArticlesCsv {
          nodes {
          
            id
          
          }
      }
    }
  `)

  doubanArticle.data.allArticlesCsv.nodes.forEach(node => {
    const id = node.id
    actions.createPage({
      path: '/projects/'+ node.id,
      component: path.resolve('./src/templates/douban_article.js'),
      context: {id},
    })
  })
  


}

