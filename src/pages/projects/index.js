import React from 'react'
import Layout from '../../components/Layout'
import ModalButton from '../../components/ModalButton'


function index() {
   const handleClick = ()=>{
     console.log("111")
   }
  return (
    <Layout>
      <ModalButton/>
      <button onClick={handleClick} />
    </Layout>
  )
}

export default index
