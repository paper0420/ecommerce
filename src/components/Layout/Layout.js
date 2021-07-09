import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css'

export default function Layout({ children,title="Home" }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        My Banner
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        Sumitra Jumrern
        </footer>
    </div>
  )
}
