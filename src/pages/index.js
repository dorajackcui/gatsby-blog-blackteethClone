import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

const  iconStyle = {
  marginTop:'25vh',
  
}

export default function index() {
  return (
    <Layout>
      <center style={iconStyle}>
        <StaticImage alt="magic" src="../../static/magic.png"
          placeholder= 'none'
          loading='lazy'
          layout="fixed"
          imgStyle={{borderRadius:'50%'}}
          width={160}
          height={160}
          />
      </center>
    </Layout>
  )
}
