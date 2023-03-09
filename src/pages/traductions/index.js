import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/articles.module.css'
import { Link, graphql } from 'gatsby'


function index({ data }) {

  const articles = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <main>
        <section className={styles.articlesContainer}>
          {articles.map(article => (
            <Link to={"/traductions/" + article.frontmatter.slug} key={article.frontmatter.slug} className={styles.article}>

              <div className={styles.articleTitle}>
                {article.frontmatter.title}
              </div>
              <div className={styles.articleDetails}>
                {article.frontmatter.author}
              </div>

            </Link>
          ))}

        </section>
      </main>
    </Layout>
  )
}

export default index

export const query = graphql`
  query articlesQuery {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {stack: {eq: "traduction"}}}
      ){
      nodes {
        frontmatter {
          title
          author
          slug
        }
      }
    }
  }
`
