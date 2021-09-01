import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/Layout'

export default function index() {
  return (
    <Layout>
      <center style={{marginTop:'100px'}}>
        <StaticImage alt="magic" src="../../static/magic.png"
          placeholder= 'none'
          loading='lazy'
          layout="fixed"
          imgStyle={{borderRadius:'50%'}}
          width={200}
          height={200}
          />
      </center>
    </Layout>
  )
}
