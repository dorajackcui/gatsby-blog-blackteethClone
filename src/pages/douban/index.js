import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import * as styles from '../../styles/articles.module.css'

export default function douban({ data }) {

  const articles = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <main>
        <section className={styles.articlesContainer}>
          {articles.map(article => (
            <Link to={"/douban/" + article.frontmatter.slug} key={article.frontmatter.slug} className={styles.article}>

              <div className={styles.articleTitle}>
                {article.frontmatter.title}
              </div>
              <div className={styles.articleDetails}>
                {article.frontmatter.date}
              </div>

            </Link>
          ))}

        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query postsQuery {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {stack: {eq: "cuicuizone"}}}
      ){
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "DD MMMM YYYY")
        }
      }
    }
  }
`





