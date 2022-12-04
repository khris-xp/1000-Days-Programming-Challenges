import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetCharacterResults, Character } from '../type.confing'
import imageLoader from '../imageLoader'
import Link from 'next/link'

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty API</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      DB_CONNECT : {process.env.NEXT_PUBLIC_DB_CONNECT}
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link href={`/character/${character.id}`}>
              <h3>{character.name}</h3>
            </Link>
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

  return {
    props: {
      characters: results,
    },
  };
}

export default Home