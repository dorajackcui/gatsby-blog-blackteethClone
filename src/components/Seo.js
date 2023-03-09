import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from 'gatsby'



const Seo = ({ description, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query metadataSeo{
        site {
          siteMetadata {
            title,
            description,
            titleTemplate,
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const titleTemplate = site.siteMetadata.titleTemplate


  return (
    <Helmet title={metaTitle} titleTemplate={titleTemplate}>
      <meta name="description" content={metaDescription} />
      <meta charSet="utf-8" />
      <meta name="referrer" content="no-referrer" />
      <link rel="icon"
        type="image/png"
        href="/magic.png" />
      <meta property="og:image" content="https://cui-blog.netlify.app/magic.png" />
      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {metaDescription && (
        <meta property="og:description" content={metaDescription} />
      )}

    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,

}
Seo.defaultProps = {
  title: null,
  description: null,
  image: null,

}
