// import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useSpring, animated } from '@react-spring/web'

import Modal from 'react-modal'
import { graphql } from 'gatsby'
import * as styles from '../styles/details.module.css'

const customStyles = {
  overlay: {
    backgroundColor: 'none'
  },
  content: {
    position: 'absolute',
    inset: '0px',
    margin: " 10% auto 4%",
    borderRadius: "0",
    border: 'none',
    backgroundColor: 'inherit',
    width: "90%",
    maxWidth: "700px",
    backdropFilter: "blur(4px)",
    zIndex: "10",
  },
};


export default function Index({ data }) {
  // const { transform } = useSpring({
  //   loop: true,
  //   from: { transform: 'rotate(0deg)' },
  //   to: { transform: 'rotate(360deg)' },
  // })


  const { html } = data.markdownRemark

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e) {
    console.log('biu')
    e.preventDefault();
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
      <center style={{ marginTop: '25vh' }}>

        {/* <button onClick={openModal} className={styles.modalButton}>
          magic in progress
        </button> */}
        {/* new BUTTON */}
        <animated.div>
          {/* style={{
           transform: transform.interpolate(t => `${t} rotateY(180deg)`),
        }} */}
          <button onClick={openModal} className={styles.modalButton}>
            {/* dangerouslySetInnerHTML={{ __html: html }} */}
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
              <title>magic</title>
              <defs>
                <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="30s"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    repeatCount="indefinite"
                  />
                  {/* SMIL animation: deprecated in Chrome, so eventually will have to be replaced with Web Animation API or alternative */}
                </path>
              </defs>
              <text dy="70" textLength="1220">
                {/* textLength (essentially the circumference of the circle) is used as an alternative to letter-spacing for Firefox, which currently doesn't support letter-spacing for SVG */}
                <textPath xlinkHref="#textcircle">magicinprogress</textPath>
              </text>

            </svg>
          </button>
        </animated.div>


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
            <path d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
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