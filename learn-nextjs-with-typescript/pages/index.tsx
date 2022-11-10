import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetCharacterResults, Character } from '../type.confing'
import imageLoader from '../imageLoader'

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty API</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            {character.name}
            <Image
              loader={imageLoader}
              src={character.image}
              alt={character.name}
              height="200"
              width="200"
            />
          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();

  console.log(results);

  return {
    props: {
      characters: results,
    },
  };
}

export default Home