import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({ characters }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty API</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {JSON.stringify(characters)}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await res.json();

  return {
    props: {
      characters: results,
    },
  };
}

export default Home