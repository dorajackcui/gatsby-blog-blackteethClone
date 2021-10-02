import { StaticImage } from 'gatsby-plugin-image'
import React, {useState} from 'react'
import Layout from '../components/Layout'
import Modal from 'react-modal'
import { graphql } from 'gatsby'
import * as styles from '../styles/details.module.css'


const customStyles = {
  overlay: {
    backgroundColor: 'none'
  },
  content: {
    position: 'absolute',
    margin:" 10% 25% 10% 25%",
    borderRadius:"0",
    border:'none',
    backgroundColor: 'rgba(255, 253, 250, 0.95)',
  },
};


export default function Index({data}) {

  const {html} = data.markdownRemark

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
      <center style={{marginTop:'25vh'}}>
        <button onClick={openModal} className={styles.modalButton} >
          <StaticImage 
            alt="magic" 
            src="../../static/magic.png"
            placeholder= 'none'
            loading='lazy'
            layout="fixed"
            imgStyle={{borderRadius:'50%'}}
            width={160}
            height={160}
            />
        </button>
      </center>

      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        
        <div className={styles.modalContent} dangerouslySetInnerHTML={{ __html: html }} />
        
      </Modal>
    </Layout>
  )
}


export const modalQuery = graphql`
  query modal {
    markdownRemark(frontmatter: {stack: {eq: "modal"}}) {
      html
      
    }
  }
`