// import { StaticImage } from 'gatsby-plugin-image'
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
    inset:'0px',
    margin:" 10% auto 4%",
    borderRadius:"0",
    border:'none',
    backgroundColor: 'rgba(255, 253, 250, 0.75)',
    width:"90%",
    maxWidth:"700px",
    backdropFilter: "blur(4px)",
    zIndex:"10",    
  },
};

const iframeStyle = {
  borderWidth: 0,
  width:'160px', 
  height:'160px',
  margin: "none",
}

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
  Modal.setAppElement('body');

  return (
    <Layout>
      <center style={{marginTop:'25vh'}}>
        <iframe title="button" style={iframeStyle} src="https://preview.p5js.org/dorajackcui/embed/SMxp5xTQ1"></iframe>

          {/* <StaticImage 
            alt="magic" 
            src="../../static/magic.png"
            placeholder= 'none'
            loading='lazy'
            layout="fixed"
            imgStyle={{borderRadius:'50%'}}
            width={160}
            height={160}
            /> */}
        <button onClick={openModal} className={styles.modalButton} > 
        </button>
      </center>

      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // className={styles.Modal}
        // overlayClassName={styles.Overlay}
        style={customStyles}
        contentLabel="Modal"
      >
        <button onClick={closeModal} className="backHome">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </button>
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