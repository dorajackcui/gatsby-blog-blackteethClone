import * as React from "react"
import Layout from '../components/Layout'


// styles


const paragraphStyles = {
  marginTop:'3rem',
  display:'flex',
  flexDirection: 'column', 
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Vertige de la liste</h1>
      <div style={paragraphStyles}>
        <a href="https://www.notion.so/e6fa57bb62204951bfc113371c989114" target="_blank" rel="noreferrer">一些游戏网站</a>
      </div>
    </Layout>
  )
}

export default NotFoundPage
