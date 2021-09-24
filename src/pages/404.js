import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = { 
  padding: "96px",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Vertige de la liste</h1>
      <div style={paragraphStyles}>
        <a href="https://www.notion.so/e6fa57bb62204951bfc113371c989114" target="_blank" rel="noreferrer">一些游戏网站</a>
        <Link to="/">go home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage
