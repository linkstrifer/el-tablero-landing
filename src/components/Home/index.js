import React from 'react'

import Logo from '../../images/icon.png'

import styles from './styles.module.css'

import { SOLIDS, GRADIENTS } from '../../lib/Colors'

import SEO from '../Seo'

function Home({ children }) {
  return (
    <section
      className={styles.container}
      style={{
        backgroundColor: SOLIDS.PRIMARY,
        background: `linear-gradient(300deg, ${GRADIENTS.PRIMARY[0]} 0%, ${
          GRADIENTS.PRIMARY[1]
        } 100%)`,
      }}
    >
      <SEO title="HOME" />
      <picture className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={Logo}
          alt="El Tablero Club Café Logof"
        />
      </picture>
      {children && <div className={styles.content}>{children}</div>}
    </section>
  )
}

export default Home
