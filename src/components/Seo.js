import React from 'react'
import { Helmet } from 'react-helmet'

export default function Seo() {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <meta name="referrer" content="no-referrer"/>
        <title>CUI Zhiyang</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  )
}
